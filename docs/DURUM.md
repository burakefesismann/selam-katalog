# Durum

> Her oturumun başında oku, sonunda güncelle. Kısa tut.

## Şu an
- Aktif görev: — (F1.5b bitti)
- Site: https://burakefesismann.github.io/selam-katalog/
- Faz: 1 — İskelet, görseller ve panel

## Yarım kalan
- Yok

## Sıradaki
- F1.5c — Arka plan temizleme + küçük görselleri büyütme denemesi (önce/sonra → kullanıcı kararı)

## Kullanıcıdan beklenenler
- [~] Logo: `kaynaklar/logo/selamfis.png` geldi (474×129 PNG, şeffaf zemin, turuncu+gri). Vektör (SVG/AI/PDF) ya da
  daha büyük PNG varsa istenir; beyaz/açık renkli sürümü (koyu zemin için) de lazım olacak.
- [ ] Daha büyük ürün görselleri (resmi sitelerdeki en büyükleri 800 px altında; kullanıcı "şimdilik kullan" dedi):
  Fırat PPRC, PVC atık su ek parçaları, Triplex (710 px) · Baumit Basic, Flexo, Flex Uni (400 px) · Fırat logosu (360 px).
  Mağazada çekilebilir ya da üreticiden yüksek çözünürlüklü görsel istenebilir. Güncel liste: `npm run gorsel:rapor`.
- [ ] docs/FIRMA.md'deki ⚠ işaretli bilgilerin teyidi
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
