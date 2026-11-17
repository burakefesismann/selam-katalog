# Selam İnşaat Ürün Kataloğu — Proje Kuralları

Bu dosya her oturumda otomatik okunur. Burada yazanlar kesin kuraldır.

## Proje nedir
Selam İnşaat Malzemeleri Tic. Ltd. Şti. (Rize, 50 yıllık yapı malzemeleri firması) için
dinamik ürün tanıtım kataloğu (sadece katalog sitesi). **Fiyat YOK, sepet YOK, satış YOK** — sadece tanıtım ve bilgilendirme.
**Ürün görselleri sitenin en önemli parçası** (bkz. Görseller bölümü).
Firma bilgileri: `docs/FIRMA.md` · Kararlar: `docs/KARARLAR.md` · Görevler: `docs/PLAN.md` · Neredeyiz: `docs/DURUM.md`
Kategori ağacı ve kart listesi (onaylı): `docs/KATALOG-YAPISI.md`

## Ekip ve çalışma şekli
- Kullanıcı yazılımcı değil. Açıklamaları **Türkçe, sade ve kısa** yap. Kullanıcının kendisinin yapması
  gereken bir şey varsa (GitHub'da tıklama, program kurma) adım adım yaz.
- Planlama ve içerik ayrı bir Claude sohbetinde ("beyin takımı") yapılıyor. Oradan gelen kararlar
  `docs/KARARLAR.md`'ye, ürün içerikleri `icerik-paketleri/` klasörüne gelir.
- Oturum limitleri sık doluyor. **Hafıza sohbette değil, dosyalarda tutulur.**

## Her oturumun başında (zorunlu)
1. `docs/DURUM.md`'yi oku (neredeyiz, yarım kalan iş var mı).
2. `docs/PLAN.md`'de sıradaki görevi bul.
3. `git status` ve `git log --oneline -5` ile son durumu kontrol et.

Kullanıcı `/devam` yazarsa bu adımlar + sıradaki görev yapılır. Diğer komutlar (`.claude/skills/`):
`/kaydet` (acil durum kaydı), `/rapor` (beyin takımına özet), `/gorsel` (ürün görseli bul-indir-doğrula).

## Görev kuralları
- Bir oturumda **BİR görev** (PLAN.md'deki kimliğiyle, ör. F1.3). Görev bir oturuma sığmayacak kadar büyükse
  önce PLAN.md'de alt görevlere böl (F1.3a, F1.3b), bunu commit'le, sonra başla.
- Başlarken `DURUM.md > Şu an` bölümüne görev kimliğini yaz.
- Bitirince sırayla:
  1. `npm run build` hatasız geçmeli (proje kurulduktan sonra).
  2. PLAN.md'de kutuyu `[x]` yap.
  3. DURUM.md'yi güncelle (Şu an, Sıradaki, Notlar) ve Oturum günlüğüne 1 satır ekle.
  4. `git add -A && git commit -m "F1.3: kısa açıklama"` ve `git push`.
  5. Kullanıcıya 3–5 satır Türkçe özet: ne yapıldı, kendisi nasıl kontrol eder, sıradaki görev ne.
- Bağlam/limit dolmak üzereyse ya da görev yarıda kalacaksa: `DURUM.md > Yarım kalan` bölümüne ne yapıldığını,
  ne kaldığını, hangi dosyalara dokunulduğunu yaz ve `git commit -m "WIP F1.3: ..."` at.
  **Asla commit'siz yarım iş bırakma.**
- `KARARLAR.md`'deki kararları kullanıcıya sormadan değiştirme. Yeni bir teknik karar gerekirse kullanıcıya sor,
  onaylanınca KARARLAR.md'ye tarihle ekle.
- PLAN.md'ye kendi kafana göre özellik ekleme; fikrin varsa `DURUM.md > Öneriler`e yaz.

## Güvenlik — depo HERKESE AÇIK
- Token, şifre, API anahtarı, `.env` içeriği **asla** depoya girmez. `.gitignore`'u kontrol et.
- Fiyat, maliyet, tedarikçi bilgisi, müşteri bilgisi, çalışanların kişisel telefon/e-postası depoya girmez.
  Sadece firmanın herkese açık iletişim bilgileri (`docs/FIRMA.md`).
- Panel girişi GitHub token ile yapılır; token kullanıcının tarayıcısında saklanır, koda/dosyaya yazılmaz.

## İçerik kuralları
- **Ürün bilgisi UYDURMA.** Teknik değerler (sınıf, sarfiyat, ebat, basınç, çap vb.) sadece kullanıcının verdiği
  içerikten veya `icerik-paketleri/`'nden gelir. Bilinmiyorsa alan boş kalır.
- Yer tutucu içerik gerekirse başlığa/açıklamaya `TASLAK` yaz ki gözden kaçmasın.
- Site dili Türkçe. Kod, değişken, bileşen, dosya adları İngilizce; içerik alan adları Türkçe-ASCII
  (`kisa_aciklama`), panel etiketleri tam Türkçe ("Kısa açıklama").
- Türkçe karakterler:
  - Slug: ı→i, İ→i, ş→s, ğ→g, ü→u, ö→o, ç→c (özellikle **ı** ve **İ**'yi test et).
  - Büyük/küçük harf: `toLocaleUpperCase('tr-TR')` / `toLocaleLowerCase('tr-TR')`. CSS `text-transform` kullanılan
    yerlerde `<html lang="tr">` şart.
  - **Marka adlarını ve yabancı kelimeleri büyük harfe ÇEVİRME** (`uppercase` yok): lang="tr" "Baumit"i "BAUMİT" yapar.
  - Sıralama: `localeCompare(x, 'tr')`.

## Görseller — ÇOK ÖNEMLİ
- Her ürünün en az 1 görseli olmalı. Görseli olmayan ürün "eksik" sayılır ve raporlanır; sitede kırık görsel
  değil, şık bir yer tutucu (marka logosu + kategori) görünür.
- Kaynak önceliği (K15, 2026-11-17 genişletildi): 1) kullanıcının verdiği/çektiği fotoğraf, 2) üreticinin resmi sitesi,
  kataloğu, bayi materyali, 3) üreticinin dağıtıcısı / resmi sosyal medyası, 4) ticari kullanıma serbest görseller
  (Wikimedia Commons, Pexels, Unsplash — özellikle markasız hırdavat), 5) pazaryerleri ve diğer satıcılar (son çare).
  Üst sıradaki bulunabiliyorsa alttakine inilmez.
- **ALINMAZ:** filigranlı, üstüne yazı/fiyat/logo bindirilmiş, başka satıcının adı görünen görseller; yanlış
  marka/model/renk. Pazaryerinden alınan görsel `npm run gorsel:rapor` ile değil, DURUM'daki listeyle izlenir
  (resmi görsel bulununca değiştirilir).
- Her görselin alındığı sayfa `kaynak_url` alanına yazılır.
- İndirilen her görseli **aç ve bak**: doğru ürün mü (marka/model/ambalaj), filigran var mı, kalite yeterli mi
  (uzun kenar ≥ 800 px). Emin değilsen kullanma, raporla.
- Standart: uzun kenar ≤ 1600 px, WebP, Türkçe `alt_metin`. Sitede tutarlı görünüm CSS ile sağlanır
  (sabit en-boy oranlı kutu, `object-contain`, açık zemin).
- Orijinal indirmeler `.gorsel-orijinal/` klasöründe yerelde kalır (gitignore'da), depoya sadece hazırlanmış hali girer.
- Görsel bulma işi `/gorsel` komutunun adımlarıyla yapılır.

## Teknik yığın (gerekçeler: docs/KARARLAR.md)
- Astro (statik site, güncel kararlı sürüm) + Tailwind CSS + TypeScript (strict)
- İçerik: Astro content collections, `src/content/` altında Markdown/JSON dosyaları
- Panel: Sveltia CMS, `/admin` adresinde, GitHub backend
- Yayın: GitHub Actions → GitHub Pages (ileride selaminsaat.com.tr alan adı)
- Arama: Pagefind
- Paket yöneticisi: npm

## Kalite çizgisi
- Önce mobil. Her sayfa 360px genişlikte düzgün görünmeli.
- Görseller optimize (WebP/AVIF, doğru boyut, lazy-load). Depoya 500 KB'tan büyük görsel girmez; büyükse küçült.
- Lighthouse hedefi: performans, erişilebilirlik, SEO 90+.
- Font Türkçe karakterleri (ğ ş ı İ ç ö ü) desteklemeli ve kendi sitemizden yüklenmeli (Fontsource).
- Erişilebilirlik: turuncu zemin üstündeki yazıların kontrastını kontrol et.

## Komutlar
- `npm install` — bağımlılıkları kur (ilk kez ya da package.json değişince)
- `npm run dev` — yerel önizleme → http://localhost:4321/selam-katalog/
- `npm run build` — tip kontrolü (`astro check`) + derleme → `dist/` + arama dizini (`pagefind --site dist`)
  (her görev sonunda, 0 hata şart). Arama `npm run dev`'de ÇALIŞMAZ; `npm run build` + `npm run preview` ile dene.
- `npm run preview` — derlenmiş siteyi önizleme
- `npm run gorsel:hazirla -- <dosya|klasör> [--hedef urunler|markalar|kategoriler] [--ad <slug>] [--uzerine-yaz]`
  — WebP, ≤1600 px, ≤500 KB, EXIF silinir, yön düzeltilir; `src/assets/<hedef>/` içine. Hedef dosya adından bulunur
  (`baumit-flexo-1.jpg` → ürün, `firat.png` → marka logosu). Sonunda içeriğe eklenecek YAML satırlarını yazar.
  `--buyut`: uzun kenarı < 800 px olan ürün görselini önce yapay zekâ ile 4× büyütür (K14). Araç depoda yok; kurulum:
  github.com/xinntao/Real-ESRGAN/releases → `realesrgan-ncnn-vulkan-20220424-windows.zip` → içinden
  `realesrgan-ncnn-vulkan.exe`, `vcomp140*.dll` ve `models/realesrgan-x4plus.*` dosyalarını
  `%LOCALAPPDATA%\selam-araclar\realesrgan\` (models alt klasörüyle) içine koy. Intel ekran kartında `-t 128` şart (komut veriyor).
- `npm run katalog:pdf` — (build sonrası) `/katalog-yazdir/` sayfasını A4 PDF'e basar → `dist/selam-insaat-urun-katalogu.pdf`.
  Yerel sunucu + başsız Chrome/Edge (`CHROME_PATH`). Actions her yayında çalıştırır. Tarayıcıyı EŞZAMANSIZ çağır (sync → kilitlenir).
- `node scripts/katalog-yapisi.ts` — docs/KATALOG-YAPISI.md kart listesini siteden yeniden üretir (paket kararları işlendikten sonra).
- `npm run gorsel:rapor` — görselsiz / küçük / kaynaksız / kayıp görselli ürünler, logosuz markalar, görselsiz ana kategoriler.

## Proje yapısı ve teknik notlar
- `src/pages` sayfalar · `src/layouts` sayfa iskeletleri (`BaseLayout.astro`: `<html lang="tr">`, global CSS)
  · `src/components` bileşenler · `src/content` içerik · `src/lib` yardımcılar · `src/styles/global.css` Tailwind girişi
  · `public/` olduğu gibi kopyalanan dosyalar.
- Site `base` = `/selam-katalog` (astro.config.mjs). **İç linkleri elle `/...` diye yazma**; `src/lib/url.ts` →
  `url('urunler/x')` kullan. Astro'nun `<Image>` / import edilen görselleri base'i kendisi ekler.
- İçerik şeması: `src/content.config.ts` ↔ `docs/ICERIK-SEMASI.md` (biri değişirse diğeri de, panel ayarı da).
  Sayfalar içeriği **sadece `src/lib/katalog.ts`** üzerinden okur (`getUrunler()`, `getUrunDetay()`…);
  `yayinda: false` gizleme ve sıralama orada. Doğrudan `getCollection()` kullanma.
  Astro eksik referansta derlemeyi durdurmuyor; `icerigiDogrula()` (BaseLayout'ta) durduruyor — kaldırma.
- Görsel gösterimi: `src/components/UrunGorseli.astro` (sabit 4:3 kutu, object-contain, açık zemin; görsel yoksa
  `GorselYerTutucu.astro`). İçerikteki görsel dosyası yoksa derleme durur (Astro `ImageNotFound`) → kırık görsel çıkmaz.
- `scripts/*.ts` Node'un yerleşik TS desteğiyle çalışır: enum/namespace kullanma, import'larda `.ts` uzantısı yaz.
- Panel: `public/admin/config.yml` (Sveltia CMS, `/admin`). Alanlar `content.config.ts` ile birebir; değişince
  ikisini de güncelle ve Sveltia şemasına göre doğrula (`https://unpkg.com/@sveltia/cms/schema/sveltia-cms.json`).
  Stok fotoğraf ve URL ile görsel KAPALI (K10). Boş alanlar yazılmaz. Panel commit'leri "panel: ..." ile başlar.
- Arama (F2.7): Pagefind 1.6 JS API + kendi arayüzümüz (`src/pages/ara.astro`), `noWorker: true` (worker bazı
  ortamlarda takılıyordu). Dizine sadece `data-pagefind-body` olan sayfalar girer (ürün, kategori, marka); kart
  listeleri, konum yolu, galeri, butonlar `data-pagefind-ignore`. Sonuç görseli `data-pagefind-meta="image:..."`
  ile AÇIKÇA verilir (yoksa Pagefind sayfadaki ilk görseli ve alt metnini alır → yanlış eşleşmeler).
- Test tuzağı: headless Edge + `--virtual-time-budget` Pagefind worker'ını ve `debouncedSearch`'ü bitirmiyor;
  önizleme sunucusu uzun açık kalınca da garipleşebiliyor → şüphede sunucuyu yeniden başlat, yeni profil kullan.
- Slug üretimi: `src/lib/slug.ts` → `slugify()` (Türkçe karakter dönüşümü).
- Tailwind v4: ayar dosyası yok, tema `src/styles/global.css` içinde `@theme` ile tanımlı (F2.1).
- Tasarım sistemi (F2.1): renkler `turuncu` #ef7f1a · `turuncu-koyu` #a8520c · `turuncu-acik` · `antrasit` #2b2a29 ·
  `antrasit-koyu` · `zemin`. **Turuncu zeminde beyaz yazı YOK** (2.7) → koyu yazı; beyazda turuncu metin = turuncu-koyu.
  Font: Barlow (metin) + Barlow Semi Condensed (`font-baslik`), Fontsource latin + latin-ext. İkonlar: `@lucide/astro`;
  kullanım alanı ikonları `src/lib/ikonlar.ts` (panel `ikon` seçenekleriyle aynı). Bileşenler: Buton, Rozet, UrunKarti,
  UrunGorseli, GorselYerTutucu, KullanimAlaniIkon, BolumBasligi, SiteHeader, SiteFooter, MobilAltCubuk → hepsi
  `/stil-rehberi`de (noindex). Menüye sadece var olan sayfaları ekle (SiteHeader > MENU).
- 360 px testi: Edge headless pencereyi en az ~496 px açar → 360 px için sayfayı 360 px genişlikte iframe içinde aç.
- TypeScript 6 kullanılıyor (TS 7 ile `@astrojs/check` uyumlu değil; check TS 7'yi desteklemeden yükseltme).
