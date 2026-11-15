// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Site adresi: K9 güncellemesi (docs/KARARLAR.md).
// Alan adı bağlanınca (F5.1) `site` değişir ve `base` kaldırılır (public/robots.txt'deki Sitemap adresi de).
export default defineConfig({
  site: 'https://burakefesismann.github.io',
  base: '/selam-katalog',
  integrations: [
    sitemap({
      // Arama motorlarına gösterilmeyecek sayfalar (stil rehberi noindex, arama sonuç sayfası, panel)
      filter: (sayfa) => !/\/(stil-rehberi|ara|admin)\/?$/.test(sayfa),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
