// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Site adresi: K9 güncellemesi (docs/KARARLAR.md).
// Alan adı bağlanınca (F5.1) `site` değişir ve `base` kaldırılır.
export default defineConfig({
  site: 'https://burakefesismann.github.io',
  base: '/selam-katalog',
  vite: {
    plugins: [tailwindcss()],
  },
});
