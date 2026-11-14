/**
 * npm run gorsel:hazirla -- <dosya|klasör> [daha fazla...] [--hedef urunler|markalar|kategoriler] [--ad <slug>] [--uzerine-yaz]
 *
 * Görseli site standardına getirir (CLAUDE.md > Görseller):
 *  - uzun kenar ≤ 1600 px (küçükse büyütülmez), WebP kalite ~80, ≤ 500 KB (gerekirse kalite düşürülür)
 *  - EXIF/konum bilgisi silinir, telefon fotoğrafının yönü düzeltilir
 *  - Dosya adı: ürün → <urun-slug>-<n>.webp · marka → <marka-slug>.webp · kategori → <kategori-slug>.webp
 *  - Hedef klasör (src/assets/...) dosya adından otomatik bulunur: "baumit-flexo-1.jpg" → urunler
 *  - SVG logolar olduğu gibi kopyalanır.
 * Orijinaller .gorsel-orijinal/ içinde kalır (gitignore'da).
 */
import { copyFileSync, existsSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { basename, extname, join, relative } from 'node:path';
import sharp from 'sharp';
import { slugify } from '../src/lib/slug.ts';
import { ASSETS, HEDEFLER, KOK, STANDART, sluglar, type Hedef } from './ortak.ts';

const UZANTILAR = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif', '.tif', '.tiff', '.svg']);

// --- argümanlar ---
const argv = process.argv.slice(2);
const yollar: string[] = [];
let hedefSecim: Hedef | undefined;
let adSecim: string | undefined;
let uzerineYaz = false;
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === '--hedef') {
    const h = argv[++i];
    if (!HEDEFLER.includes(h as Hedef)) hata(`--hedef şunlardan biri olmalı: ${HEDEFLER.join(', ')}`);
    hedefSecim = h as Hedef;
  } else if (a === '--ad') adSecim = slugify(argv[++i] ?? '');
  else if (a === '--uzerine-yaz') uzerineYaz = true;
  else yollar.push(a);
}
if (yollar.length === 0) {
  hata('Kullanım: npm run gorsel:hazirla -- <dosya|klasör> [--hedef urunler|markalar|kategoriler] [--ad <slug>] [--uzerine-yaz]');
}

function hata(mesaj: string): never {
  console.error(`✗ ${mesaj}`);
  process.exit(1);
}

const dosyalar = yollar.flatMap((y) => {
  if (!existsSync(y)) hata(`Bulunamadı: ${y}`);
  return statSync(y).isDirectory()
    ? readdirSync(y).filter((f) => UZANTILAR.has(extname(f).toLowerCase())).map((f) => join(y, f))
    : [y];
});
if (adSecim && dosyalar.length > 1) hata('--ad sadece tek dosyayla kullanılabilir');
if (dosyalar.length === 0) hata('İşlenecek görsel bulunamadı');

const kayitli = {
  urunler: sluglar('urunler'),
  markalar: sluglar('markalar'),
  kategoriler: sluglar('kategoriler'),
};

/** Dosya adından hedef klasörü ve kayıt slug'ını bulur */
function hedefBul(ad: string): { hedef: Hedef; slug: string } | undefined {
  const kok = ad.replace(/-\d+$/, ''); // "baumit-flexo-2" → "baumit-flexo"
  const sira: Hedef[] = hedefSecim ? [hedefSecim] : ['urunler', 'markalar', 'kategoriler'];
  for (const h of sira) {
    if (h === 'urunler' && kayitli.urunler.has(kok)) return { hedef: h, slug: kok };
    if (h !== 'urunler' && kayitli[h].has(ad)) return { hedef: h, slug: ad };
    if (h !== 'urunler' && kayitli[h].has(kok)) return { hedef: h, slug: kok };
  }
  return undefined;
}

/** Ürün görselleri için <slug>-<n>; n verilmediyse ilk boş numara */
function hedefAd(hedef: Hedef, slug: string, ad: string, uzanti: string): string {
  if (hedef !== 'urunler') return `${slug}${uzanti}`;
  if (/-\d+$/.test(ad) && ad.replace(/-\d+$/, '') === slug) return `${ad}${uzanti}`;
  let n = 1;
  while (existsSync(join(ASSETS, hedef, `${slug}-${n}${uzanti}`))) n++;
  return `${slug}-${n}${uzanti}`;
}

let basarili = 0;
const ozet: string[] = [];

for (const dosya of dosyalar) {
  const uzanti = extname(dosya).toLowerCase();
  const ad = adSecim ?? slugify(basename(dosya, extname(dosya)));
  const bulunan = hedefBul(ad);
  if (!bulunan) {
    console.error(
      `✗ ${dosya}: "${ad}" hiçbir ürün/marka/kategori slug'ıyla eşleşmedi. ` +
        `Dosyayı "<slug>-1${uzanti}" diye adlandır ya da --hedef ve --ad ver.`,
    );
    continue;
  }
  const { hedef, slug } = bulunan;
  const svg = uzanti === '.svg';
  const cikti = join(ASSETS, hedef, hedefAd(hedef, slug, ad, svg ? '.svg' : '.webp'));
  const goreli = relative(KOK, cikti).replaceAll('\\', '/');

  if (existsSync(cikti) && !uzerineYaz) {
    console.error(`✗ ${dosya}: ${goreli} zaten var. Değiştirmek için --uzerine-yaz ekle.`);
    continue;
  }

  if (svg) {
    copyFileSync(dosya, cikti);
    console.log(`✓ ${dosya} → ${goreli} (SVG, olduğu gibi kopyalandı)`);
  } else {
    const giris = sharp(dosya, { animated: false });
    const meta = await giris.metadata();
    // Yön bilgisi (EXIF orientation 5–8) varsa genişlik/yükseklik yer değiştirir
    const donuk = (meta.orientation ?? 1) >= 5;
    const enO = (donuk ? meta.height : meta.width) ?? 0;
    const boyO = (donuk ? meta.width : meta.height) ?? 0;

    // 500 KB'a sığana kadar önce kaliteyi (80→60), yetmezse uzun kenarı (1600→1000) düşür
    const sinir = STANDART.boyutMaksKB * 1024;
    let kalite = STANDART.kalite;
    const kodla = (kenar: number, q: number) =>
      sharp(dosya)
        .rotate() // EXIF yönünü uygula
        .resize({ width: kenar, height: kenar, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: q, effort: 5 }) // metadata kopyalanmaz → EXIF/GPS silinir
        .toBuffer({ resolveWithObject: true });
    let sonuc: Awaited<ReturnType<typeof kodla>> | undefined;
    dongu: for (const kenar of [STANDART.uzunKenarMaks, 1400, 1200, 1000]) {
      for (kalite = STANDART.kalite; kalite >= STANDART.kaliteEnDusuk; kalite -= 5) {
        sonuc = await kodla(kenar, kalite);
        if (sonuc.data.length <= sinir) break dongu;
      }
      kalite = STANDART.kaliteEnDusuk;
    }
    if (!sonuc) hata('Görsel işlenemedi');
    const { data: veri, info: bilgi } = sonuc;
    writeFileSync(cikti, veri);

    const kb = Math.round(veri.length / 1024);
    const uyarilar: string[] = [];
    if (Math.max(bilgi.width, bilgi.height) < STANDART.uzunKenarMin) {
      uyarilar.push(`KÜÇÜK: uzun kenar ${Math.max(bilgi.width, bilgi.height)} px (< ${STANDART.uzunKenarMin}) — daha büyüğünü bul`);
    }
    if (kb > STANDART.boyutMaksKB) uyarilar.push(`BÜYÜK: ${kb} KB (> ${STANDART.boyutMaksKB}) — kontrol et`);
    if (kalite < STANDART.kalite) uyarilar.push(`kalite ${kalite}'e düşürüldü`);
    if (Math.max(bilgi.width, bilgi.height) < Math.min(Math.max(enO, boyO), STANDART.uzunKenarMaks)) {
      uyarilar.push(`${STANDART.boyutMaksKB} KB sınırı için boyut küçültüldü`);
    }

    console.log(
      `✓ ${dosya} → ${goreli}  (${enO}×${boyO} → ${bilgi.width}×${bilgi.height}, ${kb} KB)` +
        uyarilar.map((u) => `\n    ⚠ ${u}`).join(''),
    );
  }
  basarili++;

  const icerikYolu = `../../assets/${hedef}/${basename(cikti)}`;
  if (hedef === 'urunler') {
    ozet.push(
      `# urunler/${slug}.md → gorseller:\n  - gorsel: ${icerikYolu}\n    alt_metin: <Türkçe açıklama>\n    kaynak_url: <görselin alındığı sayfa>`,
    );
  } else if (hedef === 'markalar') {
    ozet.push(`# markalar/${slug}.yaml\nlogo: ${icerikYolu}\nlogo_kaynak_url: <logonun alındığı sayfa>`);
  } else {
    ozet.push(`# kategoriler/${slug}.yaml\ngorsel: ${icerikYolu}`);
  }
}

console.log(`\n${basarili}/${dosyalar.length} görsel hazırlandı.`);
if (ozet.length) console.log(`\nİçeriğe eklenecek satırlar:\n\n${ozet.join('\n\n')}`);
if (basarili < dosyalar.length) process.exit(1);
