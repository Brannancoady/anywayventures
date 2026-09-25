// Editorial checks for articles in src/content/insights. Run: npm run lint:content [slug ...]
// Flags dashes, stock AI-writing phrases, SEO field problems and broken internal links.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const dir = join(root, 'src/content/insights');
const only = process.argv.slice(2);
const files = readdirSync(dir).filter((f) => f.endsWith('.md') && (!only.length || only.includes(f.replace(/\.md$/, ''))));
const slugs = new Set(readdirSync(dir).filter((f) => f.endsWith('.md')).map((f) => f.replace(/\.md$/, '')));
const pages = new Set(['/', '/private-equity', '/ai-due-diligence', '/ai-operating-partner', '/embedded-ai-delivery', '/board-and-ned',
  '/track-record', '/case-studies', '/insights', '/brannan-coady', '/how-we-work', '/questions', '/contact']);

const banned = [
  'delve', 'landscape', 'tapestry', 'realm', 'leverage', 'unlock', 'unleash', 'harness', 'empower', 'robust', 'seamless',
  'cutting-edge', 'game-changer', 'game changer', 'transformative', 'revolutionise', 'revolutionize', 'paradigm', 'synergy',
  'holistic', 'pivotal', 'crucial', 'vital', 'myriad', 'plethora', "in today's", 'ever-evolving', 'ever evolving',
  "it's important to note", "it's worth noting", 'it is worth noting', 'at the end of the day', 'moreover', 'furthermore',
  'additionally', 'in conclusion', 'to sum up', 'look no further', 'buckle up', "let's dive", 'dive in', 'embark', 'journey',
  'elevate', 'supercharge', 'testament', 'navigate', 'navigating', 'whether you\'re', 'not just about', "it's not about",
];

let failures = 0;
for (const f of files) {
  const src = readFileSync(join(dir, f), 'utf8');
  const [, fm = '', ...rest] = src.split(/^---$/m);
  const body = rest.join('---');
  const issues = [];
  const get = (k) => fm.match(new RegExp(`^${k}:\\s*"?(.*?)"?\\s*$`, 'm'))?.[1] ?? '';

  // Dashes (em, en, figure dash, horizontal bar) anywhere in the file
  src.split('\n').forEach((line, i) => { if (/[‒–—―]/.test(line)) issues.push(`dash on line ${i + 1}: ${line.trim().slice(0, 80)}`); });
  // Stock phrases
  const lower = src.toLowerCase();
  for (const w of banned) {
    const re = new RegExp(`(^|[^a-z])${w.replace(/[-']/g, (c) => '\\' + c)}([^a-z]|$)`, 'i');
    if (re.test(lower)) issues.push(`banned phrase: "${w}"`);
  }
  // SEO fields
  const desc = get('description');
  if (!desc) issues.push('missing description');
  else if (desc.length < 110 || desc.length > 158) issues.push(`description is ${desc.length} chars (aim 130 to 155)`);
  const title = get('title');
  if (title.length > 70) issues.push(`title is ${title.length} chars (aim <= 65)`);
  const pull = get('pull');
  if (pull && !body.replace(/\s+/g, ' ').includes(pull.replace(/\\"/g, '"'))) issues.push('pull quote not found verbatim in body');
  if (/^\s*#/.test(body.trim())) issues.push('body must start with a paragraph, not a heading');
  // Links
  for (const m of body.matchAll(/\]\((\/[^)#\s]*)/g)) {
    const href = m[1];
    const ok = pages.has(href) || (href.startsWith('/insights/') && slugs.has(href.slice(10)));
    if (!ok) issues.push(`broken internal link: ${href}`);
  }
  for (const m of fm.matchAll(/related:\s*\[([^\]]*)\]/g)) for (const s of m[1].split(',').map((x) => x.trim().replace(/"/g, '')).filter(Boolean)) if (!slugs.has(s)) issues.push(`related slug not found: ${s}`);
  const words = body.split(/\s+/).filter(Boolean).length;

  const status = issues.length ? 'FAIL' : 'ok';
  if (issues.length) failures++;
  console.log(`${status}  ${f}  (${words} words)`);
  issues.forEach((i) => console.log('      - ' + i));
}
if (failures) { console.log(`\n${failures} file(s) need attention.`); process.exitCode = 1; }
