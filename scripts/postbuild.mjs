// Runs after `astro build`:
//  1. Writes a Markdown copy of every indexable page (e.g. /ai-due-diligence.md) for LLM retrievers.
//  2. Writes /llms-full.txt: the full text of every indexable page in one file.
//  3. Checks every built page has the SEO basics, and fails the build if not.
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { createHash } from 'node:crypto';

const dist = new URL('../dist/', import.meta.url).pathname;
const site = JSON.parse(readFileSync(new URL('../src/data/site.json', import.meta.url), 'utf8'));
const origin = site.siteUrl.replace(/\/$/, '');

const entities = { amp: '&', lt: '<', gt: '>', quot: '"', '#39': "'", apos: "'", nbsp: ' ', mdash: '—', ndash: '–', rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“', hellip: '…', middot: '·', copy: '©', pound: '£', times: '×', rarr: '→', larr: '←' };
const decode = (s) => s.replace(/&(#x?[0-9a-f]+|\w+);/gi, (m, e) => {
  if (e[0] === '#') return String.fromCodePoint(e[1].toLowerCase() === 'x' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10));
  return entities[e] ?? m;
});

function toMarkdown(html) {
  let s = html;
  s = s.replace(/<(script|style|template|form|svg|button|input|textarea|select)[\s\S]*?<\/\1>/gi, '');
  s = s.replace(/<[^>]+\bhidden\b[^>]*>[\s\S]*?<\/span>/gi, '');
  s = s.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '\n\n# $1\n\n');
  s = s.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n\n## $1\n\n');
  s = s.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n\n### $1\n\n');
  s = s.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, '\n\n> $1\n\n');
  s = s.replace(/<a\s[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, (m, href, text) => {
    const t = text.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (!t) return '';
    const url = href.startsWith('/') ? origin + href : href;
    return /^(mailto:|https?:)/.test(url) ? `[${t}](${url}) ` : t + ' ';
  });
  s = s.replace(/<br\s*\/?>/gi, '\n');
  s = s.replace(/<\/(p|div|li|section|article|header|footer|dd|dt|tr|label|fieldset|legend)>/gi, '\n');
  s = s.replace(/<(p|li)[^>]*>/gi, '\n');
  s = s.replace(/<\/span>\s*<span/gi, '</span> · <span');
  s = s.replace(/<[^>]+>/g, '');
  s = decode(s);
  return s
    .split('\n')
    .map((l) => l.replace(/[ \t]+/g, ' ').trim())
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? walk(p) : [p];
});
const htmlFiles = walk(dist).filter((f) => f.endsWith('.html'));

// ---- 3. SEO lint -------------------------------------------------------
const problems = [];
for (const f of htmlFiles) {
  const h = readFileSync(f, 'utf8');
  const rel = relative(dist, f);
  const need = [
    [/<title>[^<]{10,}<\/title>/, 'title'],
    [/<meta name="description" content="[^"]{50,}"/, 'meta description'],
    [/<meta name="robots"/, 'robots meta'],
    [/<script type="application\/ld\+json">/, 'JSON-LD'],
    [/<h1[\s>]/, 'h1'],
  ];
  if (rel !== '404.html') need.push([/<link rel="canonical"/, 'canonical'], [/<meta property="og:title"/, 'og:title']);
  for (const [re, what] of need) if (!re.test(h)) problems.push(`${rel}: missing ${what}`);
  const desc = h.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
  if (decode(desc).length > 160) problems.push(`${rel}: meta description is ${decode(desc).length} chars (keep ≤ 160)`);
  if ((h.match(/<h1[\s>]/g) || []).length > 1) problems.push(`${rel}: more than one h1`);
  try { JSON.parse(h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]); } catch { problems.push(`${rel}: JSON-LD does not parse`); }
}

// ---- 1 & 2. Markdown copies + llms-full.txt ------------------------------
const sitemap = readFileSync(join(dist, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const parts = [];
for (const url of urls) {
  const path = new URL(url).pathname;
  const file = join(dist, path === '/' ? 'index.html' : path.slice(1) + '.html');
  const html = readFileSync(file, 'utf8');
  const title = decode(html.match(/<title>([^<]*)<\/title>/)[1]);
  const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)[1]);
  const modified = html.match(/<meta property="article:modified_time" content="([^"]*)"/)?.[1];
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? '';
  const body = toMarkdown(main);
  const md = `---\ntitle: ${JSON.stringify(title)}\ndescription: ${JSON.stringify(desc)}\nurl: ${url}\n${modified ? `updated: ${modified.slice(0, 10)}\n` : ''}---\n\n${body}\n`;
  writeFileSync(join(dist, path === '/' ? 'index.md' : path.slice(1) + '.md'), md);
  parts.push(`<page url="${url}" title="${title.replace(/"/g, '&quot;')}">\n${body}\n</page>`);
}
writeFileSync(
  join(dist, 'llms-full.txt'),
  `# ${site.name} — full site text\n\nSource: ${origin}. Generated at build time from the published pages; ${urls.length} pages. Summary: ${origin}/llms.txt\n\n` +
    parts.join('\n\n') + '\n',
);

// ---- 4. Content-Security-Policy with hashes of inline scripts -----------
// Only executable inline scripts need hashes (JSON-LD blocks are data). Anything else inline is blocked.
const hashes = new Set();
for (const f of htmlFiles) {
  const h = readFileSync(f, 'utf8');
  for (const m of h.matchAll(/<script(?![^>]*\bsrc=)(?![^>]*application\/ld\+json)[^>]*>([\s\S]*?)<\/script>/g)) {
    if (m[1].trim()) hashes.add(`'sha256-${createHash('sha256').update(m[1]).digest('base64')}'`);
  }
}
const csp = [
  "default-src 'self'",
  `script-src 'self' ${[...hashes].join(' ')} https://www.googletagmanager.com https://snap.licdn.com`.replace(/\s+/g, ' '),
  "style-src 'self' 'unsafe-inline'", // inline style attributes come from the design
  "img-src 'self' data: https://*.google-analytics.com https://*.googletagmanager.com https://*.google.com https://px.ads.linkedin.com https://*.linkedin.com",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://px.ads.linkedin.com https://*.linkedin.com",
  "font-src 'self'",
  "frame-src https://calendly.com https://www.googletagmanager.com",
  "form-action 'self'",
  "base-uri 'self'",
  "frame-ancestors 'self'",
].join('; ');
writeFileSync(join(dist, '_headers'), `/*\n  Content-Security-Policy: ${csp}\n`);

if (problems.length) {
  console.error('\nSEO check failed:\n' + problems.map((p) => '  - ' + p).join('\n'));
  process.exit(1);
}
console.log(`postbuild: ${htmlFiles.length} pages checked, ${urls.length} markdown copies + llms-full.txt written, CSP with ${hashes.size} inline-script hash(es).`);
