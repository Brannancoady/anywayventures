// Generates a 1200x630 social share image per article: public/og/insights/<slug>.png
// Run after adding or retitling an article:  npm run og
// Needs a local Chrome/Chromium. Set CHROME_PATH if it isn't found automatically.
import { chromium } from 'playwright-core';
import { readFileSync, readdirSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const contentDir = join(root, 'src/content/insights');
const outDir = join(root, 'public/og/insights');
mkdirSync(outDir, { recursive: true });

const candidates = [
  process.env.CHROME_PATH,
  '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);
const executablePath = candidates.find((p) => existsSync(p));
if (!executablePath) throw new Error('No Chrome found. Set CHROME_PATH to your Chrome/Chromium executable.');

const font = (f) => `url(data:font/woff2;base64,${readFileSync(join(root, 'public/fonts', f)).toString('base64')})`;
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const field = (fm, k) => { const m = fm.match(new RegExp(`^${k}:\\s*(.*)$`, 'm')); return m ? m[1].trim().replace(/^"(.*)"$/, '$1').replace(/\\"/g, '"') : ''; };

const only = process.argv.slice(2);
const files = readdirSync(contentDir).filter((f) => f.endsWith('.md') && (!only.length || only.includes(f.replace(/\.md$/, ''))));

const browser = await chromium.launch({ executablePath });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const f of files) {
  const src = readFileSync(join(contentDir, f), 'utf8');
  const fm = src.split('---')[1] ?? '';
  const title = field(fm, 'title');
  const kicker = field(fm, 'kicker');
  const read = field(fm, 'read');
  const size = title.length > 90 ? 50 : title.length > 64 ? 58 : 68;
  await page.setContent(`<!doctype html><html><head><style>
@font-face{font-family:N;font-weight:300;src:${font('newsreader-300-normal.woff2')}}
@font-face{font-family:M;src:${font('ibm-plex-mono-latin-400-normal.woff2')}}
html,body{margin:0}
.c{width:1200px;height:630px;box-sizing:border-box;background:#f5f2ea;color:#15160f;padding:64px 80px 58px;display:flex;flex-direction:column;border-bottom:14px solid #15160f;position:relative}
.k{font-family:M;font-size:19px;letter-spacing:.2em;color:#8a5a3c}
h1{font-family:N;font-weight:300;font-size:${size}px;line-height:1.06;letter-spacing:-.022em;margin:auto 0;max-width:23ch;text-wrap:balance}
.f{display:flex;justify-content:space-between;align-items:baseline;border-top:1px solid rgba(21,22,15,.18);padding-top:24px}
.w{font-family:N;font-weight:300;font-size:34px}
.m{font-family:M;font-size:17px;letter-spacing:.12em;color:#5c5d51}
.bar{position:absolute;left:80px;top:0;width:120px;height:8px;background:#8a5a3c}
</style></head><body><div class="c"><div class="bar"></div>
<div class="k">INSIGHTS · ${esc(kicker)}${read ? ' · ' + esc(read) : ''}</div>
<h1>${esc(title)}</h1>
<div class="f"><span class="w">Anyway Ventures</span><span class="m">BY BRANNAN COADY · ANYWAYVENTURES.COM</span></div>
</div></body></html>`);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: join(outDir, f.replace(/\.md$/, '.png')) });
  console.log('og:', f.replace(/\.md$/, ''));
}
await browser.close();
