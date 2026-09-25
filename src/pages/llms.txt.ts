import type { APIRoute } from 'astro';
import { pages } from '../lib/pages';
import { abs } from '../lib/schema';
import { getPosts, site, pricing, faq } from '../lib/data';

// /llms.txt (https://llmstxt.org): a plain-language brief for AI assistants, generated from the site's own content
// so it never drifts from the pages. Each page is also available as Markdown at the same URL + ".md".
export const GET: APIRoute = async () => {
  const posts = await getPosts();
  const link = (path: string) => {
    const p = pages.find((x) => x.path === path)!;
    return `- [${p.name}](${abs(path)}): ${p.description}`;
  };
  const text = `# ${site.name}

> ${site.legalName} is an AI operating partner for private-equity-backed and mid-market businesses in the UK. It does technology, product and AI due diligence before a deal, acts as a fractional AI operating partner across a fund's portfolio, and embeds inside companies to put internal tooling, automation and AI agents into production with their teams. It is led by Brannan Coady, an exited founder (co-founder and CEO of Netsells, which merged with hedgehog lab backed by BGF), former Chief Product Officer of YourParkingSpace, investor and non-executive director, with a small senior bench. Based in York, working UK-wide.

Who it is for: PE deal teams, fund partners and portfolio directors at lower-mid-market funds; CEOs, COOs and owner-managers of mid-market businesses.

How engagements work: every enquiry starts with a free 30-minute call. Work is fixed price against an outcome, done by senior people only (Brannan leads every engagement), and built in the client's own systems so it can be handed over. The one metric reported on every engagement is hours returned to the business per month, and what is still running unattended six months later.

## Services

${link('/ai-due-diligence')}
${link('/ai-operating-partner')}
${link('/embedded-ai-delivery')}
${link('/board-and-ned')}
${link('/private-equity')}

## Indicative pricing

${pricing.map((p) => `- ${p.title}: ${p.price}. ${p.note}`).join('\n')}

## About

${link('/brannan-coady')}
${link('/track-record')}
${link('/case-studies')}
${link('/how-we-work')}
${link('/questions')}

## Insights

${posts.map((p) => `- [${p.title}](${abs(p.href)}): ${p.standfirst}`).join('\n')}

## Common questions

${faq.map((f) => `- ${f.q} ${f.a}`).join('\n')}

## Contact

- Email: ${site.contactEmail}
- [Enquire](${abs('/contact')}): ${pages.find((x) => x.path === '/contact')!.description}
- LinkedIn: ${site.linkedinUrl}

## Optional

- [Full text of every page](${abs('/llms-full.txt')})
`;
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
