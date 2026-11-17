/**
 * node scripts/katalog-yapisi.ts
 * docs/KATALOG-YAPISI.md'nin kart listesini SİTEDEKİ içerikten yeniden üretir (src/content).
 * Paketlerle gelen ad/yer/marka kararları siteye işlendikten sonra dosya ile site birebir aynı olsun diye.
 * Başlıktaki açıklama ve güncelleme notları korunur ("## 1." satırından önceki her şey).
 * Sıra: ana kategoriler `sira`; alt kategoriler ve kartlar Türkçe alfabetik (eski dosyayla aynı düzen).
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { KOK, kayitlar } from './ortak.ts';

const DOSYA = join(KOK, 'docs', 'KATALOG-YAPISI.md');
const tr = (a: string, b: string) => a.localeCompare(b, 'tr');
const ad = (v: Record<string, unknown>) => String(v.ad ?? '');

const kategoriler = kayitlar('kategoriler').filter((k) => k.veri.yayinda !== false);
const markaAdi = new Map(kayitlar('markalar').map((m) => [m.slug, ad(m.veri)]));
const urunler = kayitlar('urunler').filter((u) => u.veri.yayinda !== false);

const anaKategoriler = kategoriler
  .filter((k) => !k.veri.ust_kategori)
  .sort((a, b) => Number(a.veri.sira ?? 100) - Number(b.veri.sira ?? 100) || tr(ad(a.veri), ad(b.veri)));

const satir = (u: (typeof urunler)[number]) => {
  const m = ((u.veri.markalar as string[]) ?? []).map((s) => markaAdi.get(s) ?? s);
  return `- ${ad(u.veri)} — \`${String(u.veri.kart_tipi)}\` — ${m.length ? m.join(' · ') : 'çeşitli'}`;
};

const bolumler: string[] = [];
let toplam = 0;
anaKategoriler.forEach((ana, i) => {
  const altlar = kategoriler.filter((k) => k.veri.ust_kategori === ana.slug).sort((a, b) => tr(ad(a.veri), ad(b.veri)));
  const parcalar: string[] = [];
  let sayi = 0;
  const dogrudan = urunler.filter((u) => u.veri.kategori === ana.slug).sort((a, b) => tr(ad(a.veri), ad(b.veri)));
  if (dogrudan.length) {
    parcalar.push(`### (doğrudan ${ad(ana.veri)} altında)\n${dogrudan.map(satir).join('\n')}`);
    sayi += dogrudan.length;
  }
  for (const alt of altlar) {
    const k = urunler.filter((u) => u.veri.kategori === alt.slug).sort((a, b) => tr(ad(a.veri), ad(b.veri)));
    if (!k.length) continue;
    parcalar.push(`### ${ad(alt.veri)}\n${k.map(satir).join('\n')}`);
    sayi += k.length;
  }
  toplam += sayi;
  bolumler.push(`## ${i + 1}. ${ad(ana.veri)} (${sayi} kart)\n\n${parcalar.join('\n\n')}`);
});

const eski = readFileSync(DOSYA, 'utf8');
const bas = eski.slice(0, eski.indexOf('\n## 1.') + 1).replace(/Toplam: \d+ kart\./, `Toplam: ${toplam} kart.`);
writeFileSync(DOSYA, `${bas}\n${bolumler.join('\n\n')}\n`);
console.log(`✓ KATALOG-YAPISI.md üretildi: ${anaKategoriler.length} ana kategori, ${toplam} kart`);
