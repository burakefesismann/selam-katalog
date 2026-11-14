/**
 * İçerik şeması — alanların anlamı ve örnekler: docs/ICERIK-SEMASI.md
 * Alan adları Türkçe-ASCII. Bir alanı değiştirirsen ICERIK-SEMASI.md'yi ve panel ayarını (F1.6) da güncelle.
 */
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const SLUG_HATASI =
  'slug sadece küçük harf (a-z), rakam ve tire içerebilir; Türkçe karakter olmaz (ı→i, ş→s, ğ→g, ü→u, ö→o, ç→c). Ör: "baumit-flexo"';

const slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, SLUG_HATASI);
const metin = z.string().trim().min(1, 'Bu alan boş olamaz');
const sira = z.number().int().default(100);
const yayinda = z.boolean().default(true);
const adres = z.url({ message: 'Geçerli bir web adresi olmalı (https://...)' });

/** public/ altında var olan bir dosya yolu, ör. "foyler/baumit-flexo.pdf" */
const publicDosya = (klasor: string, uzanti: string) =>
  z
    .string()
    .regex(
      new RegExp(`^${klasor}/[a-z0-9-]+\\.${uzanti}$`),
      `"${klasor}/<dosya-adi>.${uzanti}" biçiminde olmalı (küçük harf, tire)`,
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
      logo: image().optional(),
      logo_kaynak_url: adres.optional(),
      kisa_aciklama: metin,
      aciklama: z.string().optional(),
      web_sitesi: adres.optional(),
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
      ust_kategori: reference('kategoriler').optional(),
      gorsel: image().optional(),
      kisa_aciklama: z.string().optional(),
      sira,
      yayinda,
    }),
});

const kullanim_alanlari = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/kullanim_alanlari' }),
  schema: z.object({
    ad: metin,
    slug,
    ikon: z.string().optional(),
    sira,
    yayinda,
  }),
});

const ozellik_tanimlari = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/ozellik_tanimlari' }),
  schema: z.object({
    ad: metin,
    slug,
    birim: z.string().optional(),
    aciklama: z.string().optional(),
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
            kaynak_url: adres.optional(),
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
      teknik_foy: publicDosya('foyler', 'pdf').optional(),
      ilgili_urunler: z.array(reference('urunler')).default([]),
      /** Üreticinin resmi ürün sayfaları — bilgi/görsel kaynağı, sitede gösterilmez */
      kaynak_sayfalar: z.array(adres).default([]),
      sira,
      one_cikan: z.boolean().default(false),
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
      eposta: z.email({ message: 'Geçerli bir e-posta olmalı' }).optional(),
      whatsapp: z.string().optional(),
      web: adres.optional(),
    }),
    subeler: z
      .array(
        z.object({
          ad: metin,
          adres: metin,
          telefon: z.string().optional(),
          calisma_saatleri: z.string().optional(),
          harita_url: adres.optional(),
        }),
      )
      .default([]),
    ana_sayfa: z.object({
      baslik: metin,
      alt_baslik: z.string().optional(),
      guven_mesaji: z.string().optional(),
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
