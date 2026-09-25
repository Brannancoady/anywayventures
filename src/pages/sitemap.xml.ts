import type { APIRoute } from 'astro';
import { pages } from '../lib/pages';
import { abs } from '../lib/schema';
import { getPosts, updatedIso } from '../lib/data';

// sitemap.xml with lastmod (BUILD-HANDOFF.md §4). Noindex pages (landing pages, thanks, 404) are left out.
export const GET: APIRoute = async () => {
  const posts = await getPosts();
  const entries = [
    ...pages.filter((p) => !p.noindex).map((p) => ({ loc: abs(p.path), lastmod: updatedIso(p.path) })),
    ...posts.map((p) => ({ loc: abs(p.href), lastmod: (p.updated ?? p.published).toISOString().slice(0, 10) })),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map((e) => `  <url><loc>${e.loc}</loc>${e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : ''}</url>`).join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
