# Katalog Yapısı

Beyin takımının hazırladığı, kullanıcının onayladığı kart listesi (2026-11-14).
Bu dosya kategori ağacının ve kart adlarının kaynağıdır. Değişiklik yalnızca kullanıcı/beyin takımı onayıyla yapılır.

Kart tipleri (K11): `grup` = ürün ailesi tek kart · `marka_tur` = marka + tür, örneklemli · `urun` = tek ürün, teknik detaylı.
Toplam: 256 kart.

**Güncelleme 2026-11-16 (Paket 001 ile, beyin takımı kararı):** PE100 ek parçaları → Fırat; PEX kartı adı ve markaları;
ProContact Sıva & Şap → Mantolama; resmi yazımlar DuoContact, DuoFix, StarTherm, CreativTop. Toplam kart sayısı değişmedi (213).
Alt kategori slug'ları: `su-yalitimi-kimyasal`, `su-yalitimi-membran`, `mantolama-sistem`, `mantolama-boya`.


**Güncelleme 2026-11-17 (Paketler 002–007, beyin takımı kararları):** Kart listesi siteden yeniden üretildi
(`node scripts/katalog-yapisi.ts`). Ad, yer ve marka kararları her paketin NOTLAR.md > "Beyin takımı kararları" bölümünde.
Öne çıkanlar: ad sadeleştirmeleri (parantez içi açıklamalar), Momento Max ve Marshall Fit → İç Cephe, mantolama taşyünleri ve
boya mantolama kartları → Yapı Kimyasalları › Mantolama (Boya altında Mantolama ve Ekonomik Seri açılmadı), Keski & Murç ve
KBS Çiroz → El Aletleri (Tesisatçı Aletleri ikiye ayrıldı → 214 kart), "Kale" el aletleri → KL Pro, Onduline Şıngıl → UKS Şıngıl.










## 1. Tesisat Boruları & Ek Parçalar (21 kart)

### Altyapı & Drenaj
- Drenaj Boruları (Delikli / Tünel Tipi) — `grup` — Fırat
- Drenaj Kanalları & Izgaralar — `grup` — çeşitli
- Fırat Triplex Koruge Altyapı Boruları & Ek Parçaları — `grup` — Fırat
- Rögar Setleri — `grup` — çeşitli

### Metal Boru & Ek Parça
- Galvaniz Boru & Ek Parçaları — `grup` — çeşitli
- Patent Dirsek, Flanş & Pik Kolye — `grup` — çeşitli
- Sarı (Pirinç) Ek Parçalar — `grup` — çeşitli
- Siyah Boru & Ek Parçaları — `grup` — çeşitli

### PE İçme Suyu
- Fırat PE100 İçme Suyu Boruları (Kangal) — `grup` — Fırat
- PE100 Kaynaklı & Elektrofüzyon Ek Parçalar — `grup` — Fırat
- Poelsan Kaplin (Sıkıştırmalı) Ek Parçalar — `grup` — Poelsan

### PEX & PE-RT
- PEX Bağlantılar & Vanalar — `grup` — Fırat

### PPRC Temiz Su
- Fırat PPRC Borular (PN20 / PN25) — `grup` — Fırat
- Fırat PPRC Ek Parçaları — `grup` — Fırat
- Fırat PPRC Kompozit (Cam Elyaf Takviyeli) Borular — `grup` — Fırat
- Fırat PPRC Vanalar — `grup` — Fırat

### PVC Atık Su
- Fırat Dublex PVC Atık Su Boruları — `grup` — Fırat
- Fırat Gediz PVC Atık Su Boruları — `grup` — Fırat
- Fırat PVC Atık Su Ek Parçaları — `grup` — Fırat
- Fırat Residence Sessiz Atık Su Sistemi — `grup` — Fırat

### Yağmur Oluğu
- Fırat PVC Yağmur Oluğu Sistemi — `grup` — Fırat

## 2. Vanalar (20 kart)

### Küresel Vanalar
- ECA Su Küresel Vanaları — `seri` — ECA
- KAS Su Küresel Vanaları — `seri` — KAS
- Türkoğlu Büyük Çap Küresel & Yangın Vanaları — `grup` — Türkoğlu

### Radyatör & Termostatik Vanalar
- ECA Radyatör Vanaları & Rakorları — `seri` — ECA
- ECA Termostatik Radyatör Vanaları — `seri` — ECA
- KAS Radyatör & Termostatik Vanalar — `seri` — KAS

### Sayaç & Ölçü
- Manometre & Termometre — `grup` — çeşitli
- Su Sayaçları & Kalorimetre — `grup` — KAS

### Şiber & Gaz Vanaları
- ECA Doğalgaz Küresel Vanaları — `seri` — ECA
- ECA Şiber, Stop & Kosva Vanaları — `seri` — ECA
- KAS Gaz Küresel Vanaları — `seri` — KAS
- KAS Şiber, Stop Vana & Filtreler — `seri` — KAS

### Tesisat Valfleri
- Ara Kesme Valfleri — `grup` — KAS · Visam
- ECA Çekvalfler — `seri` — ECA
- ECA Emniyet Valfleri — `seri` — ECA
- ECA Filtreler — `seri` — ECA
- ECA Flatörler — `seri` — ECA
- ECA Otomatik Hava Atıcılar — `seri` — ECA
- ECA Su Basınç Düşürücüleri — `seri` — ECA
- KAS Çekvalf, Flatör & Basınç Düşürücü — `seri` — KAS

## 3. Bağlantı & Flex (5 kart)

### Flex Hortumlar
- Doğalgaz Boru Kelepçeleri & Tüpgaz Hortumu — `grup` — Baykara
- KAS Doğalgaz Flexleri — `seri` — KAS
- KAS Su & Fancoil Flexleri — `seri` — KAS

### Rakor, Conta & Sızdırmazlık
- Conta, Teflon & Sızdırmazlık — `grup` — çeşitli
- KAS Rakor, Nipel & Uzatmalar — `seri` — KAS

## 4. Isıtma (11 kart)

### Kombi Aksesuarları
- Kombi & Radyatör Aksesuarları — `grup` — Fırat

### Radyatör & Havlupan
- ECA Havlupanlar — `grup` — ECA
- ECA Panel Radyatörler — `grup` — ECA

### Yerden Isıtma
- Borel Yerden Isıtma Boruları — `seri` — Borel
- ECA Yerden Isıtma Kollektörleri — `seri` — ECA
- ECA Yerden Isıtma Kontrol & Aksesuarları — `seri` — ECA
- Fırat PE-RT Yerden Isıtma Boruları — `grup` — Fırat
- KAS Yerden Isıtma Kollektörleri — `seri` — KAS
- KAS Yerden Isıtma Kontrol & Aksesuarları — `seri` — KAS
- Yerden Isıtma Aksesuarları — `grup` — Fırat
- Yerden Isıtma Kollektörleri — `grup` — Fırat

## 5. Armatür (Batarya & Duş) (42 kart)

### Ankastre Sistemler
- ECA Termostatik Bataryalar — `seri` — ECA

### Banyo Bataryaları
- Diğer Marka Bataryalar — `marka_tur` — Foma
- ECA Küvet Bataryaları — `seri` — ECA
- KAS Banyo Bataryaları — `marka_tur` — KAS

### Batarya Serileri
- Aryak Fast Serisi — `seri` — Aryak
- Aryak Fia Serisi — `seri` — Aryak
- Aryak Fine Serisi — `seri` — Aryak
- Aryak Liona Serisi — `seri` — Aryak
- Aryak Lite Serisi — `seri` — Aryak
- Aryak Lucia Serisi — `seri` — Aryak
- Aryak Melia Serisi — `seri` — Aryak
- ECA Dalia Serisi — `seri` — ECA
- ECA Dream Serisi — `seri` — ECA
- ECA Icon Serisi — `seri` — ECA
- ECA Lia Serisi — `seri` — ECA
- ECA Life Serisi — `seri` — ECA
- ECA Luna Serisi — `seri` — ECA
- ECA Niobe Serisi — `seri` — ECA
- ECA Nita Serisi — `seri` — ECA
- ECA Royal Serisi — `seri` — ECA
- ECA Spylos Serisi — `seri` — ECA
- ECA Tiera Serisi — `seri` — ECA

### Duş Setleri & Tepe Duşları
- Aryak Duş Kolonları & Duş Başlıkları — `seri` — Aryak
- Aryak El Duşu Takımları — `seri` — Aryak
- Duş Setleri (diğer markalar) — `marka_tur` — çeşitli
- ECA Duş Kolonları, Tepe Duşları & Ankastre Duş Setleri — `seri` — ECA
- ECA El Duşu Takımları — `seri` — ECA
- KAS Duş Setleri — `marka_tur` — KAS
- Mesa Duş Setleri — `marka_tur` — Mesa

### Eviye (Mutfak) Bataryaları
- ECA Özel Mutfak Bataryaları — `seri` — ECA
- KAS Eviye (Mutfak) Bataryaları — `marka_tur` — KAS

### Lavabo Bataryaları
- ECA Fotoselli Bataryalar & Zaman Ayarlı Musluklar — `seri` — ECA
- KAS Lavabo Bataryaları — `marka_tur` — KAS

### Musluklar & Taharet
- Aryak Musluklar & Ara Kesme Valfleri — `seri` — Aryak
- ECA Ara Musluklar & Taharet Muslukları — `seri` — ECA
- ECA Musluklar & Klozet Bataryası — `seri` — ECA
- KAS Filtreli & Bahçe Muslukları — `seri` — KAS
- KAS Musluklar & Taharet Muslukları — `marka_tur` — KAS
- Musluklar (diğer markalar) — `marka_tur` — Hazal

### Yedek Parça & Uzatma
- Aryak Sifonlar — `seri` — Aryak
- Batarya Yedek Parça & Bağlantıları — `grup` — çeşitli
- ECA Sifonlar & Uzatmalar — `seri` — ECA

## 6. Seramik Sağlık Gereçleri (9 kart)

### Engelli & Çocuk Serisi
- Serel Bedensel Engelli & Çocuk Serisi — `seri` — Serel

### Klozet Kapakları
- Serel Klozet Kapakları — `seri` — Serel

### Klozetler
- Güral Klozetler — `marka_tur` — Güral
- Serel Asma Klozetler — `seri` — Serel
- Serel Duvara Sıfır (BTW) Klozetler & Rezervuarlar — `seri` — Serel

### Lavabolar
- Güral Lavabolar — `marka_tur` — Güral
- Serel Duvar Lavaboları, Ayaklar & Tezgah Altı Lavabolar — `seri` — Serel
- Serel Tezgah Üstü & Etajerli Lavabolar — `seri` — Serel

### Pisuvar & Hela Taşı
- Serel Pisuvar & Hela Taşları — `seri` — Serel

## 7. Gömme Rezervuar & İç Takımlar (4 kart)

### Gömme Rezervuar & Kumanda Panelleri
- Serel Gömme Rezervuarlar — `seri` — Serel
- Serel Kumanda Panelleri — `seri` — Serel

### Rezervuar İç Takımları
- Rezervuar İç Takımları & Klozet Kapakları — `grup` — Visam
- Serel Rezervuar İç Takımları — `seri` — Serel

## 8. Banyo Mobilyası & Duşakabin (4 kart)

### Banyo Dolapları
- Orka Banyo Dolapları — `marka_tur` — Orka
- Samir Banyo Dolapları — `marka_tur` — Samir

### Duş Tekneleri
- Duş Tekneleri — `marka_tur` — Samir · Stina

### Duşakabinler
- Samir Duşakabinler — `marka_tur` — Samir

## 9. Banyo Aksesuarları & Süzgeçler (7 kart)

### Banyo Aksesuarları
- Banyo Aksesuarları (diğer markalar) — `marka_tur` — çeşitli
- Dömark Banyo Aksesuarları — `marka_tur` — Dömark
- Mesa Banyo Aksesuarları — `marka_tur` — Mesa
- Serel Banyo Aksesuarları — `seri` — Serel

### Sifon & Kada
- Sifonlar & Kadalar — `grup` — Fırat · Visam

### Yer Süzgeçleri & Duş Kanalları
- Dömark Paslanmaz Süzgeçler — `marka_tur` — Dömark
- Yer Süzgeçleri & Duş Kanalları — `grup` — çeşitli

## 10. Pompa & Su Deposu (3 kart)

### Pompalar
- Dalgıç Pompalar — `grup` — Sumak
- Hidroforlar — `grup` — Baymak · Sumak · Teknopomp

### Su Depoları
- Polietilen Su Depoları — `grup` — çeşitli

## 11. Seramik, Karo & Profil (8 kart)

### Karolar
- Güral Seramik Karolar — `marka_tur` — Güral Seramik
- Yurtbay Seramik — Ahşap Görünümlü — `marka_tur` — Yurtbay Seramik
- Yurtbay Seramik — Duvar Fayansı & Dekorlar — `marka_tur` — Yurtbay Seramik
- Yurtbay Seramik — Mermer Görünümlü — `marka_tur` — Yurtbay Seramik
- Yurtbay Seramik — Metro, Mozaik & Küçük Format — `marka_tur` — Yurtbay Seramik
- Yurtbay Seramik — Taş & Beton Görünümlü — `marka_tur` — Yurtbay Seramik

### Seramik & Parke Profilleri
- Seramik & Parke Bitiş / Köşe Profilleri — `grup` — çeşitli

### Uygulama Malzemeleri
- Seramik Seviye (Tesviye) Sistemi — `grup` — çeşitli

## 12. Yapı Kimyasalları (37 kart)

### Beton Katkısı
- Sika Antisol E-200 (kür malzemesi) — `urun` — Sika
- Sika Plastocrete N TR — `urun` — Sika
- Sika Separol W3 (kalıp ayırıcı) — `urun` — Sika
- Sika-1 TR (su geçirimsizlik katkısı) — `urun` — Sika

### Dekoratif Kaplama
- Baumit Classico Dekoratif Kaplamalar — `urun` — Baumit
- Baumit CreativTop — `urun` — Baumit
- Baumit Uni Primer Dış Cephe Astarı — `urun` — Baumit

### Mantolama
- Baumit DuoContact Yapıştırma & Sıva Harcı — `urun` — Baumit
- Baumit DuoFix Yalıtım Yapıştırma Harcı — `urun` — Baumit
- Baumit Mantolama Aksesuarları (file, dübel, köşe profili) — `urun` — Baumit
- Baumit ProContact Sıva Harcı — `urun` — Baumit
- Baumit StarTherm Karbonlu EPS — `urun` — Baumit
- Fawori Optimix Mantolama Sistemi — `urun` — Fawori
- Filli Dalmaçyalı Mantolama Dübeli — `urun` — Filli Boya
- İzocam Manto Taşyünü Levha — `urun` — İzocam
- İzocam Terrawool Manto Taşyünü — `urun` — İzocam

### Mastik, Silikon, Köpük & Yapıştırıcı
- Sika AnchorFix S1 Kimyasal Dübel — `urun` — Sika
- Sika Boom Poliüretan Köpükler — `urun` — Sika
- Sika Mastik & Silikonlar (Sikaflex, Sikacryl, Sikasil) — `urun` — Sika
- Sikabond 181 Hızlı MDF Yapıştırıcı — `urun` — Sika
- Yapıştırıcılar (mermer, epoksi, süpürgelik) — `grup` — Selsil

### Seramik Yapıştırıcı & Derz
- Baumit Basic — `urun` — Baumit
- Baumit Bianco (beyaz) — `urun` — Baumit
- Baumit Flex Uni — `urun` — Baumit
- Baumit Flexo — `urun` — Baumit
- Baumit Premium Fuga (standart & silikonlu) — `urun` — Baumit

### Sıva & Şap
- Baumit All in Beton — `urun` — Baumit
- Baumit Brüt Beton Astarı — `urun` — Baumit
- Baumit Ionit Finish Saten Alçı — `urun` — Baumit
- Baumit Nivello Uno Yayılan Şap — `urun` — Baumit
- Weber Dress İnce Sıva — `urun` — Weber

### Su Yalıtımı
- Baumit Protect 2K (tam / yarı elastik) — `urun` — Baumit
- Sika MonoPlug 596 Seal (su tıkacı) — `urun` — Sika
- SikaSwell A Su Tutucu Bant — `urun` — Sika

### Zemin & Astar
- MBT Seramik Astarı 303 — `urun` — MBT
- Sika Floor-3 Quartz Yüzey Sertleştirici — `urun` — Sika
- Weber Yüzey Sertleştirici — `urun` — Weber

## 13. Yalıtım & Çatı (17 kart)

### Çatı Kaplama & Aksesuar
- Çatı & Yalıtım Yardımcı Malzemeleri — `grup` — çeşitli
- Onduline Mahya & Montaj Aksesuarları — `urun` — Onduline
- Onduline Ondubant & İsobant Yalıtım Bantları — `urun` — Onduline
- Trapez Aksesuarları (mahya, karlık, vida, semer) — `grup` — çeşitli
- Trapez Saç — `grup` — çeşitli
- UKS Şıngıl (Shingle) — `urun` — UKS

### Isı & Ses Yalıtımı
- İzocam Camyünü Boru Kılıfları — `urun` — İzocam
- İzocam Camyünü Çatı Şiltesi (Tip 400) — `urun` — İzocam
- İzocam Maxibord XPS Levhalar — `urun` — İzocam
- İzocam Taşyünü Ara Bölme Levhası — `urun` — İzocam

### Membranlar
- BTM Bitümer BTR 200 Likit Membran — `urun` — BTM
- BTM Ekobit Membran — `urun` — BTM
- BTM Elasto Dry Roof — `urun` — BTM
- Çukurova Bitümlü Membranlar & Fondaline — `urun` — Çukurova · Onduline
- Onduline Bitüline Astar — `urun` — Onduline
- Onduline Bitümlü Membranlar — `urun` — Onduline
- Onduline Ondulikit Likit İzolasyon — `urun` — Onduline

## 14. Boya (24 kart)

### Ahşap & Metal
- Fawori Panel Kapı Boyası — `urun` — Fawori
- Fawori Sentetik Antipas — `urun` — Fawori
- Marshall Enamel Yağlı Boya & Antipas — `urun` — Marshall

### Astar & Yardımcı
- Fawori Astarlar (dönüşüm, konsantre, sentetik) — `urun` — Fawori
- Filli Bepermo — `urun` — Filli Boya
- Filli Kapatan — `urun` — Filli Boya
- Filli Panzer Astar — `urun` — Filli Boya
- Filli Sutut — `urun` — Filli Boya
- Marshall Astarlar (Akrikor örtücü, geçiş, izolasyon) — `urun` — Marshall
- Marshall Sentetik Tiner — `urun` — Marshall

### Dış Cephe
- Filli Aqusto Silan — `urun` — Filli Boya
- Filli Nucleus Dış Cephe Boyası — `urun` — Filli Boya
- Marshall Akrikor Silikonlu + Akrilik Dış Cephe — `urun` — Marshall

### İç Cephe
- Fawori Silikonlu Mat — `urun` — Fawori
- Filli Momento Max — `urun` — Filli Boya
- Marshall Fit Serisi — `urun` — Marshall
- Marshall Silikonlu Mat / Özel Mat / Maximum — `urun` — Marshall

### Özel Boyalar
- Filli Yol Çizgi Boyaları — `urun` — Filli Boya

### Tavan
- Fawori Extra Tavan Boyası — `urun` — Fawori
- Filli Betakril Tavan Boyası — `urun` — Filli Boya
- Marshall Tavan Boyası — `urun` — Marshall

### Tiner & Boya Yardımcıları
- Boya Yardımcıları (karıştırıcı, örtü, sökücü, toz oksit) — `grup` — çeşitli
- Sprey Boyalar — `grup` — Master
- Tinerler — `grup` — Genç

## 15. Fırça, Rulo & Boya-Sıva Aletleri (3 kart)

### Fırça & Rulo
- Fırça & Rulolar — `grup` — Dekor · Master

### Mala, Ispatula & Uygulama Aletleri
- Mala, Ispatula & Sıva Aletleri — `grup` — Dekor · Master
- Silikon & Köpük Tabancaları — `grup` — Master

## 16. El Aletleri & Makineler (15 kart)

### El Aletleri
- Anahtarlar, Kaynak & Diğer El Aletleri — `grup` — çeşitli
- Çekiç, Keser, Balyoz & Kazma — `grup` — Master · Yakar · İzeltaş
- Kalkanlı Keski & Murç — `grup` — çeşitli
- KBS Çiroz & Çiroz Anahtarları — `grup` — KBS · Master
- Merdivenler — `grup` — Master · Saraylı
- Ölçüm Aletleri (metre, su terazisi, şakul, gönye, çırpı) — `grup` — Master · İzeltaş · Dekor
- Pense, Kerpeten, Tornavida & Kesici El Aletleri — `grup` — İzeltaş · Knipex · Yakar · Master

### Makineler
- Elektrikli & Akülü El Aletleri — `grup` — KL Pro · Wonder
- Elektrikli Vinçler & Kaldırma Sapanları — `grup` — KL Pro · Master
- Seramik & Mermer Kesme Makineleri — `grup` — Master

### Tesisatçı Aletleri
- Tesisatçı Aletleri (boru anahtarı, boru makası, boru çıkarıcı) — `grup` — çeşitli

### Uçlar & Sarf
- Kesici Diskler, Elmas Testereler & El Testereleri — `grup` — Master · Bosch
- Master Panç Delik Testereleri — `grup` — Master
- Matkap Uçları (SDS, HSS, ağaç, cam-seramik) — `grup` — Master · Bosch
- Zımparalar & Flap Diskler — `grup` — Master

## 17. Hırdavat & Nalburiye (26 kart)

### Bağlantı Elemanları
- Civata, Somun, Pul & Klemens — `grup` — çeşitli
- Çiviler — `grup` — çeşitli
- Dübeller — `grup` — çeşitli
- Vidalar — `grup` — çeşitli

### Bahçe
- Bahçe Aletleri (makas, tırmık, kürek) — `grup` — Master · Yapar
- Bahçe Telleri — `grup` — Samtel
- El Arabası & Tekerlekler — `grup` — Yapar · Master
- Hortumlar & Hortum Bağlantıları — `grup` — çeşitli

### Bant & Yapıştırıcı
- Bantlar (maskeleme, ikaz, çift taraflı, alüminyum) — `grup` — Master
- Silikon, Yapıştırıcı, Sprey Yağlayıcı & Pas Sökücü — `grup` — Master

### Diğer Nalburiye
- Diğer Nalburiye (branda, naylon, çuval, vantuz, temizlik) — `grup` — çeşitli

### İş Güvenliği
- Baret, Gözlük & Kaynak Maskesi — `grup` — çeşitli
- Emniyet Kemeri, İkaz Yeleği, Yağmurluk & Güvenlik Filesi — `grup` — çeşitli
- İş Ayakkabısı & Çizmeler — `grup` — Gezer · Master
- İş Eldivenleri — `grup` — AKY · Beybi

### Kaba İnşaat
- Kalıp Yağı, Derz Dolgu & Diğer — `grup` — Master
- Paspayları — `grup` — çeşitli
- Sıva, Alçı & Köşe Profilleri — `grup` — Master
- Tie-Rot, Rot Mili & Aksesuarları — `grup` — çeşitli

### Kaldırma & Bağlama
- Halat, Makara & İskele Kelepçesi — `grup` — çeşitli
- Kelepçe, Zincir Kilidi & Karabina — `grup` — çeşitli
- Teller (kümes, rabız, bağlama, elek) — `grup` — çeşitli

### Kapı & Pencere
- Asma Kilitler — `grup` — Kale Kilit · Yuma · Master
- Fırat Perde Rayları — `grup` — Fırat
- Menteşe, Kapı Yayı & Panjur — `grup` — çeşitli

### Yangın
- Yangın Tüpü, Dolabı & Sprinkler — `grup` — çeşitli
