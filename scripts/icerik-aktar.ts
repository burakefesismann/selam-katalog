/**
 * npm run icerik:aktar -- <paket-klasörü> [--uygula]
 *   ör. npm run icerik:aktar -- 001-firat-baumit            → sadece RAPOR (hiçbir dosyaya dokunmaz)
 *       npm run icerik:aktar -- 001-firat-baumit --uygula   → src/content'e yazar
 *
 * Beyin takımı paketini (icerik-paketleri/NNN-ad/, format: docs/ICERIK-SEMASI.md) doğrular ve içe aktarır.
 * Kurallar (F3.1):
 *  - Hata varsa (geçersiz dosya adı, eksik zorunlu alan, olmayan kayda bağlantı) HİÇBİR ŞEY yazılmaz.
 *  - Var olan kayıt BİRLEŞTİRİLİR: paketteki alanlar güncellenir; mevcut dosyada olup pakette olmayan alanlar korunur.
 *    KORUNAN alanlar (doluysa pakettekiyle ezilmez): markalar.logo, markalar.logo_kaynak_url, kategoriler.gorsel,
 *    urunler.gorseller.
 *  - BİRLEŞEN liste alanları (paket + mevcut, tekrarsız): urunler.kaynak_sayfalar.
 *  - Aynı `ad`lı ama farklı slug'lı kayıt varsa UYARI (yanlışlıkla ikinci kart açılmasın).
 *  - Paket klasöründe `gorseller/` varsa gorsel:hazirla --buyut ile hazırlanır (dosya adı <slug>-<n>.<uzantı> olmalı).
 * Son doğrulama `npm run build`'dedir (şema + referanslar).
 */
import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { basename, join, resolve } from 'node:path';
import { parse, stringify } from 'yaml';
import { SLUG_DESENI } from '../src/lib/slug.ts';
import { ICERIK, KOK } from './ortak.ts';

const KOLEKSIYONLAR = ['markalar', 'kategoriler', 'kullanim_alanlari', 'ozellik_tanimlari', 'urunler'] as const;
type Koleksiyon = (typeof KOLEKSIYONLAR)[number];
const UZANTI: Record<Koleksiyon, string> = {
  markalar: '.yaml',
  kategoriler: '.yaml',
  kullanim_alanlari: '.yaml',
  ozellik_tanimlari: '.yaml',
  urunler: '.md',
};
const KORUNAN: Partial<Record<Koleksiyon, string[]>> = {
  markalar: ['logo', 'logo_kaynak_url'],
  kategoriler: ['gorsel'],
  urunler: ['gorseller'],
};
/** Liste alanları: paketteki + mevcutta olup pakette olmayanlar (tekrarsız) */
const BIRLESEN: Partial<Record<Koleksiyon, string[]>> = {
  urunler: ['kaynak_sayfalar'],
};
const ZORUNLU: Record<Koleksiyon, string[]> = {
  markalar: ['ad', 'kisa_aciklama'],
  kategoriler: ['ad'],
  kullanim_alanlari: ['ad'],
  ozellik_tanimlari: ['ad'],
  urunler: ['ad', 'kategori', 'kart_tipi', 'kisa_aciklama'],
};

type Veri = Record<string, unknown>;
interface Kayit {
  slug: string;
  veri: Veri;
  govde?: string; // sadece .md
}

// --- argümanlar ---
const argv = process.argv.slice(2);
const uygula = argv.includes('--uygula');
const paketAdi = argv.find((a) => !a.startsWith('--'));
if (!paketAdi) {
  console.error('Kullanım: npm run icerik:aktar -- <paket-klasörü> [--uygula]');
  process.exit(1);
}
const paket = existsSync(paketAdi) ? resolve(paketAdi) : join(KOK, 'icerik-paketleri', paketAdi);
if (!existsSync(paket) || !statSync(paket).isDirectory()) {
  console.error(`✗ Paket klasörü bulunamadı: ${paket}`);
  process.exit(1);
}

// --- okuma ---
function oku(dosya: string): Kayit {
  const metin = readFileSync(dosya, 'utf8').replace(/^﻿/, '');
  const slug = basename(dosya).replace(/\.(md|ya?ml)$/, '');
  if (dosya.endsWith('.md')) {
    const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(metin);
    if (!m) throw new Error(`${dosya}: YAML başlığı (--- ... ---) bulunamadı`);
    return { slug, veri: (parse(m[1]) ?? {}) as Veri, govde: m[2] };
  }
  return { slug, veri: (parse(metin) ?? {}) as Veri };
}

function klasoruOku(klasor: string): Map<string, Kayit & { dosya: string }> {
  const sonuc = new Map<string, Kayit & { dosya: string }>();
  if (!existsSync(klasor)) return sonuc;
  for (const f of readdirSync(klasor).filter((f) => /\.(md|ya?ml)$/.test(f))) {
    const dosya = join(klasor, f);
    const k = oku(dosya);
    sonuc.set(k.slug, { ...k, dosya });
  }
  return sonuc;
}

const mevcut = Object.fromEntries(KOLEKSIYONLAR.map((k) => [k, klasoruOku(join(ICERIK, k))])) as Record<
  Koleksiyon,
  ReturnType<typeof klasoruOku>
>;
const gelen = Object.fromEntries(KOLEKSIYONLAR.map((k) => [k, klasoruOku(join(paket, k))])) as Record<
  Koleksiyon,
  ReturnType<typeof klasoruOku>
>;

// --- doğrulama ---
const hatalar: string[] = [];
const uyarilar: string[] = [];
const var_ = (k: Koleksiyon, id: string) => mevcut[k].has(id) || gelen[k].has(id);
const bos = (v: unknown) => v === undefined || v === null || v === '' || (Array.isArray(v) && v.length === 0);
const adAnahtari = (ad: unknown) => String(ad ?? '').toLocaleLowerCase('tr-TR').replace(/\s+/g, ' ').trim();

for (const k of KOLEKSIYONLAR) {
  for (const [slug, kayit] of gelen[k]) {
    const yer = `${k}/${basename(kayit.dosya)}`;
    if (!SLUG_DESENI.test(slug)) hatalar.push(`${yer}: dosya adı geçersiz (küçük harf, rakam, tire; Türkçe karakter yok)`);
    if (!kayit.dosya.endsWith(UZANTI[k])) hatalar.push(`${yer}: uzantı ${UZANTI[k]} olmalı`);
    if (kayit.veri.slug !== undefined && kayit.veri.slug !== slug) {
      hatalar.push(`${yer}: slug alanı "${String(kayit.veri.slug)}" dosya adıyla aynı değil`);
    }
    for (const alan of ZORUNLU[k]) if (bos(kayit.veri[alan])) hatalar.push(`${yer}: zorunlu alan boş: ${alan}`);

    // Aynı ad, farklı slug (mevcut kayıtlarda ve paketin kendi içinde)
    for (const kaynak of [mevcut[k], gelen[k]]) {
      for (const [digerSlug, diger] of kaynak) {
        if (digerSlug !== slug && adAnahtari(diger.veri.ad) === adAnahtari(kayit.veri.ad)) {
          const nerede = kaynak === mevcut[k] ? 'sitede' : 'pakette';
          const mesaj = `${k}: "${String(kayit.veri.ad)}" adı ${nerede} başka slug'la da var: ${slug} ↔ ${digerSlug}`;
          if (!uyarilar.includes(mesaj)) uyarilar.push(mesaj);
        }
      }
    }
  }
}

// Referanslar (paket + mevcut içinde var mı)
const ref = (yer: string, alan: string, k: Koleksiyon, id: unknown) => {
  if (bos(id)) return;
  if (!var_(k, String(id))) hatalar.push(`${yer}: ${alan} → "${String(id)}" ${k} içinde yok (ne sitede ne pakette)`);
};
for (const [slug, { veri }] of gelen.kategoriler) ref(`kategoriler/${slug}`, 'ust_kategori', 'kategoriler', veri.ust_kategori);
for (const [slug, { veri }] of gelen.urunler) {
  const yer = `urunler/${slug}`;
  ref(yer, 'kategori', 'kategoriler', veri.kategori);
  for (const m of (veri.markalar as unknown[]) ?? []) ref(yer, 'markalar', 'markalar', m);
  for (const a of (veri.kullanim_alanlari as unknown[]) ?? []) ref(yer, 'kullanim_alanlari', 'kullanim_alanlari', a);
  for (const t of (veri.teknik_ozellikler as { ozellik?: unknown }[]) ?? []) {
    ref(yer, 'teknik_ozellikler.ozellik', 'ozellik_tanimlari', t?.ozellik);
  }
  for (const i of (veri.ilgili_urunler as unknown[]) ?? []) ref(yer, 'ilgili_urunler', 'urunler', i);
}

// --- birleştirme planı ---
interface Plan {
  k: Koleksiyon;
  slug: string;
  hedef: string;
  durum: 'yeni' | 'guncel' | 'ayni';
  degisenler: string[];
  korunanlar: string[];
  icerik: string;
}
const planlar: Plan[] = [];

function yaz(k: Koleksiyon, veri: Veri, govde?: string): string {
  const yaml = stringify(veri, { lineWidth: 0 });
  if (k !== 'urunler') return yaml;
  return `---\n${yaml}---\n${govde ?? ''}`;
}

for (const k of KOLEKSIYONLAR) {
  for (const [slug, g] of gelen[k]) {
    const hedef = join(ICERIK, k, `${slug}${UZANTI[k]}`);
    const eski = mevcut[k].get(slug);
    if (!eski) {
      planlar.push({ k, slug, hedef, durum: 'yeni', degisenler: [], korunanlar: [], icerik: yaz(k, g.veri, g.govde) });
      continue;
    }
    const yeni: Veri = { ...g.veri };
    const korunanlar: string[] = [];
    for (const alan of KORUNAN[k] ?? []) {
      if (!bos(eski.veri[alan])) {
        if (!bos(g.veri[alan]) && JSON.stringify(g.veri[alan]) !== JSON.stringify(eski.veri[alan])) {
          uyarilar.push(`${k}/${slug}: paketteki "${alan}" yok sayıldı, mevcut değer korundu`);
        }
        yeni[alan] = eski.veri[alan];
        korunanlar.push(alan);
      }
    }
    for (const alan of BIRLESEN[k] ?? []) {
      const a = Array.isArray(g.veri[alan]) ? (g.veri[alan] as unknown[]) : [];
      const b = Array.isArray(eski.veri[alan]) ? (eski.veri[alan] as unknown[]) : [];
      if (a.length || b.length) yeni[alan] = [...new Set([...a, ...b])];
    }
    // Mevcut dosyada olup pakette olmayan alanlar korunur (sona eklenir)
    for (const [alan, deger] of Object.entries(eski.veri)) if (!(alan in yeni)) yeni[alan] = deger;
    const govde = k === 'urunler' ? (g.govde?.trim() ? g.govde : eski.govde) : undefined;

    const degisenler = [...new Set([...Object.keys(yeni), ...Object.keys(eski.veri)])].filter(
      (a) => JSON.stringify(yeni[a]) !== JSON.stringify(eski.veri[a]),
    );
    if (k === 'urunler' && (govde ?? '').trim() !== (eski.govde ?? '').trim()) degisenler.push('(gövde metni)');
    planlar.push({
      k,
      slug,
      hedef,
      durum: degisenler.length ? 'guncel' : 'ayni',
      degisenler,
      korunanlar,
      icerik: yaz(k, yeni, govde),
    });
  }
}

// --- rapor ---
const say = (d: Plan['durum']) => planlar.filter((p) => p.durum === d).length;
console.log(`PAKET: ${basename(paket)} — ${planlar.length} kayıt`);
for (const k of KOLEKSIYONLAR) {
  const p = planlar.filter((x) => x.k === k);
  if (!p.length) continue;
  console.log(
    `  ${k.padEnd(18)} ${p.length} kayıt: ${p.filter((x) => x.durum === 'yeni').length} yeni, ` +
      `${p.filter((x) => x.durum === 'guncel').length} güncellenecek, ${p.filter((x) => x.durum === 'ayni').length} aynı`,
  );
}
const guncel = planlar.filter((p) => p.durum === 'guncel');
if (guncel.length) {
  console.log('\nVAR OLAN KAYITLAR (birleştirilecek):');
  for (const p of guncel) {
    console.log(`  ~ ${p.k}/${p.slug}: değişen → ${p.degisenler.join(', ')}` + (p.korunanlar.length ? ` · KORUNAN → ${p.korunanlar.join(', ')}` : ''));
  }
}
if (uyarilar.length) {
  console.log(`\n⚠ UYARILAR (${uyarilar.length}):`);
  for (const u of uyarilar) console.log(`  - ${u}`);
}
if (hatalar.length) {
  console.log(`\n✗ HATALAR (${hatalar.length}) — hiçbir dosya yazılmadı:`);
  for (const h of hatalar) console.log(`  - ${h}`);
  process.exit(1);
}
console.log('\n✓ Doğrulama hatasız.');

if (!uygula) {
  console.log('Bu bir ön izlemeydi; hiçbir dosya değişmedi. Yazmak için: npm run icerik:aktar -- ' + paketAdi + ' --uygula');
  process.exit(0);
}

for (const p of planlar) if (p.durum !== 'ayni') writeFileSync(p.hedef, p.icerik, 'utf8');
console.log(`\n✓ Yazıldı: ${say('yeni')} yeni, ${say('guncel')} güncellendi (${say('ayni')} aynı, dokunulmadı).`);

// Paketteki görseller
const gorselKlasoru = join(paket, 'gorseller');
if (existsSync(gorselKlasoru) && readdirSync(gorselKlasoru).length) {
  console.log('\nPaketteki görseller hazırlanıyor (gorsel:hazirla --buyut)…');
  execFileSync(process.execPath, [join(KOK, 'scripts', 'gorsel-hazirla.ts'), gorselKlasoru, '--buyut'], { stdio: 'inherit' });
}
console.log('\nSıradaki: npm run build (şema + bağlantı doğrulaması) → npm run gorsel:rapor');
