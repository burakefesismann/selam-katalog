# Paket 002 — Banyo & Mutfak

Hazırlayan: beyin takımı · 2026-11-16 · Format: docs/ICERIK-SEMASI.md

## İçerik

| | Adet | Not |
|---|---|---|
| Yeni ürün kartı | 37 | KATALOG-YAPISI §5'teki 37 kartın tamamı |
| Güncellenen mevcut kart | 2 | `pex-baglantilar-ve-vanalar`, `yerden-isitma-kollektorleri` (ECA/KAS markaları eklendi) |
| Yeni marka | 12 | eca, serel, kas, gural, orka, mesa, domark, samir, stina, foma, hazal, visam |
| Yeni alt kategori | 7 | Hepsi `banyo-ve-mutfak` altında |
| Yeni özellik tanımı | 1 | `montaj-tipi` (mevcut `renk`, `malzeme`, `standart` da kullanıldı) |

Öne çıkan (`one_cikan: true`): ECA Lavabo Bataryaları, Serel Klozetler, Orka Banyo Dolapları.

## İçe aktarma

```
npm run icerik:aktar -- 002-banyo-mutfak          # önce kuru çalıştırma
npm run icerik:aktar -- 002-banyo-mutfak --uygula
```

- **PEX ve kollektör kartları** pakette tam haliyle var: `markalar` güncellendi, `kaynak_sayfalar`'a ECA/KAS sayfaları eklendi (birleşir),
  gövdeye "Üreticilerin belirttikleri" bölümü eklendi. Kollektörde `basinc-sinifi` ve `calisma-sicakligi` değerlerine ECA02 ve KAS
  değerleri eklendi. Diğer alanlar sitedekiyle birebir aynı (doğrulayıcı karşılaştırdı). Görseller korunur.
- `markalar: []` olan kartlar "çeşitli" gruplardır (KATALOG-YAPISI'nda "çeşitli"): Batarya Yedek Parça, Duş Setleri (diğer),
  Yer Süzgeçleri & Duş Kanalları, Banyo Aksesuarları (diğer).

## Alt kategoriler (üst: banyo-ve-mutfak)

| slug | ad | sira |
|---|---|---|
| `bataryalar` | Bataryalar | 10 |
| `dus-sistemleri` | Duş Sistemleri | 20 |
| `musluklar` | Musluklar | 30 |
| `vitrifiye` | Vitrifiye | 40 |
| `banyo-mobilyasi` | Banyo Mobilyası | 50 |
| `banyo-aksesuarlari` | Banyo Aksesuarları | 60 |
| `suzgec-ve-sifon` | Süzgeç & Sifon | 70 |

## Beyin takımı kararları (KATALOG-YAPISI'na işlenmeli)

1. **Kart adı:** "Banyo Aksesuarları (diğer: tutunma barı, süngerlik, çöp kovası…)" → **"Banyo Aksesuarları (diğer markalar)"**
   (`banyo-aksesuarlari-diger-markalar`). Kategoriyle aynı adı taşımasın, "Duş Setleri (diğer markalar)" ile tutarlı olsun diye.
2. **Marka adları:** kart adlarıyla tutarlı olsun diye `ECA` ve `Serel`. Resmi yazım "E.C.A." / "SEREL" marka açıklamasında geçiyor.
3. **Aryak (AR):** kullanıcı teyidiyle E.C.A.'nın alt markası. Ayrı marka kaydı açılmadı; ürünler ECA kartlarında
   "Aryak (AR) — E.C.A.'nın alt markası" başlığıyla listelendi (`seriler` alanına girmedi), ECA marka açıklamasında da anılıyor.
   Aryak'ın resmi sayfası bulunamadı (eca.com.tr'de de yok).
4. **Güral** marka kaydı şimdilik vitrifiye odaklı; Seramik paketinde (Güral Seramik Karolar) açıklama genişletilecek.
5. **Ölçü çelişkileri** — stok adıyla üretici sayfası uyuşmayan ölçüler yazılmadı:
   Güral Arya monoblok (stok 75x47, Güral 55x53); Serel Nita köşeli tezgah üstü (stok 46x46, Serel 36x46).

## Kullanıcı yanıtları (2026-11-16) — pakete işlendi

- **Aryak (AR)** E.C.A.'nın alt markası → yukarıdaki karar 3.
- **"BATARYA ANTORYUM LAVABO"** KAS ürünü → "KAS Lavabo Bataryaları" kartına eklendi (KAS'ın Antoryum lavabo bataryası sayfası
  kaynaklara girdi), "Diğer Marka Bataryalar"da yer almıyor. Stok kaydındaki marka/kart ataması da KAS Lavabo olarak düzeltilmeli.
- **Yasemin** adı doğru (KAS'ın sitesindeki "Jasmin" yerine stok adı kullanılıyor).
- **"Duş trobleni 50 çıkışlı"** = duş teknesi sifonu → "Sifonlar & Kadalar" kartına eklendi (Ø50 çıkış); Duş Tekneleri kartından yönlendirme var.
- **"WC matik"** = alaturka tuvaletin (hela taşının) giderine takılan, koku önleyici kapaklı aparat → "Rezervuar İç Takımları & Klozet
  Kapakları" kartında açıklamasıyla duruyor; Serel Pisuvar & Hela Taşları kartından yönlendirme var.

- **Yer süzgeçleri:** Mesa markalı süzgeç yok; `markalar` boş ("çeşitli"). KATALOG-YAPISI'nda "Mesa · çeşitli" → "çeşitli".
- **Kollektör kartındaki "debili kare tip termostatik set"** KAS ürünü → kollektör kartının gövdesi ve `olculer`'i güncellendi.
- **Piyano, Tema, Japar, Baymet** için marka kaydı açılmayacak (adları kart gövdelerinde geçiyor).

## Sonraki pakete kalan

- **Termosifon emniyet ventili** stokta "Sifonlar & Kadalar"a atanmış; Paket 003'te Vana & Tesisat Armatürleri › Emniyet Ventilleri kartına girecek.

## Görseller

- **Resmi üretici sitesi bulunamayan markalar:** Mesa, Dömark, Samir, Stina, Foma, Hazal, Visam. Bu markaların kayıtlarında
  `web_sitesi` yok; logosuz, adıyla gösterilir.
- Aşağıdaki **13 kartın `kaynak_sayfalar` alanı boş** (marka sitesi yok ya da "çeşitli" grup). Görsel için **mağaza fotoğrafı**
  gerekiyor; pazar yeri/bayi görseli kullanılmaz.
  diger-marka-bataryalar, batarya-yedek-parca-ve-baglantilari, mesa-dus-setleri, dus-setleri-diger-markalar, musluklar-diger-markalar,
  domark-paslanmaz-suzgecler, yer-suzgecleri-ve-dus-kanallari, mesa-banyo-aksesuarlari, domark-banyo-aksesuarlari,
  banyo-aksesuarlari-diger-markalar, samir-banyo-dolaplari, samir-dusakabinler, dus-tekneleri
- Serel ürünleri E.C.A. SEREL sitesinde (eca.com.tr) yer alıyor; Serel kartlarının kaynakları bu yüzden eca.com.tr adresli.
- Kaynaklara fiyat listesi PDF'leri bilerek eklenmedi.

## Özellik doluluğu (kategori içinde)

| Kategori | Kart | Satırlar (dolu / kart) |
|---|---|---|
| `bataryalar` | 9 | malzeme 1/9, montaj-tipi 7/9, renk 6/9 |
| `dus-sistemleri` | 4 | renk 2/4 |
| `musluklar` | 3 | – |
| `suzgec-ve-sifon` | 3 | renk 1/3 |
| `banyo-aksesuarlari` | 4 | malzeme 1/4, renk 3/4 |
| `banyo-mobilyasi` | 4 | malzeme 2/4 |
| `vitrifiye` | 10 | malzeme 3/10, standart 4/10, montaj-tipi 7/10, renk 5/10 |

Musluk ve süzgeç gruplarında karşılaştırılabilir teknik değer az; bilgi gövdede ve `olculer`'de.

## Kaynaklar (kart bazında)

- **ECA Lavabo Bataryaları** (`eca-lavabo-bataryalari`)
  - https://eca.com.tr/yapi/armaturler/banyo-mutfak/lavabo-bataryalari
  - https://eca.com.tr/urun/luna-lavabo-bataryasi-1
  - https://eca.com.tr/yapi/armaturler/banyo-mutfak/batarya-musluk
- **ECA Banyo Bataryaları** (`eca-banyo-bataryalari`)
  - https://eca.com.tr/yapi/armaturler/banyo-mutfak/batarya-musluk
- **ECA Eviye (Mutfak) Bataryaları** (`eca-eviye-mutfak-bataryalari`)
  - https://eca.com.tr/yapi/armaturler/banyo-ve-mutfak-armaturleri/eviye-bataryalari/nita
  - https://eca.com.tr/urun/nita-spiralli-eviye-bataryasi
  - https://eca.com.tr/yapi/armaturler/banyo-ve-mutfak-armaturleri/eviye-bataryalari/spylos
- **ECA Ankastre Batarya & Duş Sistemleri** (`eca-ankastre-batarya-ve-dus-sistemleri`)
  - https://eca.com.tr/yapi/armaturler/banyo-mutfak/ankastre-lavabo-bataryalari/tiera
  - https://eca.com.tr/yapi/armaturler/dus-sistemleri/ankastre-dus-setleri
  - https://eca.com.tr/tiera-ankastre-dus-seti-3-yollu
- **KAS Banyo Bataryaları** (`kas-banyo-bataryalari`)
  - https://kas.com.tr/prod-category/antoryum-armatur-serisi/
  - https://kas.com.tr/en/prod-category/faucets/
- **KAS Eviye (Mutfak) Bataryaları** (`kas-eviye-mutfak-bataryalari`)
  - https://kas.com.tr/prod-category/evye-armaturleri/
- **KAS Lavabo Bataryaları** (`kas-lavabo-bataryalari`)
  - https://kas.com.tr/prod-category/antoryum-armatur-serisi/
  - https://kas.com.tr/product/antoryum-lavabo-bataryasi/
  - https://kas.com.tr/en/prod-category/faucets/
- **Diğer Marka Bataryalar** (`diger-marka-bataryalar`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Batarya Yedek Parça & Bağlantıları** (`batarya-yedek-parca-ve-baglantilari`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **ECA Duş Setleri & Tepe Duşları** (`eca-dus-setleri-ve-tepe-duslari`)
  - https://eca.com.tr/yapi/armaturler/dus-sistemleri
  - https://eca.com.tr/yapi/armaturler/profesyonel-armaturler/termostatik-urunler
- **KAS Duş Setleri** (`kas-dus-setleri`)
  - https://kas.com.tr/prod-category/mafsalli-dus-setleri/
  - https://kas.com.tr/prod-category/surgulu-dus-setleri/
  - https://kas.com.tr/product/safir-tepe-dus-seti/
- **Mesa Duş Setleri** (`mesa-dus-setleri`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Duş Setleri (diğer markalar)** (`dus-setleri-diger-markalar`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **ECA Musluklar & Taharet Muslukları** (`eca-musluklar-ve-taharet-musluklari`)
  - https://eca.com.tr/yapi/armaturler/tamamlayici-urunler/ara-musluklar
  - https://eca.com.tr/urun/filtreli-ara-musluk-2
  - https://www.eca.com.tr/yapi-ara-taharet-muslugu
- **KAS Musluklar & Taharet Muslukları** (`kas-musluklar-ve-taharet-musluklari`)
  - https://kas.com.tr/en/prod-category/faucets/
- **Musluklar (diğer markalar)** (`musluklar-diger-markalar`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Dömark Paslanmaz Süzgeçler** (`domark-paslanmaz-suzgecler`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Sifonlar & Kadalar** (`sifonlar-ve-kadalar`)
  - https://www.firat.com/cmsfiles/certificates/firatboru-genel-urun-katalogu.pdf
- **Yer Süzgeçleri & Duş Kanalları** (`yer-suzgecleri-ve-dus-kanallari`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **ECA Banyo Aksesuarları** (`eca-banyo-aksesuarlari`)
  - https://eca.com.tr/yapi/banyo-aksesuarlari
  - https://eca.com.tr/yapi/banyo-aksesuarlari/askilik/lale
  - https://eca.com.tr/yapi/banyo-aksesuarlari/askilik/rita
  - https://eca.com.tr/yapi/banyo-aksesuarlari/etajer
- **Mesa Banyo Aksesuarları** (`mesa-banyo-aksesuarlari`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Dömark Banyo Aksesuarları** (`domark-banyo-aksesuarlari`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Banyo Aksesuarları (diğer markalar)** (`banyo-aksesuarlari-diger-markalar`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Orka Banyo Dolapları** (`orka-banyo-dolaplari`)
  - https://www.orkabanyo.com/tr/urunler/moonlight-120-cm-cift-cekmeceli-banyo-dolabi
  - https://www.orkabanyo.com/en/collections/rate
  - https://www.orkabanyo.com/tr/medya
- **Samir Banyo Dolapları** (`samir-banyo-dolaplari`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Samir Duşakabinler** (`samir-dusakabinler`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Duş Tekneleri** (`dus-tekneleri`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Serel Klozetler** (`serel-klozetler`)
  - https://eca.com.tr/asma-klozetler
  - https://eca.com.tr/urun/asma-klozet-8
- **Serel Lavabolar** (`serel-lavabolar`)
  - https://eca.com.tr/1634-tezgah-ustu-lavabo-60cm-4
  - https://eca.com.tr/yapi/seramik-saglik-gerecleri/lavabolar/tezgah-ustu-set
  - https://eca.com.tr/urun/tezgah-ustu-lavabo
  - https://eca.com.tr/urun/tezgah-ustu-lavabo-9
- **Serel Gömme Rezervuar, İç Takım & Kumanda Panelleri** (`serel-gomme-rezervuar-ic-takim-ve-kumanda-panelleri`)
  - https://eca.com.tr/yapi/gomme-rezervuar
  - https://eca.com.tr/urun/smooth-gomme-rezervuar-asma-klozet-alcipan
- **Serel Klozet Kapakları** (`serel-klozet-kapaklari`)
  - https://eca.com.tr/yapi/seramik-saglik-gerecleri/klozet-kapaklari
- **Serel Bedensel Engelli & Çocuk Serisi** (`serel-bedensel-engelli-ve-cocuk-serisi`)
  - https://eca.com.tr/yapi/seramik-saglik-gerecleri/bedensel-engelli
  - https://eca.com.tr/urun/lavabo
  - https://eca.com.tr/8702-cocuklar-icin-alttan-cikisli-klozet-3
  - https://eca.com.tr/8701-cocuklar-icin-lavabo-50x40cm-3
  - https://eca.com.tr/yapi/seramik-saglik-gerecleri/cocuk
- **Serel Pisuvar & Hela Taşları** (`serel-pisuvar-ve-hela-taslari`)
  - https://eca.com.tr/yapi/seramik-saglik-gerecleri/pisuvarlar
  - https://eca.com.tr/urun/pisuvar-3
  - https://www.eca.com.tr/yapi-pisuarlar
- **Güral Klozetler** (`gural-klozetler`)
  - https://guralvit.com.tr/vitrifiye/klozetler
  - https://guralvit.com.tr/banyo-takimlari/carmina
  - https://guralvit.com.tr/banyo-takimlari/engelli-serisi
- **Güral Lavabolar** (`gural-lavabolar`)
  - https://guralvit.com.tr/vitrifiye/lavabolar
  - https://guralvit.com.tr/banyo-takimlari/arya/arya-ar10mnl01
  - https://guralvit.com.tr/banyo-takimlari/carmina
- **Güral Banyo Aksesuarları** (`gural-banyo-aksesuarlari`)
  - https://guralvit.com.tr/banyo-aksesuarlari/quare
- **Rezervuar İç Takımları & Klozet Kapakları** (`rezervuar-ic-takimlari-ve-klozet-kapaklari`)
  - https://eca.com.tr/yapi/seramik-saglik-gerecleri/ic-takimlar
- **PEX Bağlantılar & Vanalar** (`pex-baglantilar-ve-vanalar`)
  - https://www.firat.com/cmsfiles/certificates/9896/pex-metal-brosuru.pdf
  - https://www.firat.com/en-us/indoor-piping-system/cold-hot-water-pipe-systems/pex-product-range-1/mobile-systems/assembly
  - https://www.eca.com.tr/rv3-pex
  - https://kas.com.tr/product/kose-rakorlu-radyator-vana/
- **Yerden Isıtma Kollektörleri** (`yerden-isitma-kollektorleri`)
  - https://www.firat.com/en-us/sanitary-piping-systems/metal-systems/collectors
  - https://eca.com.tr/eca-01-1-1/4-debi-ayar-vanali-kolektor
  - https://www.eca.com.tr/eca02-1-debi-ayar-vanali-kolektor
  - https://kas.com.tr/wp-content/uploads/2018/07/mini-vanali-kollekt%C3%B6r-teknik-brosur.pdf
  - https://kas.com.tr/product/kare-tip-debili-kollektor-termostat-set/

## Marka siteleri

- ECA (`eca`): https://eca.com.tr
- Serel (`serel`): https://eca.com.tr/yapi/seramik-saglik-gerecleri
- KAS (`kas`): https://kas.com.tr
- Güral (`gural`): https://guralvit.com.tr
- Orka (`orka`): https://www.orkabanyo.com
- Mesa (`mesa`): — bulunamadı
- Dömark (`domark`): — bulunamadı
- Samir (`samir`): — bulunamadı
- Stina (`stina`): — bulunamadı
- Foma (`foma`): — bulunamadı
- Hazal (`hazal`): — bulunamadı
- Visam (`visam`): — bulunamadı
