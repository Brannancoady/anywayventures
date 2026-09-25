import type { APIRoute } from 'astro';
import { abs } from '../lib/schema';

// Search engines and AI crawlers are explicitly welcome. Paid landing pages and the thank-you page are excluded.
const aiCrawlers = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'anthropic-ai',
  'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'GoogleOther', 'Applebot', 'Applebot-Extended',
  'Bingbot', 'DuckAssistBot', 'CCBot', 'meta-externalagent', 'Amazonbot', 'cohere-ai', 'MistralAI-User',
];
const disallow = ['/lp/', '/contact/thanks'];

export const GET: APIRoute = () => {
  const block = (ua: string) => [`User-agent: ${ua}`, 'Allow: /', ...disallow.map((d) => `Disallow: ${d}`)].join('\n');
  const body = [block('*'), ...aiCrawlers.map(block), `Sitemap: ${abs('/sitemap.xml')}`].join('\n\n') + '\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
