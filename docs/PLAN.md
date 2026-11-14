# Plan

**Kurallar:** Sırayla git. Bir oturumda bir görev. "Bitti sayılır" maddeleri sağlanmadan `[x]` yapılmaz.
Bitince: PLAN'da `[x]` → DURUM.md güncelle → commit + push → kullanıcıya kısa özet.

---

## Faz 0 — Hazırlık

- [x] **F0.1 Ortam kontrolü**
  Node.js (LTS), npm ve git kurulu mu, sürümleri ne? Eksikse kullanıcıya işletim sistemine göre adım adım
  kurulumu anlat. `git config user.name / user.email` ayarlı mı? (Commit'lerde görünen e-posta herkese açık olur;
  kullanıcıya GitHub'ın "noreply" e-posta seçeneğini anlat.)
  *Bitti sayılır:* `node -v`, `npm -v`, `git --version` çalışıyor; sonuçlar DURUM.md > Notlar'da.

- [x] **F0.2 GitHub organizasyonu ve depo** (K9)
  Yeni hesap AÇILMAZ. Kullanıcıya kendi hesabından ücretsiz organizasyon açmayı adım adım anlat:
  github.com › sağ üstte profil fotoğrafı › Organizations (veya Settings › Organizations) › New organization › Free.
  İsim önerisi: `selaminsaat` (doluysa `selam-insaat`, `selaminsaat-rize`).
  Organizasyonda **public** depo: `<org-adı>.github.io` → site `https://<org-adı>.github.io` kök adreste açılır.
  Yerelde `git init`, uzak depoyu bağla, bu başlangıç dosyalarını ilk commit olarak gönder
  (`gh` CLI varsa kullan, yoksa kullanıcıya tarayıcıdan adımları anlat).
  *Bitti sayılır:* GitHub'da depo ve ilk commit görünüyor; org adı, depo ve site adresi KARARLAR.md > K9'a yazıldı.

---

## Faz 1 — İskelet, görseller ve panel

- [x] **F1.1 Astro + Tailwind kurulumu**
  Güncel kararlı Astro, Tailwind CSS, TypeScript (strict), sharp. Mevcut dosyalara (CLAUDE.md, docs/, .claude/,
  icerik-paketleri/, kaynaklar/) dokunmadan kur. Yapı: `src/pages`, `src/components`, `src/layouts`,
  `src/content`, `public/`. `<html lang="tr">`. Sade bir "Yakında" ana sayfası.
  *Bitti sayılır:* `npm run dev` ve `npm run build` çalışıyor; CLAUDE.md > Komutlar güncel.

- [ ] **F1.2 Otomatik yayın (GitHub Pages)**
  GitHub Actions ile her push'ta derle ve GitHub Pages'e yayınla. Astro `site` (gerekiyorsa `base`) ayarını yap.
  Kullanıcıya Settings › Pages › Source: "GitHub Actions" ayarını adım adım anlat.
  *Bitti sayılır:* site github.io adresinde açılıyor; kırık link/görsel yok.

- [ ] **F1.3 İçerik şeması**
  Astro content collections + zod. Alan adları Türkçe-ASCII:
  - **markalar:** ad, slug, logo, logo_kaynak_url?, kisa_aciklama, aciklama (uzun), web_sitesi?, sira, yayinda
  - **kategoriler:** ad, slug, ust_kategori? (alt kategori desteği), gorsel?, kisa_aciklama, sira, yayinda
  - **kullanim_alanlari:** ad, slug, ikon — ör. iç mekân, dış mekân, ıslak hacim, yerden ısıtma, zemin, duvar,
    cephe, havuz, sıcak su, soğuk su, atık su, içme suyu, altyapı, çatı
  - **ozellik_tanimlari:** ad (ör. "Maks. karo ebadı"), birim? (ör. "cm"), aciklama?, sira
    → karşılaştırma tablosunun satırları
  - **urunler:** ad, slug, marka (ref), kategori (ref), **kart_tipi** (`grup` | `marka_tur` | `urun`, zorunlu — K11), kisa_aciklama,
    **seriler[]** (seri/model adları, ör. "Tiera", "Nita"; opsiyonel — özellikle `marka_tur` kartları için),
    **gorseller[]** ({gorsel, alt_metin, kaynak_url?} — ilk sıradaki ana görsel),
    one_cikanlar[] (kısa maddeler: "Esnek", "Dona dayanıklı"), kullanim_alanlari[] (ref),
    teknik_ozellikler[] ({ozellik: ref → ozellik_tanimlari, deger}), olculer[] (ör. "Ø20 mm", "25 kg torba"),
    teknik_foy? (PDF), ilgili_urunler[] (ref),
    **kaynak_sayfalar[]** (üreticinin resmi ürün sayfası adresleri; bilgi ve görsel kaynağı, sitede gösterilmez),
    sira, one_cikan (ana sayfada göster), yayinda.
    Markdown gövdesi = detaylı açıklama ("Nerede kullanılır", "Nasıl uygulanır" gibi bölümler).
  - **ayarlar** (tek dosya): firma bilgileri, şubeler[], ana sayfa metinleri → docs/FIRMA.md'den doldur
  Referanslar doğrulanmalı: olmayan markaya bağlı ürün, derlemeyi anlaşılır bir hata mesajıyla durdurmalı.
  `yayinda: false` olan kayıtlar sitede hiçbir yerde görünmemeli.
  `docs/ICERIK-SEMASI.md` yaz: her alanın anlamı, zorunlu/opsiyonel, birer örnek dosya.
  (Beyin takımı içerik paketlerini buna göre hazırlayacak.)
  *Bitti sayılır:* build geçiyor; ICERIK-SEMASI.md var.

- [ ] **F1.4 Örnek veri**
  Kategoriler: `docs/KATALOG-YAPISI.md`'deki **11 ana kategori** (ust_kategori boş) + şu alt kategoriler:
  Tesisat Boruları › PPRC Temiz Su, PVC Atık Su, Altyapı; Yapı Kimyasalları › Seramik Yapıştırıcı.
  Markalar: Fırat, Baumit.
  Ürünler (adlar KATALOG-YAPISI.md'deki gibi):
  "Fırat PPRC Borular (PN20 / PN25)" (`grup`), "Fırat PVC Atık Su Ek Parçaları" (`grup`),
  "Fırat Triplex Koruge Altyapı Boruları & Ek Parçaları" (`grup`), "Baumit Basic" (`urun`), "Baumit Flexo" (`urun`),
  "Baumit Flex Uni" (`urun`).
  **Teknik değer UYDURMA:** hepsi `TASLAK` işaretli, teknik alanlar boş. Gerçek içerik F3.2'de paketle gelecek.
  Basit (tasarımsız) ürün listesi ve ürün detay sayfası — verinin aktığını görmek için.
  *Bitti sayılır:* 6 ürün sitede listeleniyor, detay sayfaları açılıyor.

- [ ] **F1.5 Görsel hattı** (K10 — çok önemli)
  a) `npm run gorsel:hazirla -- <dosya|klasör>`: sharp ile uzun kenar ≤ 1600 px, WebP (kalite ~80), EXIF temizliği,
     dosya adı `<urun-slug>-<n>.webp`, doğru hedef klasöre kopyalama.
  b) `npm run gorsel:rapor`: görseli olmayan, tek görselli, küçük (< 800 px) ya da `kaynak_url`'si boş ürünleri listeler.
  c) Görseli olmayan ürün için yer tutucu bileşen (marka logosu + kategori adı, açık zemin) — kırık görsel asla yok.
  d) `/gorsel` komutunun adımlarıyla 6 örnek ürün + 2 marka logosu için görsel bul, doğrula, hazırla, içeriğe bağla.
  e) Üretici görsellerinin zeminleri çok dağınıksa: arka plan temizlemeyi (ör. rembg) 2–3 üründe DENE,
     önce/sonra halini kullanıcıya göster; kullanıcı onaylarsa hatta ekle, onaylamazsa ekleme.
  *Bitti sayılır:* 6 örnek ürün görselleriyle sitede; rapor komutu çalışıyor; kullanıcı görselleri gördü ve onayladı.

- [ ] **F1.6 Panel (Sveltia CMS)**
  `/admin` altında Sveltia CMS, GitHub backend, bu depo. Koleksiyonlar F1.3 şemasıyla birebir.
  Panel etiketleri Türkçe ve açıklayıcı (ör. "Kısa açıklama — ürün kartında görünür").
  Referans alanlar açılır listeden seçilsin. Slug'lar Türkçe karakter dönüşümüyle otomatik.
  Panelden yüklenen görseller de standarda uymalı: Sveltia'nın görsel dönüştürme ayarlarını kontrol et
  (WebP, en fazla 1600 px); olmuyorsa build sırasında Astro'nun optimizasyonu yeterli mi kontrol et.
  Telefonla çekilmiş büyük fotoğraf yüklemeyi de test et.
  Giriş: "Sign in with Token" — fine-grained token, sadece bu depo (Contents: read/write, Metadata: read,
  gerekirse Pull requests: read/write). Token oluşturmayı kullanıcıya adım adım anlat (K8: tek kullanıcı).
  Kullanıcıyla canlı test: panelden bir ürünün açıklamasını değiştir ve bir görsel ekle → kaydet → birkaç dakika içinde sitede görünsün.
  *Bitti sayılır:* canlı test başarılı; şema ile panel alanları birebir.

- [ ] **F1.7 Panel kılavuzu**
  `docs/PANEL-KULLANIMI.md`: kod bilmeyen biri için Türkçe, kısa, ekran adımlarıyla. Token alma, panele giriş,
  ürün ekleme, **görsel ekleme ve sıralama (ilk görsel = ana görsel)**, yayından kaldırma, değişikliğin siteye
  düşme süresi, "bir şey bozulursa ne yapılır".
  *Bitti sayılır:* kılavuz var, kullanıcı okuyup onayladı.

---

## Faz 2 — Vitrin tasarımı (görsel öncelikli)

- [ ] **F2.1 Tasarım sistemi**
  docs/FIRMA.md'deki kimlik. Renkler logodan (siyah + turuncu). Font: Türkçe destekli, Fontsource ile.
  Bileşenler: buton, **ürün kartı (görsel baskın: büyük, sabit oranlı görsel alanı, açık zemin, object-contain)**,
  rozet, kullanım alanı ikonu, bölüm başlığı, header (logo, menü, ara butonu), footer (şubeler, iletişim).
  Mobilde altta sabit "Ara" butonu.
  *Bitti sayılır:* `/stil-rehberi` sayfasında tüm bileşenler gerçek ürün görselleriyle görülüyor (noindex). Kullanıcı onayı alındı.

- [ ] **F2.2 Ana sayfa** (K12) — dengeli genel görünüm, tek bir kategori büyütülmez: arama + kısa güven mesajı →
  11 ana kategorinin **eşit boyutlu görselli kartları** → marka logoları şeridi (**Fırat Boru ilk ve vurgulu**) →
  farklı kategorilerden karışık öne çıkan ürünler → çözüm sayfaları alanı (F4.5'e kadar gizli) → şubeler/iletişim özeti.
- [ ] **F2.3 Kategori sayfası** — alt kategoriler, görselli ürün kartları, filtre (marka, kullanım alanı).
  Kategoride birden çok marka varsa ürünler **marka başlıkları altında gruplanır** (ör. Bataryalar: ECA / KAS).
  JavaScript kapalıyken de liste görünür.
- [ ] **F2.4 Ürün detay sayfası** — **büyük görsel galerisi: küçük resimlerle geçiş, tıklayınca tam ekran büyütme,
  mobilde kaydırarak geçiş ve parmakla yakınlaştırma**; öne çıkanlar, kullanım alanı ikonları, teknik özellik tablosu,
  ölçüler, teknik föy indir, detaylı açıklama, ilgili ürünler (görselli), "Bilgi almak için arayın".
  Sadece dolu bölümler görünür. `kart_tipi`'ne göre vurgu: `grup` → ölçüler öne; `marka_tur` → seriler ve örnek
  görseller; `urun` → teknik tablo ve karşılaştırma. Her üç tiple de test et.
- [ ] **F2.5 Marka sayfaları** — marka listesi (logolar) + marka detay (logo, tanıtım, ürünleri kategoriye göre gruplu).
- [ ] **F2.6 Karşılaştırma tablosu** — kategoride teknik özelliği dolu 2+ ürün varsa otomatik tablo
  (satırlar: ozellik_tanimlari, sütunlar: ürünler, sütun başında ürün görseli). Mobilde okunur olmalı.
- [ ] **F2.7 Arama** — Pagefind ile site içi arama, sonuçlarda küçük görsel; header'da arama kutusu.
  Türkçe karakterle test et.
- [ ] **F2.8 İletişim** — şubeler (adres, telefon, saatler, Google Haritalar linki), tıklayınca arayan telefon linkleri.
  Kurumsal sayfa yok (K3).
- [ ] **F2.9 Kalite turu** — 360px / 768px / masaüstü, Lighthouse 90+ (özellikle görsel yükleme hızı / LCP:
  ilk ekrandaki görsel öncelikli, diğerleri lazy), sitemap, robots.txt, title/description, Open Graph görseli
  (ürün sayfalarında ürün görseli), 404 sayfası, favicon. Görsel sayısı arttıkça build uzarsa Actions'a önbellek ekle.

---

## Faz 3 — Gerçek içerik ve görseller

- [ ] **F3.1 İçerik paketi içe aktarıcı**
  Beyin takımı içerikleri `icerik-paketleri/NNN-ad/` klasörlerinde, ICERIK-SEMASI.md formatında gönderir
  (Markdown/JSON; her ürün için `kaynak_sayfalar`). `npm run icerik:aktar -- 001-firat-baumit` komutu paketi
  doğrular (şema, referanslar), varsa paketteki görselleri hazırlar, `src/content`'e kopyalar, özet rapor verir.
  Aynı slug varsa üzerine yazmadan önce raporlar.
- [ ] **F3.2 Paket 001: Fırat + Baumit** — içe aktar, TASLAK örnekleri gerçek içerikle değiştir,
  ardından `/gorsel eksikler` ile görselleri tamamla.
- [ ] **F3.x Diğer paketler** — geldikçe buraya eklenir (her paket: içe aktar → `/gorsel eksikler` → rapor).

---

## Faz 4 — Bilgilendirici ekstralar

- [ ] **F4.1 "Hangisini seçmeliyim?" sihirbazı** — önce seramik yapıştırıcılar (ne yapıştırılacak → nereye →
  karo ebadı → görselli öneri kartı). Kurallar veri dosyasında, panelden düzenlenebilir.
- [ ] **F4.2 QR etiketleri** — her ürün ve kategori için yazdırılabilir QR sayfası (mağaza rafları için).
- [ ] **F4.3 PDF katalog** — yazdırmaya uygun, görselli katalog sayfası (kapak, içindekiler, kategoriler, ürünler) +
  GitHub Actions'ta otomatik PDF üretimi; sitede "Kataloğu indir" linki.
- [ ] **F4.4 WhatsApp butonu** — numara gelince.
- [ ] **F4.5 Çözüm sayfaları** (K13) — `cozumler` koleksiyonu (başlık, kapak görseli, kısa açıklama,
  adımlar[]: {başlık, açıklama, ilgili_urunler[] ref}), panelden yönetilir. Ana sayfadaki alanı aç.
  İlk sayfa: Mantolama (içeriği beyin takımından gelir).

---

## Faz 5 — İleride (acelesi yok, kullanıcı isteyince)

- [ ] **F5.1 Alan adı** — ör. `katalog.selaminsaat.com.tr` alt alan adını bu siteye bağlama (DNS, HTTPS, `site` ayarı).
