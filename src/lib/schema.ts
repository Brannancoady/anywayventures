// JSON-LD builders (BUILD-HANDOFF.md §3). Every page emits one @graph that links
// WebSite, Organization, Person, WebPage, BreadcrumbList and any page-specific node by @id.
import { site, faq, pricing, updatedIso } from './data';
import { pages, type PageMeta } from './pages';

const base = site.siteUrl.replace(/\/$/, '');
export const abs = (path: string) => base + (path === '/' ? '/' : path);

export const ids = {
  org: base + '/#organization',
  website: base + '/#website',
  person: base + '/brannan-coady#person',
  logo: base + '/#logo',
};

const nonEmpty = (xs: string[]) => xs.filter(Boolean);

const serviceCatalogue = [
  { name: 'Tech, product & AI due diligence', url: '/ai-due-diligence' },
  { name: 'Fractional AI operating partner', url: '/ai-operating-partner' },
  { name: 'Embedded AI delivery', url: '/embedded-ai-delivery' },
  { name: 'Board & NED', url: '/board-and-ned' },
];

export function organization() {
  return {
    '@type': 'Organization',
    '@id': ids.org,
    name: site.name,
    legalName: site.legalName,
    url: abs('/'),
    logo: { '@type': 'ImageObject', '@id': ids.logo, url: abs('/logo.png'), width: 512, height: 512 },
    image: abs('/og.png'),
    description:
      'Anyway Ventures is an AI operating partner for PE-backed and mid-market businesses: technology, product and AI due diligence, fractional AI operating partner roles, embedded AI delivery and board seats. Led by exited founder Brannan Coady.',
    email: site.contactEmail,
    founder: { '@id': ids.person },
    employee: { '@id': ids.person },
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.registeredOffice,
      addressLocality: site.locality,
      addressCountry: site.country,
    },
    ...(site.companyNo && !site.companyNo.startsWith('[') ? { identifier: { '@type': 'PropertyValue', propertyID: 'Companies House', value: site.companyNo } } : {}),
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    knowsAbout: [
      'AI due diligence', 'Technology due diligence', 'Private equity value creation', 'AI operating partner',
      'AI implementation', 'AI agents', 'Business process automation', 'Product management',
    ],
    sameAs: nonEmpty([site.linkedinCompanyUrl, site.companiesHouseUrl]),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: serviceCatalogue.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.name, url: abs(s.url) },
      })),
    },
  };
}

export function website() {
  return {
    '@type': 'WebSite',
    '@id': ids.website,
    url: abs('/'),
    name: site.name,
    publisher: { '@id': ids.org },
    inLanguage: 'en-GB',
  };
}

export function person() {
  return {
    '@type': 'Person',
    '@id': ids.person,
    name: 'Brannan Coady',
    givenName: 'Brannan',
    familyName: 'Coady',
    jobTitle: 'Founding Partner',
    url: abs('/brannan-coady'),
    image: { '@type': 'ImageObject', url: abs('/images/brannan-coady.jpg'), width: 800, height: 1000, caption: 'Brannan Coady' },
    worksFor: { '@id': ids.org },
    description:
      'Co-founder and former CEO of Netsells (merged with hedgehog lab, backed by BGF), former Chief Product Officer, COO and CEO of YourParkingSpace, former member of the Flowbird Group executive committee, co-founder of Railguard (sold to Trainline), investor and non-executive director. Founder of Anyway Ventures.',
    homeLocation: { '@type': 'Place', name: 'York, United Kingdom' },
    sameAs: nonEmpty([site.linkedinUrl, site.companiesHouseOfficerUrl]),
    knowsAbout: ['AI due diligence', 'private equity value creation', 'AI implementation', 'product management'],
  };
}

function breadcrumb(meta: PageMeta, extra?: { name: string; path: string }) {
  const trail: { name: string; path: string }[] = [];
  let cur: PageMeta | undefined = meta;
  while (cur && cur.path !== '/') {
    trail.unshift({ name: cur.name, path: cur.path });
    cur = pages.find((p) => p.path === (cur!.parent ?? '/'));
  }
  if (extra) trail.push(extra);
  const items = [{ name: 'Home', path: '/' }, ...trail];
  return {
    '@type': 'BreadcrumbList',
    '@id': abs(extra?.path ?? meta.path) + '#breadcrumb',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.path) })),
  };
}

const pageType: Record<string, string> = {
  home: 'WebPage', about: 'ProfilePage', collection: 'CollectionPage', faq: 'FAQPage', contact: 'ContactPage',
};

// Indicative bands from src/data/pricing.json, mapped to services.
function parseBand(price: string) {
  const m = price.match(/£(\d+)[–-](\d+)k(\/mo)?/);
  if (!m) return undefined;
  return { min: Number(m[1]) * 1000, max: Number(m[2]) * 1000, monthly: !!m[3] };
}
const bandFor: Record<string, number[]> = {
  '/ai-due-diligence': [0],
  '/embedded-ai-delivery': [1, 2],
  '/ai-operating-partner': [3],
};

function service(meta: PageMeta) {
  const offers = (bandFor[meta.path] ?? [])
    .map((i) => pricing[i] && { row: pricing[i], band: parseBand(pricing[i].price) })
    .filter((x): x is { row: (typeof pricing)[number]; band: NonNullable<ReturnType<typeof parseBand>> } => !!x && !!x.band)
    .map(({ row, band }) => ({
      '@type': 'Offer',
      name: row.title,
      description: row.note,
      priceCurrency: 'GBP',
      priceSpecification: {
        '@type': band.monthly ? 'UnitPriceSpecification' : 'PriceSpecification',
        minPrice: band.min,
        maxPrice: band.max,
        priceCurrency: 'GBP',
        ...(band.monthly ? { unitText: 'MONTH' } : {}),
      },
    }));
  return {
    '@type': 'Service',
    '@id': abs(meta.path) + '#service',
    name: meta.name,
    serviceType: meta.serviceType,
    description: meta.description,
    url: abs(meta.path),
    provider: { '@id': ids.org },
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    audience: { '@type': 'BusinessAudience', audienceType: meta.path === '/embedded-ai-delivery' ? 'CEOs and owner-managers of mid-market and PE-backed businesses' : 'Private equity funds and deal teams' },
    ...(offers.length ? { offers } : {}),
  };
}

export interface ArticleInfo {
  title: string;
  description: string;
  path: string;
  published: Date;
  updated?: Date;
  wordCount: number;
  section: string;
  about: string;
  /** Absolute-path share image, e.g. /og/insights/<slug>.png */
  image: string;
  tags: string[];
  faq: { q: string; a: string }[];
}

export function graph(meta: PageMeta, article?: ArticleInfo) {
  const url = abs(article?.path ?? meta.path);
  const modified = article ? (article.updated ?? article.published).toISOString() : updatedIso(meta.path);
  const nodes: Record<string, unknown>[] = [website(), organization()];

  nodes.push(person());

  const webPage: Record<string, unknown> = {
    '@type': article ? 'WebPage' : pageType[meta.kind] ?? 'WebPage',
    '@id': url + '#webpage',
    url,
    name: article?.title ?? meta.title,
    description: article?.description ?? meta.description,
    isPartOf: { '@id': ids.website },
    inLanguage: 'en-GB',
    primaryImageOfPage: { '@type': 'ImageObject', url: abs(article?.image ?? meta.image ?? '/og.png') },
    ...(modified ? { dateModified: modified } : {}),
  };
  if (meta.path !== '/') webPage.breadcrumb = { '@id': url + '#breadcrumb' };
  if (meta.kind === 'about') webPage.mainEntity = { '@id': ids.person };
  if (meta.kind === 'home') webPage.about = { '@id': ids.org };
  nodes.push(webPage);

  if (meta.path !== '/') nodes.push(breadcrumb(meta, article && { name: article.title, path: article.path }));

  if (meta.kind === 'service') {
    const s = service(meta);
    webPage.mainEntity = { '@id': s['@id'] };
    nodes.push(s);
  }

  if (meta.kind === 'faq') {
    webPage.mainEntity = faq.map((x) => ({
      '@type': 'Question',
      name: x.q,
      acceptedAnswer: { '@type': 'Answer', text: x.a },
    }));
  }

  if (article) {
    nodes.push({
      '@type': 'Article',
      '@id': url + '#article',
      headline: article.title,
      description: article.description,
      datePublished: article.published.toISOString(),
      dateModified: (article.updated ?? article.published).toISOString(),
      author: { '@id': ids.person },
      publisher: { '@id': ids.org },
      mainEntityOfPage: { '@id': url + '#webpage' },
      image: { '@type': 'ImageObject', url: abs(article.image), width: 1200, height: 630 },
      wordCount: article.wordCount,
      ...(article.tags.length ? { keywords: article.tags.join(', ') } : {}),
      articleSection: article.section,
      about: article.about,
      inLanguage: 'en-GB',
      isAccessibleForFree: true,
    });
    if (article.faq.length) {
      nodes.push({
        '@type': 'FAQPage',
        '@id': url + '#faq',
        isPartOf: { '@id': url + '#webpage' },
        mainEntity: article.faq.map((x) => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })),
      });
    }
  }

  return { '@context': 'https://schema.org', '@graph': nodes };
}
