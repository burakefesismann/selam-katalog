/**
 * Site içi yol üretir; `base` ayarını (/selam-katalog) otomatik ekler.
 * Tüm iç linklerde ve public/ altındaki dosyalarda bunu kullan:
 *   url('/')                  → /selam-katalog/
 *   url('urunler/baumit-flexo') → /selam-katalog/urunler/baumit-flexo
 */
/** Sayfa adresleri tek yerden (sayfa yapısı değişirse burayı değiştir) */
export const kategoriUrl = (id: string) => url(`kategoriler/${id}`);
export const urunUrl = (id: string) => url(`urunler/${id}`);
export const markaUrl = (id: string) => url(`markalar/${id}`);
/** PDF katalog (F4.3) — adı scripts/katalog-pdf.ts > PDF_ADI ile aynı olmalı; dosya sadece build + katalog:pdf sonrası var */
export const katalogPdfUrl = () => url('selam-insaat-urun-katalogu.pdf');

export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const clean = path.replace(/^\/+/, '');
  return `${base}/${clean}`;
}
