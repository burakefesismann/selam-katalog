# Paket 006 — Seramik & Yer Kaplama + El Aletleri & Makineler

Hazırlayan: beyin takımı · 2026-11-16 · **v2** (kullanıcı cevapları işlendi) · Format: docs/ICERIK-SEMASI.md

## İçerik

| | Adet | Not |
|---|---|---|
| Yeni ürün kartı | 26 | Seramik & Yer Kaplama 8 + El Aletleri & Makineler 18 |
| Yeni marka | 11 | yurtbay, bosch, izeltas, knipex (resmi site var); gural-seramik, kl-pro, kbs, wonder, dekor, yakar, sarayli (resmi site bulunamadı) |
| Yeni alt kategori | 7 | Seramik & Yer Kaplama altında 2, El Aletleri & Makineler altında 5 |
| Yeni özellik tanımı | 1 | `yuzey` (metin: mat, parlak, lappato, satinato) |

Öne çıkan (`one_cikan: true`): Yurtbay Seramik — Mermer Görünümlü.

`master` markası Paket 005'te açıldı; bu pakette yeniden açılmadı.

## ÖNEMLİ: içe aktarma sırası

Bu paket önceki paketlerin kartlarını (`baumit-*`, `sika-*`, `yer-suzgecleri-ve-dus-kanallari`, `firat-pprc-*`,
`fawori-silikonlu-mat`, `marshall-*`, `boya-yardimcilari-*`) ve 005'teki `master` markasını kullanıyor.
**Sıra: 002 → 003 → 004 → 005 → 006.**

```
npm run icerik:aktar -- 006-seramik-el-aletleri            # ön izleme (002–005 aktarıldıktan sonra)
npm run icerik:aktar -- 006-seramik-el-aletleri --uygula
```

Beyin takımı kendi kopyasında 002 → 006'yı sırayla aktarıp `npm run build` çalıştırdı: 0 hata, 0 uyarı.

## Alt kategoriler

| slug | ad | üst | sira |
|---|---|---|---|
| `seramik` | Seramik | seramik-ve-yer-kaplama | 10 |
| `uygulama-malzemeleri` | Uygulama Malzemeleri | seramik-ve-yer-kaplama | 20 |
| `boya-ve-siva-aletleri` | Boya & Sıva Aletleri | el-aletleri-ve-makineler | 10 |
| `el-aletleri` | El Aletleri | el-aletleri-ve-makineler | 20 |
| `makineler` | Makineler | el-aletleri-ve-makineler | 30 |
| `tesisatci-aletleri` | Tesisatçı Aletleri | el-aletleri-ve-makineler | 40 |
| `uclar-ve-sarf` | Uçlar & Sarf | el-aletleri-ve-makineler | 50 |

## Beyin takımı kararları (KATALOG-YAPISI'na işlenmeli)

1. **Panç:** stoktaki "PANÇ MASTER" ürünleri Master'ın 530xxx kodlu ürünleri; ayrı bir "Panç Master" markası yok.
   Kart adı **"Master Panç Delik Testereleri"**, marka `master`.
2. **Keski & Murç:** stoktaki iki ürün matkap ucu değil, çekiçle kullanılan **kalkanlı el keskisi ve murç**. Kart
   **"Kalkanlı Keski & Murç"** adıyla **El Aletleri**'ne alındı. SDS keski ve murç uçları Matkap Uçları kartında.
3. **Tesisatçı Aletleri:** stokta PPRC kaynak makinesi ve pafta yok. Çiroz da kalıpçılık ürünü olduğu için bu karttan çıktı.
   Kart adı **"Tesisatçı Aletleri (boru anahtarı, boru makası, boru çıkarıcı)"** oldu.
   - **Çiroz:** KBS ve Master ürünleri için ayrı kart açıldı: **"KBS Çiroz & Çiroz Anahtarları"** (El Aletleri), yeni marka `kbs`.
     Paket 003'ten kalan "ÇİROZ MASTER GALVANİZLİ 501205" de bu karta yazıldı; 007'ye gitmiyor.
4. **Elektrikli Vinçler:** "Ölçüm Aletleri" stokundaki kaldırma **sapanları** ve Mala stokundaki **spanzet** bu karta alındı.
   Kart adı **"Elektrikli Vinçler & Kaldırma Sapanları"** oldu.
5. **Ölçüm Aletleri stoğundan çıkanlar:**
   - **Acrobat Cobra merdivenler** → Merdivenler kartı (Saraylı'nın ürünü).
   - **Rot milleri** (8–16 mm) → Paket 007 (Hırdavat & Nalburiye).
   - Mala stokundaki Dekor şerit metre ve su terazileri bu karta yazıldı.
6. **Güral karoları:** kullanıcı teyidiyle karolar Güral'ın; karo markası **Güral Seramik** (Güral Vit vitrifiye markası,
   karo üretmiyor). Yeni marka `gural-seramik` açıldı; resmi sitesi bulunamadı, kaynak yok. 002'deki `gural` (Güral Vit) bu karta bağlanmadı.
7. **Kale = KL Pro:** stoktaki "KALE" ürünleri KL Pro markası (kullanıcı teyidi). Marka **`kl-pro`** ("KL Pro"); resmi site bulunamadı.
   D10VC3, G13VA, G12SR4, FDV16VB2, D10YB kodlu makineler **Hitachi** (bugün HiKOKI). Kart adı
   **"Elektrikli & Akülü El Aletleri"** (`elektrikli-ve-akulu-el-aletleri`) oldu; KL Pro, Hitachi, Rubi ve Wonder ürünleri burada.
8. **Seviyeli duş süzgeci:** "360° döner" = süzgecin alt gövdesi döner, gider çıkışı istenen yöne verilebilir (kullanıcı bilgisi).
9. **Bosch:** marka `bosch` (Bosch Professional). Bir Bosch kaynağı Bosch'un BAE sayfası (T 144 D), bir diğeri Fas sayfası
   (HSS-G DIN 338); ikisi de bosch-professional.com'da.
10. **Knipex** kaynağı Knipex'in ABD şirketinin resmi sitesi knipex-tools.com.
11. Pazar yeri sayfaları ve fiyat listeleri kaynak olarak kullanılmadı. Dekor, Saraylı ve Yakar için resmi siteler
    doğrulanamadı; bu yüzden `web_sitesi` boş bırakıldı.

## Görseller

- **Seramik kartları:** Yurtbay ürün görselleri yurtbayseramik.com'daki seri sayfalarında. Güral karoları için
  **mağaza fotoğrafı** gerekiyor.
- **El aletleri:**
  - Grup kartlarının çoğu çok markalı ya da resmi sitesi olmayan markalardan (Master, Dekor, KL Pro, KBS, Saraylı, Yakar).
    Bu kartlar için **mağaza fotoğrafı** önerilir: raf ya da ürün grubu fotoğrafı.
  - İzeltaş, Knipex ve Bosch görselleri kaynak sayfalarda.

## Özellik doluluğu (kategori içinde)

| Kategori | Kart | Satırlar (dolu / kart) |
|---|---|---|
| `seramik` | 6 | yuzey 6/6, standart 5/6 |
| `uygulama-malzemeleri` | 2 | malzeme 1/2 |
| `boya-ve-siva-aletleri` | 3 | – |
| `el-aletleri` | 7 | – |
| `makineler` | 3 | motor-gucu 1/3 |
| `tesisatci-aletleri` | 1 | – |
| `uclar-ve-sarf` | 4 | – |

El aletleri grup kartlarında karşılaştırılabilir teknik değer az; bilgi gövdede ve `olculer`'de. Karolarda `yuzey` ve `standart` dolduruldu.

## Kaynaklar (kart bazında)

- **Yurtbay Seramik — Mermer Görünümlü** (`yurtbay-seramik-mermer-gorunumlu`)
  - https://www.yurtbayseramik.com/en/products/marble-textured-ceramics
  - https://www.yurtbayseramik.com/en/products/60X120-dimension-ceramics
  - https://www.yurtbayseramik.com/tr/sikca-sorulan-sorular
- **Yurtbay Seramik — Taş & Beton Görünümlü** (`yurtbay-seramik-tas-ve-beton-gorunumlu`)
  - https://www.yurtbayseramik.com/en/products/stone-textured-ceramics
  - https://www.yurtbayseramik.com/en/products/concrete-textured-ceramics
  - https://www.yurtbayseramik.com/tr/sikca-sorulan-sorular
- **Yurtbay Seramik — Ahşap Görünümlü** (`yurtbay-seramik-ahsap-gorunumlu`)
  - https://www.yurtbayseramik.com/en/products/wood-textured-ceramics
  - https://www.yurtbayseramik.com/en/products/20X120-dimension-ceramics
  - https://www.yurtbayseramik.com/en/products/15X90-dimension-ceramics
- **Yurtbay Seramik — Duvar Fayansı & Dekorlar** (`yurtbay-seramik-duvar-fayansi-ve-dekorlar`)
  - https://www.yurtbayseramik.com/en/products/bath-ceramics
  - https://www.yurtbayseramik.com/en/products/kitchen-between-bench-ceramics
  - https://www.yurtbayseramik.com/tr/sikca-sorulan-sorular
- **Yurtbay Seramik — Metro, Mozaik & Küçük Format** (`yurtbay-seramik-metro-mozaik-ve-kucuk-format`)
  - https://www.yurtbayseramik.com/en/products/7_5X15-dimension-ceramics
  - https://www.yurtbayseramik.com/en/products/20X20-dimension-ceramics
  - https://www.yurtbayseramik.com/en/products/21_5X25-dimension-ceramics
- **Güral Seramik Karolar** (`gural-seramik-karolar`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Seramik & Parke Bitiş / Köşe Profilleri** (`seramik-ve-parke-bitis-kose-profilleri`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Seramik Seviye (Tesviye) Sistemi** (`seramik-seviye-tesviye-sistemi`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Fırça & Rulolar** (`firca-ve-rulolar`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Mala, Ispatula & Sıva Aletleri** (`mala-ispatula-ve-siva-aletleri`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Silikon & Köpük Tabancaları** (`silikon-ve-kopuk-tabancalari`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Anahtarlar, Kaynak & Diğer El Aletleri** (`anahtarlar-kaynak-ve-diger-el-aletleri`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Merdivenler** (`merdivenler`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Pense, Kerpeten, Tornavida & Kesici El Aletleri** (`pense-kerpeten-tornavida-ve-kesici-el-aletleri`)
  - https://izeltas.com.tr/en/urunler/kategori/boru-anahtarlari-ve-penseler/penseler/
  - https://izeltas.com.tr/en/urunler/kategori/boru-anahtarlari-ve-penseler/yan-keskiler/
  - https://izeltas.com.tr/en/urunler/kategori/boru-anahtarlari-ve-penseler/kargaburunlar/
  - https://izeltas.com.tr/en/urunler/kategori/tornavidalar/kontrol-kalemleri/
  - https://knipex-tools.com/products/pincers-and-nippers/concreters%27-nippers/concreters-nippers/9900280
- **Çekiç, Keser, Balyoz & Kazma** (`cekic-keser-balyoz-ve-kazma`)
  - https://izeltas.com.tr/en/urunler/kategori/keski-ve-cekicler/keserler/
  - https://izeltas.com.tr/en/urunler/kategori/keski-ve-cekicler/cekicler/
- **Kalkanlı Keski & Murç** (`kalkanli-keski-ve-murc`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **KBS Çiroz & Çiroz Anahtarları** (`kbs-ciroz-ve-ciroz-anahtarlari`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Ölçüm Aletleri (metre, su terazisi, şakul, gönye, çırpı)** (`olcum-aletleri-metre-su-terazisi-sakul-gonye-cirpi`)
  - https://izeltas.com.tr/en/urunler/kategori/genel-el-aletleri/olcu-aletleri/
- **Elektrikli Vinçler & Kaldırma Sapanları** (`elektrikli-vincler-ve-kaldirma-sapanlari`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Elektrikli & Akülü El Aletleri** (`elektrikli-ve-akulu-el-aletleri`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Seramik & Mermer Kesme Makineleri** (`seramik-ve-mermer-kesme-makineleri`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Tesisatçı Aletleri (boru anahtarı, boru makası, boru çıkarıcı)** (`tesisatci-aletleri-boru-anahtari-boru-makasi-boru-cikarici`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Kesici Diskler, Elmas Testereler & El Testereleri** (`kesici-diskler-elmas-testereler-ve-el-testereleri`)
  - https://www.bosch-professional.com/tr/tr/dekupaj-testere-bicaklari-2865229-ocs-ac/
  - https://www.bosch-professional.com/ae/en/t-144-d-speed-for-wood-jigsaw-blades-2867297-ocs-ac/
- **Matkap Uçları (SDS, HSS, ağaç, cam-seramik)** (`matkap-uclari-sds-hss-agac-cam-seramik`)
  - https://www.bosch-professional.com/tr/tr/hss-tin-metal-delme-uclari-2868007-ocs-ac/
  - https://www.bosch-professional.com/ma/en/hss-g-din-338-metal-drill-bits-2868320-ocs-ac/
- **Master Panç Delik Testereleri** (`master-panc-delik-testereleri`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Zımparalar & Flap Diskler** (`zimparalar-ve-flap-diskler`)
  - — resmi kaynak yok (mağaza fotoğrafı)

## Marka siteleri

- Yurtbay Seramik (`yurtbay`): https://www.yurtbayseramik.com
- Bosch (`bosch`): https://www.bosch-professional.com/tr/tr/
- İzeltaş (`izeltas`): https://izeltas.com.tr
- Knipex (`knipex`): https://www.knipex.com
- KL Pro (`kl-pro`): — bulunamadı
- Güral Seramik (`gural-seramik`): — bulunamadı
- KBS (`kbs`): — bulunamadı
- Wonder (`wonder`): — bulunamadı
- Dekor (`dekor`): — bulunamadı
- Yakar (`yakar`): — bulunamadı
- Saraylı (`sarayli`): — bulunamadı
