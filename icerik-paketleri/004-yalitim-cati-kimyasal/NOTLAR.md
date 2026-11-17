# Paket 004 — Yapı Kimyasalları (kalan) + Yalıtım & Çatı

Hazırlayan: beyin takımı · 2026-11-16 · **v2** (kullanıcı cevapları işlendi) · Format: docs/ICERIK-SEMASI.md

## İçerik

| | Adet | Not |
|---|---|---|
| Yeni ürün kartı | 34 | Yapı Kimyasalları kalan (15) + Yalıtım & Çatı (19) |
| Yeni marka | 9 | sika, weber, mbt, izocam, btm, onduline (resmi site var); selsil, uks, cukurova (resmi site bulunamadı) |
| Yeni alt kategori | 7 | Yapı Kimyasalları altında: beton-katkisi, kopuk-ve-yapistirici, mastik-ve-silikon, zemin-ve-astar · Yalıtım & Çatı altında: isi-ve-ses-yalitimi, su-yalitimi-membran, cati |
| Yeni özellik tanımı | 3 | `sarfiyat` (birimsiz metin), `yogunluk` (kg/m³), `isil-iletkenlik` (W/mK) |

Mevcut alt kategorilere eklenen kartlar: `su-yalitimi-kimyasal` (Sika su tıkacı, SikaSwell), `siva-ve-sap` (Weber Dress ince sıva),
`mantolama-sistem` (İzocam Manto Taşyünü, İzocam Terrawool).

Öne çıkan (`one_cikan: true`): Sika-1, Sika Boom köpükler, Sika mastik & silikonlar, İzocam Manto Taşyünü, Onduline bitümlü membranlar.

## ÖNEMLİ: içe aktarma sırası

Bu paket 002 ve 003'teki kartlara bağlantı veriyor (ör. `kombi-ve-radyator-aksesuarlari`, `su-sayaclari-ve-kalorimetre`,
`galvaniz-boru-ve-ek-parcalari`, `eca-panel-radyatorler`). **Sıra: 002 → 003 → 004.**

```
npm run icerik:aktar -- 002-banyo-mutfak --uygula          # henüz yapılmadıysa
npm run icerik:aktar -- 003-tesisat-tamamlama --uygula     # henüz yapılmadıysa
npm run icerik:aktar -- 004-yalitim-cati-kimyasal           # ön izleme
npm run icerik:aktar -- 004-yalitim-cati-kimyasal --uygula
```

Beyin takımı kendi kopyasında 002 + 003 + 004'ü sırayla aktarıp `npm run build` çalıştırdı: 0 hata, 0 uyarı (267 sayfa).

## Alt kategoriler

| slug | ad | üst | sira |
|---|---|---|---|
| `beton-katkisi` | Beton Katkısı | yapi-kimyasallari | 60 |
| `kopuk-ve-yapistirici` | Köpük & Yapıştırıcı | yapi-kimyasallari | 70 |
| `mastik-ve-silikon` | Mastik & Silikon | yapi-kimyasallari | 80 |
| `zemin-ve-astar` | Zemin & Astar | yapi-kimyasallari | 90 |
| `isi-ve-ses-yalitimi` | Isı & Ses Yalıtımı | yalitim-ve-cati | 10 |
| `su-yalitimi-membran` | Su Yalıtımı (Membran) | yalitim-ve-cati | 20 |
| `cati` | Çatı | yalitim-ve-cati | 30 |

Not: mevcut Yapı Kimyasalları alt kategorilerinin `sira` alanı yok; yeni olanlar 60–90 aralığında, sona dizilir.

## Beyin takımı kararları (KATALOG-YAPISI'na işlenmeli)

1. **Kart adları netleştirildi:**
   - "İzocam Camyünü Şilte & Levhalar" → **"İzocam Camyünü Çatı Şiltesi (Tip 400)"** (stoktaki üç kalem de çatı şiltesi)
   - "BTM Likit Membran" → **"BTM Bitümer BTR 200 Likit Membran"**
   - "İzocam Maxibord" → **"İzocam Maxibord XPS Levhalar"**
2. **Mantolama taşyünleri** (İzocam Manto Taşyünü, Terrawool) KATALOG'da "Isı & Ses Yalıtımı" altındaydı; Baumit StarTherm EPS ve
   mantolama harçlarıyla aynı yerde görünsünler diye mevcut **`mantolama-sistem`** alt kategorisine yazıldı.
3. **Stok adıyla resmi bilgi farklı olanlar:**
   - Stokta "EPOKSİ SİKA KİMYASAL DÜBEL ANCHORFİX S1" yazıyor; Sika'ya göre AnchorFix S1 **poliester** esaslı. Kartta poliester yazıldı.
   - "SİKA MONOPLUG 596 SEAL": Sika Türkiye bu ürünü bugün **SikaTop-596 Seal (eski adı MSeal 596)** olarak tanıtıyor; kart bu föye dayanıyor.
   - "MBT Seramik Astarı 303" = **MasterTile P 303** (Master Builders; bugün mbcc.sika.com).
   - Sika silikon/mastik/köpükleri stokta "ABC …" önekiyle geçiyor; ABC Sealants ürünleri artık Sika markasıyla satılıyor (kartta açıklandı).
4. **Fondaline 400** Onduline ürünü; KATALOG'daki "Çukurova Bitümlü Membranlar & Fondaline" kartında kaldı, kartın markaları
   `cukurova` + `onduline`.
5. **Antisol E-200** için Sika Türkiye'de ayrı ürün sayfası yok; Sika Kazakistan'ın E-200 föyü (kaz.sika.com) ve Sika TR beton katkıları
   sayfası kaynak alındı.
6. **Fiyat listeleri** kaynak olarak kullanılmadı (İzocam'ın sitesindeki fiyat listesi PDF'i dahil).
7. **v2 — kullanıcı cevaplarıyla:**
   - **Şıngıl UKS markası** (Onduline değil). Kart **`uks-singil-shingle`** ("UKS Şıngıl (Shingle)") oldu, yeni marka `uks`.
     Resmi sitesi bulunamadığı için kaynak yok. v1'deki `onduline-singil-shingle` kartı **yok**; Onduline marka metninden de şıngıl çıkarıldı.
   - **Maxibord = XPS levha** ve **MonoPlug 596 = SikaTop-596 Seal** teyit edildi.
   - **Weber yüzey sertleştirici:** tipi (YS 1 / 4 / 6) bilinmiyor; kart genel anlatıma çevrildi.
   - **Ondulikit OLB 2K:** temellerde kullanılan iki bileşenli likit membran olarak yazıldı.
   - **BTM Ekobit EC 2000:** 15 m rulo.
   - Kartlarda "ekonomik" nitelemesi kullanılmıyor (Ekobit, Separol W3).

## Görseller

- **Resmi üretici görseli olmayan 5 kart** — **mağaza fotoğrafı** gerekiyor:
  uks-singil-shingle (UKS), yapistiricilar-mermer-epoksi-supurgelik (Selsil + çeşitli), trapez-aksesuarlari-mahya-karlik-vida-semer, trapez-sac,
  cati-ve-yalitim-yardimci-malzemeleri (kaynakta yalnız Onduline'ın geotekstil önerisi var, ürün görseli değil).
- **cukurova-bitumlu-membranlar-ve-fondaline:** Çukurova'nın resmi sitesi bulunamadı; Fondaline görseli Onduline'dan alınabilir,
  Çukurova membranlar için mağaza fotoğrafı.
- Selsil, UKS ve Çukurova için logo yok.
- Sika, Weber, İzocam, BTM, Onduline ürün görselleri kaynak sayfalarda.

## Özellik doluluğu (kategori içinde)

| Kategori | Kart | Satırlar (dolu / kart) |
|---|---|---|
| `beton-katkisi` | 4 | islev 4/4, sarfiyat 1/4, ambalaj 4/4, esas 2/4 |
| `kopuk-ve-yapistirici` | 4 | esas 3/4, bilesen 2/4, renk 2/4, ambalaj 3/4, islev 1/4 |
| `mastik-ve-silikon` | 1 | renk 1/1, standart 1/1 |
| `su-yalitimi-kimyasal` | 2 | esas 1/2, bilesen 1/2, islev 2/2, ambalaj 2/2, malzeme 1/2 |
| `siva-ve-sap` | 1 | esas 1/1, standart 1/1, uygulama-kalinligi 1/1, sarfiyat 1/1, yangin-sinifi 1/1, renk 1/1, ambalaj 1/1 |
| `zemin-ve-astar` | 3 | esas 3/3, bilesen 1/3, islev 3/3, ambalaj 3/3, renk 2/3, standart 1/3 |
| `isi-ve-ses-yalitimi` | 4 | malzeme 4/4, standart 1/4, islev 1/4, yangin-sinifi 3/4, ambalaj 1/4, levha-kalinligi 2/4, yogunluk 1/4 |
| `mantolama-sistem` | 2 | malzeme 2/2, levha-kalinligi 2/2, yogunluk 2/2, isil-iletkenlik 1/2, yangin-sinifi 1/2 |
| `su-yalitimi-membran` | 7 | esas 5/7, islev 2/7, standart 2/7, renk 2/7, ambalaj 4/7, bilesen 2/7, sarfiyat 1/7, malzeme 1/7 |
| `cati` | 6 | renk 3/6, islev 1/6, malzeme 2/6 |

Gruplarda (trapez, yardımcı malzemeler) karşılaştırılabilir teknik değer az; bilgi gövdede ve `olculer`'de.

## Kaynaklar (kart bazında)

- **Sika Antisol E-200 (kür malzemesi)** (`sika-antisol-e-200-kur-malzemesi`)
  - https://kaz.sika.com/content/dam/dms/kz01/c/PDS-Antisol-E200-KZ-2020.pdf
  - https://tur.sika.com/tr/yapi/beton-ve-cimento-teknolojileri/beton-katkilari.html
  - https://tur.sika.com/tr/bilgikutuphanesi/Su-Gecirimsiz-Beton-Sistemi.html
- **Sika Plastocrete N TR** (`sika-plastocrete-n-tr`)
  - https://tur.sika.com/dms/getdocument.get/c392cf9f-f5d5-4729-b7f3-8bbcf3cf4883/sika-plastocreten.pdf
- **Sika Separol W3 (kalıp ayırıcı)** (`sika-separol-w3-kalip-ayirici`)
  - https://tur.sika.com/dms/getdocument.get/14cad29e-3767-48b0-811b-5a00eebb7821/sika-separol-w-3.pdf
  - https://tur.sika.com/tr/yapi/beton-ve-cimento-teknolojileri/beton-katkilari.html
- **Sika-1 TR (su geçirimsizlik katkısı)** (`sika-1-tr-su-gecirimsizlik-katkisi`)
  - https://tur.sika.com/dms/getdocument.get/8d576193-811f-464f-8d26-692e93f40cba/sika_-1.pdf
  - https://tur.sika.com/tr/yapi/beton-ve-cimento-teknolojileri/beton-katkilari.html
  - https://tur.sika.com/tr/hakkimizda/biz-kimiz/tarihce.html
- **Sika AnchorFix S1 Kimyasal Dübel** (`sika-anchorfix-s1-kimyasal-dubel`)
  - https://tur.sika.com/tr/yapi/grout-ve-ankraj-uygulamalari/kimyasal-ankraj-urunleri/sika-anchorfix-s1.html
  - https://tur.sika.com/tr/home/abc-sealants-artk-sika-markasyla-sizlerle.html
- **Sika Boom Poliüretan Köpükler** (`sika-boom-poliuretan-kopukler`)
  - https://tur.sika.com/tr/yapi/sizdirmazlik-ve-yapistirma-cozumleri/genlesen-kopukler/sika-boom-141-ff.html
  - https://tur.sika.com/tr/yapi/sizdirmazlik-ve-yapistirma-cozumleri/genlesen-kopukler/sika-boom-180-fixfill.html
  - https://tur.sika.com/tr/yapi/sizdirmazlik-ve-yapistirma-cozumleri/genlesen-kopukler/sika-boom-541-ffgun.html
  - https://tur.sika.com/tr/yapi/sizdirmazlik-ve-yapistirma-cozumleri/genlesen-kopukler/sika-boom-108-foamcleaner.html
  - https://tur.sika.com/tr/yapi/sizdirmazlik-ve-yapistirma-cozumleri/genlesen-kopukler.html
- **Sikabond 181 Hızlı MDF Yapıştırıcı** (`sikabond-181-hizli-mdf-yapistirici`)
  - https://tur.sika.com/dam/dms/tr01/t/sikabond-181-h-zlyaptrc.pdf
  - https://tur.sika.com/tr/home/abc-sealants-artk-sika-markasyla-sizlerle.html
- **Yapıştırıcılar (mermer, epoksi, süpürgelik)** (`yapistiricilar-mermer-epoksi-supurgelik`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Sika Mastik & Silikonlar (Sikaflex, Sikacryl, Sikasil)** (`sika-mastik-ve-silikonlar-sikaflex-sikacryl-sikasil`)
  - https://tur.sika.com/tr/yapi/sizdirmazlik-ve-yapistirma-cozumleri/sizdirmazlik-cozumleri/ic-mekan-derzleri/sikasil-115-gp-silicone.html
  - https://tur.sika.com/tr/yapi/sizdirmazlik-ve-yapistirma-cozumleri/sizdirmazlik-cozumleri/ic-mekan-derzleri/sikasil-c.html
  - https://tur.sika.com/tr/yapi/sizdirmazlik-ve-yapistirma-cozumleri/sizdirmazlik-cozumleri/ic-mekan-derzleri/sikacryl-300-ekstrasilikonizemastik.html
  - https://tur.sika.com/tr/yapi/sizdirmazlik-ve-yapistirma-cozumleri/sizdirmazlik-cozumleri/cephe-cozumleri/sikaflex-175-fcpu.html
  - https://tur.sika.com/tr/yapi/sizdirmazlik-ve-yapistirma-cozumleri/yapistiricilar/sikaflex-118-extremegrab.html
  - https://tur.sika.com/tr/bilgikutuphanesi/banyo-derzlerinde-sizdirmazlik.html
- **Sika MonoPlug 596 Seal (su tıkacı)** (`sika-monoplug-596-seal-su-tikaci`)
  - https://tur.sika.com/dms/getdocument.get/e6c4e0f9-7caf-455c-a029-fdaba783c088/sikatop-596-seal.pdf
- **SikaSwell A Su Tutucu Bant** (`sikaswell-a-su-tutucu-bant`)
  - https://tur.sika.com/dam/dms/tr01/g/sikaswell_a.pdf
  - https://tur.sika.com/tr/yapi/su-yalitimi/derzlerde-su-yalitim-cozumleri/sikaswell-s-2.html
- **Weber Dress İnce Sıva** (`weber-dress-ince-siva`)
  - https://www.tr.weber/dis-cephe-boya-kaplama-ve-sivalari/dis-cephe-sivalari/weberdress-ince-siva
  - https://www.tr.weber/files/tr/2022-06/weberdress_ince_sva_-_Teknik_Bilgi_Fy.pdf
  - https://www.tr.weber/files/tr/2022-11/weberdress_grubu_-_TSE_Belgesi.pdf
- **MBT Seramik Astarı 303** (`mbt-seramik-astari-303`)
  - https://mbcc.sika.com/en-tr/products/mastertile/mastertile-p-303
- **Sika Floor-3 Quartz Yüzey Sertleştirici** (`sika-floor-3-quartz-yuzey-sertlestirici`)
  - https://tur.sika.com/dam/dms/tr01/q/Sikafloor%203%20Quartztop%20TR%20ile%20Kuvars%20Agregali%20Yuzey%20Sertlestirici%20Uygulamasi.pdf
  - https://tur.sika.com/tr/bilgikutuphanesi/Beton-Zeminler-icin-Kuru-Karisimli-Sertlestiriciler.html
- **Weber Yüzey Sertleştirici** (`weber-yuzey-sertlestirici`)
  - https://www.tr.weber/zemin-sistemleri/yuzey-sertlestiriciler/weberfloor-ys-6
  - https://www.tr.weber/zemin-sistemleri/yuzey-sertlestiriciler/weberfloor-ys-4
  - https://www.tr.weber/zemin-sistemleri/yuzey-sertlestiriciler/weberfloor-ys-1
  - https://www.tr.weber/files/tr/2020-03/weber_kr_A_-_Teknik_Bilgi_Fy.pdf
- **İzocam Camyünü Boru Kılıfları** (`izocam-camyunu-boru-kiliflari`)
  - https://www.izocam.com.tr/en/products/hvac-insulation/glass-wool-prefabricated-pipe
  - https://www.izocam.com.tr/images/product/technical-image/camyunu-prefabrik-boru43.pdf
  - https://www.izocam.com.tr/tr/basinda-Izocam/yalitim,-su-sayaclari-ve-su-borularinin--donmasini-onluyor
- **İzocam Camyünü Çatı Şiltesi (Tip 400)** (`izocam-camyunu-cati-siltesi-tip-400`)
  - https://www.izocam.com.tr/images/product/technical-image/cati-siltesi-pdf935.pdf
  - https://www.izocam.com.tr/en/products/roof-insulation/building-blanket
  - https://www.izocam.com.tr/en/product-group/glass-wool
- **İzocam Maxibord XPS Levhalar** (`izocam-maxibord-xps-levhalar`)
  - https://izocam.com.tr/en/products/wall-insulation/foamboard-1500-p
  - https://izocam.com.tr/images/product/technical-image/foamboard-under-flooring84.pdf
  - https://izocam.com.tr/en/product-group/extruded-polystyrene-(xps)
- **İzocam Taşyünü Ara Bölme Levhası** (`izocam-tasyunu-ara-bolme-levhasi`)
  - https://www.izocam.com.tr/en/products/wall-insulation/stone-wool-partition-wall-board
  - https://www.izocam.com.tr/images/product/technical-image/ara-bolme-levhasi208.pdf
  - https://www.izocam.com.tr/tr/blog/genel/tasyunu-nedir-ne-ise-yarar
- **İzocam Manto Taşyünü Levha** (`izocam-manto-tasyunu-levha`)
  - https://www.izocam.com.tr/images/product/technical-image/manto-tasyunu216.pdf
  - https://www.izocam.com.tr/images/product/technical-image/manto-tasyunu-r-154.pdf
  - https://izocam.com.tr/pdffiles/certificatepdf/TS%20EN%2013162%20-%20TY%20TSE%20CertificateTS%20EN%2013162%20-%20TY%20TSE%20Certificate233.pdf
  - https://www.izocam.com.tr/tr/blog/genel/tasyunu-nedir-ne-ise-yarar
- **İzocam Terrawool Manto Taşyünü** (`izocam-terrawool-manto-tasyunu`)
  - https://izocam.com.tr/en/newsletter/we-have-acquired-his-yalitim
- **BTM Ekobit Membran** (`btm-ekobit-membran`)
  - https://www.btm.co/tr/btm-ekobit-serisi
  - https://www.btm.co/tr/urunler/kiremitalti-su-yalitim-membranlari/
- **BTM Elasto Dry Roof** (`btm-elasto-dry-roof`)
  - https://btm.co/en/btmseal-elasto-dryroof
  - https://www.btm.co/uploads/documents-en/tds/yap%C4%B1%20kimyasallar%C4%B1%20tds%20ing/elastodry_roof_ing.pdf
- **BTM Bitümer BTR 200 Likit Membran** (`btm-bitumer-btr-200-likit-membran`)
  - https://www.btm.co/tr/bitumer-btr-200
  - https://www.btm.co/tr/referanslar
- **Onduline Bitüline Astar** (`onduline-bituline-astar`)
  - https://tr.onduline.com/en/homeowner/urunler/toiture/bituline
- **Onduline Bitümlü Membranlar** (`onduline-bitumlu-membranlar`)
  - https://tr.onduline.com/tr/son-kullanici/urunler/duz-cati/bituline-prima
  - https://tr.onduline.com/tr/son-kullanici/urunler/duz-cati/onduline-bitusmart
  - https://tr.onduline.com/tr/son-kullanici/urunler/temel-ve-yapisal-koruma/bituline-resista
  - https://tr.onduline.com/en/homeowner/urunler/toiture/bituline
  - https://tr.onduline.com/en/homeowner/faq/installation/bituline
- **Onduline Ondulikit Likit İzolasyon** (`onduline-ondulikit-likit-izolasyon`)
  - https://tr.onduline.com/tr/son-kullanici/urunler/hafta-sonu-evleri
  - https://tr.onduline.com/tr/son-kullanici/urunler/endustriyel-binalar
- **Çukurova Bitümlü Membranlar & Fondaline** (`cukurova-bitumlu-membranlar-ve-fondaline`)
  - https://tr.onduline.com/en/homeowner/products/foundation-structural-protection
- **Onduline Mahya & Montaj Aksesuarları** (`onduline-mahya-ve-montaj-aksesuarlari`)
  - https://tr.onduline.com/tr/son-kullanici/urunler/toiture/onduline-zigana
  - https://tr.onduline.com/en/homeowner/products-no/cati-kaplama/onduline-hr
- **Onduline Ondubant & İsobant Yalıtım Bantları** (`onduline-ondubant-ve-isobant-yalitim-bantlari`)
  - https://tr.onduline.com/en/homeowner/urunler/toiture/bardoline
  - https://tr.onduline.com/en/homeowner/products-no/cati-kaplama/onduline-hr
  - https://tr.onduline.com/tr/son-kullanici/urunler/toiture/onduline-zigana
  - https://ph.onduline.com/en/homeowner/products/accessories/onduband
- **UKS Şıngıl (Shingle)** (`uks-singil-shingle`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Trapez Aksesuarları (mahya, karlık, vida, semer)** (`trapez-aksesuarlari-mahya-karlik-vida-semer`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Trapez Saç** (`trapez-sac`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Çatı & Yalıtım Yardımcı Malzemeleri** (`cati-ve-yalitim-yardimci-malzemeleri`)
  - https://ph.onduline.com/sites/onduline_ph/files/2025-06/2025-tds-bituline-prima-pp300_0.pdf

## Marka siteleri

- Sika (`sika`): https://tur.sika.com
- Weber (`weber`): https://www.tr.weber
- MBT (`mbt`): https://mbcc.sika.com/en-tr
- Selsil (`selsil`): — bulunamadı
- İzocam (`izocam`): https://www.izocam.com.tr
- BTM (`btm`): https://www.btm.co
- Onduline (`onduline`): https://tr.onduline.com
- UKS (`uks`): — bulunamadı
- Çukurova (`cukurova`): — bulunamadı
