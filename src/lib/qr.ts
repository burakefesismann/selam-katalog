/**
 * QR kod (F4.2) — derleme sırasında SVG üretilir (sayfada JavaScript gerekmez, baskıda keskin).
 * Hata düzeltme "M": rafta biraz çizilse/kirlense de okunur.
 */
import QRCode from 'qrcode';

export async function qrSvg(adres: string): Promise<string> {
  return QRCode.toString(adres, {
    type: 'svg',
    errorCorrectionLevel: 'M',
    margin: 0,
    color: { dark: '#000000', light: '#ffffff' },
  });
}

/** Etikette gösterilecek kısa adres: "https://" ve sondaki "/" olmadan */
export function kisaAdres(adres: string): string {
  return adres.replace(/^https?:\/\//, '').replace(/\/$/, '');
}
