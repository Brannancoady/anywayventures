# anywayventures.com

The Anyway Ventures website. It's a static site built with [Astro](https://astro.build) and hosted on Netlify. There's no database: every word on the site lives in plain files in this repo.

The markup and inline styles come straight from the Claude Design handoff in `design/claude-design-handoff/`. Each page in the mock became a real URL, with its own title, description, canonical URL, OpenGraph tags and structured data.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # builds to dist/ and runs the SEO checks
npm run preview    # serves dist/
```

`npm run build` fails if any page is missing a title, description, canonical URL, h1 or valid JSON-LD. That way a broken page can't be deployed by accident.

## Deploying on Netlify

1. In Netlify: **Add new site → Import from Git →** pick this repo. The build settings come from `netlify.toml` (`npm run build`, publish `dist`, Node 22).
2. **Domain management:** add `anywayventures.com` and `www.anywayventures.com`, and set the apex domain as primary.
3. **Removing Lovable:** the old Lovable site isn't in this repo. To take it offline:
   - move the domain's DNS from Lovable to Netlify, following Netlify's DNS instructions
   - in Lovable, remove the custom domain and unpublish the project

   Nothing in this codebase references Lovable.
4. **Forms:** see below.

## Where to edit things

| What | File |
|---|---|
| Email, **Calendly link**, LinkedIn, company number, registered office, policy date, button label | `src/data/site.json` |
| GA4 measurement ID and LinkedIn Insight Tag partner ID | `src/data/site.json` → `analytics` |
| "Last updated" dates (also feed `dateModified` and the sitemap) | `src/data/updated.json` |
| Page titles, meta descriptions, CTA headings, noindex | `src/lib/pages.ts` |
| Articles | `src/content/insights/*.md` (the file name is the URL slug) |
| Case studies | `src/data/cases.json` |
| Track record table | `src/data/record.json` |
| FAQ (also feeds the FAQPage schema and llms.txt) | `src/data/faq.json` |
| Price bands (also feed the Service schema and llms.txt) | `src/data/pricing.json` |
| Timeline, "what we don't do", process steps | `src/data/timeline.json`, `dont.json`, `services.json` |
| Privacy, terms, cookies text | `src/data/privacy.json`, `terms.json`, `cookies.json` |
| Page copy | `src/pages/*.astro` |

Commit a change to `main` and Netlify rebuilds the site in about a minute.

### Adding an article

Copy one of the files in `src/content/insights/`, rename it to the slug you want and edit the front matter. The body is Markdown:
- the first paragraph becomes the lead
- the `pull` quote is placed after the second paragraph

The article is added automatically to `/insights`, the menus, the sitemap, the RSS feed, `llms.txt` and `llms-full.txt`.

### Booking link

Paste your Calendly URL into `calendarUrl` in `src/data/site.json`. Until you do, every "Book 30 minutes" link goes to `/contact`.

## Forms (Netlify Forms)

The site has three forms: the contact form (`enquiry`) and one on each landing page (`lp-ai-due-diligence`, `lp-ai-operating-partner`). They post to Netlify, then send the visitor to `/contact/thanks`.

One-time setup in the Netlify dashboard:

1. **Forms → Enable form detection**, then trigger a redeploy (**Deploys → Trigger deploy**). The three forms will then appear under Forms.
2. **Site configuration → Notifications → Emails and webhooks → Form submission notifications → Add notification → Email notification.** Choose "Any form" and enter `brannan@anywayventures.com`. Replying to the notification email replies to the enquirer.
3. The email subject is set by the form, for example "Enquiry: AI due diligence — Acme Capital".

Spam protection is a honeypot field plus Netlify's built-in Akismet filter. Flagged submissions appear under **Forms → Spam**. The free tier covers 100 submissions a month.

## Analytics & cookies

GA4 and the LinkedIn Insight Tag are fully wired but switched off until you add their IDs in `site.json`:
- **Adding either ID** turns on a cookie banner with equally weighted Accept/Decline buttons, and a "Cookie settings" link in the footer.
- **Nothing loads until the visitor accepts.**
- **LinkedIn loads only** on service pages and `/lp/*`, as the handoff specifies.

The events in the handoff are already sent: `cta_click`, `enquiry_type_select`, `enquiry_submit`, `calendar_click`, `sample_plan_request`, `menu_open`, `article_read`, `lp_form_submit` and `outbound_linkedin`. To use them as conversions, mark `enquiry_submit` and `lp_form_submit` as key events in GA4.

## SEO & LLM findability: what's built in

- **Static HTML for every URL.** No client rendering, so crawlers and AI retrievers see the full text.
- **Metadata on every page:** a unique `<title>` and meta description, a canonical URL, OpenGraph/Twitter tags with a share image (`public/og.png`), and `lang="en-GB"`.
- **JSON-LD `@graph` on every page:** WebSite, Organization and Person (linked by `@id`), plus WebPage and BreadcrumbList. Page-specific nodes:
  - Service on the four service pages, with the price bands as offers
  - FAQPage on `/questions`
  - Article on each article
  - ProfilePage on the About page
- **`/llms.txt`:** a plain-language brief for AI assistants, generated from the content files so it can't drift from the site.
- **`/llms-full.txt` and a `.md` copy of every page** (for example `/ai-due-diligence.md`). Each page links to its Markdown copy with `<link rel="alternate">`.
- **`/robots.txt`:** explicitly allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended and other AI crawlers, and blocks `/lp/` and `/contact/thanks`.
- **`/sitemap.xml`** with `lastmod`, and an RSS feed at `/insights/rss.xml`.
- **Performance:** self-hosted, subsetted fonts with the headline weight preloaded, CSS inlined and one small script. Lighthouse runs locally scored 95–99 for performance and 100 for accessibility, best practices and SEO.
- **Redirects:** 301s from likely old-site URLs are in `netlify.toml`. Add any others you know of.

### After launch

1. **Google Search Console:** verify the domain and submit `https://anywayventures.com/sitemap.xml`.
2. **Bing Webmaster Tools:** do the same. Bing's index feeds ChatGPT search and Copilot, so this matters for LLM findability.
3. Add the LinkedIn company page and Companies House URLs to `site.json` (`linkedinCompanyUrl`, `companiesHouseUrl`, `companiesHouseOfficerUrl`). They become `sameAs` links, which help search engines and LLMs confirm who you are.
4. Use the same one-line description of Anyway Ventures on LinkedIn, Companies House and anywhere else you're listed.

## Placeholders still to replace

These are left visible on purpose so the build can be checked against the mock:

- **Company number and registered office:** `src/data/site.json`
- **Portrait photos:** `src/pages/index.astro`, `brannan-coady.astro`, `lp/*.astro`. Put the image in `public/` and replace the striped box.
- **"FIGURE TBC" exit value:** `src/pages/index.astro`
- **Case-study figures (illustrative):** `src/data/cases.json`, plus the "Figures illustrative…" notes in `index.astro`, `case-studies.astro`, `track-record.astro` and `lp/*.astro`
- **Track-record dates, deal values and co-investors:** `src/pages/track-record.astro`
- **Testimonial:** `src/pages/lp/*.astro`
- **Price bands:** `src/data/pricing.json`
- **Availability lines** ("One further fund this year", etc.): page copy and `src/lib/pages.ts`
- **Calendly link and sample-plan PDF:** `src/data/site.json` (`calendarUrl`, `sampleUrl`)
- **Legal review of privacy, terms and cookies:** `src/data/*.json`. The text now covers GA4 and LinkedIn behind consent.
