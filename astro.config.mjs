// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://titeee.github.io',
  base: '/heretix-web',
  integrations: [sitemap()],
  // Plain code blocks, styled by .post pre in global.css like the rest of the site.
  markdown: { syntaxHighlight: false },
  vite: {
    plugins: [tailwindcss()]
  }
});
