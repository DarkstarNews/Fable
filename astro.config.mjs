import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// BASE_PATH is set by CI for GitHub Pages (/Fable/); locally the site serves from /.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://darkstarnews.github.io',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
