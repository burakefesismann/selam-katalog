# Paket 001 — Fırat + Baumit

Hazırlayan: beyin takımı · 2026-11-15 · Format: `docs/ICERIK-SEMASI.md` (2026-11-14 sürümü)

## İçerik

| Klasör | Kayıt | Not |
|---|---|---|
| `markalar/` | 2 | `firat`, `baumit` — **mevcut kayıtlarla birleştir** (aşağıda) |
| `kategoriler/` | 10 | Sadece yeni alt kategoriler |
| `ozellik_tanimlari/` | 22 | Sadece yeni tanımlar |
| `urunler/` | 35 | 17 Fırat + 18 Baumit; `gorseller` boş (`/gorsel` ile doldurulacak) |

Yeni kategoriler: `pe100-icme-suyu`, `pex`, `yagmur-olugu` (Tesisat Boruları) · `yerden-isitma` (Isıtma) ·
`kapi-ve-pencere` (Hırdavat & Nalburiye) · `derz-dolgu`, `su-yalitimi-kimyasal`, `siva-ve-sap`, `mantolama-sistem`,
`dekoratif-kaplama` (Yapı Kimyasalları). Alt kategorilere `sira` verilmedi (varsayılan 100 → alfabetik, KATALOG-YAPISI ile aynı).

## İçe aktarırken (VS Code tarafı)

1. **Birleştir, ezme.** `markalar/firat.yaml` ve `baumit.yaml` zaten var: `logo`, `logo_kaynak_url` ve paketteki dosyada
   olmayan diğer alanlar korunmalı. F1.4 örnek ürünlerinin (`firat-pprc-borular-pn20-pn25`, `firat-pvc-atik-su-ek-parcalari`,
   `firat-triplex-koruge-altyapi-borulari-ve-ek-parcalari`, `baumit-basic`, `baumit-flexo`, `baumit-flex-uni`) üzerine
   yazılırken mevcut `gorseller` korunmalı. Aynı `ad`lı ama farklı slug'lı bir kayıt varsa içe aktarıcı uyarmalı.
2. **Varsayılan slug'lar.** Ana kategoriler KATALOG-YAPISI adlarından türetildi: `tesisat-borulari`,
   `vana-ve-tesisat-armaturleri`, `isitma`, `pompa-ve-su-deposu`, `banyo-ve-mutfak`, `seramik-ve-yer-kaplama`,
   `yapi-kimyasallari`, `yalitim-ve-cati`, `boya`, `el-aletleri-ve-makineler`, `hirdavat-ve-nalburiye`.
   Var olduğu varsayılan alt kategoriler: `pprc-temiz-su`, `pvc-atik-su`, `altyapi`, `seramik-yapistirici`.
   Farklıysa `kategoriler/*.yaml` içindeki `ust_kategori` ve ürünlerdeki `kategori` düzeltilsin.
3. **KATALOG-YAPISI.md güncellemeleri** (beyin takımı kararı, bu paketle birlikte işlenecek):
   - *PE100 Kaynaklı & Elektrofüzyon Ek Parçalar*: marka "çeşitli" → **Fırat** (kullanıcı kararı, tablo satır 11).
   - *PEX Boru & Bağlantılar* → **PEX Bağlantılar & Vanalar** (stokta PEX boru yok; slug `pex-baglantilar-ve-vanalar`).
     Marka: Fırat · KAS · ECA.
   - *Baumit Procontact Sıva Harcı* → **Baumit ProContact Sıva Harcı** ve **Sıva & Şap'tan Mantolama'ya** taşındı
     (Baumit bunu ısı yalıtım sistem bileşeni olarak sınıflıyor). Sıva & Şap 6 → 5 kart, Mantolama 4 → 5 kart.
   - Resmi ürün adına göre yazım düzeltmeleri: *Duacontact* → **DuoContact** (slug değişti),
     *Starttherm* → **StarTherm** (slug değişti), *Creative Top* → **CreativTop** (slug değişti), *Duofix* → **DuoFix**.
4. **Çok markalı kartlar.** *PEX Bağlantılar & Vanalar* ve *Yerden Isıtma Kollektörleri* şimdilik `markalar: [firat]`.
   ECA ve KAS marka kayıtları kendi paketleriyle gelince `[firat, eca, kas]` yapılacak (gövde metni zaten üç markayı anlatıyor).
5. **Var olan özellik tanımına açıklama önerisi** — `ts-en-12004-sinifi.aciklama`:
   "Seramik yapıştırıcı sınıfı. C1: en az 0,5 N/mm², C2: en az 1,0 N/mm² yapışma; T: kayması azaltılmış;
   E: açık bekleme süresi uzatılmış; S1/S2: esnek." · `maks-karo-ebadi` değeri "35x35" biçiminde (birim cm tanımdan).
6. **Flexo** kartının gövdesinde sayfada görünmeyen bir `<!-- TASLAK … -->` yorumu var; `/rapor` TASLAK aramasında çıksın.
7. **Karşılaştırma tabloları.** Bazı satırlar kısmi dolu (aşağıdaki doluluk tablosu). Bilinmeyen değer uydurulmadı;
   boş hücre "—" gösterilsin.

## Teyitler (kullanıcı, 16 Kasım — mağaza kontrolü)

| Kart | Sonuç |
|---|---|
| Baumit Flexo | Torbada karo bilgisi var; resmi Baumit sitelerinde sayfası yok. **Kullanıcı bilgileri kendisi ekleyecek** — kart TASLAK kalır. |
| Fırat Gediz | Ad "Gediz" kalır. Et kalınlığı çapa göre değişiyor (küçük çaplarda 2,2 mm, çap büyüdükçe artıyor) → kartta böyle yazıldı. |
| Baumit Brüt Beton Astarı | Kova üzerinde **BetonKontakt** yazıyor → kısa açıklama ve gövdede adı geçiyor (arama da bulsun diye). |
| Baumit Ionit Finish | Kova → IonitFinish (kullanıma hazır saten macun); kart doğru. |
| Baumit Premium Fuga | "Miel Zeytin" çıkarıldı. Renkler: beyaz, gri, antrasit, bahama bej, kahve. |
| Baumit CreativTop / Classico | Mağazadaki tür bilinmiyor; ayrıntıya girilmedi (CreativTop tane listesi ve tane boyutu satırı kaldırıldı). |
| Baumit All in Beton | 20 kg — doğru. |
| Fırat Residence | Küçük çaplar 3,5 mm, çap büyüdükçe artıyor → gövdeye eklendi. |
| Fırat Triplex | `malzeme: HDPE (yüksek yoğunluklu polietilen), koruge cidar` eklendi (Fırat koruge sayfası). Not: HDPE hammaddenin adı; PE100 içme suyu borusu da HDPE'dir, farkı cidar yapısı ve kullanım (düz cidarlı basınçlı boru ↔ oluklu cidarlı, basınçsız altyapı borusu). |

## Kaynak çelişkileri ve verilen kararlar

- **FlexUni sınıfı:** ürün sayfası C2TE, Baumit seçim rehberi C2T S1 → ürün sayfası esas alındı (C2TE). Torba teyit edilirse güncellenir.
- **Dublex yangın sınıfı:** İngilizce sayfa "DIN 4120", Türkçe katalog "DIN 4102" → DIN 4102 (B1) yazıldı.
- **BetonKontakt kullanım yeri:** bir sayfa "iç cephe, ıslak hacimler hariç", diğeri "iç ve dış mekân" → kullanım yeri yazılmadı, ıslak hacim uyarısı kondu.
- **Nivello Uno ve yerden ısıtma:** önceki araştırma notunda "yerden ısıtmaya uygun" vardı; Baumit'in zemin şapları sayfasında bu madde
  kardeş ürün Nivello Quattro'ya ait. Uno kartından çıkarıldı (kullanım alanı da). Ürün sayfası sınıfı "C16-F4" yazıyor; çimento esaslı olduğu için CT-C16-F4 olarak girildi.
- **Ionit Finish:** Baumit'in iki saten ürünü var: IonitFinish (kullanıma hazır macun, kova) ve IonitFino (toz saten sıva, torba). Mağazadaki ürün kova → IonitFinish.
- **Kollektör değerleri** (16 bar, 105 °C, MS58 pirinç) yalnız Fırat içindir ve öyle etiketlendi; ECA/KAS değerleri kendi paketlerinde.
- Fırat genel ürün kataloğunun adresi `?v=` sürüm parametresi olmadan yazıldı (parametre sürekli değişiyor).

## Görseller (`/gorsel` için)

- **Fırat:** `kaynak_sayfalar`'daki en-us ürün sayfaları ve katalog PDF'i. Gediz için resmi görsel bulunmazsa mağaza fotoğrafı.
- **Baumit:** ürün sayfaları (görseller küçük → K14 büyütme). **Flexo** ve **UniDübel** için resmi sayfa yok → mağaza fotoğrafı (kullanıcı ekleyecek).
- Grup kartlarında ana görsel: boru kartında boru, ek parça kartında 2–3 parçalık düzen, vana kartında küresel vana.

## Kategori kartı görselleri (rapor sorusu 5 — öneri)

| Ana kategori | Şimdilik |
|---|---|
| `tesisat-borulari` | `firat-pprc-borular-pn20-pn25` görseli |
| `isitma` | `firat-pe-rt-yerden-isitma-borulari` (ECA radyatör paketi gelene kadar) |
| `yapi-kimyasallari` | `baumit-flex-uni` görseli |
| `hirdavat-ve-nalburiye` | `firat-perde-raylari` (geçici) |
| diğerleri | ikon (kendi paketleri gelene kadar) |

"İlk ürünün görseli" kuralı yerine kategori kaydının `gorsel` alanıyla elle seçim önerilir; mağaza/raf fotoğrafları gelince değiştirilir.

## Özellik doluluğu (kategori içinde, teknik özelliği olan kartlar)

| Kategori | Kart | Satırlar (dolu / toplam) |
|---|---|---|
| `pprc-temiz-su` | 4 | malzeme 3/3, standart 3/3, basinc-sinifi 2/3, calisma-sicakligi 2/3 |
| `pvc-atik-su` | 4 | malzeme 4/4, standart 2/4, yangin-sinifi 2/4, calisma-sicakligi 2/4, ses-seviyesi 1/4 |
| `altyapi` | 2 | malzeme 2/2, standart 1/2 |
| `pe100-icme-suyu` | 2 | malzeme 2/2, standart 1/2, basinc-sinifi 1/2 |
| `pex` | 1 |  |
| `yerden-isitma` | 2 | malzeme 2/2, standart 1/2, calisma-sicakligi 2/2, basinc-sinifi 1/2 |
| `yagmur-olugu` | 1 | malzeme 1/1 |
| `kapi-ve-pencere` | 1 | malzeme 1/1, standart 1/1 |
| `seramik-yapistirici` | 4 | ts-en-12004-sinifi 3/4, kullanim-yeri 3/4, uygun-karo 3/4, maks-karo-ebadi 1/4, ambalaj 4/4 |
| `derz-dolgu` | 1 | ts-en-13888-sinifi 1/1, derz-genisligi 1/1, kullanim-yeri 1/1, renk 1/1, ambalaj 1/1 |
| `su-yalitimi-kimyasal` | 1 | esas 1/1, bilesen 1/1, esneklik 1/1, kullanim-yeri 1/1, ambalaj 1/1 |
| `siva-ve-sap` | 4 | islev 4/4, esas 3/4, ambalaj 4/4, kullanim-yeri 3/4, ts-en-13813-sinifi 1/4, uygulama-kalinligi 1/4, beton-sinifi 1/4 |
| `mantolama-sistem` | 5 | islev 5/5, levha-kalinligi 1/5, uyumlu-levha 3/5, ambalaj 3/5 |
| `dekoratif-kaplama` | 3 | islev 3/3, esas 3/3, ambalaj 3/3, tane-boyutu 1/3, kullanim-yeri 2/3 |

## Kaynaklar

### Fırat

- https://www.firat.com/en-us/indoor-piping-system/cold-hot-water-pipe-systems/pprc-product-range/pprc-pipe
- https://www.firat.com/en-us/indoor-piping-system/cold-hot-water-pipe-systems/pprc-product-range/pprc-pipe/pipes
- https://www.firat.com/en-us/indoor-piping-system/cold-hot-water-pipe-systems/pprc-product-range/pprc-pipe/assembly
- https://www.firat.com/cmsfiles/certificates/firatboru-genel-urun-katalogu.pdf
- https://www.firat.com/en-us/indoor-piping-system/cold-hot-water-pipe-systems/pprc-product-range/composite-pipe-and-fittings/pipes
- https://www.firat.com/en-us
- https://www.firat.com/en-us/sanitary-piping-system/sewage-piping-systems/pvc-dublex-pipe-and-fittings
- https://www.firat.com/en-us/sanitary-piping-system/sewage-piping-systems/pvc-dublex-pipe-and-fittings/technical-specifications
- https://www.firat.com/en-us/sanitary-piping-system/sewage-piping-systems/new-residence-silent-power-pipes-and-fittings/technical-information
- https://www.firat.com/binaici-tesisat-boru-sistemleri/pvc-boru-atik-su-sistemleri/yeni-residence-sessiz-boru-ve-ek-parcalari/kalite-belgeleri
- https://www.firat.com/korige-koruge-triplex-boru
- https://www.firat.com/en-us/drainage-pipe-systems/pvc-drainage-systems
- https://www.firat.com/en-us/drainage-pipe-systems/pvc-drainage-systems/technical-information
- https://www.firat.com/cmsfiles/certificates/9897/tunel-tipi-drenaj-brosuru.pdf
- https://www.firat.com/en-us/infrastructure-pipe/potable-water-pipe-systems/pe-pipe-and-fittings
- https://www.firat.com/cmsfiles/certificates/pe-100-teknik-katalogu.pdf
- https://www.firat.com/cmsfiles/certificates/ts-en-12201-2-a1-pe-borular.pdf
- https://www.firat.com/cmsfiles/certificates/9896/pex-metal-brosuru.pdf
- https://www.firat.com/en-us/indoor-piping-system/cold-hot-water-pipe-systems/pex-product-range-1/mobile-systems/assembly
- https://www.firat.com/sicak-soguk-su-boru-sistemleri/pex-mobil-sistem-ve-zeminden-isitma-borulari/pe-rt-boru-sistemleri
- https://www.firat.com/sicak-soguk-su-boru-sistemleri/pex-mobil-sistem-ve-zeminden-isitma-borulari/pe-rt-boru-sistemleri/urunler-borular
- https://www.firat.com/en-us/indoor-piping-system/cold-hot-water-pipe-systems/pex-product-range-1/under-floor-heating/assembly
- https://www.firat.com/en-us/sanitary-piping-systems/metal-systems/collectors
- https://www.firat.com/en-us/rain-gutters/cornered-rain-gutter-and-fittings
- https://www.firat.com/en-us/rain-gutters
- https://www.firat.com/en-us/pvc-curtain-rails/curtain-rails
- https://www.firat.com/en-us/products/pvc-curtain-rails/curtain-rails-and-fittings

### Baumit

- https://baumit.com.tr/guide/islak-hacim-bilesenleri/karo-ve-seramikler-icin-yapistiricilar
- https://baumit.com.tr/guvenli-hizli-estetik-baumit-karo-doseme-urunleri
- https://baumit.com.tr/news/baumit-alternatifli-seramik-yapistiricilari-ile-uygulama-kolayligi-ve-yuksek-performans-yaratiyor
- https://baumit.com.tr/products/karo-uygulama-urunleri/karo-yapistirma-harclari/baumit-baumacol-bianco
- https://baumit.com.tr/products/islak-hacim-bilesenleri/yapistiricilar/baumit-bianco
- https://baumit.com.tr/products/islak-hacim-bilesenleri/yapistiricilar/baumit-flexuni
- https://baumit.com.tr/products/karo-uygulama-urunleri/karo-yapistirma-harclari/baumit-baumacol-flexuni
- https://baumit.com.tr/guide/islak-hacim-bilesenleri/banyoda-nasil-karo-yapistirilir
- https://baumit.com.tr/products/islak-hacim-bilesenleri/derz-dolgusu/baumit-premiumfuge
- https://baumit.com.tr/products/islak-hacim-bilesenleri/su-yalitim-malzemeleri/baumit-protect-2k
- https://baumit.com.tr/products/islak-hacim-bilesenleri/su-yalitim-malzemeleri/baumit-protect-2k-elastic
- https://baumit.com.tr/news/baumitden-projelere-icten-disa-destek
- https://baumit.com.tr/guide/dis-cephe-isi-yalitim-sistemleri/duvar-eteklikleri-icin-isi-yalitimi
- https://baumit.com.tr/products/ic-cephe-sivalari/alt-yuzey-hazirligi/baumit-betonkontakt
- https://baumit.com.tr/products/astarlar/yuzey-hazirligi-2/baumit-betonkontakt
- https://baumit.com.tr/baumit-ionit
- https://int.baumit.com/products/healthy-living-1/ionit/baumit-ionitfinish
- https://ch.baumit.com/guide/klima-produkte/ionit
- https://baumit.com.tr/products/zemin-saplari/kendiliginden-seviye-alan-saplar/baumit-nivello-uno
- https://baumit.com.tr/zemin-saplari
- https://baumit.com.tr/baumit-all-in-beton
- https://baumit.com.tr/news/baumit-baumeet-bayi-festivali-ile-konyada-sektorun-nabzini-tuttu
- https://baumit.com.tr/products/isi-yalitim-sistem-bilesenleri/isi-yalirim-plakalari/baumit-startherm
- https://baumit.com.tr/guide/dis-cephe-isi-yalitim-sistemleri/polistiren-ile-isi-yalitimi
- https://baumit.com.tr/guide/dis-cephe-isi-yalitim-sistemleri/baumit-star-sistem
- https://baumit.com.tr/products/isi-yalitim-sistem-bilesenleri/yapistirma-harclari/baumit-duofix
- https://baumit.com.tr/products/dis-cephe-isi-yalitim-bilesenleri/yapistiricilar-ve-sivalar/baumit-duofix
- https://baumit.com.tr/products/isi-yalitim-sistem-bilesenleri/yapistirma-ve-siva-harclari/baumit-duocontact
- https://baumit.com.tr/products/dis-cephe-isi-yalitim-sistemleri/pro-sistem/baumit-procontact
- https://baumit.com.tr/products/isi-yalitim-sistem-bilesenleri/yapistirma-ve-siva-harclari/baumit-procontact
- https://baumit.com.tr/guide/dis-cephe-isi-yalitim-sistemleri/baumit-pro-sistem
- https://baumit.com.tr/baumit-pro-sistem
- https://baumit.com.tr/products/dis-cephe-isi-yalitim-sistemleri/star-sistem/baumit-startex
- https://baumit.com.tr/products/son-kat-kaplamalar/aksesuarlar/pvc-kose-profili-fileli
- http://akademi.baumit.com.tr/doc/pdf/MANTOLAMA_www.pdf
- https://baumit.com.tr/products/son-kat-kaplamalar/astarlar-1/baumit-uniprimer
- https://baumit.com.tr/baumit-isi-yalitim-sistemleri
- https://baumit.com.tr/products/son-kat-kaplamalar/mineral-kaplamalar/baumit-classico-special
- https://baumit.com.tr/products/son-kat-kaplamalar/mineral-kaplamalar/baumit-classico-fine
- https://baumit.com.tr/products/son-kat-kaplamalar/dekoratif-kaplamalar/baumit-creativtop
- https://baumit.com.tr/products/son-kat-kaplamalar/dis-cephe-kaplamalari/baumit-creativtop
