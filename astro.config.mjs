// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// `site` is used for sitemap + canonical URLs.
// TODO: replace with the real domain after deployment (or set an env var at build time).
export default defineConfig({
  site: process.env.SITE_URL || 'https://saraswati-sisu-vidya-mandir.onrender.com',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});


