# İçerik Şeması

Sitedeki her bilginin hangi dosyada, hangi alanla tutulduğu. **Beyin takımı içerik paketlerini bu formatta hazırlar.**
Kod karşılığı: `src/content.config.ts` (bu dosyayla birebir aynı olmalı — biri değişirse diğeri de değişir).
Son güncelleme: 2026-11-14 (F1.3)

---

## 1. Genel kurallar

- **Bir kayıt = bir dosya.** Dosya adı = `slug` (ör. `baumit-flexo.md`). Dosyanın içine `slug:` yazmak **opsiyonel**
  (panel yazmaz); yazılırsa dosya adıyla aynı olmalı, yoksa site derlenmez. Dosya adı da slug kuralına uymalı.
- **slug:** küçük harf, rakam, tire. Türkçe karakter yok: ı→i, İ→i, ş→s, ğ→g, ü→u, ö→o, ç→c, `&` → `ve`.
  Ör. "Drenaj Kanalları & Izgaralar" → `drenaj-kanallari-ve-izgaralar`. Slug sonradan değiştirilmez (adres değişir).
- **Bağlantılar slug ile yazılır:** ürünün markası `firat`, kategorisi `pprc-temiz-su` gibi. Bağlanan kayıt yoksa
  site derlenmez ve hangi dosyada hangi bağlantının bozuk olduğu yazılır.
- **Ürün bilgisi UYDURULMAZ.** Bilinmeyen alan **boş bırakılır** (satırı hiç yazma). Sitede sadece dolu alanlar görünür.
- Yer tutucu metin gerekirse içine `TASLAK` yaz.
- `yayinda: false` → kayıt sitede hiçbir yerde görünmez (silmeden gizlemek için).
  Gizli kategorinin alt kategorileri ve ürünleri de gizlenir. Gizli marka, ürünlerin marka listesinden düşer.
- `sira`: küçük sayı önce gelir (varsayılan 100). Eşitse ada göre Türkçe alfabetik.
- Dosyalar UTF-8. YAML'da `:` veya `#` içeren metinleri tırnak içine al: `deger: "C2TE S1"`.

### Dosya yerleri (sitede)

| Koleksiyon | Klasör | Biçim |
|---|---|---|
| markalar | `src/content/markalar/<slug>.yaml` | YAML |
| kategoriler | `src/content/kategoriler/<slug>.yaml` | YAML |
| kullanim_alanlari | `src/content/kullanim_alanlari/<slug>.yaml` | YAML |
| ozellik_tanimlari | `src/content/ozellik_tanimlari/<slug>.yaml` | YAML |
| urunler | `src/content/urunler/<slug>.md` | Markdown (üstte YAML başlık + altta açıklama) |
| ayarlar | `src/content/ayarlar/genel.yaml` | YAML, tek dosya |
| görseller | `src/assets/urunler/`, `src/assets/markalar/`, `src/assets/kategoriler/` | WebP (F1.5) |
| teknik föyler | `public/foyler/<slug>.pdf` | PDF |

### İçerik paketi (beyin takımından gelen)

```
icerik-paketleri/001-firat-baumit/
  markalar/firat.yaml
  kategoriler/pprc-temiz-su.yaml        ← sadece YENİ kategoriler (var olanları tekrar gönderme)
  ozellik_tanimlari/sarfiyat.yaml       ← sadece YENİ özellik tanımları
  urunler/baumit-flexo.md
  NOTLAR.md                             ← kaynaklar, teyit bekleyenler, sorular
```
Paketlerde `gorseller` alanı genelde **boş** bırakılır; görselleri VS Code tarafı `kaynak_sayfalar`'dan yola çıkarak
`/gorsel` komutuyla bulur. Ürün başına en az bir `kaynak_sayfalar` adresi beklenir.

---

## 2. urunler — ürün kartları

| Alan | Zorunlu | Tür | Anlamı |
|---|---|---|---|
| `ad` | ✔ | metin | Kartta ve sayfada görünen ad. `KATALOG-YAPISI.md`'deki adla aynı. |
| `slug` | – | slug | Adres: `/urunler/<slug>`. Dosya adıyla aynı (opsiyonel; dosya adı yeterli). |
| `kart_tipi` | ✔ | `grup` / `marka_tur` / `urun` | K11. Sayfada neyin öne çıkacağını belirler. |
| `kategori` | ✔ | kategori slug'ı | Ürünün durduğu **en alt** kategori (ör. `pprc-temiz-su`, `tesisat-borulari` değil). |
| `markalar` | – | marka slug listesi | İlk sıradaki = ana marka. "çeşitli" kartlarda boş bırak. Çok markalıda hepsini yaz: `[eca, kas]`. |
| `kisa_aciklama` | ✔ | metin | Ürün kartında görünür. 1–2 cümle (~160 karakter). |
| `seriler` | – | metin listesi | Seri/model adları, özellikle `marka_tur` kartlarında: `[Tiera, Nita]`. |
| `gorseller` | – | liste | `{gorsel, alt_metin, kaynak_url}`. İlk sıradaki = ana görsel. Paketlerde genelde boş. |
| `one_cikanlar` | – | metin listesi | Kısa maddeler: `[Esnek, Dona dayanıklı]`. 2–5 madde, her biri birkaç kelime. |
| `kullanim_alanlari` | – | kullanım alanı slug listesi | Bkz. bölüm 4: `[ic-mekan, islak-hacim]`. |
| `teknik_ozellikler` | – | liste | `{ozellik: <özellik slug'ı>, deger: "metin"}`. Birim `deger`'e yazılmaz, tanımdan gelir. |
| `olculer` | – | metin listesi | Mevcut ebat/ambalajlar: `["Ø20 mm", "Ø25 mm"]`, `["25 kg torba"]`. |
| `teknik_foy` | – | yol | `/foyler/<slug>.pdf` (dosya `public/foyler/`'de olmalı; panel böyle yazar). |
| `ilgili_urunler` | – | ürün slug listesi | Sayfanın altında "İlgili ürünler". |
| `kaynak_sayfalar` | (beklenir) | adres listesi | Üreticinin resmi ürün sayfaları. **Sitede görünmez**; bilgi ve görsel kaynağı. |
| `sira` | – | tam sayı | Varsayılan 100. |
| `one_cikan` | – | evet/hayır | `true` → ana sayfada "öne çıkanlar"da gösterilebilir. |
| `yayinda` | – | evet/hayır | Varsayılan `true`. |
| *(gövde)* | – | Markdown | Detaylı açıklama. Bölümler `##` ile: "Nerede kullanılır", "Nasıl uygulanır"… |

**Örnek — `urun` tipi** (`urunler/baumit-flexo.md`; değerler ÖRNEKTİR, gerçek değil):
```markdown
---
ad: Baumit Flexo
slug: baumit-flexo
kart_tipi: urun
kategori: seramik-yapistirici
markalar: [baumit]
kisa_aciklama: Esnek, çimento esaslı seramik yapıştırıcısı. TASLAK
one_cikanlar: [Esnek, Dış mekâna uygun]
kullanim_alanlari: [ic-mekan, dis-mekan, islak-hacim, yerden-isitma]
teknik_ozellikler:
  - ozellik: ts-en-12004-sinifi
    deger: "C2TE"
  - ozellik: maks-karo-ebadi
    deger: "60x60"
olculer: ["25 kg torba"]
ilgili_urunler: [baumit-basic, baumit-flex-uni]
kaynak_sayfalar:
  - https://baumit.com.tr/...
---
## Nerede kullanılır
...

## Nasıl uygulanır
...
```

**Örnek — `grup` tipi** (`urunler/firat-pprc-borular-pn20-pn25.md`):
```markdown
---
ad: Fırat PPRC Borular (PN20 / PN25)
slug: firat-pprc-borular-pn20-pn25
kart_tipi: grup
kategori: pprc-temiz-su
markalar: [firat]
kisa_aciklama: Sıcak ve soğuk temiz su tesisatı için PPRC borular.
kullanim_alanlari: [sicak-su, soguk-su, icme-suyu]
olculer: ["Ø20 mm", "Ø25 mm", "Ø32 mm"]
kaynak_sayfalar:
  - https://www.firat.com/...
---
```

**Örnek — `marka_tur` tipi** (`urunler/eca-lavabo-bataryalari.md`):
```markdown
---
ad: ECA Lavabo Bataryaları
slug: eca-lavabo-bataryalari
kart_tipi: marka_tur
kategori: bataryalar
markalar: [eca]
kisa_aciklama: ECA'nın farklı seri ve tasarımlarda lavabo bataryaları.
seriler: [Tiera, Nita]
kaynak_sayfalar:
  - https://www.eca.com.tr/...
---
```

**Görsel alanı** (VS Code tarafı doldurur; paketlerde gerekmez):
```yaml
gorseller:
  - gorsel: /src/assets/urunler/baumit-flexo-1.webp
    alt_metin: Baumit Flexo 25 kg seramik yapıştırıcı torbası
    kaynak_url: https://baumit.com.tr/...
```

---

## 3. markalar

| Alan | Zorunlu | Anlamı |
|---|---|---|
| `ad` | ✔ | "Fırat", "Baumit" |
| `slug` | – | `firat` (opsiyonel; dosya adı = slug) |
| `kisa_aciklama` | ✔ | Marka listesinde görünen 1 cümle. |
| `aciklama` | – | Marka sayfasındaki uzun tanıtım (birkaç paragraf, Markdown olabilir). |
| `logo` | – | `/src/assets/markalar/<slug>.webp` (VS Code tarafı doldurur). Yoksa adı yazılır. |
| `logo_kaynak_url` | – | Logonun alındığı resmi sayfa. |
| `web_sitesi` | – | Resmi site. |
| `sira` | – | Marka şeridinde sıra. **Fırat en başta** (K12) → `sira: 1`. |
| `yayinda` | – | Varsayılan `true`. |

```yaml
# markalar/firat.yaml
ad: Fırat
slug: firat
kisa_aciklama: Plastik boru ve ek parça üreticisi.
web_sitesi: https://www.firat.com
sira: 1
```

---

## 4. kategoriler

| Alan | Zorunlu | Anlamı |
|---|---|---|
| `ad` | ✔ | "Tesisat Boruları", "PPRC Temiz Su" |
| `slug` | ✔ | `tesisat-borulari`, `pprc-temiz-su` |
| `ust_kategori` | – | Alt kategoriyse üst kategorinin slug'ı. Ana kategoride yazılmaz. |
| `kisa_aciklama` | – | Kategori sayfasının başında 1–2 cümle. |
| `gorsel` | – | Kategori kartı görseli (`/src/assets/kategoriler/<slug>.webp`). |
| `sira` | – | Ana kategoriler K11 sırasıyla: 10, 20, 30… |
| `yayinda` | – | Varsayılan `true`. |

```yaml
# kategoriler/pprc-temiz-su.yaml
ad: PPRC Temiz Su
slug: pprc-temiz-su
ust_kategori: tesisat-borulari
```
Alt kategori slug'ları farklı ana kategorilerde çakışabilir (ör. "Su Yalıtımı" hem Yapı Kimyasalları'nda hem
Yalıtım & Çatı'da, "Mantolama" hem Yapı Kimyasalları'nda hem Boya'da). Bu durumda ayırt edici slug ver:
`su-yalitimi-kimyasal` / `su-yalitimi-membran`, `mantolama-sistem` / `mantolama-boya` — ad aynı kalabilir.
**Onaylı (2026-11-16, beyin takımı):** Yapı Kimyasalları › `su-yalitimi-kimyasal`, Yalıtım & Çatı › `su-yalitimi-membran`,
Yapı Kimyasalları › `mantolama-sistem`, Boya › `mantolama-boya`.

---

## 5. kullanim_alanlari (hazır — 14 kayıt)

Ürünlerde bu slug'lar kullanılır. Yenisi gerekirse pakette `kullanim_alanlari/<slug>.yaml` olarak gönder.

`ic-mekan` İç mekân · `dis-mekan` Dış mekân · `islak-hacim` Islak hacim · `yerden-isitma` Yerden ısıtma ·
`zemin` Zemin · `duvar` Duvar · `cephe` Cephe · `havuz` Havuz · `sicak-su` Sıcak su · `soguk-su` Soğuk su ·
`atik-su` Atık su · `icme-suyu` İçme suyu · `altyapi` Altyapı · `cati` Çatı

Alanlar: `ad` ✔, `slug` ✔, `ikon` (ikon adı — F2.1'de ikon seti seçilince doldurulur), `sira`, `yayinda`.

---

## 6. ozellik_tanimlari — karşılaştırma tablosunun satırları (K5)

Teknik özellik adları serbest yazılmaz; önce burada tanımlanır, ürünlerde slug'ıyla kullanılır.
Böylece aynı kategorideki ürünler aynı satırlarda karşılaştırılır.

| Alan | Zorunlu | Anlamı |
|---|---|---|
| `ad` | ✔ | "Maks. karo ebadı" |
| `slug` | ✔ | `maks-karo-ebadi` |
| `birim` | – | "cm", "kg/m²", "bar". Ürünlerdeki `deger`'e birim yazılmaz. |
| `aciklama` | – | Özelliğin kısa açıklaması (tabloda ipucu olarak). |
| `sira` | – | Tablodaki satır sırası. |

Hazır olanlar: `maks-karo-ebadi` (cm), `ts-en-12004-sinifi`.

```yaml
# ozellik_tanimlari/sarfiyat.yaml
ad: Sarfiyat
slug: sarfiyat
birim: kg/m²
sira: 30
```

---

## 7. ayarlar — `src/content/ayarlar/genel.yaml`

Firma bilgileri (`firma`: unvan, kisa_ad, sehir, telefon, eposta, whatsapp, web), şubeler (`subeler[]`: ad, adres,
telefon, calisma_saatleri, harita_url) ve ana sayfa metinleri (`ana_sayfa`: baslik, alt_baslik, guven_mesaji).
Kaynak: `docs/FIRMA.md`. Sadece herkese açık bilgiler.

---

## 8. Plandan farklar (bilinçli)

- **`slug` alanı opsiyonel (F1.6).** Panel (Sveltia) slug'ı dosya adı olarak üretir, dosyanın içine yazmaz.
  Boş bırakılan opsiyonel alanlar (`''`) "yok" sayılır. Görsel yolları `/src/assets/...` (panel böyle yazar).

- **`marka` → `markalar` (liste).** KATALOG-YAPISI.md'de 44 kart çok markalı (ör. "Rakor & Uzatmalar — ECA · KAS"),
  43 kart "çeşitli" (markasız). Tek marka alanı buna uymadığı için liste yapıldı; ilk sıradaki ana markadır.
- **Marka `logo` opsiyonel.** Logolar görsel hattıyla (F1.5) sonradan eklenir; logosuz marka adıyla gösterilir.
- **`ozellik_tanimlari`'na `slug` eklendi** (diğer koleksiyonlarla tutarlılık; ürünlerde bununla bağlanır).
