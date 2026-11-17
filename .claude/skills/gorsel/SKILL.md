---
name: gorsel
description: Ürün görseli bul, indir, doğrula, hazırla ve ürüne bağla. Kullanım — /gorsel <urun-slug> | /gorsel eksikler | /gorsel <paket-klasörü>
disable-model-invocation: true
---

Hedef: $ARGUMENTS
- Bir ürün slug'ı ise sadece o ürün.
- `eksikler` ise `npm run gorsel:rapor` ile görseli olmayan / zayıf ürünleri bul.
- Bir paket klasörü ise o paketteki ürünler.

Bir oturumda **en fazla ~10 ürün** işle; kalanları `DURUM.md > Yarım kalan`'a yaz, kullanıcıya yeni sohbette
`/gorsel eksikler` ile devam etmesini söyle.

## Her ürün için

1. **Kaynak bul**
   - Önce ürünün `kaynak_sayfalar` alanı.
   - Boşsa üreticinin resmi sitesinde ürünü ara (web araması: marka + ürün adı; sonucun üreticinin kendi alan adında
     olduğundan emin ol). Bulduğun resmi sayfayı `kaynak_sayfalar`'a ekle.
   - Resmi kaynakta yoksa (K15) sırayla: üreticinin dağıtıcısı / resmi sosyal medyası → ticari kullanıma serbest
     görseller (Wikimedia Commons, Pexels, Unsplash; markasız hırdavat için ideal) → pazaryerleri ve diğer satıcılar
     (son çare). Pazaryerinden alınanları DURUM'daki "geçici görseller" listesine yaz.
   - **YASAK:** filigranlı, üstüne yazı/fiyat/logo bindirilmiş, başka satıcının adı görünen görseller.

2. **Görsel adresini çıkar**
   Sayfanın HTML'ini `curl -sL "<url>"` ile al (web okuma aracı görsel adreslerini kaçırabilir, HTML'e bak).
   `og:image`, ürün galerisindeki `<img>`, `srcset`, `data-src` içinden **en yüksek çözünürlüklü** sürümü seç.

3. **İndir**
   `curl -sL -o .gorsel-orijinal/<urun-slug>-<n>.<uzantı> "<görsel-url>"`
   Marka logosu: `.gorsel-orijinal/<marka-slug>.<uzantı>` (SVG varsa SVG'yi tercih et).
   Dosya adı böyle olursa `gorsel:hazirla` hedef klasörü ve adı kendisi bulur.

4. **Doğrula — görseli aç ve kendi gözünle bak** (gerekirse geçici PNG'ye çevirip aç)
   - Doğru ürün mü? Marka, model, ambalaj ve renk ürün adıyla uyuşuyor mu?
     (ör. "FlexTop" yerine "Flexo" torbası olmasın; PPRC yerine PVC boru olmasın)
   - Filigran, başka firma logosu, fiyat etiketi, üstüne yazı bindirmesi yok mu?
   - Uzun kenar ≥ 800 px ve net mi?
   Şüphe varsa **KULLANMA**, rapora "kontrol gerekli" diye yaz.

5. **Hazırla**
   `npm run gorsel:hazirla -- .gorsel-orijinal/<dosya>` → WebP, ≤ 1600 px, doğru klasöre.
   Resmi kaynaktaki en büyük görsel bile < 800 px ise `--buyut` ekle (yapay zekâ ile büyütme, K14); sonucu açıp
   bak — ambalaj yazıları bozulduysa `--buyut` olmadan hazırla ve "küçük" diye raporla.
   Arka plan temizleme YAPILMAZ (K14); dağınık zeminli görsel yerine düz zeminli olanı seç.

6. **Ürüne bağla**
   Ürünün `gorseller` listesine ekle:
   - `gorsel`: hazırlanan dosya
   - `alt_metin`: Türkçe, açıklayıcı (ör. "Baumit FlexTop 25 kg seramik yapıştırıcı torbası")
   - `kaynak_url`: görselin alındığı sayfa
   Ürün başına 1–3 görsel yeter. **İlk görsel ana görseldir:** düz zeminli, ürünün tamamı görünen, en temiz olanı seç.
   Varsa ikinci görsel uygulama/kullanım görseli olabilir.

## Sonunda

1. `npm run build` hatasız geçmeli.
2. Kullanıcıya tablo göster: ürün | görsel sayısı | kaynak alan adı | durum (✓ / bulunamadı / kontrol gerekli).
3. Bulunamayan ya da "kontrol gerekli" olanları `DURUM.md > Kullanıcıdan beklenenler`'e ekle:
   "Şu ürünlerin fotoğrafı gerekli — mağazada çekilebilir ya da üreticiden istenebilir: …"
4. Commit: `gorsel: <kısa özet>` ve push.
