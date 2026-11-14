/**
 * Görsel komutlarının ortak yardımcıları. Node'un yerleşik TypeScript desteğiyle çalışır
 * (enum / namespace gibi dönüşüm isteyen TS özellikleri KULLANMA).
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';

export const KOK = process.cwd();
export const ICERIK = join(KOK, 'src', 'content');
export const ASSETS = join(KOK, 'src', 'assets');

export const HEDEFLER = ['urunler', 'markalar', 'kategoriler'] as const;
export type Hedef = (typeof HEDEFLER)[number];

export const STANDART = {
  uzunKenarMaks: 1600,
  uzunKenarMin: 800,
  kalite: 80,
  kaliteEnDusuk: 60,
  boyutMaksKB: 500,
};

export interface Kayit {
  slug: string;
  dosya: string;
  veri: Record<string, unknown>;
}

/** Markdown dosyasının YAML başlığını ya da YAML dosyasının tamamını okur */
function oku(dosya: string): Record<string, unknown> {
  const metin = readFileSync(dosya, 'utf8');
  if (dosya.endsWith('.md')) {
    const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(metin);
    return m ? (parse(m[1]) ?? {}) : {};
  }
  return parse(metin) ?? {};
}

export function kayitlar(koleksiyon: string): Kayit[] {
  const klasor = join(ICERIK, koleksiyon);
  if (!existsSync(klasor)) return [];
  return readdirSync(klasor)
    .filter((f) => /\.(md|ya?ml)$/.test(f))
    .map((f) => {
      const veri = oku(join(klasor, f));
      return { slug: String(veri.slug ?? f.replace(/\.\w+$/, '')), dosya: join(klasor, f), veri };
    });
}

export function sluglar(koleksiyon: string): Set<string> {
  return new Set(kayitlar(koleksiyon).map((k) => k.slug));
}

/**
 * İçerik dosyasındaki görsel yolunu disk yoluna çevirir.
 * "/src/assets/x.webp" (panelin yazdığı, proje köküne göre) ya da "../../assets/x.webp" (dosyaya göre).
 */
export function gorselYolu(icerikDosyasi: string, yol: string): string {
  return yol.startsWith('/') ? join(KOK, yol) : join(icerikDosyasi, '..', yol);
}
