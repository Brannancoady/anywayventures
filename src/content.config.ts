import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Articles live as Markdown in src/content/insights. The file name is the URL slug.
const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    standfirst: z.string(),
    kicker: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    read: z.string(),
    readLong: z.string(),
    audience: z.string(),
    service: z.string(),
    serviceHref: z.string(),
    pull: z.string(),
    order: z.number().optional(),
    draft: z.boolean().default(false),
    /** Meta description for search results (<= 155 characters). Falls back to the standfirst. */
    description: z.string().max(160).optional(),
    /** Topics for article:tag and JSON-LD keywords. */
    tags: z.array(z.string()).default([]),
    /** Optional "questions" block at the end of the article; also emitted as FAQPage structured data. */
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    /** Optional hand-picked related articles (slugs). Otherwise same-service articles are shown. */
    related: z.array(z.string()).default([]),
  }),
});

export const collections = { insights };
