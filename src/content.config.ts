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
  }),
});

export const collections = { insights };
