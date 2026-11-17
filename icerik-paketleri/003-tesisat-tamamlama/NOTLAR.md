# Paket 003 — Tesisat tamamlama

Hazırlayan: beyin takımı · 2026-11-16 · Format: docs/ICERIK-SEMASI.md

## İçerik

| | Adet | Not |
|---|---|---|
| Yeni ürün kartı | 31 | Vana & Tesisat Armatürleri (17) + Tesisat Boruları kalan (7) + Isıtma kalan (4) + Pompa & Su Deposu (3) |
| Yeni marka | 6 | baymak (resmi site var); sumak, teknopomp, poelsan, turkoglu, baykara (resmi site bulunamadı) |
| Yeni alt kategori | 7 | metal-boru-ve-ek-parca, flex-ve-baglanti, tesisat-armaturleri, vanalar, radyator-ve-havlupan, pompalar, su-depolari |
| Yeni özellik tanımı | 1 | `motor-gucu` (kW) |

Öne çıkan (`one_cikan: true`): ECA Panel Radyatörler, Su Küresel Vanaları, Radyatör & Termostatik Vanalar, Hidroforlar.

## ÖNEMLİ: içe aktarma sırası

Bu paket, Paket 002'deki marka ve kartlara (eca, kas, visam; ECA kartları) bağlantı veriyor. **Önce 002, sonra 003 aktarılmalı.**

```
npm run icerik:aktar -- 002-banyo-mutfak --uygula      # henüz yapılmadıysa
npm run icerik:aktar -- 003-tesisat-tamamlama           # ön izleme
npm run icerik:aktar -- 003-tesisat-tamamlama --uygula
```

Beyin takımı kendi kopyasında 002 + 003'ü sırayla aktarıp `npm run build` çalıştırdı: 0 hata, 0 uyarı.

## Alt kategoriler

| slug | ad | üst | sira |
|---|---|---|---|
| `metal-boru-ve-ek-parca` | Metal Boru & Ek Parça | tesisat-borulari | 70 |
| `flex-ve-baglanti` | Flex & Bağlantı | vana-ve-tesisat-armaturleri | 10 |
| `tesisat-armaturleri` | Tesisat Armatürleri | vana-ve-tesisat-armaturleri | 20 |
| `vanalar` | Vanalar | vana-ve-tesisat-armaturleri | 30 |
| `radyator-ve-havlupan` | Radyatör & Havlupan | isitma | 10 |
| `pompalar` | Pompalar | pompa-ve-su-deposu | 10 |
| `su-depolari` | Su Depoları | pompa-ve-su-deposu | 20 |

## Beyin takımı kararları (KATALOG-YAPISI'na işlenmeli)

1. **Kart adı:** "Yerden Isıtma Aksesuarları (levha, kenar bandı, klips, kollektör dolabı)" → **"Yerden Isıtma Aksesuarları"**
   (`yerden-isitma-aksesuarlari`); parantez içi açıklamaydı. Kollektör kartı zaten bu adla bu karta yönlendiriyor.
2. **Kartlar arası taşınan kalemler** (stokta başka karta atanmış, içerikte doğru karta yazıldı):
   - Termosifon emniyet ventili (Paket 002'de Sifonlar & Kadalar) → **Emniyet Ventilleri**
   - "VANA Q 80 PN 6 KÜRESEL FLANŞLI" (Patent Dirsek kartı) → **Su Küresel Vanaları**
   - "SUMAK DALGIÇ POMPA 1 KW ASANSÖR FLATÖRLÜ" (Flatörler) → **Dalgıç Pompalar**
   - "KOMPAKT VENTİL TERM VANA PANEL TİP" (Yerden Isıtma Aksesuarları) → **Radyatör & Termostatik Vanalar**
   - "VANA SENSÖR KOVANLI RAKORLU KELEBEK 1" KAS" (Radyatör vanaları) → **Su Sayaçları & Kalorimetre** (kalorimetre sensörü içindir)
3. **Markalar:** KATALOG'da Çekvalfler'de Mesa, Radyatör vanaları ve Su küresel vanalarında Fırat yazıyor ama stokta bu markalara ait kalem
   görünmüyor → `markalar`'a eklenmedi. Ara Kesme Valfleri'ne stoktaki Visam ve Aryak kalemleri nedeniyle `visam` eklendi.
4. **Fiyat listeleri** kaynak olarak kullanılmadı (E.C.A. ve KAS sitelerinde fiyat listesi PDF'leri var).

## Karta yazılmayan kalemler → Paket 007 (Hırdavat)

- **Galvaniz Boru & Ek Parçaları'ndan:** "ALÇI KÖŞE ÇİTASI GALVANİZ", "ÇİROZ MASTER GALVANİZLİ 501205"
- **Sarı (Pirinç) Ek Parçalar'dan:** "ADAPTÖR CONTA", "BANT SU TUTUCU SARI", "ES 50/70 LİK PLASTİK", "FIRÇA İZOLASYON ZİFT SARI",
  "GÖNYE MASTER 600 MM SARI", "Q200-125 MM PN 16 REDÜKSİYON", "VANTUZ SARI 1"" (adlarındaki "sarı" renk anlamında; kullanıcı onayladı)

## Kullanıcı yanıtları (2026-11-16) — pakete işlendi

- **ECA panel radyatörler:** standart E.C.A. radyatör, beyaz → kartta "beyaz, standart" ve `renk: Beyaz`; tip yazılmadı.
- **Pik kolye:** priz kolye gibi, metal (pik döküm) "hırsız kelepçe" → Patent Dirsek, Flanş & Pik Kolye kartına açıklaması eklendi.
- **Klepe:** kartta adıyla listeleniyor (ek açıklama yok).
- **E.C.A. 101007092:** çalpara çekvalf 1/2" — doğru.
- **Drenaj kanalı, rögar seti, su deposu:** markası "çeşitli".

## Görseller

- **Resmi üretici sayfası olmayan 11 kart** (çeşitli gruplar ve sitesi bulunamayan markalar) — **mağaza fotoğrafı** gerekiyor:
  drenaj-kanallari-ve-izgaralar, rogar-setleri, galvaniz-boru-ve-ek-parcalari, patent-dirsek-flans-ve-pik-kolye, sari-pirinc-ek-parcalar,
  siyah-boru-ve-ek-parcalari, poelsan-kaplin-sikistirmali-ek-parcalar, conta-teflon-ve-sizdirmazlik, manometre-ve-termometre,
  dalgic-pompalar, polietilen-su-depolari
- Sumak, Teknopomp, Poelsan, Türkoğlu ve Baykara'nın resmi sitesi bulunamadı (yalnızca pazar yeri sayfaları var; kullanılmadı). Logo yok.
- Baymak hidrofor görselleri için Baymak'ın JET serisi broşürü ve hidrofor sayfası kaynaklarda.

## Özellik doluluğu (kategori içinde)

| Kategori | Kart | Satırlar (dolu / kart) |
|---|---|---|
| `altyapi` | 2 | – |
| `metal-boru-ve-ek-parca` | 4 | malzeme 3/4 |
| `pe100-icme-suyu` | 1 | – |
| `flex-ve-baglanti` | 4 | – |
| `tesisat-armaturleri` | 9 | montaj-tipi 1/9, renk 1/9, standart 2/9, basinc-sinifi 2/9, calisma-sicakligi 2/9, malzeme 1/9 |
| `vanalar` | 4 | standart 3/4, basinc-sinifi 3/4, calisma-sicakligi 1/4, malzeme 1/4 |
| `radyator-ve-havlupan` | 3 | renk 2/3, standart 1/3, basinc-sinifi 1/3 |
| `yerden-isitma` | 1 | – |
| `pompalar` | 2 | motor-gucu 2/2 |
| `su-depolari` | 1 | malzeme 1/1, renk 1/1 |

Bağlantı parçası gruplarında karşılaştırılabilir teknik değer az; bilgi gövdede ve `olculer`'de.

## Kaynaklar (kart bazında)

- **Drenaj Kanalları & Izgaralar** (`drenaj-kanallari-ve-izgaralar`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Rögar Setleri** (`rogar-setleri`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Galvaniz Boru & Ek Parçaları** (`galvaniz-boru-ve-ek-parcalari`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Patent Dirsek, Flanş & Pik Kolye** (`patent-dirsek-flans-ve-pik-kolye`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Sarı (Pirinç) Ek Parçalar** (`sari-pirinc-ek-parcalar`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Siyah Boru & Ek Parçaları** (`siyah-boru-ve-ek-parcalari`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Poelsan Kaplin (Sıkıştırmalı) Ek Parçalar** (`poelsan-kaplin-sikistirmali-ek-parcalar`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Conta, Teflon & Sızdırmazlık** (`conta-teflon-ve-sizdirmazlik`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Doğalgaz Flex Hortum, Kelepçe & Bağlantıları** (`dogalgaz-flex-hortum-kelepce-ve-baglantilari`)
  - https://kas.com.tr/product/sayac-baglanti-flex-seti-makaronlu-paslanmaz/
  - https://kas.com.tr/product/sayac-baglanti-flexi-makaronlu-paslanmaz/
  - https://kas.com.tr/product/dogalgaz-macunu/
  - https://kas.com.tr/blog/flex-esnek-paslanmaz-metal-hortum-ve-hortum-takimlari-nedir-nerelerde-kullanilir/
- **Rakor & Uzatmalar** (`rakor-ve-uzatmalar`)
  - https://kas.com.tr/en/product/lengthening-fittings-3/
  - https://eca.com.tr/isitma-sogutma/valfler/rakorlar
- **Su Flex Hortumları** (`su-flex-hortumlari`)
  - https://kas.com.tr/blog/uzun-omurlu-flex-hortum-kullanmanin-tesisatcilara-avantajlari/
  - https://kas.com.tr/en/product/water-connection-hose-m-f-1-2-1-2/
  - https://kas.com.tr/en/product/water-connection-hose-nut-nipple-m-f-1-2-3-4-inch/
- **Ara Kesme Valfleri** (`ara-kesme-valfleri`)
  - https://eca.com.tr/1/2-ankastre-ara-kesme-valfi-41
  - https://www.eca.com.tr/yapi-caro-ankastre-ara-kesme-valfi-g-1/2-mat-siyah
  - https://eca.com.tr/interval-stop-taps-2
- **Basınç Düşürücüler** (`basinc-dusuruculer`)
  - https://eca.com.tr/basinc-dusurucu-valf-5
  - https://eca.com.tr/su-basinc-dusuruculer-2
  - https://kas.com.tr/en/prod-category/safety-valve/
- **Emniyet Ventilleri** (`emniyet-ventilleri`)
  - https://eca.com.tr/blog/kombi-neden-su-akitir-kombi-su-akitmasi-nasil-onlenir
  - https://kas.com.tr/en/prod-category/safety-valve/
- **Filtreler (pislik tutucu, Y filtre)** (`filtreler-pislik-tutucu-y-filtre`)
  - https://kas.com.tr/en/product/filter-y-valve-strainer/
  - https://eca.com.tr/yapi/sihhi-tesisat/filtreler
  - https://kas.com.tr/en/product/ppr-filter/
- **Flatörler** (`flatorler`)
  - https://www.eca.com.tr/teknik-urunler
  - https://eca.com.tr/belgeler/eca-teknik-urunler/tsek-belgeleri
- **Manometre & Termometre** (`manometre-ve-termometre`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Prüjörler (otomatik hava atıcı)** (`prujorler-otomatik-hava-atici`)
  - https://eca.com.tr/isitma-sogutma/valfler/otomatik-havalandirici-ve-purjorler
- **Su Sayaçları & Kalorimetre** (`su-sayaclari-ve-kalorimetre`)
  - https://kas.com.tr/product/rakorlu-su-kuresel-vana-tam-gecisli-sensor-kovanli/
- **Çekvalfler** (`cekvalfler`)
  - https://eca.com.tr/yapi/sihhi-tesisat/cekvalfler
  - https://eca.com.tr/calpara-cekvalf-2
  - https://kas.com.tr/en/product/vertical-check-valve/
  - https://kas.com.tr/en/product/swing-check-valve/
- **Gaz Vanaları** (`gaz-vanalari`)
  - https://kas.com.tr/product/gaz-kuresel-vana-mob-5-tam-gecisli-kilitli/
  - https://kas.com.tr/en/product/full-bore-brass-ball-valve-for-n-gas-mob-5-20/
- **Radyatör & Termostatik Vanalar** (`radyator-ve-termostatik-vanalar`)
  - https://eca.com.tr/urun/termostatik-radyator-valfi-kose-12-trv-4
  - https://eca.com.tr/urun/radyator-valfi-kose-12-rv2
  - https://eca.com.tr/urun/radyator-valfi-kose-12-rv3
  - https://eca.com.tr/krome-radyator-valfi-silindir-volanli
  - https://kas.com.tr/product/kose-rakorlu-radyator-vana/
  - https://kas.com.tr/blog/termostatik-vana-nedir-nasil-calisir/
  - https://kas.com.tr/en/product/thermostatic-insert/
- **Su Küresel Vanaları** (`su-kuresel-vanalari`)
  - https://eca.com.tr/icme-suyu-kuresel-valfler-ic-vida-x-ic-vida-pn10
  - https://eca.com.tr/urun/rakorlu-kuresel-valf-kirmizikelebek-volan-1-nikel
  - https://kas.com.tr/product/su-kuresel-vana-pn-25-tam-gecisli/
  - https://kas.com.tr/product/kelebek-vana-tam-gecisli-rekorlu-su-kuresel-vanasi/
  - https://eca.com.tr/yapi/sihhi-tesisat/cekvalfler
- **Şiber Vanalar** (`siber-vanalar`)
  - https://eca.com.tr/yapi/sihhi-tesisat
  - https://kas.com.tr/blog/yapi-tesisat-sistemleri-teknolojisi-ve-iklimlendirme/
- **ECA Havlupanlar** (`eca-havlupanlar`)
  - https://eca.com.tr/isitma-sogutma/radyatorler/havlupan
  - https://eca.com.tr/urun/beyaz-boyali-havlupan
  - https://eca.com.tr/isitma-sogutma/radyatorler/havlupan/krom-kapli-havlupan
- **ECA Panel Radyatörler** (`eca-panel-radyatorler`)
  - https://eca.com.tr/urun/tip-22
  - https://eca.com.tr/tip-10-6
  - https://eca.com.tr/isitma-sogutma/radyatorler
  - https://eca.com.tr/uploads/documents//eca/fde/57ffa367-bcea-4570-a547-49032b9af0f8.pdf
- **Kombi & Radyatör Aksesuarları** (`kombi-ve-radyator-aksesuarlari`)
  - https://www.firat.com/cmsfiles/certificates/firatboru-genel-urun-katalogu.pdf
- **Yerden Isıtma Aksesuarları** (`yerden-isitma-aksesuarlari`)
  - https://www.firat.com/en-us/indoor-piping-system/cold-hot-water-pipe-systems/pex-product-range-1/under-floor-heating/assembly
  - https://www.firat.com/en-us/indoor-piping-system/cold-hot-water-pipe-systems/pex-product-range/mobile-systems
  - https://eca.com.tr/dosemeden-isitma-sistemleri
- **Dalgıç Pompalar** (`dalgic-pompalar`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Hidroforlar** (`hidroforlar`)
  - https://www.baymak.com.tr/media/4261/jet-serisi-paket-hidrofor-brosur.pdf
  - https://www.baymak.com.tr/en/products/water-technology/boosters
  - https://www.baymak.com.tr/media/3273/hi-drofor-bros-u-ru-2019.pdf
  - https://www.baymak.com.tr/terimler-sozlugu
- **Polietilen Su Depoları** (`polietilen-su-depolari`)
  - — resmi kaynak yok (mağaza fotoğrafı)

## Marka siteleri

- Baymak (`baymak`): https://www.baymak.com.tr
- Sumak (`sumak`): — bulunamadı
- Teknopomp (`teknopomp`): — bulunamadı
- Poelsan (`poelsan`): — bulunamadı
- Türkoğlu (`turkoglu`): — bulunamadı
- Baykara (`baykara`): — bulunamadı
