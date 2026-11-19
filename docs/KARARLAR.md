# Kararlar

Kesinleşmiş kararlar. Değiştirmek için kullanıcı onayı gerekir. Yeni kararı en alta, tarihle ekle.

## K1 — Fiyat yok, sadece tanıtım (2026-11-14)
Katalog fiyat, sepet, satış içermez. Amaç ürünü tanıtmak ve müşteriyi bilgilendirmek.
Her ürün sayfasında "Bilgi almak için arayın" butonu (ileride WhatsApp) olur.

## K2 — Statik site + Git tabanlı panel (2026-11-14)
İlk fikir Next.js + Payload CMS idi. Yayın GitHub Pages'te olacağı ve GitHub Pages sunucu/veritabanı
çalıştırmadığı için statik yapıya geçildi:
- Astro + Tailwind ile statik site.
- Sveltia CMS paneli (`/admin`): ürün ekle/çıkar/düzenle/görsel yükle. Kaydedilen değişiklik depoya commit
  olarak düşer, GitHub Actions siteyi yeniden derler (birkaç dakika).
Artıları: ücretsiz; hızlı; saldırılacak sunucu/veritabanı yok; her hostinge taşınabilir.

## K3 — Sadece katalog sitesi; yayın GitHub Pages (2026-11-14, kullanıcı teyitli)
Bu proje sadece ürün kataloğu. Firmanın kurumsal sitesi ayrı bir iş, bu projenin kapsamı değil.
Katalogda yine de iletişim/şube bilgisi bulunur ("bilgi almak için arayın" için gerekli).
Ücretsiz GitHub planında Pages için depo herkese açık olmalı → depoda gizli bilgi bulunmaz (CLAUDE.md > Güvenlik).
Alan adı bağlama (ör. katalog.selaminsaat.com.tr) ileride, kullanıcı isteyince yapılır; şimdi gündemde değil.

## K4 — İki derinlikte ürün (2026-11-14)
Tek ürün şeması, farklı doluluk:
- **Genel kalem** (ör. Fırat): "PPRC Boru ve Ek Parçaları" tek kart. Dirsek, çatal vb. tek tek girilmez.
  Kısa açıklama + mevcut ölçüler + kullanım alanları yeterli.
- **Detaylı ürün** (ör. Baumit Basic / Flexo / FlexTop): teknik özellik tablosu, kullanım alanları,
  uygun karo ebadı, sarfiyat, ambalaj, teknik föy, karşılaştırma.
Sayfa şablonu sadece dolu alanları gösterir.

## K5 — Tutarlı özellik adları ve kullanım alanları (2026-11-14)
Karşılaştırma tablolarının çalışması için teknik özellik adları serbest metin değil, panelden yönetilen bir
listeden seçilir (ör. "Maks. karo ebadı", "TS EN 12004 sınıfı"). Kullanım alanları da (iç mekân, dış mekân,
ıslak hacim, yerden ısıtma…) panelden yönetilen bir listedir ve her birinin ikonu vardır.

## K6 — Kimlik: siyah + turuncu (2026-11-14)
Kurumsal renkler siyah ve turuncu. Kesin tonlar logodan alınacak. Ayrıntı: docs/FIRMA.md

## K7 — Hafıza dosyalarda (2026-11-14)
Oturum limitleri nedeniyle proje hafızası: CLAUDE.md (kurallar), docs/PLAN.md (görevler),
docs/DURUM.md (neredeyiz), docs/KARARLAR.md (bu dosya). Her görev ayrı commit.
Komutlar: `/devam` (kaldığı yerden devam), `/kaydet` (acil durum kaydı), `/rapor` (beyin takımına özet).

## K8 — Panel girişi: token (2026-11-14, kullanıcı teyitli)
Paneli sadece kullanıcı kullanacak. Giriş GitHub fine-grained token (sadece bu depo) ile yapılır.
Ayrı giriş sistemi (OAuth/Cloudflare Worker) kurulmaz. İleride başka kullanıcı eklenirse yeniden değerlendirilir.

## K9 — GitHub: kullanıcının hesabına bağlı organizasyon (2026-11-14, kullanıcı teyitli)
Yeni GitHub hesabı açılmaz. Kullanıcının kendi hesabından ücretsiz bir organizasyon açılır, kullanıcı sahibi olur.
Öneri: organizasyon `selaminsaat` (doluysa `selam-insaat` / `selaminsaat-rize`), depo `<org>.github.io`
→ site `https://<org>.github.io` kök adreste açılır; kullanıcının kişisel github.io sitesine dokunulmaz.
Kesin organizasyon adı, depo adresi ve site adresi F0.2'de buraya yazılacak.

**Güncelleme (2026-11-14, F0.2 — kullanıcının tercihi):** Organizasyon açılmadı; kullanıcı depoyu kendi hesabında açtı.
- Depo: https://github.com/burakefesismann/selam-katalog
- Site adresi (F1.2'den sonra): https://burakefesismann.github.io/selam-katalog/
  → Astro'da `base: '/selam-katalog/'` gerekir; tüm iç link ve görsellerde `import.meta.env.BASE_URL` kullanılır.
- Kişisel github.io sitesine yine dokunulmaz (bu ayrı bir proje deposu).
- İleride alan adı bağlanınca (F5.1) `base` kaldırılır.

## K10 — Görseller zorunlu, kaynak kuralları (2026-11-14, kullanıcı teyitli)
Ürün görselleri en önemli unsur. Görseller internetten toplanacak; işi VS Code'daki Claude `/gorsel` komutuyla yapar.
Sadece üreticinin resmi kaynakları (site, katalog, bayi materyali) veya kullanıcının kendi fotoğrafları kullanılır (K15 ile genişletildi);
pazaryeri/başka satıcı/stok görselleri kullanılmaz. Her görselin kaynağı kaydedilir. Ayrıntı: CLAUDE.md > Görseller.
Beyin takımı içerik paketlerinde her ürün için resmi ürün sayfası adresini (`kaynak_sayfalar`) verir.

## K11 — Katalog yapısı: 11 ana kategori, 3 kart tipi (2026-11-14, kullanıcı teyitli)
Kaynak: firmanın stok listesi (bakiyesi 0 ve eksi olanlar elendi), beyin takımında gruplandı, kullanıcı tek tek onayladı.
Ana kategoriler, bu sırayla: Tesisat Boruları · Vana & Tesisat Armatürleri · Isıtma · Pompa & Su Deposu · Banyo & Mutfak ·
Seramik & Yer Kaplama · Yapı Kimyasalları · Yalıtım & Çatı · Boya · El Aletleri & Makineler · Hırdavat & Nalburiye.
Kart tipleri:
- `grup`: bir ürün ailesi tek kart (ör. "Fırat PVC Atık Su Ek Parçaları"). Kısa tanıtım + mevcut ölçüler. 1 temsili görsel.
- `marka_tur`: marka + tür, örneklemli (ör. "ECA Lavabo Bataryaları", "KAS Eviye Bataryaları", "Serel Klozetler").
  Seri/model adları listelenir. 1–2 örnek görsel.
- `urun`: tek ürün, teknik detaylı (ör. "Baumit Flexo", "İzocam Terrawool"). Ürün görseli + teknik tablo + karşılaştırma.
Banyo & Mutfak'ta markalar ayrı kartlardadır (bataryalarda ECA ve KAS ayrı). Kategori sayfasında birden çok marka varsa
ürünler marka başlıkları altında gruplanır.
Tam liste: `docs/KATALOG-YAPISI.md` (213 kart). Kart içerikleri beyin takımından içerik paketleriyle gelir.

## K12 — Ana sayfa: dengeli genel görünüm (2026-11-14, kullanıcı teyitli)
Tek bir kategori/ürün büyütülmez. Sıra: arama → 11 ana kategorinin eşit boyutlu görselli kartları → marka logoları şeridi
(Fırat Boru ilk sırada ve vurgulu) → farklı kategorilerden karışık öne çıkan ürünler → çözüm sayfaları → şubeler/iletişim.

## K13 — Çözüm sayfaları (2026-11-14, kullanıcı teyitli)
Birden çok markanın ürünlerini bir iş akışında anlatan bilgilendirici sayfalar. İlk dördü: Mantolama, Islak hacim su yalıtımı,
Yerden ısıtma, Çatı & yağmur oluğu. Her sayfa adım adım anlatır; her adım ilgili ürün kartlarına bağlanır. Plan: F4.5.

## K14 — Küçük ürün görselleri yapay zekâ ile büyütülür; arka plan temizleme yok (2026-11-14, kullanıcı teyitli)
Üreticilerin resmi sitelerindeki görseller çoğu zaman 800 px altında (Fırat 710, Baumit 400 px). F1.5c denemesinde
Real-ESRGAN (realesrgan-x4plus) görselleri belirgin şekilde keskinleştirdi; ambalajdaki büyük yazılar doğru kaldı,
çok küçük yazılarda hafif bozulma var. Kullanıcı kararı: uzun kenarı < 800 px olan ürün görselleri
`gorsel:hazirla --buyut` ile büyütülür. Gerçek büyük görsel (mağaza fotoğrafı / üreticiden) gelince o kullanılır.
Araç depoya girmez; kullanıcının bilgisayarında `%LOCALAPPDATA%\selam-araclar\realesrgan\` altında durur.
Arka plan temizleme (rembg) denendi: PVC ek parçalarında ürünü sildi, fabrika görselinde artık bıraktı → kullanılmaz.

## K15 — Görsel kaynakları genişletildi (2026-11-17, kullanıcı teyitli)
Resmi kaynaklar tükenince (91/214 görselli) kullanıcı kaynakları genişletti: üreticinin dağıtıcısı ve resmi sosyal
medyası, ticari kullanıma serbest görseller (Wikimedia Commons, Pexels, Unsplash) ve pazaryerleri/diğer satıcılar
(son çare) kullanılabilir. K10'daki öncelik sırası korunur (resmi varsa o). Hâlâ alınmaz: filigranlı, üstüne
yazı/fiyat/logo bindirilmiş, başka satıcının adı görünen ya da yanlış marka/model/renkte görseller. Pazaryerinden
alınan görseller DURUM'da listelenir; telif şikâyeti gelirse ya da resmi görsel bulunursa değiştirilir.
Ek (2026-11-17, kullanıcı): "resmi sitelerde takılı kalma" — kalan kartlarda marka/model/renk birebir tutmasa da ürün TÜRÜ
doğruysa görsel kullanılabilir (ör. farklı renkte aynı tip eldiven); pazaryerleri ve diğer satıcı siteleri serbest.
Filigran / yazı-fiyat bindirmesi yasağı sürer. Paket 001'in 11 kartı yine kullanıcıda. **2026-11-18 (kullanıcı): "sizin çekeceğiniz diye ayırdıklarına da sen bak"** → Paket 001 kartları da aynı kuralla Claude'da.

## K16 — Marka ağırlıklı yeni yapı, seri kartları, üretici katalogları (2026-11-19, kullanıcı teyitli)
Kullanıcı 21 markanın üretici kataloğunu `kataloglar/` klasörüne koydu (gitignore — **fiyat içerir; fiyat asla depoya/siteye
girmez**). İnceleme: `docs/KATALOG-INCELEME.md`. Kararlar:
1. **İki menü, varsayılan marka ağırlıklı:** Marka → ürün grubu → seri. İkinci menü "Ürün Grupları" (benzer ürünler bir arada;
   ör. Banyo tek başlık değil: armatür, seramik sağlık gereci, banyo aksesuarı, gömme rezervuar, banyo mobilyası ayrı).
2. **Seri/aile kartı** (her ürün ayrı kart değil). Seri kartında modeller alt satır olarak; **ürün kodları gösterilebilir.**
   Öncelik mağazada olan ürünler.
3. **Kapsam (2026-11-19 kullanıcı):** "Sipariş üzerine" ayrımı/yazısı YOK, `temin` alanı yok. Kataloglardan **sadece bizim ürün
   gruplarımıza yakın, az sayıda** seri normal ürün olarak eklenir (tüm katalog değil). Öncelik mağazada olanlar.
4. **Kart listesini Claude kataloglardan çıkarır**, marka marka taslak → kullanıcı onayı.
5. **Yeni markalar eklenir:** Aryak, Borel, İstanbul Fırça, Tesay Bu, Işık. Mevcut markalar da kataloglara göre yeniden
   gözden geçirilir. Mesa ve bir katalog daha sonra gelecek.
6. **Görseller:** zayıf / geçici / başka model görselleri üretici kataloğundan (gömülü görsel olarak, sayfa görüntüsü değil —
   fiyat tablosu girmesin) değiştirilir; Claude değiştirmek istediklerini listeler.

## K17 — Yeni yapı tasarımı onaylandı (2026-11-19, kullanıcı teyitli)
docs/YENI-YAPI.md: 17 ana ürün grubu (Banyo dağıtıldı: Armatür, Seramik Sağlık Gereçleri, Gömme Rezervuar & İç Takımlar,
Banyo Mobilyası & Duşakabin, Banyo Aksesuarları & Süzgeçler; yeni "Fırça, Rulo & Boya-Sıva Aletleri"), seri kartı + `modeller`
(kod satırları), bir kart = bir marka, iki menü (Markalar varsayılan). PDF: her marka **sol sayfada açılımla** başlar, bölüm çift
sayfaya tamamlanır. **Marka sırası: Fırat, ECA, KAS, Filli Boya, Baumit, Sika**, gerisi ürün alanına göre (YENI-YAPI §6).
