/**
 * npm run gorsel:rapor
 * Görsel eksiklerini listeler (dosyaları değiştirmez):
 *  - ürünler: görseli yok · tek görselli · küçük (uzun kenar < 800 px) · kaynak_url boş · dosya bulunamadı
 *  - markalar: logosu yok · kategoriler: ana kategorinin görseli yok
 * Gizli (yayinda: false) kayıtlar da listelenir, yanında "(gizli)" yazar.
 */
import { existsSync } from 'node:fs';
import sharp from 'sharp';
import { STANDART, gorselYolu, kayitlar } from './ortak.ts';

interface GorselKaydi {
  gorsel?: string;
  alt_metin?: string;
  kaynak_url?: string;
}

const gizli = (v: Record<string, unknown>) => (v.yayinda === false ? ' (gizli)' : '');

async function uzunKenar(dosya: string): Promise<number | undefined> {
  if (dosya.endsWith('.svg')) return Infinity;
  try {
    const m = await sharp(dosya).metadata();
    return Math.max(m.width ?? 0, m.height ?? 0);
  } catch {
    return undefined;
  }
}

const gorselsiz: string[] = [];
const tekGorselli: string[] = [];
const kucuk: string[] = [];
const kaynaksiz: string[] = [];
const kayip: string[] = [];
const altMetinsiz: string[] = [];

const urunler = kayitlar('urunler').sort((a, b) => a.slug.localeCompare(b.slug, 'tr'));
for (const u of urunler) {
  const ad = `${u.slug}${gizli(u.veri)}`;
  const gorseller = (Array.isArray(u.veri.gorseller) ? u.veri.gorseller : []) as GorselKaydi[];
  if (gorseller.length === 0) {
    gorselsiz.push(ad);
    continue;
  }
  if (gorseller.length === 1) tekGorselli.push(ad);
  for (const [i, g] of gorseller.entries()) {
    const etiket = `${ad} → ${i + 1}. görsel`;
    if (!g.kaynak_url) kaynaksiz.push(etiket);
    if (!g.alt_metin) altMetinsiz.push(etiket);
    if (!g.gorsel) continue;
    const yol = gorselYolu(u.dosya, g.gorsel);
    if (!existsSync(yol)) {
      kayip.push(`${etiket}: ${g.gorsel}`);
      continue;
    }
    const kenar = await uzunKenar(yol);
    if (kenar !== undefined && kenar < STANDART.uzunKenarMin) kucuk.push(`${etiket}: ${kenar} px`);
  }
}

const logosuz = kayitlar('markalar')
  .filter((m) => !m.veri.logo || !existsSync(gorselYolu(m.dosya, String(m.veri.logo))))
  .map((m) => `${m.slug}${gizli(m.veri)}`);

const kategoriGorselsiz = kayitlar('kategoriler')
  .filter((k) => !k.veri.ust_kategori && (!k.veri.gorsel || !existsSync(gorselYolu(k.dosya, String(k.veri.gorsel)))))
  .map((k) => `${k.slug}${gizli(k.veri)}`);

function bolum(baslik: string, liste: string[]) {
  console.log(`\n${liste.length ? '⚠' : '✓'} ${baslik}: ${liste.length}`);
  for (const s of liste) console.log(`   - ${s}`);
}

console.log(`GÖRSEL RAPORU — ${urunler.length} ürün`);
bolum('Görseli OLMAYAN ürünler', gorselsiz);
bolum('Dosyası BULUNAMAYAN görseller', kayip);
bolum(`Küçük görseller (uzun kenar < ${STANDART.uzunKenarMin} px)`, kucuk);
bolum('kaynak_url boş', kaynaksiz);
bolum('alt_metin boş', altMetinsiz);
bolum('Tek görselli ürünler (bilgi)', tekGorselli);
bolum('Logosu olmayan markalar', logosuz);
bolum('Görseli olmayan ana kategoriler', kategoriGorselsiz);

const tamam = urunler.length - gorselsiz.length;
console.log(`\nÖzet: ${tamam}/${urunler.length} ürünün en az 1 görseli var.`);
if (gorselsiz.length) console.log('Eksikleri tamamlamak için: /gorsel eksikler');
