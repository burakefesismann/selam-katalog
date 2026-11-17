# Paket 005 — Boya

Hazırlayan: beyin takımı · 2026-11-16 · **v2** (kullanıcı cevapları işlendi) · Format: docs/ICERIK-SEMASI.md

## İçerik

| | Adet | Not |
|---|---|---|
| Yeni ürün kartı | 26 | Boya (24) + mevcut Mantolama alt kategorisine 2 kart |
| Yeni marka | 5 | filli-boya, fawori, marshall (resmi site var); master, genc (resmi site bulunamadı) |
| Yeni alt kategori | 7 | Boya altında: ic-cephe, dis-cephe, tavan, astar-ve-yardimci, ahsap-ve-metal, ozel-boyalar, boya-yardimcilari |
| Yeni özellik tanımı | 2 | `parlaklik` (metin), `kat-arasi-bekleme` (saat) |

Öne çıkan (`one_cikan: true`): Filli Aqusto Silan, Filli Momento Max.

## ÖNEMLİ: içe aktarma sırası

Bu paket 004'te gelen `sarfiyat`, `isil-iletkenlik` özelliklerini ve 004 kartlarını (`izocam-manto-tasyunu-levha`,
`btm-elasto-dry-roof`, `sika-1-tr-su-gecirimsizlik-katkisi`) kullanıyor. **Sıra: 002 → 003 → 004 → 005.**

```
npm run icerik:aktar -- 005-boya            # ön izleme (002, 003, 004 aktarıldıktan sonra)
npm run icerik:aktar -- 005-boya --uygula
```

Beyin takımı kendi kopyasında 002 → 003 → 004 → 005'i sırayla aktarıp `npm run build` çalıştırdı: 0 hata, 0 uyarı.

## Alt kategoriler (üst: boya)

| slug | ad | sira |
|---|---|---|
| `ic-cephe` | İç Cephe | 10 |
| `dis-cephe` | Dış Cephe | 20 |
| `tavan` | Tavan | 30 |
| `astar-ve-yardimci` | Astar & Yardımcı | 40 |
| `ahsap-ve-metal` | Ahşap & Metal | 50 |
| `ozel-boyalar` | Özel Boyalar | 70 |
| `boya-yardimcilari` | Boya Yardımcıları | 80 |

## Beyin takımı kararları (KATALOG-YAPISI'na işlenmeli)

1. **Filli Momento Max** KATALOG'da "Dış Cephe" altındaydı; Filli Boya'ya göre **iç cephe** boyası → `ic-cephe`'ye taşındı.
2. **Mantolama kartları** (Fawori Optimix Mantolama Sistemi, Filli Dalmaçyalı Mantolama Dübeli) Boya altında ayrı bir "Mantolama"
   açmak yerine mevcut **`mantolama-sistem`** alt kategorisine yazıldı (Paket 004'teki taşyünü kararıyla aynı).
3. **Kart adları:** "Filli Nucleus DCB" → **"Filli Nucleus Dış Cephe Boyası"**; "Marshall Fit Serisi (tavan, silikonlu, antipas,
   yağlı boya)" → **"Marshall Fit Serisi"** (parantez içi açıklamaydı).
4. **Fawori**, Filli Boya'nın üreticisi Betek Boya'nın markasıdır; resmi sitesi www.fawori.com. Optimix ve bazı teknik bültenler
   Filli Boya'nın resmi dosya sunucusunda (res.cloudinary.com/filli-boya-kurumsal-web-sitesi) duruyor; bu adres resmi kaynak sayıldı.
5. **Baz kodları:** Marshall'daki BW / BM / BC ve Filli'deki RG1–RG5 renklendirme bazlarıdır. Kullanıcı kararıyla kartlarda
   **yazılmıyor**; yalnızca "beyaz / renkli" ya da "istediğiniz renkte hazırlanır" deniyor.
6. **Marshall Fit Serisi** kullanıcı kararıyla **`ic-cephe`**'ye taşındı; kartlarda "ekonomik" ifadesi kullanılmıyor.
   `ekonomik-seri` alt kategorisi **açılmadı** (pakette yok).
7. **Filli yol çizgi "Çember":** Filli'nin yol çizgi kataloğunda "çember" diye bir ürün yok. Katalogda 20 kg ambalajı olan iki ürün var:
   Su Bazlı ve Soğuk (alkid esaslı, solvent bazlı) yol çizgi boyası. Solvent bazlı akrilik ve çift komponentli yalnızca 25 kg.
   Bu yüzden stoktaki su bazlı olmayan 20 kg'lık ürün **Soğuk Yol Çizgi Boyası** olarak yazıldı. "Çember" büyük olasılıkla
   ambalaj tipini (çemberli teneke) gösteriyor; kartta kullanılmadı.
8. **Fiyat listeleri** kaynak olarak kullanılmadı.

## Görseller

- **Resmi üretici görseli olmayan 3 kart** — **mağaza fotoğrafı** gerekiyor: sprey-boyalar (Master), tinerler (Genç),
  boya-yardimcilari-karistirici-ortu-sokucu-toz-oksit (çeşitli).
- Master ve Genç için resmi site bulunamadı; logo yok.
- Filli Boya, Fawori ve Marshall ürün görselleri kaynak sayfalarda.

## Özellik doluluğu (kategori içinde)

| Kategori | Kart | Satırlar (dolu / kart) |
|---|---|---|
| `dis-cephe` | 3 | esas 3/3, parlaklik 3/3, kat-arasi-bekleme 2/3, ambalaj 3/3, sarfiyat 1/3 |
| `ic-cephe` | 4 | esas 4/4, parlaklik 3/4, standart 1/4, ambalaj 2/4, sarfiyat 2/4, kat-arasi-bekleme 1/4 |
| `tavan` | 3 | esas 3/3, parlaklik 2/3, renk 3/3, standart 1/3, sarfiyat 2/3, ambalaj 3/3 |
| `astar-ve-yardimci` | 7 | esas 4/7, islev 6/7, ambalaj 5/7, parlaklik 1/7, renk 2/7, bilesen 1/7 |
| `ahsap-ve-metal` | 3 | esas 3/3, parlaklik 1/3, sarfiyat 2/3, ambalaj 3/3, islev 1/3, renk 1/3 |
| `ozel-boyalar` | 1 | renk 1/1, standart 1/1, ambalaj 1/1 |
| `mantolama-sistem` | 2 | isil-iletkenlik 1/2, standart 1/2, yangin-sinifi 1/2, levha-kalinligi 1/2, islev 1/2, malzeme 1/2 |
| `boya-yardimcilari` | 3 | ambalaj 1/3 |

Gruplarda (sprey, tiner, yardımcı malzemeler) karşılaştırılabilir teknik değer az; bilgi gövdede ve `olculer`'de.

## Kaynaklar (kart bazında)

- **Filli Aqusto Silan** (`filli-aqusto-silan`)
  - https://www.filliboya.com/urun/aqusto-silan
  - https://www.filliboya.com/uploads/TDS_AQUSTO-SILAN.pdf
  - https://www.filliboya.com/urunler/boya/dis-cephe-boyalari
- **Filli Nucleus Dış Cephe Boyası** (`filli-nucleus-dis-cephe-boyasi`)
  - https://www.filliboya.com/urun/nucleus
  - https://www.filliboya.com/uploads/TDS_Nucleus.pdf
- **Filli Momento Max** (`filli-momento-max`)
  - https://www.filliboya.com/uploads/TDS_MOMENTOMAX.pdf
  - https://www.filliboya.com/uploads/5_MOMENTO_MAX_TEKNIK_BULTEN.pdf
  - https://www.filliboya.com/urunler/boya/ic-cephe-boyalari
- **Fawori Silikonlu Mat** (`fawori-silikonlu-mat`)
  - https://www.fawori.com/urunler/ic-cephe-urun-grubu/fawori-silikonlu-mat
- **Filli Betakril Tavan Boyası** (`filli-betakril-tavan-boyasi`)
  - https://www.filliboya.com/urun/betakril-tavan
  - https://www.filliboya.com/uploads/17_BETAKRIL_TAVAN_TEKNIK_BULTEN_MART2025.pdf
- **Fawori Extra Tavan Boyası** (`fawori-extra-tavan-boyasi`)
  - https://www.fawori.com/urunler/ic-cephe-urun-grubu/fawori-tavan-extra
- **Filli Panzer Astar** (`filli-panzer-astar`)
  - https://filliboya.com/uploads/TDS_PanzerAstar.pdf
  - https://www.filliboya.com/uploads/TDS_PANZER_ASTAR.pdf
- **Filli Kapatan** (`filli-kapatan`)
  - https://www.filliboya.com/urun/kapatan
  - https://www.filliboya.com/ilham-veren-fikirler/tavan-nasil-boyanir
- **Filli Bepermo** (`filli-bepermo`)
  - https://www.filliboya.com/urun/filli-boya-bepermo
  - https://www.filliboya.com/profesyonel-urunler/yapi-kimyasallari/harc-katkilari
- **Filli Sutut** (`filli-sutut`)
  - https://www.filliboya.com/urun/filli-boya-sutut
  - https://www.filliboya.com/uploads/3_1-FilliBoyaSutut-TDS-TR.pdf
  - https://www.filliboya.com/uploads/YAPI-KIMYASALLARI-BROSUR%202023.pdf
- **Fawori Astarlar (dönüşüm, konsantre, sentetik)** (`fawori-astarlar-donusum-konsantre-sentetik`)
  - https://www.fawori.com/urunler/ic-cephe-urun-grubu/fawori-donusum-astari
  - https://www.fawori.com/urunler/ic-cephe-urun-grubu/konsantre-astar
  - https://www.fawori.com/urunler/sentetik-urun-grubu/fawori-sentetik-astar
  - https://res.cloudinary.com/filli-boya-kurumsal-web-sitesi/image/upload/v1774424640/FAWORI/10_FAWORI_KONSANTRE_ASTAR_TEKNIK_BULTEN_MART_2025_6406064a38.pdf
- **Fawori Panel Kapı Boyası** (`fawori-panel-kapi-boyasi`)
  - https://www.fawori.com/urunler/ic-cephe-urun-grubu/fawori-panel-kapi-boyasi
- **Fawori Sentetik Antipas** (`fawori-sentetik-antipas`)
  - https://www.fawori.com/urunler/sentetik-urun-grubu/fawori-sentetik-antipas
- **Filli Yol Çizgi Boyaları** (`filli-yol-cizgi-boyalari`)
  - https://www.filliboya.com/urun/su-bazli-yol-cizgi-boyasi
  - https://www.filliboya.com/urun/yol-cizgi-boyasi
  - https://www.filliboya.com/uploads/FILLIBOYAYOLCIZGIKATALOG.pdf
- **Fawori Optimix Mantolama Sistemi** (`fawori-optimix-mantolama-sistemi`)
  - https://www.fawori.com/urunler/isi-yalitim-levhalari/fawori-optimix-eps-isi-yalitim-levhasi-karbonlu
  - https://www.fawori.com/urunler/isi-yalitim-yapistirici-ve-sivalari/fawori-optimix-isi-yalitim-yapistirma-harci
  - https://www.fawori.com/urunler/isi-yalitim-yapistirici-ve-sivalari/fawori-optimix-isi-yalitim-siva-harci
  - https://www.fawori.com/urunler/isi-yalitim-kaplamalari/fawori-optimix-dekoratif-kaplama-cizgi-dokulu
  - https://res.cloudinary.com/filli-boya-kurumsal-web-sitesi/image/upload/v1778498511/FAWORI/Fawori_Optimix_Dekoratif_Ince_Tane_0a7939e0e7.pdf
  - https://res.cloudinary.com/filli-boya-kurumsal-web-sitesi/image/upload/v1773726229/FAWORI/Fawori_Optimix_isi_Yalitim_Dubelleri_TDS_8f2eeea4e7.pdf
  - https://res.cloudinary.com/filli-boya-kurumsal-web-sitesi/image/upload/v1773729239/FAWORI/Fawori_Optimix_Donati_Filesi_F160_TDS_c0854a87aa.pdf
- **Filli Dalmaçyalı Mantolama Dübeli** (`filli-dalmacyali-mantolama-dubeli`)
  - https://res.cloudinary.com/filli-boya-kurumsal-web-sitesi/dalmacyali-web/dalmacyali_d_ue_beller_495fb304e7.pdf
- **Marshall Akrikor Silikonlu + Akrilik Dış Cephe** (`marshall-akrikor-silikonlu-akrilik-dis-cephe`)
  - https://www.marshallboya.com/tr/products-listing/akrikor-silikonlu-akrilik
  - https://www.marshallboya.com/tr/renk-ilham/marshall-akrikor-silikonlu-akrilik-ile-m%C3%BCkemmel-kapat%C4%B1c%C4%B1l%C4%B1%C4%9F%C4%B1-ke%C5%9Ffedin
- **Marshall Silikonlu Mat / Özel Mat / Maximum** (`marshall-silikonlu-mat-ozel-mat-maximum`)
  - https://www.marshallboya.com/tr/products-listing/silikonlu-mat
  - https://www.marshallboya.com/tr/products-listing/silikonlu-%C3%B6zel-mat
  - https://www.marshallboya.com/tr/products-listing/maximum-mat
  - https://www.marshallboya.com/tr/products-listing/maximum
- **Marshall Tavan Boyası** (`marshall-tavan-boyasi`)
  - https://www.marshallboya.com/tr/products-listing/tavan-boyas%C4%B1
- **Marshall Astarlar (Akrikor örtücü, geçiş, izolasyon)** (`marshall-astarlar-akrikor-ortucu-gecis-izolasyon`)
  - https://www.marshallboya.com/tr/products-listing/akrikor-silikonlu-%C3%B6rt%C3%BCc%C3%BC-astar
  - https://www.marshallboya.com/tr/products-listing/ge%C3%A7i%C5%9F-astar%C4%B1
  - https://www.marshallboya.com/tr/products-listing/i%CC%87zolasyon-astar%C4%B1
- **Marshall Enamel Yağlı Boya & Antipas** (`marshall-enamel-yagli-boya-ve-antipas`)
  - https://www.marshallboya.com/tr/products-listing/enamel-antipas
  - https://www.marshallboya.com/tr/products-listing/enamel-sentetik-astar
- **Marshall Fit Serisi** (`marshall-fit-serisi`)
  - https://www.marshallboya.com/tr/products-listing/fit-extra-tavan-boyas%C4%B1
  - https://www.marshallboya.com/tr/products-listing/fit-silikonlu
  - https://www.marshallboya.com/tr/products-listing/fit-silikonlu-i%CC%87pek-mat
  - https://www.marshallboya.com/tr/products-listing/fit-parlak
- **Marshall Sentetik Tiner** (`marshall-sentetik-tiner`)
  - https://www.marshallboya.com/tr/products-listing/filters/p_%C4%B0%C3%A7-Cephe
- **Sprey Boyalar** (`sprey-boyalar`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Tinerler** (`tinerler`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Boya Yardımcıları (karıştırıcı, örtü, sökücü, toz oksit)** (`boya-yardimcilari-karistirici-ortu-sokucu-toz-oksit`)
  - — resmi kaynak yok (mağaza fotoğrafı)

## Marka siteleri

- Filli Boya (`filli-boya`): https://www.filliboya.com
- Fawori (`fawori`): https://www.fawori.com
- Marshall (`marshall`): https://www.marshallboya.com/tr
- Master (`master`): — bulunamadı
- Genç (`genc`): — bulunamadı
