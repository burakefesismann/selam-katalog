# Durum

> Her oturumun başında oku, sonunda güncelle. Kısa tut.

## Şu an
- Aktif görev: F3.2 — Paket 001 görselleri (yarım, bkz. Yarım kalan)
- Site: https://burakefesismann.github.io/selam-katalog/
- Faz: 3 — Gerçek içerik ve görseller

## Yarım kalan
- **F3.2 Paket 001 — görseller** (içe aktarma BİTTİ, build hatasız; commit 108510e, 9ba3250 + bu WIP).
  - Tamamlanan: içe aktarıcı (F3.1), 35 kart içeride; KATALOG-YAPISI güncellendi; ts-en-12004 açıklaması; alt kategori
    slug kararı ICERIK-SEMASI'na yazıldı; 8 Fırat ürününe 14 görsel (--buyut); 4 ana kategori kartı görseli
    (tesisat-borulari, isitma, yapi-kimyasallari, hirdavat-ve-nalburiye → `gorsel` alanı).
  - Görseli EKSİK 21 ürün (`npm run gorsel:rapor`):
    · Baumit (15): all-in-beton, bianco-beyaz, brut-beton-astari, classico-dekoratif-kaplamalar, creativtop,
      duocontact, duofix, ionit-finish, mantolama-aksesuarlari, nivello-uno, premium-fuga, procontact, protect-2k,
      startherm, uni-primer. Kaynak: baumit.com.tr/products/... sayfaları; görsel `/files/tr/product_images/imXXXX.png`
      (og:image), 333×400 → `--buyut`. Eski adresler 404 olabilir; ürün adını baumit.com.tr'de bul (ör. karo-uygulama-
      urunleri/... gibi güncel yol). Mantolama aksesuarlarında UniDübel için resmi sayfa yok (NOTLAR).
    · Fırat (6): **kontrol gerekli** → firat-pe100-icme-suyu-borulari-kangal (sitede sadece büyük çaplı düz boru
      fotoğrafı var, kangal yok), firat-pprc-vanalar (vana görseli yok/kesik) → mağaza fotoğrafı önerildi;
      firat-gediz-pvc-atik-su-borulari (NOTLAR: resmi görsel yoksa mağaza fotoğrafı); pe100-kaynakli-ve-elektrofuzyon-ek-parcalar
      (kaynak: pe-100-teknik-katalogu.pdf / en-us pe-pipe-and-fittings), pex-baglantilar-ve-vanalar (pex-metal-brosuru.pdf,
      en-us pex-product-range-1/mobile-systems), yerden-isitma-kollektorleri (en-us sanitary-piping-systems/metal-systems/collectors).
  - Fırat görsel bulma: `scratchpad/firat-gorsel.sh <url>` benzeri — sayfadaki `/cmsfiles/products/**/large/*.jpg` (710 px).
  - Kalan adımlar: yukarıdaki ürünler → hazırla (--buyut) → `gorseller` bağla → build → kalan kategori görselleri (gerekirse)
    → F3.2 [x] → DURUM → commit/push.
## Sıradaki
- F3.2 devam (`/gorsel eksikler`) → sonra F3.x diğer paketler

## Kullanıcıdan beklenenler
- [~] Logo: `kaynaklar/logo/selamfis.png` geldi (2026-11-15 tekrar aynı dosya geldi; daha büyüğü yok) (474×129 PNG, şeffaf zemin, turuncu+gri). Vektör (SVG/AI/PDF) ya da
  daha büyük PNG varsa istenir; beyaz/açık renkli sürümü (koyu zemin için) de lazım olacak.
- [ ] Mağaza fotoğrafı gereken kartlar (resmi görsel yok/uygun değil): Fırat PE100 İçme Suyu Boruları (Kangal),
  Fırat PPRC Vanalar, Fırat Gediz (resmi bulunmazsa), Baumit Flexo (kart bilgileri de torbadan), Baumit UniDübel (aksesuar).
- [ ] Daha büyük ürün görselleri. Şu an yapay zekâ ile büyütülmüş (K14), gerçeği gelince değiştirilecek:
  Fırat PPRC (2), PVC atık su ek parçaları, Triplex (2) — asıl 710 px · Baumit Basic, Flexo, Flex Uni — asıl 400 px.
  Fırat logosu 360 px (logo, büyütülmedi).
  Mağazada çekilebilir ya da üreticiden yüksek çözünürlüklü görsel istenebilir. Güncel liste: `npm run gorsel:rapor`.
- [ ] docs/FIRMA.md'deki ⚠ işaretli bilgilerin teyidi (özellikle Güneysu Depo telefonu, e-posta)
- [x] Şubelerin kesin Google Haritalar linkleri (2026-11-15 kullanıcı verdi, ayarlar/genel.yaml)
- [ ] Marka ve ürün listesi (beyin takımı içerik paketine çevirecek)

## Netleşenler (2026-11-14)
- Panel: sadece kullanıcı → token ile giriş (K8)
- GitHub: kullanıcının hesabından organizasyon, yeni hesap yok (K9)
- Kapsam: sadece katalog; alan adı ileride (K3)
- Görseller zorunlu; internetten resmi kaynaklardan `/gorsel` ile toplanacak (K10)
- Katalog yapısı: 11 ana kategori, 213 kart, 3 kart tipi (K11, docs/KATALOG-YAPISI.md)
- Ana sayfa dengeli, marka şeridinde Fırat Boru öne çıkar (K12); çözüm sayfaları planda (K13)

## Notlar
- Ortam (F0.1, 2026-11-14, Windows 11): Node v24.14.1 (LTS) · npm 11.11.0 · git 2.53.0.windows.2 · `gh` CLI YOK
  (F0.2'de tarayıcıdan yapılacak ya da `winget install GitHub.cli` ile kurulabilir).
- Git kimliği: bu depoda user.name = `Burak Efe` (yerel ayar). E-posta kişisel Gmail; kullanıcı gizlemeye gerek
  görmedi (2026-11-14). Depo herkese açılınca commit'lerde bu adres görünür.
- Depo kökü: `SELAM-UYGULAMALAR/selam-katalog/` (iç içe klasörler 2026-11-14'te düzeltildi; içeride kalan boş
  `selam-katalog/selam-katalog/` klasörü kilitli olduğu için silinemedi, boş, git'e girmez — silinebilir).
- Site `base` = `/selam-katalog` (K9 güncellemesi). İç linklerde `src/lib/url.ts` → `url()` kullan.
- F1.1 sürümleri: Astro 7.4.12, Tailwind 4.3.5 (@tailwindcss/vite), sharp 0.35.5, TypeScript 6.0.3 (TS 7 değil —
  @astrojs/check TS 5/6 istiyor), @astrojs/check 0.9.12. `npm run build` = astro check + astro build.
- Yayın: `.github/workflows/deploy.yml` (withastro/action@v6 + deploy-pages@v5), her main push'unda; ~1–2 dk.
  Settings › Pages › Source = GitHub Actions (2026-11-14 kullanıcı açtı). Elle: Actions › "Yayınla" › Run workflow.
  withastro/action Astro görsel önbelleğini zaten tutuyor (F2.9'daki önbellek maddesi büyük ölçüde hazır).

- F1.3 şema: `src/content.config.ts`, kılavuz `docs/ICERIK-SEMASI.md`. Plandan farklar: ürünlerde `marka` → `markalar[]`
  (44 kart çok markalı, 43 kart markasız), marka `logo` opsiyonel, `ozellik_tanimlari`'nda `slug` var.
  Astro 7 eksik referansta derlemeyi DURDURMUYOR → `src/lib/katalog.ts > icerigiDogrula()` (BaseLayout) durduruyor.
  Görsel klasörleri: `src/assets/{urunler,markalar,kategoriler}/`, içerikte `../../assets/urunler/x.webp`.
  `ayarlar/genel.yaml`'daki ana sayfa başlık/alt başlık metinlerini ben yazdım; kullanıcı/beyin takımı değiştirebilir.

- F1.4 örnek veri: 11 ana + 4 alt kategori, Fırat + Baumit, 6 TASLAK ürün (teknik alanlar boş). Sayfalar: `/urunler`
  (basit liste) ve `/urunler/<slug>` (basit detay); tasarım F2.3/F2.4'te. Marka `web_sitesi` boş (uydurmadım).

- F1.5a: `scripts/gorsel-hazirla.ts`, `scripts/gorsel-rapor.ts` (+ `scripts/ortak.ts`), bileşenler `UrunGorseli` /
  `GorselYerTutucu`. Test edildi: EXIF/GPS silme, yön düzeltme, şeffaflık korunuyor, 500 KB için kalite→boyut düşürme,
  üzerine yazma koruması, eşleşmeyen ad hatası, kayıp görselde derleme durması. Test görselleri silindi.

- F1.5b görsel kaynakları: Fırat → firat.com Türkçe ürün sayfaları (`/cmsfiles/products/<id>/large/*.jpg`, en büyük 710×320;
  `/large/` olmadan 500 döner). Fırat logosu: `/Assets/Img/logo_firat-boru.png` (360×96, SVG yok).
  Baumit → `baumit.com.tr/products/karo-uygulama-urunleri/karo-yapistirma-harclari/baumit-baumacol-<ad>` (ürün adları
  "Baumacol Basic/Flexo/FlexUni"), görseller `/files/tr/product_images/imXXXX.png` 333×400; logo `/images/Baumit_logo.svg`.
  Eski `/islak-hacim-bilesenleri/yapistiricilar/` adresleri 404. Diğer ülke Baumit sitelerinde büyük sürüm yok.
- `UrunGorseli` kutusu görsel varken beyaz + ince kenarlık (üretici görselleri beyaz zeminli); yer tutucu gri.
- Ekran görüntüsü almak için: `npx astro preview --port 4400` + Edge headless
  (`msedge.exe --headless=new --user-data-dir=<geçici> --screenshot=<yol> <url>`; user-data-dir olmadan dosya yazmıyor).

- F1.5c: Real-ESRGAN `%LOCALAPPDATA%\selam-araclar\realesrgan\` (kullanıcı çalıştırma izni verdi, 2026-11-14).
  Intel Graphics'te varsayılan parça boyutunda `vkQueueSubmit failed -4` → `-t 128` ile çalışıyor. Araç kendi
  klasöründe (cwd) çalıştırılıyor, bu yüzden giriş/çıkış yolları mutlak. rembg denendi, reddedildi (K14).
  `gorsel:rapor` büyütülmüş görselleri artık "küçük" saymıyor → hangilerinin büyütüldüğü yukarıdaki listede.

- F1.6 panel: https://burakefesismann.github.io/selam-katalog/admin/ — sadece token girişi (kullanıcı 2026-11-15 oluşturdu,
  süresi ~1 yıl → yenilemek gerekecek). Canlı test: 1. denemede stok fotoğraf (picsum) seçildi + boş alanlar `''`
  → yayın başarısız (site etkilenmedi) → düzeltildi: `stock_assets.providers: []`, `choose_url: false`,
  `output.omit_empty_optional_fields`, `slugify_filename`, şemada `ops()`. 2. deneme: cihazdan yükleme → WebP 1600 px,
  EXIF yok, yayın başarılı. Test değişiklikleri geri alındı. Kılavuzda (F1.7) anlatılacak tuzaklar: "Ekle" ile yeni
  satır aç (mevcut görselin üstüne seçme = değiştirir), slug'ı oluştururken kontrol et (ü→u), stok yok.
- Ürün sayfası şimdilik sadece ilk görseli gösteriyor; diğerleri F2.4 galerisinde.
- F1.7: `docs/PANEL-KULLANIMI.md` kullanıcı onayladı (2026-11-15). Panel buton adları (Yeni/Kaydet/Ekle) görülmeden
  yazıldı; kullanıcı farklı görürse düzelt. Panel alanları değişirse kılavuzu da güncelle.

- F2.1: kullanıcı /stil-rehberi'ni onayladı (2026-11-15). "Ürün Ara" butonları F2.7'ye kadar /urunler'e gidiyor
  (SiteHeader + MobilAltCubuk → `aramaAdresi`). Ana sayfa ve /urunler henüz eski basit tasarımda (F2.2, F2.3).

- F2.2 ana sayfa: kategori kartı görseli = kategori `gorsel` → yoksa kategorideki ilk ürün görseli → yoksa büyük ikon
  (`ikonlar.ts > kategoriIkonu`). Kategori kartları ŞİMDİLİK `/urunler#<kategori>`ye gidiyor; F2.3'te
  `index.astro > adres` kategori sayfasına çevrilecek. Ürünü olmayan kategoride link yok, "Hazırlanıyor" yazar.
  Öne çıkanlar: `one_cikan: true` → yoksa ana kategorilerden sırayla (`getOneCikanUrunler`). Hero arama formu
  F2.7'ye kadar /urunler'e gidiyor (q parametresi işlenmiyor). Marka şeridinde link yok (marka sayfaları F2.5).
- Büyük harf tuzağı: lang="tr" + `uppercase` → "Baumit" = "BAUMİT". Marka adlarında uppercase kullanılmıyor (CLAUDE.md).

- F2.3: `/kategoriler/<slug>/` (15 sayfa). Ana kategoride alt kategori bölümleri; bölümde 2+ ana marka varsa marka
  başlıkları (`markayaGoreGrupla`, çeşitli en sonda). Filtre: marka (ana marka) + kullanım alanı, aynı türde VEYA,
  türler arası VE; form `hidden` → JS açınca görünür, liste her zaman HTML'de. Geçici test ürünleriyle tarayıcıda
  denendi (6 senaryo ✓), test ürünleri silindi. Adresler `src/lib/url.ts > kategoriUrl/urunUrl`. Ana sayfa kartları
  ve ürün sayfası kategori yolu artık kategori sayfasına gidiyor. /urunler yeni kartlarla yenilendi.
- UrunKarti `w-full` olmalı (yoksa içerik kısa olan kart dar kalıyor — düzeltildi).

- F2.4: `UrunGalerisi` (scroll-snap şerit + küçük resimler + oklar; tam ekran PhotoSwipe 5.4.4, Türkçe başlıklar).
  Vurgu: grup→ölçüler, marka_tur→seriler, urun→teknik tablo (sağ sütun); diğer dolu bölümler altta. İlgili ürün
  yoksa aynı kategoriden 4 ürün. 3 kart tipi geçici test ürünleriyle denendi (silindi). Galeri gezintisi + tam ekran
  tarayıcıda test edildi. Parmakla yakınlaştırma PhotoSwipe'ın kendi özelliği; dokunmatik testi gerçek telefonda yapılmalı.
  Kaydırma olayı gizli tarayıcıda gelmiyor → göstergeler tıklamada doğrudan güncelleniyor. `KonumYolu` bileşeni eklendi.

- F2.5: `/markalar/` + `/markalar/<slug>/`. Marka "Uzun tanıtım" Markdown → `src/lib/markdown.ts` (marked 18).
  Ürünler ana kategoriye göre (`anaKategoriyeGoreGrupla`); çok markalı ürün her markasının sayfasında görünür, kartta o
  marka yazar. Menüye "Markalar" eklendi; ana sayfa marka şeridi ve ürün sayfası marka rozetleri marka sayfasına gidiyor.

- F2.6: `KarsilastirmaTablosu` + `getKarsilastirma`/`kategoriKarsilastirmasi`. Sadece AYNI kategorinin doğrudan
  ürünleri karşılaştırılır (alt kategoriler ayrı). Üst kategori sayfasında alt bölüm başlığında "Karşılaştır" linki;
  ürün sayfasında "Benzer ürünlerle karşılaştır" (ürün tabloda ise). Mobilde özellik sütunu sabit, tablo kendi
  kutusunda kayar (sayfa taşmaz, ölçüldü). Farklı değerli satırlar hafif turuncu. Geçici test ürünleri silindi.

- F2.7: `/ara` (?q= destekli, adres çubuğu güncellenir). Dizin 23 sayfa (6 ürün, 15 kategori, 2 marka), dil tr.
  Türkçe test: fırat/firat/FIRAT, yapıştırıcı/yapistirici, boru/borular ✓. "firat"/"baumit" aramasında ilgili kategoriler
  de çıkıyor (kategori görselinin dosya adı aranabilir oluyor; sonuç yine ilgili, bırakıldı). Pagefind Default UI
  denendi, gizli tarayıcıda sonuç vermedi → kendi arayüzümüz. Header, mobil alt çubuk, ana sayfa formu → /ara.

- F2.8: `/iletisim` — şube kartları (adres, saat, tel linki, "Ara", "Yol tarifi"), büyük arama kutusu,
  HardwareStore JSON-LD (sadece bilinen alanlar; `<slot name="head">` BaseLayout'a eklendi). `haritaLinki()`:
  `harita_url` yoksa Google Maps resmi arama linki (firma adı + adres). Menü "İletişim" → /iletisim; footer adresleri
  de harita linki.

- F2.9: Lighthouse (mobil, yerel önizleme) 6 sayfa: Hız 98–100, Erişilebilirlik/En iyi uygulamalar/SEO 100.
  Düzeltmeler: `turuncu-koyu` #b85a0e → #a8520c (açık turuncu zeminde 4.2 → 4.9), hero rozeti zemini kaldırıldı,
  header logosu densities [1,2,3]. Favicon (turuncu kare + S, SVG/32px/apple 180), OG varsayılan 1200×630
  (`public/og-varsayilan.png`), ürün sayfasında ürün görseli JPG. Kanonik adres, og/twitter etiketleri BaseLayout'ta.
  @astrojs/sitemap (27 adres; ara/stil-rehberi/admin hariç). robots.txt alan adı köküne konmadıkça etkisiz
  (site /selam-katalog/ altında) → F5.1'de kök alan adıyla etkin olur; sitemap Search Console'a elle verilebilir.
  404.astro. 13 sayfa × 360/768 px yatay taşma yok. Actions görsel önbelleği withastro/action ile zaten açık.

- F3.1: `npm run icerik:aktar -- <paket>` (önizleme) / `--uygula` (yazar). Hata varsa hiç yazmaz. Birleştirme: paket alanları
  günceller, mevcutta olup pakette olmayanlar korunur; KORUNAN: markalar.logo/logo_kaynak_url, kategoriler.gorsel,
  urunler.gorseller; BİRLEŞEN: urunler.kaynak_sayfalar. Aynı ad + farklı slug → uyarı. Paket `gorseller/` → hazirla --buyut.
- Paket 001 klasörü kullanıcıda `icerik-paketleri/paket-001-firat-baumit-v2/001-firat-baumit/` idi → `icerik-paketleri/
  001-firat-baumit/`e taşındı (boş eski klasör kilitliydi, silinemedi; git'e girmez).
- Beyin takımına bilgi: Baumit Flexo'nun resmi sayfası VAR → baumit.com.tr/products/karo-uygulama-urunleri/
  karo-yapistirma-harclari/baumit-baumacol-flexo (sayfada "C2T" geçiyor; değer karta eklenmedi, kullanıcı torbadan teyit
  edecek). NOTLAR'daki Baumit `/islak-hacim-bilesenleri/...` adreslerinin bir kısmı 404 dönüyor.
- Git CRLF uyarıları çok uzun → commit'te `2>/dev/null`.

## Öneriler
- (Plana eklenmesi önerilen fikirler. Kullanıcı onaylarsa PLAN.md'ye taşınır.)
- Ana sayfadaki 11 ana kategori kartı (F2.2) için kategori görselleri gerekecek; planda ayrı görev yok.
  Öneri: F2.2 öncesi her ana kategoriye o kategorideki en iyi ürün görselini ya da kullanıcının mağaza fotoğrafını ata
  (`gorsel:rapor` bunları zaten listeliyor).

## Oturum günlüğü
| Tarih | Görev | Sonuç | Commit |
|---|---|---|---|
| 2026-11-14 | Başlangıç dosyaları | Beyin takımı hazırladı | — |
| 2026-11-14 | F0.1 Ortam kontrolü | Node/npm/git var; gh yok | F0.2 ile birlikte |
| 2026-11-14 | F0.2 Depo | Kişisel hesapta depo (K9 güncellendi), klasörler düzeltildi, ilk commit | F0.2 |
| 2026-11-14 | F1.1 Astro + Tailwind | Kurulum, "Yakında" sayfası; dev + build çalışıyor | F1.1 |
| 2026-11-14 | F1.2 GitHub Pages | Actions ile otomatik yayın; site açılıyor, kırık link yok | F1.2 |
| 2026-11-14 | F1.3 İçerik şeması | 6 koleksiyon, referans/slug doğrulaması, yayinda gizleme, ICERIK-SEMASI.md | F1.3 |
| 2026-11-14 | F1.4 Örnek veri | 15 kategori, 2 marka, 6 TASLAK ürün; liste + detay sayfası; 0 kırık link | F1.4 |
| 2026-11-14 | F1.5a Görsel araçları | gorsel:hazirla, gorsel:rapor, yer tutucu bileşen | F1.5a |
| 2026-11-14 | F1.5b Görseller | 6 ürün (8 görsel) + 2 logo, resmi siteler; küçük ama kullanıcı onayladı | F1.5b |
| 2026-11-14 | F1.5c Büyütme/arka plan | Real-ESRGAN kabul (8 görsel büyütüldü, `--buyut`), rembg red; K14 | F1.5c |
| 2026-11-15 | F1.6 Panel | Sveltia /admin, token girişi, 2 canlı test; stok/URL kapatıldı | F1.6 |
| 2026-11-15 | F1.7 Panel kılavuzu | docs/PANEL-KULLANIMI.md yazıldı, kullanıcı onayladı | F1.7 |
| 2026-11-15 | F2.1 Tasarım sistemi | Renkler logodan, Barlow, Lucide ikonlar, 10 bileşen, /stil-rehberi; kullanıcı onayladı | F2.1 |
| 2026-11-15 | F2.2 Ana sayfa | K12 sırası; kategori kartları (görsel/ikon), marka şeridi, öne çıkanlar, mağazalar; 360 px taşma yok, 104 link kırıksız | F2.2 |
| 2026-11-15 | F2.3 Kategori sayfası | 15 sayfa, alt kategoriler, marka grupları, JS filtre (6 senaryo test), 259 link kırıksız | F2.3 |
| 2026-11-15 | F2.4 Ürün detay | Galeri + tam ekran (PhotoSwipe), kart tipine göre vurgu, 3 tip test edildi, 360 px taşma yok | F2.4 |
| 2026-11-15 | F2.5 Marka sayfaları | Liste + detay, Markdown tanıtım, kategoriye göre gruplu; menü/şerit/rozet linkleri; 397 link kırıksız | F2.5 |
| 2026-11-15 | F2.6 Karşılaştırma | Otomatik tablo (2+ teknikli ürün), sabit özellik sütunu, kategori/ürün linkleri; test edildi | F2.6 |
| 2026-11-15 | F2.7 Arama | Pagefind + kendi arayüz, görselli sonuçlar, Türkçe karakter testi ✓, tüm arama linkleri /ara | F2.7 |
| 2026-11-15 | F2.8 İletişim | /iletisim, şube kartları, yol tarifi, tel linkleri, JSON-LD; 360 px taşma yok | F2.8 |
| 2026-11-15 | F2.9 Kalite turu | Lighthouse 98–100/100/100/100, favicon, OG, sitemap, 404, kontrast; taşma yok | F2.9 |
| 2026-11-16 | F3.1 + F3.2 (yarım) | İçe aktarıcı; Paket 001 içeride (35 kart); 8 ürün + 4 kategori görseli; 21 ürün görselsiz | WIP F3.2 |
