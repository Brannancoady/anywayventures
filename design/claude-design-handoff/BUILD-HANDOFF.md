# Anyway Ventures — design-to-build handoff

Companion to the technical spec. Covers what the developer cannot infer from the mock: URL map, SEO/LLM metadata, structured data, responsive rules, analytics events and CMS fields.

Source of truth for layout and copy: `Anyway Ventures Site v2.dc.html` (all pages behind the in-mock nav), `Landing - AI Due Diligence.dc.html`, `Landing - AI Operating Partner.dc.html`, `Brand - Signature and Banner.dc.html`.

---

## 1. Rendering requirement

The current live site is client-rendered and invisible to crawlers and LLM retrievers. The build must be **server-rendered or statically generated** (Astro / Next static / Eleventy all fine). Every page below is a real URL with its own `<title>`, `<meta name="description">`, canonical, OpenGraph and JSON-LD.

## 2. URL map

| Page | URL | Title | Meta description (≤155 chars) |
|---|---|---|---|
| Home | `/` | Anyway Ventures — AI operating partner for PE-backed and mid-market businesses | Tech and AI due diligence, fractional AI operating partner, and embedded AI delivery for PE-backed and mid-market businesses. Led by exited founder Brannan Coady. |
| PE hub | `/private-equity` | For private equity & investors — technology and AI across the deal cycle | One partner across the deal cycle: AI due diligence pre-deal, fractional AI operating partner across the portfolio, embedded delivery in portcos, board seats. |
| Diligence | `/ai-due-diligence` | Technology, product & AI due diligence for private equity | Tech, product and AI due diligence for PE deal teams. Fixed quote in 48 hours, IC session inside 3 weeks, and a costed AI value-creation plan in the IC pack. |
| Operating partner | `/ai-operating-partner` | Fractional AI operating partner for PE funds | A retained AI operating partner for lower-mid-market PE funds: AI value-creation plans across the portfolio, a counterpart for each CEO, quarterly IC reporting. |
| Embedded | `/embedded-ai-delivery` | Embedded AI delivery — internal tooling, automation & agents | Two-to-eight-week engagements inside your business: internal tooling, automation and agents in production, built with your team and handed over. |
| Board | `/board-and-ned` | Board & non-executive roles | A small number of NED and board seats where technology, product and AI decide the outcome. |
| Track record | `/track-record` | Track record — companies, investments, exits | Companies founded and sold, investments and board positions held, recent client work. |
| Case studies | `/case-studies` | Case studies — recent AI delivery and diligence work | Anonymised recent engagements with the numbers: hours returned per month, time to production, what still runs at six months. |
| Insights | `/insights` | Insights — writing for deal teams and operators | Short practical writing on AI due diligence, AI operating partners and getting AI into production in mid-market businesses. |
| Article | `/insights/{slug}` | {Article title} | {Standfirst, trimmed} |
| About | `/brannan-coady` | Brannan Coady — founder, operator, investor | Co-founder and CEO of Netsells (merged with hedgehog lab, BGF), former CPO YourParkingSpace, investor and NED. Now building AI inside PE-backed businesses. |
| How we work | `/how-we-work` | How we work & pricing | Fixed price against an outcome, senior hands only, built to be handed over. Indicative price bands for diligence, sprints, builds and retained roles. |
| FAQ | `/questions` | Questions we get asked | Straight answers on who does the work, tools, confidentiality, speed, geography and fit. |
| Contact | `/contact` | Enquire | Every enquiry starts with the same free 30-minute call. |
| Thank you | `/contact/thanks` | Thank you | (noindex) |
| Privacy | `/privacy` | Privacy & cookies | (noindex optional) |
| Cookies | `/cookies` | Cookies | (noindex optional) |
| Terms | `/terms` | Terms of engagement | (noindex optional) |
| 404 | `/404` | Page not found | (noindex) |
| Landing: diligence | `/lp/ai-due-diligence` | AI & technology due diligence for private equity — fixed price, 1–3 weeks | (noindex; PPC only; no nav) |
| Landing: op partner | `/lp/ai-operating-partner` | Fractional AI operating partner for PE funds — retained, 2–4 days/month | (noindex; LinkedIn ads; no nav) |

Article slugs: `ai-due-diligence-value-creation-plan`, `why-mid-market-funds-cant-hire-an-ai-operating-partner`, `you-bought-the-licences-and-nothing-changed`.

Redirects: map every URL on the current anywayventures.com to the closest page above (301). Old portfolio URL → `/track-record`.

## 3. Structured data (JSON-LD, per page)

- **All pages**: `Organization` — name "Anyway Ventures Ltd", url, logo, `founder` → Person, `address` (registered office), `sameAs` [LinkedIn company page if any, Companies House URL].
- **Home, About**: `Person` — Brannan Coady, `jobTitle` "Founder", `worksFor` Organization, `sameAs` [LinkedIn profile, Companies House officer URL], `knowsAbout` ["AI due diligence", "private equity value creation", "AI implementation", "product management"], `alumniOf`/`hasOccupation` optional.
- **Each service page** (`/ai-due-diligence`, `/ai-operating-partner`, `/embedded-ai-delivery`, `/board-and-ned`): `Service` — `name`, `description` (= meta description), `provider` → Organization, `areaServed` "GB", `serviceType`, `offers` with `priceSpecification` using the indicative bands (once real).
- **FAQ page**: `FAQPage` with every Q/A. Also add `FAQPage` markup to the "Questions" block if one is added to service pages later.
- **Articles**: `Article` — `headline`, `description`, `datePublished`, `dateModified`, `author` → Person, `publisher` → Organization, `wordCount`.
- **Case studies**: `ItemList` of `CreativeWork` is optional; skip until figures are real.
- **Breadcrumbs**: `BreadcrumbList` on every non-home page.

## 4. LLM discoverability

- `/llms.txt` (plain text, ~300 words): who Anyway Ventures is, the four offers with one-line descriptions and URLs, the audience, the one metric ("hours returned per month"), contact. Update when offers change.
- `/llms-full.txt` optional: concatenated service page copy.
- Keep the FAQ literal and question-shaped — it's the most-extracted content type.
- `Last updated` stamp (visible on service pages) must be driven by the CMS `updatedAt` and also emitted as `dateModified` in JSON-LD and `<meta property="article:modified_time">`.
- `robots.txt`: allow all major LLM crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) explicitly; disallow `/lp/*`, `/contact/thanks`.
- `sitemap.xml` with `lastmod`.

## 5. Responsive rules

Breakpoints used in the mock: **compact < 640**, **tablet 640–899**, **desktop ≥ 900**.

- **Nav**: desktop shows inline links with hover/click mega menus (three panels, featured article on the right). Below 900: wordmark + Enquire + MENU button; the drawer lists grouped links, secondary links, and the featured article. Mega menus never render below 900. Close menus on route change, on `Escape`, and on click outside.
- **Sticky header** height must be accounted for in anchor scrolling (`scroll-margin-top`).
- **Step lists / service lists / record table**: 3–4 columns on desktop; on compact the time/meta column drops beneath the text (`grid-column: 2`), record table becomes two columns. Never horizontal-scroll a table.
- **Card grids**: `repeat(auto-fit, minmax(min(100%, Npx), 1fr))`. Each card carries its own hairline border; grid background is transparent (no orphan grey tracks).
- **Hit targets**: ≥ 44×44 for every tappable element; primary buttons `min-height: 48px`.
- **Type**: all display sizes are `clamp()`; body never below 15px; line length capped at ~68ch.
- **Units**: use `dvh` not `vh` for full-height elements (URL bar collapse on mobile).
- **Safe areas**: header and footer padding use `max(…, env(safe-area-inset-*))`. Set `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">`.

### Foldables (Samsung Fold/Flip, Pixel Fold, and the expected Apple foldable)

- **Two device classes per phone**: a narrow cover screen (≈ 340–380 CSS px wide, some very tall at ~22:9) and a near-square inner screen (≈ 700–900 CSS px wide, ~6:5 to 4:3). The site must look intentional at **both**, and re-layout instantly on fold/unfold (`resize` fires; no fixed-width assumptions, no layout cached at load).
- **Inner screen lands in the tablet range (640–899)**: this is why tablet is a first-class breakpoint, not a stretched phone. Two-column card grids, the drawer nav, and full-width heroes with ~700px max measure are the target there.
- **Hinge**: use the CSS Viewport Segments API where supported — `@media (horizontal-viewport-segments: 2)` — to avoid placing a CTA, form field or the pull quote across the fold. Simplest rule: in two-segment posture, lay hero copy in segment 1 and the CTA/form card in segment 2 (`env(viewport-segment-left 1 0)` etc.). Degrade gracefully where unsupported.
- **Tall cover screens**: the sticky header must stay ≤ 64px; hero H1 uses the `clamp()` minimum; avoid `100dvh` sections that leave a single line of text on a 22:9 screen.
- **Tabletop/flex posture** (half-folded, hinge horizontal): nothing to design specially, but never lock orientation and never rely on `hover`.
- Test matrix: iPhone SE (375), iPhone 15/16 (393), Fold cover (≈ 344), Fold inner (≈ 884 × 1104), iPad mini (768), iPad Pro 11 (834), desktop 1280/1440/1920. Chrome DevTools has Fold/Flip presets; Samsung Remote Test Lab for real devices.

## 6. Analytics events (GA4 or Plausible goals)

| Event | Trigger | Params |
|---|---|---|
| `cta_click` | any "Book 30 minutes" / Enquire button | `page`, `location` (hero / section / footer / nav / drawer) |
| `enquiry_type_select` | chip on contact form | `type` |
| `enquiry_submit` | form submit / mailto fire | `type`, `page` |
| `calendar_click` | any calendar link | `page` |
| `sample_plan_request` | "Request the sample plan" | `page` |
| `menu_open` | mega menu or drawer opens | `menu` (pe / ops / about / drawer) |
| `article_read` | 75% scroll on an article | `slug` |
| `lp_form_submit` | landing-page form | `lp`, `stage` |
| `outbound_linkedin` | LinkedIn link | `page` |

Also: LinkedIn Insight Tag on `/lp/*` and service pages, loaded **only after consent** (see Cookies page copy — update it when added).

## 7. Contact & forms

- Mock uses `mailto:` as a stand-in. Build: a real form POST (Formspree/Netlify/own endpoint) with server-side spam filtering (honeypot + Turnstile), forwarding to the contact address, redirect to `/contact/thanks`.
- Enquiry type is required; it changes the textarea prompt (labels in the mock) and is included in the email subject.
- Calendar: embed or link the real booking URL wherever the mock has `calendarUrl`.

## 8. CMS fields (from the mock's tweakable values and data arrays)

Global: `contactEmail`, `calendarUrl`, `linkedinUrl`, `sampleUrl`, `companyNo`, `registeredOffice`, `policyDate`.
Collections: `cases` (tag, title, body, stat1, label1, stat2, label2, clientNamed?), `record` (name, role, sector, status), `posts` (kicker, title, standfirst, date, read, audience, service, pull, body), `faq`, `pricing`, `timeline`, `dont`, `cookies`, `privacy`, `terms`.
Per service page: `updatedAt` (drives "Last updated" + `dateModified`).

## 9. Performance & fonts

- Self-host Newsreader (300/400 + italic 300/400), IBM Plex Sans (400/500/600), IBM Plex Mono (400/500). `font-display: swap`, preload the two used above the fold. Subset to Latin.
- Colour tokens: paper `#f5f2ea`, ground `#eeeade`, ink `#15160f`, body `#3c3d33`, muted `#5c5d51`, rule `rgba(21,22,15,.14)`, accent `#8a5a3c`, accent-on-dark `#d9a27e`.
- Images: portrait ≥ 1200px, AVIF/WebP with fallbacks, `loading="lazy"` below the fold.
- Target: Lighthouse ≥ 95 on all four; LCP < 1.8s on 4G.

## 10. Before launch — content still owed

Portrait photography · real case-study figures and one named client/fund · testimonial · exit value · price bands · availability lines · company number and registered office · calendar link · sample-plan PDF · legal review of Terms/Privacy · named bench members (if any).
