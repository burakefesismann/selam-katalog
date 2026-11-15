/**
 * Sayfaların içerik okuduğu TEK yer. Doğrudan getCollection() kullanma — buradaki fonksiyonları kullan.
 * Kurallar:
 *  - `yayinda: false` olan kayıt hiçbir listede, referansta ya da sayfada görünmez.
 *  - Üst kategorisi yayında olmayan alt kategori de görünmez; kategorisi görünmeyen ürün de görünmez.
 *  - Ürünün markalar / kullanım alanları / ilgili ürünler listelerinden yayında olmayanlar düşürülür.
 *  - Sıralama: `sira` (küçük önce), eşitse ada göre Türkçe alfabe.
 */
import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import { SLUG_DESENI } from './slug';

export type Marka = CollectionEntry<'markalar'>;
export type Kategori = CollectionEntry<'kategoriler'>;
export type KullanimAlani = CollectionEntry<'kullanim_alanlari'>;
export type OzellikTanimi = CollectionEntry<'ozellik_tanimlari'>;
export type Urun = CollectionEntry<'urunler'>;

export interface TeknikSatir {
  ozellik: OzellikTanimi;
  deger: string;
}

/** Görünür bağlantıları çözülmüş ürün */
export interface UrunDetay {
  urun: Urun;
  kategori: Kategori;
  markalar: Marka[];
  kullanimAlanlari: KullanimAlani[];
  teknikOzellikler: TeknikSatir[];
  ilgiliUrunler: Urun[];
}

type Siralanabilir = { data: { ad: string; sira: number } };

export function sirala<T extends Siralanabilir>(liste: T[]): T[] {
  return [...liste].sort(
    (a, b) => a.data.sira - b.data.sira || a.data.ad.localeCompare(b.data.ad, 'tr'),
  );
}

function haritala<T extends { id: string }>(liste: T[]): Map<string, T> {
  return new Map(liste.map((k) => [k.id, k]));
}

/** Referans listesini, görünür kayıtlar haritasından çözer; görünmeyenleri düşürür (sıra korunur). */
function coz<T>(refs: { id: string }[], gorunur: Map<string, T>): T[] {
  return refs.flatMap((r) => {
    const kayit = gorunur.get(r.id);
    return kayit ? [kayit] : [];
  });
}

export async function getMarkalar(): Promise<Marka[]> {
  return sirala(await getCollection('markalar', ({ data }) => data.yayinda));
}

export async function getKullanimAlanlari(): Promise<KullanimAlani[]> {
  return sirala(await getCollection('kullanim_alanlari', ({ data }) => data.yayinda));
}

export async function getOzellikTanimlari(): Promise<OzellikTanimi[]> {
  return sirala(await getCollection('ozellik_tanimlari'));
}

export async function getKategoriler(): Promise<Kategori[]> {
  const hepsi = await getCollection('kategoriler');
  const tum = haritala(hepsi);
  const gorunurMu = (k: Kategori, ziyaret = new Set<string>()): boolean => {
    if (!k.data.yayinda || ziyaret.has(k.id)) return false; // döngüye karşı koruma
    const ust = k.data.ust_kategori;
    if (!ust) return true;
    const ustKayit = tum.get(ust.id);
    return ustKayit ? gorunurMu(ustKayit, ziyaret.add(k.id)) : false;
  };
  return sirala(hepsi.filter((k) => gorunurMu(k)));
}

export async function getAnaKategoriler(): Promise<Kategori[]> {
  return (await getKategoriler()).filter((k) => !k.data.ust_kategori);
}

export async function getAltKategoriler(ustId: string): Promise<Kategori[]> {
  return (await getKategoriler()).filter((k) => k.data.ust_kategori?.id === ustId);
}

/** Ana kategoriden başlayarak kategori zinciri: [Tesisat Boruları, PPRC Temiz Su] */
export async function getKategoriYolu(kategoriId: string): Promise<Kategori[]> {
  const harita = haritala(await getKategoriler());
  const yol: Kategori[] = [];
  let simdiki = harita.get(kategoriId);
  while (simdiki && !yol.includes(simdiki)) {
    yol.unshift(simdiki);
    const ust = simdiki.data.ust_kategori?.id;
    simdiki = ust ? harita.get(ust) : undefined;
  }
  return yol;
}

export async function getUrunler(): Promise<Urun[]> {
  const kategoriler = haritala(await getKategoriler());
  return sirala(
    await getCollection('urunler', ({ data }) => data.yayinda && kategoriler.has(data.kategori.id)),
  );
}

/** Bir kategorinin (ve isteğe bağlı olarak alt kategorilerinin) görünür ürünleri */
export async function getKategoriUrunleri(kategoriId: string, altlarDahil = true): Promise<Urun[]> {
  const idler = new Set([kategoriId]);
  if (altlarDahil) {
    const kategoriler = await getKategoriler();
    let eklendi = true;
    while (eklendi) {
      eklendi = false;
      for (const k of kategoriler) {
        const ust = k.data.ust_kategori?.id;
        if (ust && idler.has(ust) && !idler.has(k.id)) {
          idler.add(k.id);
          eklendi = true;
        }
      }
    }
  }
  return (await getUrunler()).filter((u) => idler.has(u.data.kategori.id));
}

/** Kategori kartı görseli: kategorinin kendi görseli → yoksa kategorideki (alt kategoriler dahil) ilk ürün görseli */
export async function getKategoriGorseli(kategori: Kategori) {
  if (kategori.data.gorsel) return { gorsel: kategori.data.gorsel, alt: kategori.data.ad };
  for (const u of await getKategoriUrunleri(kategori.id)) {
    const g = u.data.gorseller[0];
    if (g) return { gorsel: g.gorsel, alt: g.alt_metin };
  }
  return undefined;
}

/**
 * Ana sayfa öne çıkanlar: önce `one_cikan: true` olanlar; yoksa/azsa farklı ana kategorilerden sırayla
 * (tek bir kategori baskın olmasın — K12). Görseli olanlar önce.
 */
export async function getOneCikanUrunler(adet = 8): Promise<Urun[]> {
  const urunler = await getUrunler();
  const secilen = urunler.filter((u) => u.data.one_cikan).slice(0, adet);
  if (secilen.length >= adet) return secilen;
  const gruplar = await Promise.all(
    (await getAnaKategoriler()).map(async (k) =>
      (await getKategoriUrunleri(k.id))
        .filter((u) => !secilen.includes(u))
        .sort((a, b) => Number(b.data.gorseller.length > 0) - Number(a.data.gorseller.length > 0)),
    ),
  );
  for (let tur = 0; secilen.length < adet && gruplar.some((g) => g.length > tur); tur++) {
    for (const g of gruplar) {
      if (secilen.length >= adet) break;
      if (g[tur]) secilen.push(g[tur]);
    }
  }
  return secilen;
}

export interface MarkaGrubu {
  /** undefined = "Çeşitli markalar" (markasız ürünler) */
  marka?: Marka;
  urunler: Urun[];
}

/**
 * Ürünleri ANA markalarına (ilk görünür marka) göre gruplar (K11: kategoride birden çok marka varsa marka başlıkları).
 * Sıra: markaların `sira`sı, "Çeşitli markalar" en sonda. Grup içinde ürün sırası korunur.
 */
export async function markayaGoreGrupla(urunler: Urun[]): Promise<MarkaGrubu[]> {
  const markalar = await getMarkalar();
  const harita = haritala(markalar);
  const gruplar = new Map<string, MarkaGrubu>();
  for (const u of urunler) {
    const ana = u.data.markalar.map((r) => harita.get(r.id)).find(Boolean);
    const anahtar = ana?.id ?? '';
    if (!gruplar.has(anahtar)) gruplar.set(anahtar, { marka: ana, urunler: [] });
    gruplar.get(anahtar)!.urunler.push(u);
  }
  const sira = (g: MarkaGrubu) => (g.marka ? markalar.indexOf(g.marka) : Number.MAX_SAFE_INTEGER);
  return [...gruplar.values()].sort((a, b) => sira(a) - sira(b));
}

/** Ürünleri ANA kategorilerine göre gruplar (marka sayfası). Ana kategori sırasıyla. */
export async function anaKategoriyeGoreGrupla(urunler: Urun[]): Promise<{ kategori: Kategori; urunler: Urun[] }[]> {
  const anaKategoriler = await getAnaKategoriler();
  const anaId = new Map<string, string>();
  for (const u of urunler) {
    const yol = await getKategoriYolu(u.data.kategori.id);
    if (yol[0]) anaId.set(u.id, yol[0].id);
  }
  return anaKategoriler
    .map((kategori) => ({ kategori, urunler: urunler.filter((u) => anaId.get(u.id) === kategori.id) }))
    .filter((g) => g.urunler.length > 0);
}

export async function getMarkaUrunleri(markaId: string): Promise<Urun[]> {
  return (await getUrunler()).filter((u) => u.data.markalar.some((m) => m.id === markaId));
}

export async function getUrunDetay(urun: Urun): Promise<UrunDetay> {
  const [markalar, kategoriler, alanlar, ozellikler, urunler] = await Promise.all([
    getMarkalar(),
    getKategoriler(),
    getKullanimAlanlari(),
    getOzellikTanimlari(),
    getUrunler(),
  ]);
  const kategori = kategoriler.find((k) => k.id === urun.data.kategori.id);
  if (!kategori) throw new Error(`"${urun.id}" ürününün kategorisi görünür değil`);
  const ozellikHarita = haritala(ozellikler);
  return {
    urun,
    kategori,
    markalar: coz(urun.data.markalar, haritala(markalar)),
    kullanimAlanlari: coz(urun.data.kullanim_alanlari, haritala(alanlar)),
    teknikOzellikler: urun.data.teknik_ozellikler.flatMap(({ ozellik, deger }) => {
      const tanim = ozellikHarita.get(ozellik.id);
      return tanim ? [{ ozellik: tanim, deger }] : [];
    }),
    ilgiliUrunler: coz(urun.data.ilgili_urunler, haritala(urunler)).filter((u) => u.id !== urun.id),
  };
}

// ---------------------------------------------------------------------------
// Doğrulama — Astro eksik referansta sadece uyarı yazıp derlemeye devam ediyor.
// Bu fonksiyon BaseLayout'tan her derlemede bir kez çağrılır ve sorun varsa derlemeyi durdurur.
// ---------------------------------------------------------------------------

let dogrulama: Promise<void> | undefined;

export function icerigiDogrula(): Promise<void> {
  if (import.meta.env.DEV) return dogrula(); // önizlemede içerik değiştikçe yeniden kontrol et
  dogrulama ??= dogrula();
  return dogrulama;
}

async function dogrula(): Promise<void> {
  const [markalar, kategoriler, alanlar, ozellikler, urunler] = await Promise.all([
    getCollection('markalar'),
    getCollection('kategoriler'),
    getCollection('kullanim_alanlari'),
    getCollection('ozellik_tanimlari'),
    getCollection('urunler'),
  ]);
  const idler = {
    markalar: new Set(markalar.map((k) => k.id)),
    kategoriler: new Set(kategoriler.map((k) => k.id)),
    kullanim_alanlari: new Set(alanlar.map((k) => k.id)),
    ozellik_tanimlari: new Set(ozellikler.map((k) => k.id)),
    urunler: new Set(urunler.map((k) => k.id)),
  };
  const hatalar: string[] = [];
  const kontrol = (kaynak: string, alan: string, koleksiyon: keyof typeof idler, id: string) => {
    if (!idler[koleksiyon].has(id)) {
      hatalar.push(`${kaynak} → "${alan}" alanı "${id}" kaydına bağlı ama ${koleksiyon} içinde böyle bir kayıt yok.`);
    }
  };

  // Dosya adı = slug olmalı (aynı slug iki kez kullanılamasın, panel ile tutarlı kalsın)
  for (const k of [...markalar, ...kategoriler, ...alanlar, ...ozellikler, ...urunler]) {
    const dosya = k.filePath?.split(/[\\/]/).pop()?.replace(/\.(ya?ml|md)$/, '');
    if (dosya && dosya !== k.id) {
      hatalar.push(`${k.filePath} → dosya adı "${dosya}" ama slug "${k.id}". İkisi aynı olmalı.`);
    } else if (!SLUG_DESENI.test(k.id)) {
      hatalar.push(
        `${k.filePath} → dosya adı "${k.id}" geçersiz: sadece küçük harf (a-z), rakam ve tire; Türkçe karakter yok (ı→i, ü→u, ö→o…).`,
      );
    }
  }

  for (const k of kategoriler) {
    const ust = k.data.ust_kategori?.id;
    if (!ust) continue;
    kontrol(`kategoriler/${k.id}`, 'ust_kategori', 'kategoriler', ust);
    // döngü kontrolü (A'nın üstü B, B'nin üstü A gibi)
    const gorulen = new Set([k.id]);
    let simdiki: string | undefined = ust;
    while (simdiki) {
      if (gorulen.has(simdiki)) {
        hatalar.push(`kategoriler/${k.id} → üst kategori zinciri kendine dönüyor (${[...gorulen].join(' → ')}).`);
        break;
      }
      gorulen.add(simdiki);
      simdiki = kategoriler.find((x) => x.id === simdiki)?.data.ust_kategori?.id;
    }
  }

  // Görseller depoda olmalı (Astro işler, kaynağı belli). İnternet adresi = uzak/stok görsel → yasak (K10).
  const uzakMi = (g: unknown) => typeof g === 'string' && /^https?:\/\//.test(g);
  const uzakHatasi = (yer: string, g: unknown) =>
    hatalar.push(`${yer} → görsel internet adresi olamaz (${String(g)}). Görseli panelden yükle ya da gorsel:hazirla ile depoya koy.`);
  for (const m of markalar) if (uzakMi(m.data.logo)) uzakHatasi(`markalar/${m.id} → logo`, m.data.logo);
  for (const k of kategoriler) if (uzakMi(k.data.gorsel)) uzakHatasi(`kategoriler/${k.id} → gorsel`, k.data.gorsel);
  for (const u of urunler) {
    u.data.gorseller.forEach((g, i) => uzakMi(g.gorsel) && uzakHatasi(`urunler/${u.id} → ${i + 1}. görsel`, g.gorsel));
  }

  for (const u of urunler) {
    const kaynak = `urunler/${u.id}`;
    kontrol(kaynak, 'kategori', 'kategoriler', u.data.kategori.id);
    u.data.markalar.forEach((r) => kontrol(kaynak, 'markalar', 'markalar', r.id));
    u.data.kullanim_alanlari.forEach((r) => kontrol(kaynak, 'kullanim_alanlari', 'kullanim_alanlari', r.id));
    u.data.teknik_ozellikler.forEach((t) =>
      kontrol(kaynak, 'teknik_ozellikler.ozellik', 'ozellik_tanimlari', t.ozellik.id),
    );
    u.data.ilgili_urunler.forEach((r) => kontrol(kaynak, 'ilgili_urunler', 'urunler', r.id));
  }

  if (hatalar.length) {
    throw new Error(
      `İçerik hatası (${hatalar.length}) — düzeltmeden site derlenmez:\n` +
        hatalar.map((h) => `  • ${h}`).join('\n'),
    );
  }
}

export async function getAyarlar() {
  const kayit = await getEntry('ayarlar', 'genel');
  if (!kayit) throw new Error('src/content/ayarlar/genel.yaml bulunamadı');
  return kayit.data;
}

/** "0 (464) 217 60 67" → "tel:+904642176067" */
export function telLink(telefon: string): string {
  const rakam = telefon.replace(/\D/g, '').replace(/^0/, '');
  return `tel:+90${rakam}`;
}
