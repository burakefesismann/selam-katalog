# Durum

> Her oturumun başında oku, sonunda güncelle. Kısa tut.

## Şu an
- Aktif görev: — (sıradaki: /gorsel eksikler oturum 23)
- Site: https://burakefesismann.github.io/selam-katalog/
- Faz: 3 — Gerçek içerik ve görseller

## Yarım kalan
- **`/gorsel eksikler` — paketler 002–007 görselleri** (2026-11-17 başladı). Görselli: 182/214. Paket 001'in 11 kartı kullanıcıda (dokunma).
  - Yapılan (oturum 1): 10 ECA/Serel kartı (lavabo/eviye bataryası, havlupan, panel radyatör, termostatik vana, küresel vana,
    ara musluk, Serel klozet/pisuvar/lavabo).
  - Yapılan (oturum 2): banyo aksesuarı, Y filtre, pürjör, rakor, tepe duşu, ara kesme (krom), Tiera ankastre, Life banyo
    bataryası, çekvalf (2 görsel, küçük → K14 büyütüldü), basınç düşürücü (ECA'da büyük görsel yok → KAS resmi görseli).
  - Yapılan (oturum 3): emniyet ventili, gaz vanası, şiber vana, su flexi, KAS banyo/lavabo bataryası, KAS duş seti (440 px →
    K14), Serel engelli seti, Serel gömme rezervuar (2: rezervuar K14 + krom panel).
  - Yapılan (oturum 4): doğalgaz flex seti, KAS taharet musluğu, Filli 9 kart (Aqusto Silan, Bepermo, Betakril Tavan, Kapatan,
    Momento Max, Nucleus, Panzer Astar, Sutut, Yol Çizgi).
  - Yapılan (oturum 5): Fawori 5 (Dönüşüm Astarı, Tavan Extra, Panel Kapı, Sentetik Antipas, Silikonlu Mat), Marshall 5
    (Geçiş Astarı, Enamel Antipas, Fit Silikonlu, Silikonlu Mat, Tavan Boyası).
  - Yapılan (oturum 6): İzocam 4 (boru kılıfı, çatı şiltesi, manto taşyünü, ara bölme; her biri ürün + uygulama, 690 px → K14),
    Onduline bitümlü membran (Bituline Prima, 620 px → K14), Fawori Optimix (karbonlu EPS, 800 px).
  - Yapılan (oturum 7): Yurtbay 5 (resmi mekân fotoğrafları, 1920 px), İzeltaş 3 (keser, opak pense, 5 m metre).
  - Yapılan (oturum 10): Akyüzler Nalburiye (Trabzon toptancı = K15 "dağıtıcı" sınıfı, pazaryeri değil) sitesinden 8 kart:
    çiviler, el arabası (Yaparlar YPR 1.20), bahçe aletleri, iş ayakkabısı/çizme, baret, emniyet kemeri/ikaz yeleği, merdiven,
    mala. Çoğu 600 px → K14 büyütüldü. Merdiven (Master) görselinde kırmızı açıklama yazısı vardı → alüminyum A tipi kullanıldı.
    Eldiven: sitede mağazadaki model/renk yok → yine atlandı.
  - **Akyüzler yöntemi:** https://www.akyuzlernalburiye.com.tr — ürünler kategori (POST katid) → marka → alt kategori
    (&urun=1) → ürün (&tur_id=). Sayfalar windows-1254. Tüm dizin (961 ürün: kategori, marka, alt kategori, ad, görsel, sayfa)
    `.gorsel-orijinal/akyuzler.tsv` içinde (gitignore'da; yeniden üretmek için `.gorsel-orijinal/akyuzler-tara.mjs <çıktı.tsv>`).
    Eşleştirme: `node .gorsel-orijinal/eslestir.mjs <tsv> <hedef.json>` (hedef: {slug: "regex"}, Türkçe harfler sadeleştirilmiş).
    Bağlama: `node .gorsel-orijinal/bagla.mjs <liste.json>`. kaynak_url'den `&marka=` kısmı çıkarılır (Türkçe harf bozuluyor).
  - Yapılan (oturum 11, Akyüzler): paspayları, tie-rot, silikon tabancaları, bantlar, teller (rabız + elek), su zımparası,
    branda/streç, zincir kilidi/karabina. Kalıp yağı görseli "Mould" marka (kart Master) → kullanılmadı.
  - Yapılan (oturum 12, Akyüzler — Master ürünleri): KBS çiroz (Master kollu çiroz anahtarı; soluk yazı kalıntısı açık
    pikseller beyaza çekilerek temizlendi), sprey/yapıştırıcı/silikon (3), vidalar, trapez vidası, seramik kesme (Class+Titan),
    sapan/spanzet, etriye kolu + elektrod, klemens. Master'ın resmi sitesi yok (master.com.tr = Master Kauçuk, başka firma).
  - Yapılan (oturum 13): Pakkens MG 063 manometre (görsel ürün PDF'inden çıkarıldı: pakkens.com/en/product-export/<kod>
    → PDF; 430×594 görsel + ayrı alfa maskesi birleştirildi, K14), KAS pirinç redüksiyon (sarı pirinç ek parçalar).
  - Yapılan (oturum 14): Trakya Döküm (trakyadokum.com.tr/endustriler/boru-ek-parcalari.php, 960 px, galvaniz + siyah dirsek/te/nipel
    — galvaniz ve siyah boru kartları 3'er görsel), gevşetilmiş kuralla Akyüzler'den eldiven (Beybi), sprey boya (Napron),
    kalıp yağı (Mould), hortum seti + hortum eki, kapı tel yayı; drenaj kanalı (bosta.com), PE su deposu (idefix).
    Engelli: Koçtaş/Trendyol/n11/Hepsiburada (403/000), knauf.com (403). nalburtek.com görselleri filigranlı (Watermark=true) → alınmaz.
  - Yapılan (oturum 15, gevşek kural): kesici diskler + matkap uçları + boya karıştırıcı (Akyüzler/Master), flatör (KAS),
    İzocam XPS (Foamboard görseli, Maxibord kartı) ve Terrawool (İzocam manto taşyünü görseli), KAS eviye (Reyhan kuğu),
    rezervuar iç takım (Serel Kibele), Serel klozet kapağı (Leona Slim). Bunlar "Kullanıcıdan beklenenler"deki eski
    eksik listesinden düşüldü (ayrıca Beybi eldiven, Fırat dışındakiler).
  - Yapılan (oturum 16): Sika Boom (global Boom broşür PDF'inden kutu görseli 119×528 + alfa maskesi, K14), SikaSwell
    (tur.sika.com pim2 görseli 210 px, K14), rögar (mesateknik.com MTR 40 katalog kartı: ürün kırpıldı, köşelerdeki yazı/logo
    beyazla kapatıldı; panel.mesateknik.com sadece http ile iniyor). Sika ülke sitelerinde ürün sayfalarında genelde
    ambalaj fotoğrafı YOK (AnchorFix'te yine çizim). Mesa süzgeç görselleri pembe zemin + yazılı banner → kullanılmadı.
  - Yapılan (oturum 17): Akyüzler'den boya rulosu (2), kalkanlı murç/keski, teflon bant, fileli köşe profili + sıva filesi;
    kalıp yağı görseli "Mould" yerine Master plywood kalıp ayırıcı ile değiştirildi (--uzerine-yaz). Dübel: Commons
    "S-Plug 8mm" (kamu malı, atıf gerekmez). Commons'ta halat (iskele sahnesi) ve panç (paslı, kullanılmış) beğenilmedi.
  - Yapılan (oturum 18, gevşek kural — "diğer markalar" kartlarına ECA/KAS benzer ürün görselleri): sifon (ECA), batarya
    uzatma (ECA), banyo aksesuarı diğer (ECA Rita), musluk diğer (KAS Derya), duş seti diğer (KAS Raflesya), batarya diğer
    (KAS Lilyum), boru anahtarı (İzeltaş). Alt metinlerde marka adı yazılmadı (kart başka marka). KAS TR ?s= araması çalışmıyor →
    kategori sayfalarından ürün linki al.
  - Yapılan (oturum 19): seviye sistemi (kalekim.com Level Master pense + takoz, 2000 px; markalı torba görseli
    kullanılmadı), köşe/bitiş profili (Profilpas = Mapei, mapei.com/profilpas Cerfix Protrim, 1080 px), iskele kelepçesi
    (Akyüzler "Master İskele Kelepçesi", K14), Onduline mahya (in.onduline.com ridge, kırmızı + yeşil), Onduband bant
    (ph.onduline.com), Bituline astar (ph.onduline.com — Türkçe etiketli 17 kg teneke). **Onduline yöntemi:** başka ülke
    siteleri (ph., in., uk.) → /sites/onduline_xx/files/styles/1199x840/public/... (TR sitesinde olmayan ürünler orada).
    Commons bu oturumda "Too many requests" verdi (CC0 panç: One_and_one_quarter_inch_hole_saw_bit.jpg — sonra indir).
    Marshall Akrikor: sitede 160 px packshot, broşür PDF'inde ambalaj görseli yok. Sika TR sayfalarında yine packshot yok.
  - Yapılan (oturum 20): Master panç (bosch-professional.com bi-metal set — testerelerde BOSCH yazıyor, geçici),
    Çukurova membran/Fondaline (uk.onduline.com Fondaline broşür PDF'inden rulo fotoğrafı 1404 px), UKS şıngıl (ph.onduline.com
    Bardoline: kırmızı + yeşil şerit + gri çatı uygulaması; markasız). Commons hâlâ "Too many requests" (upload.wikimedia dahil).
    Sonuçsuz: Fondaline'ın web sayfalarında ürün fotoğrafı yok; Onduline TR temel sayfasındaki ruloların hepsi Bituline markalı;
    Ondulikit başka ülkede yok; ECA'da yerden ısıtma aksesuarı ve yer süzgeci yok; Dömark'ın sitesi bulunamadı; MBCC (mbcc.sika.com) boş sayfa.
  - Yapılan (oturum 21, kullanıcı "internette bulunur, gayret"): Sika 6 kart — **Sika yöntemi:** irl.sika.com / gbr.sika.com
    KATEGORİ sayfalarında dynamicmedia.sika.com ambalaj fotoğrafları var (ürün sayfasının kendisinde çoğu zaman yok). Tarama:
    scratchpad sikadm.sh + kategori listesi (695 görsel adı). Sika-1 (5 L bidon), AnchorFix-1 (kart S1), Antisol-3E (kart E 200),
    Sikaflex-11FC (mastik/silikon kartı), Sikafloor-2 SynTop (kart Sikafloor-3 — geçici), Separol (global broşür PDF'inden
    püskürtme fotoğrafı; bidon görselinin etiketi büyütmede bozuldu → kullanılmadı). Yangın tüpü + dolap: dalgicyangin.com.tr
    (resmi, 2080 px; .com değil .com.tr). Trapez saç: kjg.sk (Slovak üretici) + genclertel.com.tr. Tinerler (Genç): DYO resmi
    sentetik tiner (K14). Sonuçsuz: BTM (btm.co hâlâ kapalı), Güral (satıcılar Trendyol/Koçtaş — engelli), Marshall tiner (sadece
    Özbekistan şişe ambalajı), idefix yangın tüpleri (çoğu yazı bindirmeli). Sika'da kalan: Plastocrete, MonoPlug/596, SikaBond-181.
  - Yapılan (oturum 22): Sika son 3 — Plastocrete N (tha.sika.com resmi), MonoPlug kartı ← Sika MonoTop-108 Water Plug
    (irl.sika.com, 5 kg tıkaç harcı), SikaBond-181 kartı ← Everbuild (Sika markası) Mitre Fast siyanoakrilat+aktivatör seti
    (irl.sika.com, 2 görsel). Weber: tüm weber siteleri + PDF'ler bot doğrulamalı (403) → satıcı siteleri: weber.dress ince sıva
    (umityapimarket.com, 768 px; büyütmede küçük yazılar bozuldu → büyütülmedi, "küçük"), weber.floor YS 4 (birlikcati.com.tr)
    + YS 6 (itcyapi.com). Güral: sozerisi.com (Eskişehir bayi; /upload/urunler/urun-<ad>.jpg) Uno siyah + Jade altın şerit +
    Jade kırmızı klozet, siyah-altın oval lavabo; Güral Seramik Misha (itcyapi.com karo + dushome.com.tr uygulama).
    Seycan görselinde satıcı adı var → alınmadı. Yardımcı: scratchpad ogal.sh (sayfalardan og:image toplu indirir).
    Kalan Güral: banyo aksesuarları (Quare) — satıcıda bulunamadı.
  - Sıradaki adaylar (gevşek kural): Sika (başka ülke sika.com sayfaları), Onduline (başka ülke siteleri), Bosch, Weber (başka
    ülke weber siteleri), rögar, dübel, fırça/rulo (Rulomas/Akyüzler), halat, yer süzgeci/duş kanalı (mesateknik.com), seviye
    sistemi, köşe profilleri, trapez saç, yangın tüpü, Mesa/Dömark/Samir duşakabin, Güral (tarayıcıdan kaydetme gerekli).
  - **DURUM (oturum 13 sonu):** İnternetten bulunabilecekler büyük ölçüde tükendi. Kalan 91 kart: Paket 001'in 11'i (kullanıcıda),
    siteleri engelli/görselsiz markalar (Sika 10, Onduline 5, Güral 3+1, BTM 3, Weber 2, Bosch 2, Fırat 3, ECA/KAS birkaç,
    Mesa 2, Dömark 2, Samir duşakabin, UKS, Genç tiner, Hazal, Foma...) ve markasız tesisat/nalbur kalemleri (galvaniz, siyah boru,
    patent dirsek/flanş, rögar, PE depo, drenaj kanalı, yer süzgeci, conta/teflon, batarya yedek, dübel, hortum, fırça/rulo,
    sprey boya, halat, menteşe, kalıp yağı, keski, seviye sistemi, profil, trapez saç, yangın tüpü...). Commons'ta bunlara
    uygun temiz CC0/PD ürün fotoğrafı yok. Öneri: kalanlar mağazada toplu çekilsin (liste: `npm run gorsel:rapor`).
  - Dikkat: akyuzler.tsv'de ürün ADLARI çift kodlanmış (Ã‡ gibi) → Türkçe büyük harfli kelimeler (ÇİROZ) regex'le bulunmaz;
    ASCII parçayla ara (ör. "IROZ") ya da dosya adıyla çalış.
    Akyüzler'de kalan uygun adaylar az: KBS çiroz kartı için Master kollu çiroz anahtarı (07_04_2017_10_08_1491548918.jpg),
    anahtarlar/kaynak kartı için Master kaynak pensesi. Uygun karşılığı YOK: bahçe hortumu, Master sprey boya, Dekor fırça/rulo,
    iskota halat/iskele kelepçesi, Master kalıp yağı, kümes teli (Fermo), menteşe/kapı hidroliği.
  - **K15 (2026-11-17): kaynaklar genişletildi** — dağıtıcı/resmi sosyal medya, ücretsiz lisanslı (Commons/Pexels/Unsplash),
    son çare pazaryerleri. Pazaryerinden / başka satıcıdan alınan "geçici görseller": polietilen-su-depolari (idefix), drenaj-kanallari-ve-izgaralar (bosta.com), master-panc-delik-testereleri (Bosch seti — Master görseli bulununca değiştir); başka model/marka (tür aynı): sika-floor-3 (Sikafloor-2 SynTop), tinerler (DYO), sika-antisol (Antisol-3E), sika-anchorfix-s1 (AnchorFix-1), sika-monoplug (MonoTop-108), sikabond-181 (Everbuild Mitre Fast), sika-plastocrete (Tayland ambalajı). Satıcı sitelerinden: weber-dress-ince-siva (umityapimarket), weber-yuzey-sertlestirici (birlikcati, itcyapi), gural-klozetler + gural-lavabolar (sozerisi), gural-seramik-karolar (itcyapi, dushome).
  - **Kullanıcı (2026-11-17, oturum 14): "resmi sitelerde takılı kalma"** — marka/renk birebir tutmasa da ürün türü doğruysa kullan (KARARLAR K15 eki).
  - Yapılan (oturum 9): Poelsan kaplin (poelsan.com), Sumak dalgıç (2, sumakpompa.com), Selsil yapıştırıcılar (2, selsil.com),
    KL Eco KE75115 + Hitachi G12SR4 (kalemakina.com), Samir Zümrüt 45 dolap ve oval duş teknesi (samirbanyo.com.tr).
  - Oturum 9 bulguları: küçük markaların resmi siteleri: poelsan.com, sumakpompa.com, selsil.com (/<ürün>/ → og:image),
    kalemakina.com (KL Pro/KL Eco/Hitachi; static.ticimax.cloud/…/UrunResimleri/buyuk/…), samirbanyo.com.tr (React; görseller
    /assets/index-*.js içinde: `main-medium-<seri>`, teknik-<seri> ardından gelen product1..n), stina.com.tr (duşakabin; Avino/Luna yok),
    mesateknik.com (Mesa: süzgeç/duş kanalı; Dicle/Point aksesuar sayfası yok). YANLIŞ alan adları: kbs.com.tr (mobilya),
    hazal.com.tr (restoran), sarayli.com.tr (holding), gezer.com.tr (endüstri), dekor.com.tr (yapım aşamasında).
    Koçtaş 403 (bot koruması) → pazaryeri olarak kullanılamıyor; n11/Trendyol denenmedi. Commons görselleri çoğu CC BY-SA
    (atıf ister) ve sahne fotoğrafı → katalogda zayıf; kullanılmadı.
  - Yapılan (oturum 8): Baymak JET hidrofor, Kale pirinç asma kilit, Orka Moonlight (2). Fırat yerden ısıtma montaj
    fotoğrafları 223 px + numara bindirmeli → kullanılmadı. Beybi: sitede Zebra yalnız kırmızı-siyah (mağazadaki mavi-siyah) → kullanılmadı.
    Fırat kombi seti / sifon: sitede ürün sayfası yok (sadece katalog PDF).
  - **DURUM (2026-11-17):** Kaynaklı kartlar büyük ölçüde bitti. Kalan 53 kaynaklı kartın hepsi zor: Paket 001'in 11 kartı (kullanıcıda),
    Sika 10, Onduline 5, Güral 3, BTM 3, Weber 2, Bosch 2, Fırat 3, ECA/KAS birkaç (flatör, Blaze, Berilyum, su sayacı), Marshall
    Akrikor/tiner, Filli dübel, İzocam XPS/Terrawool. 70 kaynaksız kart: çoğu Master (17) ve markasız hırdavat/İSG kalemleri
    (çivi, halat, eldiven, yelek...) → mağaza fotoğrafı. Sıradaki seçenekler: küçük markalar (Samir, Mesa, KL Pro, Domark, Dekor,
    Yapar...) resmi sitelerde aranabilir; ya da ~50 logosuz marka için logo toplanabilir (`npm run gorsel:rapor`).
  - Yurtbay yöntemi: seri sayfası yurtbayseramik.com/en/products/<seri> (bulmak için /en/search-results?q=<seri>) →
    image.yurtbayseramik.com/mekan/mekan_1140/<SERİ>_n.jpg; mekan_1920 klasörü 1920×1080 verir. Tek karo görseli yok.
    İzeltaş: kategori sayfasındaki wp-content/uploads PNG'ler (1000–1500 px); dosya adında ş varsa ayrışık yaz (s%CC%A7).
  - **Erişilemeyenler:** tr.weber "Verifying your browser" (bot koruması) → indirilemedi. btm.co yanıt vermiyor.
    Bosch: matkap ucu görseli 60×900 (ince çubuk), dekupaj bıçağı kartın ana ürünü değil (kart çoğunlukla Master disk) → kullanılmadı.
  - İzocam yöntemi: izocam.com.tr/en/products/<grup>/<ürün> → src="/images/product/product-slider/…" (en büyük 690×405).
    Onduline yöntemi: sayfadaki /styles/620x620/public/externals/<hash>.jpg → /sites/onduline_tr/files/externals/<hash>.jpg (620 px).
    Onduline TR sitesinde sadece membran sayfaları var (astar, bant, Ondulikit, mahya, Fondaline sayfası YOK).
  - **Güral (guralvit.com.tr):** /Uploads/Images/*.jpg dışarıdan 404 veriyor (tarayıcı oturumu istiyor) → indirilemedi.
    Kullanıcı tarayıcıdan sağ tık → kaydet ile verebilir. İzocam Maxibord XPS: sitedeki pembe "Foamboard" ile aynı ürün
    mü belirsiz → kullanılmadı. Terrawool (His Yalıtım) ayrı marka → İzocam görseli kullanılmadı.
  - Marshall yöntemi: ürün sayfasında msp.images.akzonobel.com/.../packshots/.../packshot_medium.(png|jpg) (3500 px). Akrikor
    sayfalarında sadece 160 px var. Fawori yöntemi: sayfadaki ilk res.cloudinary.com/.../FAWORI/<ad>.jpg (1024 px);
    `*_4x.webp` olanlar simge şeridi, ürün değil.
  - Filli yöntemi: filliboya.com/urun/<ad> → og:image (cloudinary) içindeki asıl adres www.filliboya.com/uploads/<DOSYA>.png (1000–1920 px).
  - **Sika sorunu:** tur.sika.com ürün sayfalarının çoğunda ürün görseli YOK (Sika Boom 141/180/541, SikaSwell; AnchorFix'te
    sadece 280 px kullanım çizimi). Sika-1, Plastocrete N, Separol W3 için TR ürün sayfası bulunamadı (sadece PDF). Sika
    kartları büyük olasılıkla mağaza fotoğrafı ister; ya da başka ülke sika.com sitesi (ambalaj TR ile aynıysa) denenebilir.
  - KAS yöntemi: ürün sayfasının og:image'ı = tam boy görsel (genelde 1024 px). Kategori sayfalarında ürün linkleri tam adres.
  - ECA ipucu: altın/siyah varyant yerine krom sürümü seç (`urun/...-1` çoğu zaman kromdur). Bazı ECA sayfaları (ör.
    basınç düşürücü) sadece liste sayfası, büyük görsel yok; ilk `urun/` linki ALAKASIZ ürün olabilir → görselle mutlaka kontrol et.
  - **ECA yöntemi:** eca.com.tr ürün sayfası (`/urun/...`) HTML'inde `data-src="https://eca.com.tr/image/webp?file=/uploads/images/big/…"`
    → bu adres 1200×1200 WebP verir (doğrudan /uploads/... yolu görsel değil). og:image sadece logo. Kategori sayfalarında
    ürün linkleri göreli (`href="urun/…"`). Tip 22/Tip 10 radyatör sayfalarında ürün-tek görsel yok (oda sahnesi kullanıldı).
  - Sıradaki (kaynaklı, ~55): firat 3, diğer tekil markalar (rapordan bak); zor olanlar: btm 3, weber 2, bosch 2,
    Marshall sentetik tiner (sayfa yok), yerden ısıtma aksesuarları, Filli Dalmaçyalı dübel (PDF), Sika 10, Güral 3, Onduline 5.
  - Kaynaksız 70 kart (çoğu "çeşitli" hırdavat/tesisat kalemi) → büyük olasılıkla mağaza fotoğrafı; sona bırak, kullanıcıya listele.
## Sıradaki
- F4.5 — Çözüm sayfaları (K13): `cozumler` koleksiyonu + panel + ana sayfa alanı; ilk sayfa Mantolama (içerik beyin
  takımından). Beklemede: F4.1 (sihirbaz kuralları), F4.4 (WhatsApp, kullanıcı atladı). F3.x paketler araya girer.

## Kullanıcıdan beklenenler
- [~] Logo: `kaynaklar/logo/selamfis.png` geldi (2026-11-15 tekrar aynı dosya geldi; daha büyüğü yok) (474×129 PNG, şeffaf zemin, turuncu+gri). Vektör (SVG/AI/PDF) ya da
  daha büyük PNG varsa istenir; beyaz/açık renkli sürümü (koyu zemin için) de lazım olacak.
- [ ] **Eksik ürün görselleri — kullanıcı EN SON kendisi halledecek (2026-11-16 kararı; Claude dokunmasın).** 11 kart:
  Fırat PE100 Kaynaklı & Elektrofüzyon Ek Parçalar, Fırat PEX Bağlantılar & Vanalar, Yerden Isıtma Kollektörleri (bu üçünün
  resmi Fırat sayfalarında görsel olabilir: kaynak_sayfalar) ve aşağıdaki mağaza fotoğrafı gerekenler. Liste: `npm run gorsel:rapor`.
- [ ] Mağaza fotoğrafı gereken kartlar (resmi görsel yok/uygun değil): Fırat PE100 İçme Suyu Boruları (Kangal),
  Fırat PPRC Vanalar, Fırat Gediz, Baumit All in Beton (resmi görsel 30 kg torba, mağazadaki 20 kg), Baumit Ionit Finish,
  Baumit Protect 2K, Baumit PremiumFuge, Baumit mantolama aksesuarları (file/dübel/profil), Baumit Flexo (bilgiler de torbadan).
- [ ] Daha büyük ürün görselleri. Şu an yapay zekâ ile büyütülmüş (K14), gerçeği gelince değiştirilecek:
  Fırat PPRC (2), PVC atık su ek parçaları, Triplex (2) — asıl 710 px · Baumit Basic, Flexo, Flex Uni — asıl 400 px.
  ECA çekvalfler (2) — asıl ~400 px · KAS Safir duş seti — 440 px · Serel gömme rezervuar — 683 px (kırpılmış).
  Fırat logosu 360 px (logo, büyütülmedi).
  Mağazada çekilebilir ya da üreticiden yüksek çözünürlüklü görsel istenebilir. Güncel liste: `npm run gorsel:rapor`.
- [ ] Şu ürünlerin fotoğrafı gerekli — mağazada çekilebilir ya da üreticiden istenebilir (resmi sitede görsel yok):
  Flatörler (ECA sayfası liste, görsel yok), Basınç düşürücü ECA modeli (KAS görseli kullanıldı), Serel Klozet Kapakları
  (Blaze Slim sayfası yok), Rezervuar İç Takımları & Klozet Kapakları (Visam/Aryak), KAS Eviye Bataryaları (Berilyum sayfası yok),
  Su Sayaçları & Kalorimetre (KAS sitesinde sayaç sayfası yok), Marshall Akrikor dış cephe (resmi görsel 160 px),
  Onduline Ondulikit (resmi sayfa yok), İzocam Maxibord XPS ve Terrawool (doğru ambalaj
  belirsiz), Güral Quare banyo aksesuarları (site görselleri indirilemiyor),
  Weber Dress ince sıva (bayi görseli 768 px, küçük), BTM 3 kart (site açılmıyor), Beybi/AKY iş eldivenleri (resmi
  görsel renk uyuşmuyor), Fırat yerden ısıtma aksesuarları / kombi seti / sifon-kada (resmi sayfa yok).
- [ ] docs/FIRMA.md'deki ⚠ işaretli bilgilerin teyidi (özellikle Güneysu Depo telefonu, e-posta)
- [x] Şubelerin kesin Google Haritalar linkleri (2026-11-15 kullanıcı verdi, ayarlar/genel.yaml)
- [x] Marka ve ürün listesi: paketler 001–007 sitede (214 kart, 52 marka, 68 kategori). KATALOG-YAPISI siteden üretildi.
- [ ] Beyin takımından: seramik yapıştırıcı sihirbazı kuralları (format: docs/ICERIK-SEMASI.md §9) → F4.1

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

- `gorsel:hazirla --buyut` artık büyütmeden önce saydamlığı beyaza düzleştiriyor (Real-ESRGAN -t 128 alfa kanalını
  parça parça bozdu: ProContact torbasının alt yarısı görünmezdi — düzeltildi, diğer görseller tarandı, sağlam).

- F4.2: `/qr/` (kategori seçimi) + `/qr/<kategori>/` ve `/qr/tumu/` (A4, 2×5 etiket 90×50 mm, @page + print CSS).
  QR derlemede SVG (`qrcode`, hata düzeltme M), mutlak adres + sonda "/". jsQR ile çözüldü ✓, Edge PDF baskısı 2 sayfa A4 ✓.
  noindex + sitemap dışı. ⚠ Alan adı değişince (F5.1) basılı etiketler eski adrese gider → toplu basım F5.1 sonrası
  (kullanıcıya PANEL-KULLANIMI §9'da yazıldı). GitHub Pages alan adı yönlendirmesi base yolu (/selam-katalog) taşımayabilir.

- F4.3: `/katalog-yazdir/` (kapak, içindekiler [tıklanabilir], ana kategori bölümleri 2 sütun kart, arka kapak şubeler +
  site QR) + `scripts/katalog-pdf.ts`. Yerelde 16 sayfa / 3,1 MB (35 ürün). Deploy workflow artık açık adımlar:
  checkout → setup-node (npm cache) → npm ci → actions/cache (node_modules/.astro) → build → katalog:pdf
  (CHROME_PATH=/usr/bin/google-chrome) → upload-pages-artifact → deploy. "Kataloğu indir" linki: footer + /urunler.
  Kart sayısı arttıkça PDF büyür (görseller 420 px); 213 kartta ~15–20 MB olabilir → gerekirse görsel boyutu düşür.

- Paketler 002–006 (2026-11-17): kullanıcı v2/v3 klasörleri verdi → `icerik-paketleri/00X-…/`e kopyalandı, dış klasörler
  silindi. Sıra 002→006, her biri önizleme + --uygula, hepsi 0 hata/0 uyarı. Sadece 002'de 2 kart birleşti (PEX, kollektör →
  ECA/KAS markaları). Build 0 hata, 294 sayfa dizinde. Görseller: 24/189 ürün, 43 marka logosuz → büyük iş (`/gorsel`).
- Paket 007 (2026-11-17): 25 kart, 7 marka, 8 alt kategori; NOTLAR "elle eklenecek" 3 düzeltme yapıldı (ölçüm aletleri gönye,
  PE100 200-125 redüksiyon, sifon adaptör contası). KATALOG-YAPISI.md `scripts/katalog-yapisi.ts` ile siteden yeniden üretildi
  (eski el notları "· çeşitli", "(doğalgaz kelepçeleri)" düştü — sitede tutulmuyor). Görseller: ~24/214 ürün görselli.

## Öneriler
- (Plana eklenmesi önerilen fikirler. Kullanıcı onaylarsa PLAN.md'ye taşınır.)
- PDF katalogda bazı sayfaların altı boş (kart satırı sığmayınca yeni sayfaya geçiyor; 35 ürün = 16 sayfa).
  inline-block denemesi daha kötü oldu (18 sayfa) → grid kaldı. İleride: kart görselini küçült (16:9 → 2:1), teknik tabloyu
  4 satıra indir ya da kategori başına 3 sütun dene.
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
| 2026-11-16 | F3.2 (yarım) | 10 Baumit görseli; 8 kart mağaza fotoğrafı bekliyor; --buyut alfa hatası düzeltildi | WIP F3.2 |
| 2026-11-16 | F3.2 kapandı | 24/35 ürün görselli; kalan 11 görsel kullanıcıya bırakıldı | F3.2 |
| 2026-11-16 | F4.2 QR etiketleri | /qr, kategori bazlı A4 etiket sayfaları; QR okuma + PDF baskı testi ✓ | F4.2 |
| 2026-11-16 | F4.3 PDF katalog | /katalog-yazdir + katalog:pdf + Actions'ta otomatik PDF; indir linkleri | F4.3 |
| 2026-11-16 | F4.4 atlandı | Kullanıcı kararı: WhatsApp şimdilik yok | — |
| 2026-11-17 | Paketler 002–006 | 5 paket içe aktarıldı (154 yeni kart), build 0 hata; görseller bekliyor | F3.3–F3.7 |
| 2026-11-17 | F3.8 Paket 007 | Hırdavat 25 kart + 3 elle düzeltme; KATALOG-YAPISI siteden üretildi; 214 kart | F3.8 |
| 2026-11-17 | /gorsel eksikler (1) | 10 ECA/Serel ürün görseli; 34/214 görselli | gorsel |
| 2026-11-17 | /gorsel eksikler (2) | 10 ürün görseli (ECA 9 + KAS basınç düşürücü); 44/214 görselli | gorsel |
| 2026-11-17 | /gorsel eksikler (3) | 9 ürün (KAS 7 + Serel 2); 53/214 görselli; 4 kart resmi görselsiz | gorsel |
| 2026-11-17 | /gorsel eksikler (4) | 11 ürün (Filli 9 + KAS 2); 64/214 görselli; Sika sitesinde ürün görseli yok | gorsel |
| 2026-11-17 | /gorsel eksikler (5) | 10 ürün (Fawori 5 + Marshall 5); 74/214 görselli; Akrikor görseli çok küçük | gorsel |
| 2026-11-17 | /gorsel eksikler (6) | 6 ürün (İzocam 4 + Onduline membran + Fawori Optimix), çoğu K14 büyütme; 80/214; Güral indirilemedi | gorsel |
| 2026-11-17 | /gorsel eksikler (7) | 8 ürün (Yurtbay 5 mekân + İzeltaş 3); 88/214; Weber/BTM erişilemedi | gorsel |
| 2026-11-17 | /gorsel eksikler (8) | 3 ürün (Baymak hidrofor, Kale asma kilit, Orka dolap); 91/214; kaynaklı kartlar bitti, kalanlar zor/kaynaksız | gorsel |
| 2026-11-17 | /gorsel eksikler (9) | K15 kaynak genişletme kararı; 6 ürün küçük marka sitelerinden (Poelsan, Sumak, Selsil, KL, Samir 2); 97/214 | gorsel |
| 2026-11-17 | /gorsel eksikler (10) | Akyüzler Nalburiye dizini (961 ürün) çıkarıldı; 8 hırdavat kartı; 105/214 | gorsel |
| 2026-11-17 | /gorsel eksikler (11) | Akyüzler dizininden 8 hırdavat kartı daha; 113/214 | gorsel |
| 2026-11-17 | /gorsel eksikler (12) | Akyüzler dizininden 8 kart (Master ürünleri ağırlıklı); 121/214 | gorsel |
| 2026-11-17 | /gorsel eksikler (13) | Pakkens manometre + pirinç ek parça; 123/214; internet kaynakları büyük ölçüde tükendi | gorsel |
| 2026-11-17 | /gorsel eksikler (14) | Kurallar gevşetildi; Trakya Döküm + Akyüzler + satıcı siteleri: 9 kart; 132/214 | gorsel |
| 2026-11-17 | /gorsel eksikler (15) | Gevşek kuralla 9 kart (kesici disk, matkap, flatör, XPS, Terrawool, KAS eviye, iç takım, klozet kapağı, karıştırıcı); 141/214 | gorsel |
| 2026-11-17 | /gorsel eksikler (16) | Sika Boom + SikaSwell + rögar (kırpılarak); 144/214; Sika siteleri ambalaj fotoğrafı vermiyor | gorsel |
| 2026-11-17 | /gorsel eksikler (17) | Akyüzler 4 kart + dübel (Commons) + kalıp yağı görseli Master ile değişti; 149/214 | gorsel |
| 2026-11-17 | /gorsel eksikler (18) | 7 kart (sifon, batarya yedek, diğer marka aksesuar/musluk/duş/batarya, boru anahtarı); 156/214 | gorsel |
| 2026-11-17 | /gorsel eksikler (19) | 6 kart (seviye sistemi, köşe profili, iskele kelepçesi, Onduline mahya/bant/astar); 162/214 | gorsel |
| 2026-11-17 | /gorsel eksikler (20) | 3 kart (panç, Çukurova/Fondaline, UKS şıngıl); 165/214 | gorsel |
| 2026-11-17 | /gorsel eksikler (21) | 9 kart (Sika 6, yangın tüpü/dolap, trapez saç, tiner); 174/214 | gorsel |
| 2026-11-18 | /gorsel eksikler (22) | 8 kart (Sika 3, Weber 2, Güral klozet/lavabo/seramik); 182/214 | gorsel |
