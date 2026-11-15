/**
 * Kullanım alanı ikonları (Lucide). İçerikteki `ikon` alanı bu anahtarlardan biri olur
 * (panelde açılır liste — public/admin/config.yml ile aynı tutulmalı). Boşsa slug'a göre, o da yoksa varsayılan.
 */
import {
  Bath,
  Cylinder,
  Drill,
  Droplets,
  Hammer,
  PaintBucket,
  PaintRoller,
  Wrench,
  BrickWall,
  Building,
  Construction,
  Flame,
  GlassWater,
  Heater,
  House,
  Layers,
  LayoutGrid,
  ShowerHead,
  Snowflake,
  Sofa,
  Toilet,
  Trees,
  WavesLadder,
} from '@lucide/astro';

export const IKONLAR = {
  koltuk: Sofa,
  agac: Trees,
  dus: ShowerHead,
  isitici: Heater,
  karo: LayoutGrid,
  tugla: BrickWall,
  bina: Building,
  havuz: WavesLadder,
  alev: Flame,
  kar: Snowflake,
  klozet: Toilet,
  bardak: GlassWater,
  santiye: Construction,
  ev: House,
  katman: Layers,
} as const;

export type IkonAdi = keyof typeof IKONLAR;

/** kullanım alanı slug'ı → ikon (ikon alanı boşsa) */
const SLUG_IKON: Record<string, IkonAdi> = {
  'ic-mekan': 'koltuk',
  'dis-mekan': 'agac',
  'islak-hacim': 'dus',
  'yerden-isitma': 'isitici',
  zemin: 'karo',
  duvar: 'tugla',
  cephe: 'bina',
  havuz: 'havuz',
  'sicak-su': 'alev',
  'soguk-su': 'kar',
  'atik-su': 'klozet',
  'icme-suyu': 'bardak',
  altyapi: 'santiye',
  cati: 'ev',
};

/** Ana kategori ikonları (kategori görseli de ürün görseli de yoksa kartta gösterilir) */
const KATEGORI_IKON: Record<string, typeof Layers> = {
  'tesisat-borulari': Cylinder,
  'vana-ve-tesisat-armaturleri': Wrench,
  isitma: Heater,
  'pompa-ve-su-deposu': Droplets,
  'banyo-ve-mutfak': Bath,
  'seramik-ve-yer-kaplama': LayoutGrid,
  'yapi-kimyasallari': PaintBucket,
  'yalitim-ve-cati': House,
  boya: PaintRoller,
  'el-aletleri-ve-makineler': Drill,
  'hirdavat-ve-nalburiye': Hammer,
};

export function kategoriIkonu(slug: string) {
  return KATEGORI_IKON[slug] ?? Layers;
}

export function ikonBul(ikon: string | undefined, slug: string) {
  const ad = (ikon && ikon in IKONLAR ? ikon : SLUG_IKON[slug]) as IkonAdi | undefined;
  return IKONLAR[ad ?? 'katman'];
}
