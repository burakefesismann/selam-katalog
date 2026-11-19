# Yeni Yapı Tasarımı — Marka Ağırlıklı Katalog (F6.1)

> Durum: **ONAYLANDI (2026-11-19, kullanıcı).** Kararlar: K16 (docs/KARARLAR.md). Kaynak: docs/KATALOG-INCELEME.md.
> Sitede ve PDF'te **fiyat yok**, "sipariş üzerine" ayrımı yok.

## 1. İlkeler

1. **Varsayılan bakış marka**: Marka → ürün grubu → seri. Müşteri önce markayı, sonra o markanın ürün gruplarını görür.
2. **İkinci menü "Ürün Grupları"**: aynı ürünler bir arada (tüm markaların klozetleri bir arada vb.). İki menü **tek bir ürün
   grubu ağacından** beslenir — ayrı ayrı bakım yok.
3. **Kart = seri/aile**: "ECA Life Serisi" gibi. Kartın içinde modeller satır satır, ürün kodlarıyla. Her ürün ayrı kart değil.
4. **Bir kart = bir marka.** Markasız hırdavat (çivi, tel, galvaniz ek parça…) "Diğer / Genel" altında kalır.
5. Kataloglardan yalnızca bizim ürün gruplarımıza yakın, **az sayıda** seri eklenir; öncelik mağazadakiler.

## 2. İçerik modeli (değişiklikler)

**Ürün grupları** (bugünkü `kategoriler` koleksiyonu yeniden adlandırılmadan kullanılır, ağaç yeniden düzenlenir):
2 seviye (ana grup → grup). Her grup bir görsel + kısa açıklama. Marka sayfası serileri bu gruplara göre bölümler.

**Seri kartı** (bugünkü `urunler`):
- `markalar` → tek ana marka zorunlu (markasız kartlar hariç).
- `kart_tipi` sadeleşir: `seri` (markalı seri/aile) · `grup` (markasız ürün ailesi) · `urun` (tek ürün, nadiren).
- **Yeni `modeller` listesi**: her satır `{ kod, ad, olcu?, aciklama?, gorsel? }`.
  Ör. ECA Life Serisi → `102 101 …` Life Lavabo Bataryası; `102 108 …` Life Banyo Bataryası… (kodlar katalogdan; **fiyat sütunu
  hiç alınmaz**).
- Mevcut alanlar (görseller, kısa açıklama, öne çıkanlar, teknik özellikler, ölçüler, teknik föy) aynen kalır.

**Marka**: mevcut alanlar + `one_cikan_gorsel` (marka sayfası/PDF açılışı için büyük ambiyans görseli) + `sira` (PDF ve
marka listesi sırası; Fırat ilk — K12).

## 3. Ürün Grupları ağacı (öneri)

Kalın = değişen yerler. Parantezde bugünkü yer.

1. **Tesisat Boruları & Ek Parçalar** — PPRC · PVC Atık Su · PEX / PE-RT · PE İçme Suyu · Altyapı & Drenaj · Yağmur Oluğu ·
   Metal Boru & Ek Parça (bugünkü gibi; Poelsan PE ek parçaları buraya)
2. **Vanalar** — Küresel Vanalar · Şiber & Gaz Vanaları · **Radyatör & Termostatik Vanalar** · **Tesisat Valfleri** (basınç
   düşürücü, çekvalf, emniyet, filtre, flatör, prüjör, ara kesme) · **Ölçü** (sayaç, kalorimetre, manometre)
3. **Bağlantı & Flex** — Su flexi · Doğalgaz flexi & kelepçe · Rakor & uzatma · Conta & sızdırmazlık
4. **Isıtma** — Radyatör & Havlupan · Yerden Isıtma (boru, kollektör, aksesuar) · Kombi aksesuarları
5. **Armatür (Batarya & Duş)** — *(bugün Banyo & Mutfak içinde dağınık)* Lavabo Bataryaları · Banyo Bataryaları · Eviye
   (Mutfak) Bataryaları · Ankastre Sistemler · Duş Setleri & Tepe Duşları · Musluklar & Taharet · Yedek Parça & Uzatma
6. **Seramik Sağlık Gereçleri** — Klozetler · Lavabolar · Pisuvar & Hela Taşı · Klozet Kapakları · Engelli & Çocuk Serisi
7. **Gömme Rezervuar & İç Takımlar** — Gömme rezervuarlar · Kumanda panelleri · Rezervuar iç takımları
   *(bugün Vitrifiye içinde klozetle karışık)*
8. **Banyo Mobilyası & Duşakabin** — Banyo dolapları · Boy dolapları & aynalar · **Duşakabinler** · Duş tekneleri
9. **Banyo Aksesuarları & Süzgeçler** — Banyo aksesuarları · Yer süzgeçleri & duş kanalları · Sifon & kada
10. **Pompa & Su Deposu** — Dalgıç · Santrifüj · Hidrofor · Su depoları
11. **Seramik & Profil** — Karolar · **Seramik & parke profilleri** (Tesay Bu, Işık) · Uygulama malzemeleri (seviye sistemi…)
12. **Yapı Kimyasalları** — Seramik yapıştırıcı & derz · Sıva & şap · Mantolama · Su yalıtımı (kimyasal) · Beton katkısı ·
    Zemin & astar · Mastik, silikon & köpük
13. **Yalıtım & Çatı** — Isı & ses yalıtımı · Membranlar · Çatı kaplama & aksesuar
14. **Boya** — İç cephe · Dış cephe · Tavan · Astar · Ahşap & metal · Özel · Tiner & yardımcılar
15. **Fırça, Rulo & Boya-Sıva Aletleri** — *(yeni ana grup; İstanbul Fırça + Dekor + Master)* Fırça · Rulo · Mala & ıspatula ·
    Kova & tekne
16. **El Aletleri & Makineler** — El aletleri · Tesisatçı aletleri · Takım dolabı & çanta (İzeltaş) · Makineler · Uç & sarf
17. **Hırdavat & Nalburiye** — Bağlantı elemanları · Bant & yapıştırıcı · Kaba inşaat · Kaldırma & bağlama · Bahçe · Kapı &
    pencere (kilit, perde rayı) · İş güvenliği · Yangın · Diğer

## 4. Mevcut 213 kartın taşınması

- Tek markalı kartlar: doğrudan yeni gruba taşınır; F6.4'te o markanın kataloğuna göre **seriye bölünür** (ör. "ECA Lavabo
  Bataryaları" → ECA Life, Tiera, Luna, Nita… seri kartları; mağazada olanlar).
- **Çok markalı grup kartları** (ör. "Basınç Düşürücüler [ECA, KAS]", "Yerden Isıtma Kollektörleri [Fırat, ECA, KAS]",
  "Su Küresel Vanaları [KAS, ECA, Türkoğlu]"): F6.4'te markalara bölünür (her markaya kendi kartı). Markası belirsiz olanlar
  "Diğer / Genel" altında kalır.
- "Diğer markalar" kartları (Foma, Hazal, … ) o markanın kartı olur; logosu yoksa ad yazısıyla görünür.
- Eski adresler (`/urunler/<eski-slug>`) korunur ya da yeni karta yönlendirilir — QR etiketleri bozulmasın (F4.2).

## 5. Site sayfaları

- **Üst menü**: Markalar (varsayılan, ilk sırada) · Ürün Grupları · Ara · İletişim.
- **Ana sayfa**: üstte marka vitrini (büyük logolar, Fırat öne — K12), altında ürün grupları kartları.
- **Marka sayfası**: büyük açılış (logo + ambiyans görseli + kısa tanıtım) → o markanın ürün grupları sekme/başlık olarak →
  her grup altında seri kartları.
- **Ürün grubu sayfası**: o gruptaki tüm markaların serileri, marka marka bölümlenmiş (marka filtresi).
- **Seri sayfası**: görseller + açıklama + **model tablosu** (kod · ad · ölçü) + teknik özellikler + ilgili seriler.

## 6. PDF katalog düzeni (sağlı-sollu)

- A4 dikey, kitap gibi basılır (çift yüz). Sayfa 1 kapak (sağ sayfa).
- **Her marka bölümü bir açılımla başlar**: sol sayfa = marka açılışı (büyük ambiyans görseli + logo + kısa tanıtım), sağ sayfa =
  markanın ürün grupları ve ilk ürünler. Bunun için her marka **sol (çift numaralı) sayfada** başlar.
- Marka bölümü **çift sayıda sayfaya** tamamlanır (gerekirse son sayfaya ambiyans görseli/not alanı) → bir sonraki marka yine
  açılımla başlar, karşılıklı sayfalar hep aynı markaya ait olur.
- Her sayfada üst şerit: marka logosu + grup adı; kenarda marka renginde sekme (profesyonel kataloglardaki gibi).
- **Marka sırası (kullanıcı onaylı)**: Fırat · ECA (ardından Elginkan kardeşleri Serel, Aryak, Borel) · KAS · Filli Boya (+Dalmaçyalı) ·
  Baumit · Sika · sonra ürün alanına göre: Fawori, Marshall · İzocam, Onduline, Weber, MBT, BTM, UKS, Çukurova · Poelsan ·
  Sumak, Baymak, Teknopomp · Orka, Samir, Stina · Güral, Güral Seramik, Yurtbay · Visam, Mesa, Dömark · Tesay Bu, Işık ·
  İzeltaş, Dekor, İstanbul Fırça, Bosch, Knipex, KL Pro, Wonder · Kale Kilit, Yuma · diğerleri. (Panelde `sira` ile değişir.)
- Markasız ürünler sonda "Genel Ürünler" bölümünde (ürün grubuna göre).

## 7. Uygulama sırası

1. F6.2 Şema + panel + sayfalar (yeni ağaç, `modeller`, marka sayfası, iki menü) — mevcut içerik yeni gruplara taşınır, site
   çalışır durumda kalır.
2. F6.3 Katalog çıkarma aracı (metin + gömülü görsel, fiyat sütunları atılarak).
3. F6.4 Marka marka: katalogdan taslak seri listesi → **kullanıcı onayı** → içe aktar → görseller (zayıfları değiştir).
4. F6.6 PDF yeni düzen.

## 8. Onay (2026-11-19)

Kullanıcı: ürün grupları ağacı (§3) ve PDF düzeni (§6, her marka sol sayfada açılımla, çift sayfaya tamamlanır) onaylandı.
Marka sırası: "başta Fırat, ECA, KAS, Filli, Baumit, Sika; gerisi sende" → §6'daki sıra.
