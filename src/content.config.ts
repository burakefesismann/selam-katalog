/**
 * İçerik şeması — alanların anlamı ve örnekler: docs/ICERIK-SEMASI.md
 * Alan adları Türkçe-ASCII. Bir alanı değiştirirsen ICERIK-SEMASI.md'yi ve panel ayarını (F1.6) da güncelle.
 */
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { SLUG_DESENI } from './lib/slug';

const SLUG_HATASI =
  'slug sadece küçük harf (a-z), rakam ve tire içerebilir; Türkçe karakter olmaz (ı→i, ş→s, ğ→g, ü→u, ö→o, ç→c). Ör: "baumit-flexo"';

/**
 * slug = DOSYA ADI. Alan opsiyoneldir (panel yazmaz); yazılırsa dosya adıyla aynı olmalı.
 * Dosya adının kendisi de aynı kurala uymalı — icerigiDogrula() kontrol eder.
 */
const slug = z.string().regex(SLUG_DESENI, SLUG_HATASI).optional();
const metin = z.string().trim().min(1, 'Bu alan boş olamaz');
/** Panel/paketlerden gelen boş değerler ("" ya da null) "alan yok" sayılır */
const bos = (v: unknown) => (v === '' || v === null ? undefined : v);
const ops = <T extends z.ZodType>(s: T) => z.preprocess(bos, s.optional());

const sira = z.preprocess(bos, z.number().int().default(100));
const yayinda = z.preprocess(bos, z.boolean().default(true));
const adres = z.url({ message: 'Geçerli bir web adresi olmalı (https://...)' });

/** public/ altında var olan bir dosya yolu: "/foyler/baumit-flexo.pdf" (panel böyle yazar) ya da "foyler/..." */
const publicDosya = (klasor: string, uzanti: string) =>
  z
    .string()
    .regex(
      new RegExp(`^/?${klasor}/[^/]+\\.${uzanti}$`, 'i'),
      `"/${klasor}/<dosya-adi>.${uzanti}" biçiminde olmalı`,
    )
    .refine((yol) => existsSync(join(process.cwd(), 'public', yol)), {
      message: 'Dosya bulunamadı (public/ klasöründe olmalı)',
    });

const markalar = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/markalar' }),
  schema: ({ image }) =>
    z.object({
      ad: metin,
      slug,
      logo: ops(image()),
      logo_kaynak_url: ops(adres),
      kisa_aciklama: metin,
      aciklama: ops(z.string()),
      web_sitesi: ops(adres),
      sira,
      yayinda,
    }),
});

const kategoriler = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/kategoriler' }),
  schema: ({ image }) =>
    z.object({
      ad: metin,
      slug,
      ust_kategori: ops(reference('kategoriler')),
      gorsel: ops(image()),
      kisa_aciklama: ops(z.string()),
      sira,
      yayinda,
    }),
});

const kullanim_alanlari = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/kullanim_alanlari' }),
  schema: z.object({
    ad: metin,
    slug,
    ikon: ops(z.string()),
    sira,
    yayinda,
  }),
});

const ozellik_tanimlari = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/ozellik_tanimlari' }),
  schema: z.object({
    ad: metin,
    slug,
    birim: ops(z.string()),
    aciklama: ops(z.string()),
    sira,
  }),
});

const urunler = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/urunler' }),
  schema: ({ image }) =>
    z.object({
      ad: metin,
      slug,
      /** 0 = "çeşitli" (markasız), 1+ = ilk sıradaki ana marka */
      markalar: z.array(reference('markalar')).default([]),
      kategori: reference('kategoriler'),
      kart_tipi: z.enum(['grup', 'marka_tur', 'urun'], {
        message: 'kart_tipi "grup", "marka_tur" ya da "urun" olmalı',
      }),
      kisa_aciklama: metin,
      seriler: z.array(metin).default([]),
      /** İlk görsel = ana görsel */
      gorseller: z
        .array(
          z.object({
            gorsel: image(),
            alt_metin: metin,
            kaynak_url: ops(adres),
          }),
        )
        .default([]),
      one_cikanlar: z.array(metin).default([]),
      kullanim_alanlari: z.array(reference('kullanim_alanlari')).default([]),
      teknik_ozellikler: z
        .array(
          z.object({
            ozellik: reference('ozellik_tanimlari'),
            deger: metin,
          }),
        )
        .default([]),
      olculer: z.array(metin).default([]),
      teknik_foy: ops(publicDosya('foyler', 'pdf')),
      ilgili_urunler: z.array(reference('urunler')).default([]),
      /** Üreticinin resmi ürün sayfaları — bilgi/görsel kaynağı, sitede gösterilmez */
      kaynak_sayfalar: z.array(adres).default([]),
      sira,
      one_cikan: z.preprocess(bos, z.boolean().default(false)),
      yayinda,
    }),
});

const ayarlar = defineCollection({
  loader: glob({ pattern: 'genel.yaml', base: './src/content/ayarlar' }),
  schema: z.object({
    firma: z.object({
      unvan: metin,
      kisa_ad: metin,
      sehir: metin,
      telefon: metin,
      eposta: ops(z.email({ message: 'Geçerli bir e-posta olmalı' })),
      whatsapp: ops(z.string()),
      web: ops(adres),
    }),
    subeler: z
      .array(
        z.object({
          ad: metin,
          adres: metin,
          telefon: ops(z.string()),
          calisma_saatleri: ops(z.string()),
          harita_url: ops(adres),
        }),
      )
      .default([]),
    ana_sayfa: z.object({
      baslik: metin,
      alt_baslik: ops(z.string()),
      guven_mesaji: ops(z.string()),
    }),
  }),
});

export const collections = {
  markalar,
  kategoriler,
  kullanim_alanlari,
  ozellik_tanimlari,
  urunler,
  ayarlar,
};
