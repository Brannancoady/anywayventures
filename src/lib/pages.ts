// Page registry: one entry per URL. Titles and descriptions come from the design handoff (BUILD-HANDOFF.md §2).
// Drives <title>, meta description, canonical, OpenGraph, JSON-LD, sitemap.xml and llms.txt.

export type Kind = 'home' | 'service' | 'about' | 'collection' | 'faq' | 'contact' | 'legal' | 'utility' | 'landing' | 'page';

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  /** Short name used in breadcrumbs, llms.txt and the sitemap. */
  name: string;
  kind: Kind;
  noindex?: boolean;
  /** Heading of the dark "Enquire" band above the footer. */
  ctaHeading?: string;
  /** Breadcrumb parent path (defaults to home). */
  parent?: string;
  /** For service pages: schema.org serviceType. */
  serviceType?: string;
}

const suffix = ' | Anyway Ventures';

export const pages: PageMeta[] = [
  {
    path: '/', kind: 'home', name: 'Home',
    title: 'Anyway Ventures — AI operating partner for PE-backed and mid-market businesses',
    description: 'Tech and AI due diligence, AI operating partner roles and embedded AI delivery for PE-backed and mid-market businesses. Led by exited founder Brannan Coady.',
    ctaHeading: 'An honest read, within a week.',
  },
  {
    path: '/private-equity', kind: 'collection', name: 'For private equity & investors',
    title: 'For private equity & investors — technology and AI across the deal cycle' + suffix,
    description: 'One partner across the deal cycle: AI due diligence pre-deal, fractional AI operating partner across the portfolio, embedded delivery in portcos, board seats.',
    ctaHeading: 'Got a deal in exclusivity, or a portfolio to move?',
  },
  {
    path: '/ai-due-diligence', kind: 'service', name: 'Tech, product & AI due diligence', parent: '/private-equity',
    serviceType: 'Technology, product and AI due diligence',
    title: 'Technology, product & AI due diligence for private equity' + suffix,
    description: 'Tech, product and AI due diligence for PE deal teams. Fixed quote in 48 hours, IC session inside 3 weeks, and a costed AI value-creation plan in the IC pack.',
    ctaHeading: 'Got a deal in exclusivity?',
  },
  {
    path: '/ai-operating-partner', kind: 'service', name: 'Fractional AI operating partner', parent: '/private-equity',
    serviceType: 'Fractional AI operating partner',
    title: 'Fractional AI operating partner for PE funds' + suffix,
    description: 'A retained AI operating partner for lower-mid-market PE funds: AI value-creation plans across the portfolio, a counterpart for each CEO, quarterly IC reporting.',
    ctaHeading: 'One further fund this year.',
  },
  {
    path: '/embedded-ai-delivery', kind: 'service', name: 'Embedded AI delivery',
    serviceType: 'AI implementation: internal tooling, automation and AI agents',
    title: 'Embedded AI delivery — internal tooling, automation & agents' + suffix,
    description: 'Two-to-eight-week engagements inside your business: internal tooling, automation and agents in production, built with your team and handed over.',
    ctaHeading: "Tell me what's slow or expensive.",
  },
  {
    path: '/board-and-ned', kind: 'service', name: 'Board & NED', parent: '/private-equity',
    serviceType: 'Non-executive director and board advisory',
    title: 'Board & non-executive roles' + suffix,
    description: 'A small number of NED and board seats where technology, product and AI decide the outcome.',
    ctaHeading: 'A seat, or a second opinion.',
  },
  {
    path: '/track-record', kind: 'page', name: 'Track record', parent: '/brannan-coady',
    title: 'Track record — companies, investments, exits' + suffix,
    description: 'Companies founded and sold, investments and board positions held, recent client work.',
    ctaHeading: 'Send the deck.',
  },
  {
    path: '/case-studies', kind: 'collection', name: 'Case studies', parent: '/brannan-coady',
    title: 'Case studies — recent AI delivery and diligence work' + suffix,
    description: 'Anonymised recent engagements with the numbers: hours returned per month, time to production, what still runs at six months.',
  },
  {
    path: '/insights', kind: 'collection', name: 'Insights',
    title: 'Insights — writing for deal teams and operators' + suffix,
    description: 'Short practical writing on AI due diligence, AI operating partners and getting AI into production in mid-market businesses.',
    ctaHeading: 'Disagree with something?',
  },
  {
    path: '/brannan-coady', kind: 'about', name: 'Brannan Coady',
    title: 'Brannan Coady — founder, operator, investor' + suffix,
    description: 'Co-founder and CEO of Netsells (merged with hedgehog lab, BGF), former CPO YourParkingSpace, investor and NED. Now building AI inside PE-backed businesses.',
    ctaHeading: 'Start a conversation.',
  },
  {
    path: '/how-we-work', kind: 'page', name: 'How we work & pricing',
    title: 'How we work & pricing' + suffix,
    description: 'Fixed price against an outcome, senior hands only, built to be handed over. Indicative price bands for diligence, sprints, builds and retained roles.',
  },
  {
    path: '/questions', kind: 'faq', name: 'Questions we get asked',
    title: 'Questions we get asked' + suffix,
    description: 'Straight answers on who does the work, tools, confidentiality, speed, geography and fit.',
  },
  {
    path: '/contact', kind: 'contact', name: 'Enquire',
    title: 'Enquire' + suffix,
    description: 'Every enquiry starts with the same free 30-minute call. Tech and AI due diligence, AI operating partner roles, embedded AI delivery, board seats and investment.',
    ctaHeading: 'Or just email.',
  },
  {
    path: '/contact/thanks', kind: 'utility', name: 'Thank you', parent: '/contact', noindex: true,
    title: 'Thank you' + suffix,
    description: 'Your enquiry has been received. You will hear from Brannan Coady within a week, usually much sooner.',
  },
  {
    path: '/privacy', kind: 'legal', name: 'Privacy',
    title: 'Privacy & cookies' + suffix,
    description: 'How Anyway Ventures Ltd collects, uses and protects personal information under UK GDPR.',
  },
  {
    path: '/cookies', kind: 'legal', name: 'Cookies',
    title: 'Cookies' + suffix,
    description: 'The cookies this site uses, why, and how to change your choice.',
  },
  {
    path: '/terms', kind: 'legal', name: 'Terms of engagement',
    title: 'Terms of engagement' + suffix,
    description: 'The standard terms on which Anyway Ventures Ltd scopes, prices and delivers engagements.',
  },
  {
    path: '/404', kind: 'utility', name: 'Page not found', noindex: true,
    title: 'Page not found' + suffix,
    description: 'That page has moved or never existed. The site was restructured recently, so older links may have changed.',
  },
  {
    path: '/lp/ai-due-diligence', kind: 'landing', name: 'AI due diligence (landing)', noindex: true,
    title: 'AI & technology due diligence for private equity — fixed price, 1–3 weeks' + suffix,
    description: 'Technology, product and AI due diligence for PE deal teams, with a costed AI value-creation plan. Fixed quote the same week.',
  },
  {
    path: '/lp/ai-operating-partner', kind: 'landing', name: 'AI operating partner (landing)', noindex: true,
    title: 'Fractional AI operating partner for PE funds — retained, 2–4 days/month' + suffix,
    description: 'A retained AI operating partner for PE funds: AI value-creation plans across the portfolio, first deliveries inside twelve weeks.',
  },
];

export const defaultCtaHeading = 'An honest read, within a week.';

export function pageMeta(path: string): PageMeta {
  const p = pages.find((x) => x.path === path);
  if (!p) throw new Error(`No page registry entry for ${path} — add one to src/lib/pages.ts`);
  return p;
}
