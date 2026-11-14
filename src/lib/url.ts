/**
 * Site içi yol üretir; `base` ayarını (/selam-katalog) otomatik ekler.
 * Tüm iç linklerde ve public/ altındaki dosyalarda bunu kullan:
 *   url('/')                  → /selam-katalog/
 *   url('urunler/baumit-flexo') → /selam-katalog/urunler/baumit-flexo
 */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const clean = path.replace(/^\/+/, '');
  return `${base}/${clean}`;
}
