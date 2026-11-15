# Panel Kullanım Kılavuzu

Katalogdaki ürünleri, markaları ve firma bilgilerini **tarayıcıdan** düzenlemek için.
Kod bilmen gerekmez. Telefondan da kullanılabilir, ama bilgisayarda daha rahattır.

**Panel adresi:** https://burakefesismann.github.io/selam-katalog/admin/
**Site adresi:** https://burakefesismann.github.io/selam-katalog/

---

## 1. Panele giriş

Panele GitHub'dan aldığın bir **giriş anahtarı (token)** ile girilir. Anahtar sadece senin tarayıcında saklanır.

**Anahtarın varsa:**
1. Panel adresini aç.
2. **"Erişim Token'ı Kullanarak Giriş Yap"** butonuna bas, anahtarı yapıştır.
3. Aynı tarayıcıda bir daha sormaz.

**Yeni anahtar gerekiyorsa** (yeni bilgisayar, süresi doldu, kaybettin):
1. https://github.com/settings/personal-access-tokens/new adresini aç.
2. **Token name:** `Selam Katalog Paneli`
3. **Expiration:** Custom → 1 yıl sonrası.
4. **Repository access:** "Only select repositories" → **selam-katalog**.
5. **Permissions → Repository permissions → Contents:** **Read and write**. Başka bir şeye dokunma.
6. **Generate token** → çıkan anahtarı kopyala (sadece bir kez gösterilir) → panelde yapıştır.

⚠ Anahtarı **kimseyle paylaşma**, bir yere yazma, mesajla gönderme. Anahtarı olan biri katalogu değiştirebilir.
Kaybettiysen ya da başkası gördüyse: https://github.com/settings/personal-access-tokens adresinde eskisini
**sil (Delete)**, yukarıdaki adımlarla yenisini oluştur.

---

## 2. Panelde neler var?

Solda bölümler:

| Bölüm | Ne için |
|---|---|
| **Ürünler** | Katalogdaki ürün kartları (en çok burayı kullanacaksın) |
| **Markalar** | Marka adı, logo, kısa tanıtım |
| **Kategoriler** | Ana ve alt kategoriler |
| **Kullanım alanları** | İç mekân, ıslak hacim, çatı… (ürünlerde seçilen liste) |
| **Teknik özellik adları** | Karşılaştırma tablosunun satırları (ör. "Maks. karo ebadı") |
| **Ayarlar** | Firma bilgileri, şubeler, telefonlar, ana sayfa yazıları |

Her alanın altında gri küçük bir **açıklama** yazar. Emin olmadığında önce onu oku.

---

## 3. Yeni ürün ekleme

1. **Ürünler** → **Yeni** butonu.
2. Doldur (ilk beşi zorunlu; Markalar "çeşitli" kartlarda boş kalabilir):
   - **Ad** — kartta görünen ad. Ör: `Baumit Flexo`
   - **Kart tipi** — ürün ailesi / marka serisi / tek ürün (açıklamasında örnekleri var)
   - **Kategori** — listeden **en alttaki** kategoriyi seç (ör. "PPRC Temiz Su", "Tesisat Boruları" değil)
   - **Markalar** — listeden seç; birden fazla olabilir, **ilk seçilen ana marka**. "Çeşitli markalar" ise boş bırak.
   - **Kısa açıklama** — 1–2 cümle, ürün kartında görünür.
   - Diğerleri isteğe bağlı: görseller, öne çıkanlar, kullanım alanları, teknik özellikler, ölçüler, teknik föy (PDF),
     ilgili ürünler, detaylı açıklama.
3. **Sayfa adresi (slug)** — addan otomatik oluşur. Kaydetmeden önce **kontrol et**:
   - Sadece küçük harf, rakam ve tire olmalı: `baumit-flexo`
   - **ü → u, ö → o** olmalı (`gumus`, `guemues` değil). Yanlışsa elle düzelt.
   - ⚠ Kaydettikten sonra **değiştirilemez** (sayfanın adresi olur).
4. **Kaydet**.

**Bilgi uydurma:** Teknik değerleri (sınıf, sarfiyat, ebat, basınç…) bilmiyorsan **boş bırak**. Boş alanlar sitede
görünmez, eksik bilgi yanlış bilgiden iyidir.

---

## 4. Görsel ekleme ve sıralama

Görseller sitenin en önemli parçası. Kurallar:

- **İlk sıradaki görsel ana görseldir** (kartta ve sayfanın en üstünde o görünür). Düz zeminli, ürünün tamamının
  göründüğü en temiz fotoğrafı en üste koy.
- **Yeni görsel eklemek için** listenin altındaki **"Ekle"** butonuyla **yeni bir satır aç**, görseli o satıra yükle.
  ⚠ Var olan bir görselin üstüne yeni dosya seçersen **eskisinin yerine geçer**.
- **Sırayı değiştirmek için** satırları tutup **sürükle**.
- **Görsel açıklaması (alt metin)** zorunlu: görselde ne var, kısaca yaz.
  Ör: `Baumit Flexo 25 kg seramik yapıştırıcı torbası`.
- **Kaynak adresi:** Görseli üreticinin sitesinden aldıysan o sayfanın adresi. Kendi fotoğrafınsa boş bırak.
- Telefonla çektiğin büyük fotoğrafı doğrudan yükleyebilirsin: panel **otomatik küçültür** (WebP, en fazla
  1600 piksel) ve fotoğraftaki konum bilgisini siler.
- ⚠ **Kullanma:** pazaryeri/başka satıcı görselleri (Koçtaş, Hepsiburada, Trendyol…), filigranlı ya da üstünde fiyat
  yazan görseller, internetten rastgele bulunan görseller. Panelde stok fotoğraf ve "adresten görsel ekleme" bilerek
  kapalı.

İyi ürün fotoğrafı için: düz ve açık renk zemin (beyaz duvar, beyaz karton), gün ışığı, ürünün tamamı kadrajda,
ambalaj yazıları okunur.

---

## 5. Var olan ürünü düzenleme

**Ürünler** → listeden ürüne tıkla → değiştir → **Kaydet**. Listede arama ve sıralama var.

---

## 6. Yayından kaldırma ve silme

- **Geçici olarak gizlemek** (stokta yok, yakında tekrar gelecek): ürünü aç → **Yayında** düğmesini kapat → **Kaydet**.
  Ürün sitede hiçbir yerde görünmez ama bilgileri kaybolmaz; düğmeyi açınca geri gelir.
- **Tamamen silmek:** ürünü aç → sil. Geri getirmek zordur; emin değilsen **gizlemeyi** tercih et.
- Bir **markayı** ya da **kategoriyi** gizlersen ona bağlı ürünler de etkilenir (gizli kategorinin ürünleri görünmez).

---

## 7. Değişiklik sitede ne zaman görünür?

Kaydettikten **1–3 dakika** sonra. Görmüyorsan sayfayı yenile (bilgisayarda **Ctrl + F5**).

İlerlemeyi görmek istersen: https://github.com/burakefesismann/selam-katalog/actions
- 🟡 sarı = hazırlanıyor · ✅ yeşil = yayında · ❌ kırmızı = bir sorun var (aşağıya bak)

---

## 8. Bir şey ters giderse

**Önce şunu bil:** Hatalı bir kayıt **siteyi bozmaz**. Site, sorun düzelene kadar **son çalışan haliyle** kalır.

**Actions sayfasında kırmızı ❌ gördüysen:**
1. En son ne değiştirdiğini hatırla. Genelde sebep odur (boş bırakılmış zorunlu alan, silinmiş ama başka üründe
   seçili bir marka/kategori gibi).
2. Panelden o değişikliği düzelt ya da geri al → **Kaydet**. Birkaç dakika sonra ✅ olur.
3. Çözemezsen: VS Code'da Claude'a yaz (ör. "Panelden kaydettim, yayın kırmızı oldu, bakar mısın?").
   Hata mesajı Türkçedir ve hangi dosyada, hangi alanda sorun olduğunu söyler.

**Panel açılmıyor / giriş istemiyor / "yetki yok" diyor:** Anahtarın süresi dolmuş olabilir → bölüm 1'deki gibi
yenisini oluştur.

**Yanlışlıkla bir şey sildim:** Paniğe gerek yok; her kayıt GitHub'da geçmişiyle saklanır. Claude'a ne silindiğini
yaz, geri getirir.

---

## 9. Kısa hatırlatma listesi

- [ ] Kategori → en alttaki kategori
- [ ] İlk marka = ana marka
- [ ] Sayfa adresini kaydetmeden kontrol et (ü→u, ö→o)
- [ ] Yeni görsel → "Ekle" ile yeni satır; ilk görsel ana görsel
- [ ] Bilmediğin teknik değeri boş bırak
- [ ] Silmek yerine "Yayında"yı kapat
- [ ] Anahtarı kimseyle paylaşma
