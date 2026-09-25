// @ts-check
import { defineConfig } from 'astro/config';
import site from './src/data/site.json' with { type: 'json' };

export default defineConfig({
  site: site.siteUrl,
  // Clean URLs with no trailing slash, e.g. /ai-due-diligence -> dist/ai-due-diligence.html (Netlify serves it as-is).
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'always' },
  compressHTML: true,
});
