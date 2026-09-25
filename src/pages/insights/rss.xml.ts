import type { APIRoute } from 'astro';
import { getPosts, site } from '../../lib/data';
import { abs } from '../../lib/schema';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const GET: APIRoute = async () => {
  const posts = await getPosts();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${esc(site.name)} — Insights</title>
<link>${abs('/insights')}</link>
<atom:link href="${abs('/insights/rss.xml')}" rel="self" type="application/rss+xml" />
<description>Short practical writing on AI due diligence, AI operating partners and getting AI into production in mid-market businesses.</description>
<language>en-gb</language>
${posts.map((p) => `<item><title>${esc(p.title)}</title><link>${abs(p.href)}</link><guid>${abs(p.href)}</guid><pubDate>${p.published.toUTCString()}</pubDate><description>${esc(p.standfirst)}</description></item>`).join('\n')}
</channel>
</rss>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
