// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://titeee.github.io',
  base: '/heretix-web',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    sitemap({
      // Root duplicates /en/ content and canonicalizes to it, so exclude it from the sitemap.
      filter: (page) => page !== 'https://titeee.github.io/heretix-web/',
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
