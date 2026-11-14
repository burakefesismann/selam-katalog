/**
 * Türkçe metinden URL/dosya adı üretir: "Fırat PPRC Borular (PN20 / PN25)" → "firat-pprc-borular-pn20-pn25"
 * ı→i, İ→i, ş→s, ğ→g, ü→u, ö→o, ç→c; diğer aksanlar (â, î, û) da sadeleşir.
 */
const TR_HARITA: Record<string, string> = {
  ı: 'i', İ: 'i', I: 'i', ş: 's', Ş: 's', ğ: 'g', Ğ: 'g',
  ü: 'u', Ü: 'u', ö: 'o', Ö: 'o', ç: 'c', Ç: 'c',
};

export function slugify(metin: string): string {
  return metin
    .replace(/[ıİIşŞğĞüÜöÖçÇ]/g, (h) => TR_HARITA[h] ?? h)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // â → a gibi
    .toLowerCase()
    .replace(/&/g, ' ve ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
