// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Site adresi: K9 güncellemesi (docs/KARARLAR.md).
// Alan adı bağlanınca (F5.1) `site` değişir ve `base` kaldırılır (public/robots.txt'deki Sitemap adresi de).
export default defineConfig({
  site: 'https://burakefesismann.github.io',
  base: '/selam-katalog',
  // F6.2a (K17): kaldırılan/birleştirilen ürün grubu adresleri yeni yerlerine yönlendirilir (basılı QR etiketleri bozulmasın).
  // Hedefe base elle yazılır (Astro eklemiyor); F5.1'de base kalkınca '/selam-katalog' önekini de kaldır.
  redirects: {
    '/kategoriler/banyo-ve-mutfak': '/selam-katalog/kategoriler/armatur',
    '/kategoriler/vana-ve-tesisat-armaturleri': '/selam-katalog/kategoriler/vanalar',
    '/kategoriler/bataryalar': '/selam-katalog/kategoriler/armatur',
    '/kategoriler/vitrifiye': '/selam-katalog/kategoriler/seramik-saglik-gerecleri',
    '/kategoriler/banyo-mobilyasi': '/selam-katalog/kategoriler/banyo-mobilyasi-ve-dusakabin',
    '/kategoriler/suzgec-ve-sifon': '/selam-katalog/kategoriler/banyo-aksesuarlari-ve-suzgecler',
    '/kategoriler/derz-dolgu': '/selam-katalog/kategoriler/seramik-yapistirici',
    '/kategoriler/kopuk-ve-yapistirici': '/selam-katalog/kategoriler/mastik-ve-silikon',
    '/kategoriler/boya-ve-siva-aletleri': '/selam-katalog/kategoriler/firca-rulo-ve-siva-aletleri',
    // F6.4a1: ECA tür kartları seri kartlarına bölündü
    '/urunler/eca-lavabo-bataryalari': '/selam-katalog/kategoriler/batarya-serileri',
    '/urunler/eca-banyo-bataryalari': '/selam-katalog/kategoriler/batarya-serileri',
  },
  integrations: [
    sitemap({
      // Arama motorlarına gösterilmeyecek sayfalar (stil rehberi noindex, arama sonuç sayfası, panel)
      filter: (sayfa) => !/\/(stil-rehberi|ara|admin|katalog-yazdir)\/?$/.test(sayfa) && !/\/qr\//.test(sayfa),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
