# Paket 007 — Hırdavat & Nalburiye

Hazırlayan: beyin takımı · 2026-11-17 · **v2** (kullanıcı cevapları işlendi) · Format: docs/ICERIK-SEMASI.md

## İçerik

| | Adet | Not |
|---|---|---|
| Yeni ürün kartı | 25 | KATALOG-YAPISI §11'in kalan 25 kartı (Fırat Perde Rayları sitede var) |
| Yeni marka | 7 | kale-kilit, beybi (resmi site var); yuma, aky, gezer, samtel, yapar (resmi site bulunamadı) |
| Yeni alt kategori | 8 | Hırdavat & Nalburiye altında: bahce, bant-ve-yapistirici, baglanti-elemanlari, kaba-insaat, kaldirma-ve-baglama, yangin, is-guvenligi, diger-nalburiye |
| Yeni özellik tanımı | 0 | |

Mevcut `kapi-ve-pencere` alt kategorisine 2 kart eklendi (Asma Kilitler; Menteşe, Kapı Yayı & Panjur).
`master` ve `firat` markaları sitede var; yeniden açılmadı.

Bu paketle KATALOG'un 213 kartının tamamı sitede olur.

## İçe aktarma

Paketler 002–006 sitede (deec364), bu paket doğrudan aktarılabilir:

```
npm run icerik:aktar -- 007-hirdavat-nalburiye            # ön izleme
npm run icerik:aktar -- 007-hirdavat-nalburiye --uygula
npm run build
```

Beyin takımı kendi kopyasında (7775059 üzerine) aktarıp `npm run build` çalıştırdı: 0 hata, 0 uyarı.

## Alt kategoriler

| slug | ad | sira |
|---|---|---|
| `bahce` | Bahçe | 10 |
| `bant-ve-yapistirici` | Bant & Yapıştırıcı | 20 |
| `baglanti-elemanlari` | Bağlantı Elemanları | 30 |
| `kaba-insaat` | Kaba İnşaat | 40 |
| `kaldirma-ve-baglama` | Kaldırma & Bağlama | 50 |
| (`kapi-ve-pencere`) | Kapı & Pencere (sitede var, `sira` alanı yok; istenirse 60 verilebilir) | — |
| `yangin` | Yangın | 70 |
| `is-guvenligi` | İş Güvenliği | 80 |
| `diger-nalburiye` | Diğer Nalburiye (KATALOG'da "Diğer") | 90 |

## Beyin takımı kararları (KATALOG-YAPISI'na işlenmeli)

1. **"Sapan, Halat & Makara" → "Halat, Makara & İskele Kelepçesi"**: bu kartın stoğunda sapan yok. Sapanlar Paket 006'da
   "Elektrikli Vinçler & Kaldırma Sapanları" kartında.
2. **"Teller (kümes, rabız, bağlama, elek, çit)" → "Teller (kümes, rabız, bağlama, elek)"**: stokta çit teli yok.
   Bahçe-çit telleri "Bahçe Telleri" kartında.
3. **"Bantlar (maskeleme, ikaz, çift taraflı, alüminyum…)"**: adın sonundaki "…" kaldırıldı (slug temiz kalsın).
4. **"Menteşe, Kapı Yayı & Panjur"**: stoktaki üçlü perde rayları Fırat'ın ürünü ve sitedeki "Fırat Perde Rayları" kartında;
   bu karta yazılmadı.
5. **Kart arası taşınanlar:** tie-rot somunu (Civata kartından) → Tie-Rot kartı; zincir yağlayıcı sprey (Kelepçe kartından) →
   Silikon, Yapıştırıcı, Sprey Yağlayıcı kartı; kapı tel yayı (Teller kartından) → Menteşe, Kapı Yayı kartı.
6. **Paket 003 ve 006'dan kalanlar:**
   - Alçı köşe çıtası galvaniz → Sıva, Alçı & Köşe Profilleri
   - Su tutucu bant ve zift (izolasyon) fırçası → Kalıp Yağı, Derz Dolgu & Diğer
   - Rot milleri 8–16 mm (006'nın Ölçüm stoğundan) → Tie-Rot, Rot Mili & Aksesuarları
   - Master galvanizli çiroz zaten 006'da (KBS Çiroz kartı)
7. **v2 — kullanıcı cevaplarıyla:**
   - **"ES 50 LİK PLASTİK":** kataloğa eklenmiyor (kullanıcı kararı).
   - **Vantuz 1" ve 2":** kataloğa eklenmiyor (kullanıcı kararı); Diğer Nalburiye kartında yalnızca seramik vantuzu kaldı.
   - **"Q200-125 MM PN 16 REDÜKSİYON":** PE100 parçası → sitedeki PE100 ek parça kartına elle eklenecek (aşağıda).
   - **"ADAPTÖR CONTA":** Ø50 PVC çatala takılan, lavabo sifonunun borusunun girdiği conta → sitedeki Sifonlar & Kadalar
     kartına elle eklenecek (aşağıda).
   - **Sprinkler "DUYAR":** anlamı bilinmiyor; kartta "1/2 inç, beyaz (iki model)" olarak kaldı.
8. **Kale Kilit** (`kale-kilit`), Paket 006'daki **KL Pro** (`kl-pro`, mağazada "Kale" diye geçen el aletleri) ile karıştırılmasın;
   ayrı markalardır. Asma kilit kartı Kale Kilit'in resmi sitesine (kalekilit.com.tr) dayanıyor.
9. **Beybi** kaynağı beybi.com.tr'nin ürünler sayfası. Pazar yeri sayfaları ve fiyat listeleri kaynak olarak kullanılmadı.

## Sitedeki kartlara elle eklenecek (VS Code)

Görselleri korumak için bu üç kart paketle ezilmiyor; satırlar elle değiştirilecek.

- **olcum-aletleri-metre-su-terazisi-sakul-gonye-cirpi** (Paket 006): stokta "GÖNYE MASTER 600 MM" de var. Kartın
  `olculer` listesindeki `Gönye 40 cm` → `Gönye 40 cm (alüminyum) / 600 mm (Master)`, gövdedeki gönye satırı →
  `- **Gönye:** alüminyum 40 cm; Master 600 mm`.
- **pe100-kaynakli-ve-elektrofuzyon-ek-parcalar** (Paket 003): gövdedeki `- Redüksiyon 125-110` →
  `- Redüksiyonlar 125-110 ve 200-125 (PN 16)`.
- **sifonlar-ve-kadalar** (Paket 002):
  - "Mağazamızdaki parçalar" listesinin sonuna:
    `- **Sifon adaptör contası:** Ø50 PVC çatala takılır, lavabo sifonunun borusu içine geçer`
  - "Ne işe yarar?" listesinin sonuna:
    `- **Adaptör conta:** lavabo sifonunun borusunu Ø50 PVC çatala (gider) sızdırmaz biçimde bağlar.`
  - `olculer` listesine: `Sifon adaptör contası Ø50`

## Görseller

- 25 kartın 23'ünde markanın resmi sitesi yok ya da kart çeşitli markalı. Bu kartlar için **mağaza fotoğrafı** gerekiyor:
  raf, ürün grubu ya da tek ürün fotoğrafı.
- **Asma Kilitler:** Kale Kilit görselleri kalekilit.com.tr'de.
- **İş Eldivenleri:** Beybi görselleri beybi.com.tr'de.
- Yuma, AKY, Gezer, Samtel ve Yapar için logo yok.

## Özellik doluluğu (kategori içinde)

| Kategori | Kart | Satırlar (dolu / kart) |
|---|---|---|
| `bahce` | 4 | – |
| `bant-ve-yapistirici` | 2 | – |
| `baglanti-elemanlari` | 4 | – |
| `kaba-insaat` | 4 | – |
| `diger-nalburiye` | 1 | – |
| `kaldirma-ve-baglama` | 3 | – |
| `kapi-ve-pencere` | 2 | – |
| `yangin` | 1 | – |
| `is-guvenligi` | 4 | – |

Hırdavat grup kartlarında karşılaştırılabilir teknik değer yok; bilgi gövdede ve `olculer`'de.

## Kaynaklar (kart bazında)

- **Bahçe Aletleri (makas, tırmık, kürek)** (`bahce-aletleri-makas-tirmik-kurek`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Bahçe Telleri** (`bahce-telleri`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **El Arabası & Tekerlekler** (`el-arabasi-ve-tekerlekler`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Hortumlar & Hortum Bağlantıları** (`hortumlar-ve-hortum-baglantilari`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Bantlar (maskeleme, ikaz, çift taraflı, alüminyum)** (`bantlar-maskeleme-ikaz-cift-tarafli-aluminyum`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Silikon, Yapıştırıcı, Sprey Yağlayıcı & Pas Sökücü** (`silikon-yapistirici-sprey-yaglayici-ve-pas-sokucu`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Civata, Somun, Pul & Klemens** (`civata-somun-pul-ve-klemens`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Dübeller** (`dubeller`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Vidalar** (`vidalar`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Çiviler** (`civiler`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Kalıp Yağı, Derz Dolgu & Diğer** (`kalip-yagi-derz-dolgu-ve-diger`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Paspayları** (`paspaylari`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Sıva, Alçı & Köşe Profilleri** (`siva-alci-ve-kose-profilleri`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Tie-Rot, Rot Mili & Aksesuarları** (`tie-rot-rot-mili-ve-aksesuarlari`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Diğer Nalburiye (branda, naylon, çuval, vantuz, temizlik)** (`diger-nalburiye-branda-naylon-cuval-vantuz-temizlik`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Kelepçe, Zincir Kilidi & Karabina** (`kelepce-zincir-kilidi-ve-karabina`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Halat, Makara & İskele Kelepçesi** (`halat-makara-ve-iskele-kelepcesi`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Teller (kümes, rabız, bağlama, elek)** (`teller-kumes-rabiz-baglama-elek`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Asma Kilitler** (`asma-kilitler`)
  - https://kalekilit.com.tr/en/kale-kilit-locks
  - https://kalekilit.com.tr/en/comporate/about-the-company
  - https://kalekilit.com.tr/en/faq
- **Menteşe, Kapı Yayı & Panjur** (`mentese-kapi-yayi-ve-panjur`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Yangın Tüpü, Dolabı & Sprinkler** (`yangin-tupu-dolabi-ve-sprinkler`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Baret, Gözlük & Kaynak Maskesi** (`baret-gozluk-ve-kaynak-maskesi`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **Emniyet Kemeri, İkaz Yeleği, Yağmurluk & Güvenlik Filesi** (`emniyet-kemeri-ikaz-yelegi-yagmurluk-ve-guvenlik-filesi`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **İş Ayakkabısı & Çizmeler** (`is-ayakkabisi-ve-cizmeler`)
  - — resmi kaynak yok (mağaza fotoğrafı)
- **İş Eldivenleri** (`is-eldivenleri`)
  - https://beybi.com.tr/en/products

## Marka siteleri

- Kale Kilit (`kale-kilit`): https://www.kalekilit.com.tr
- Yuma (`yuma`): — bulunamadı
- Beybi (`beybi`): https://beybi.com.tr
- AKY (`aky`): — bulunamadı
- Gezer (`gezer`): — bulunamadı
- Samtel (`samtel`): — bulunamadı
- Yapar (`yapar`): — bulunamadı
