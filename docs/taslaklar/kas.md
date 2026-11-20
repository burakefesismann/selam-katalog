# KAS — taslak (F6.4d)

> Durum: **F6.4d1 ONAYLANDI ve UYGULANDI (2026-11-20)** — tesisatın tamamı (Kastak hariç), ortak kartlar kaldırıldı/yönlendirildi.
> Not: musluklar ayrı kart (Filtreli & Bahçe), çekvalf kartına kartuşlu basınç düşürücü eklendi, doğalgaz macunu flex kartında. Armatür (F6.4d2) ayrı taslak. Kaynak: KAS 2026-01 tesisat (52 sayfa), KAS Armatür
> 2026-01 (152 sayfa). Fiyat ("B. FİYATI") alınmaz; kodlar ve ölçüler katalogdan.

## F6.4d1 — Tesisat kartları (hepsi `seri`, KAS markalı, kodlu tablo)
| Kart | Ürün grubu | Kod (≈) | Bugünkü kart |
|---|---|---|---|
| KAS Gaz Küresel Vanaları (MOP 0,5 / MOP 5, kilitli) | Şiber & Gaz Vanaları | 16 | `gaz-vanalari` [KAS] → dönüşür (adres korunur) |
| KAS Su Küresel Vanaları (içme suyu, endüstriyel, rakorlu, kelebek kollu, filtreli, mini, PPRC bağlantılı, köşe) + kartuşlu basınç düşürücü | Küresel Vanalar | 60 | ortak `su-kuresel-vanalari` [KAS, ECA, Türkoğlu] |
| KAS Radyatör & Termostatik Vanalar (termostatik, kablosuz başlık, kompakt ventil, köşe/düz radyatör, geri dönüş, rakor) | Radyatör & Termostatik | 37 | ortak `radyator-ve-termostatik-vanalar` [ECA, KAS] |
| KAS Musluklar (filtreli, bahçe küresel, filtreli taharet, küresel bas) | Musluklar | 12 | yeni |
| KAS Çekvalfler & Flatörler (+ doğalgaz macunu) | Tesisat Valfleri | 23 | ortak `cekvalfler` [KAS, ECA] |
| KAS Şiber, Stop Vana & Filtreler | Şiber & Gaz Vanaları | ~15 | ortak `siber-vanalar`, `filtreler…` |
| KAS Rakor, Nipel & Uzatmalar | Rakor & Sızdırmazlık | ~28 | ortak `rakor-ve-uzatmalar` [ECA, KAS] → KAS'a dönüşür (adres korunur) |
| KAS Yerden Isıtma Kollektörleri (kare tip setler, paslanmaz/pirinç, debili, termostatik, mini vanalı) | Yerden Isıtma | 120 | ortak `yerden-isitma-kollektorleri` [Fırat, ECA, KAS] |
| KAS Yerden Isıtma Kontrol & Aksesuarları (oda termostatları, aktüatör, karışım devresi, pompa, emniyet grubu, purjör, izolasyon) | Yerden Isıtma | 80 | ortak `yerden-isitma-aksesuarlari` |
| KAS Doğalgaz Flexleri (ocak, kombi, sayaç, kompansatör, kaskad, brülör) + nipel/rakor serileri | Flex & Bağlantı | ~97 | ortak `dogalgaz-flex-…` [KAS, Baykara] |
| KAS Su & Fancoil Flexleri | Flex & Bağlantı | 9 + fancoil | `su-flex-hortumlari` [KAS] → dönüşür (adres korunur) |
| KAS Kastak Esnek Doğalgaz Tesisat Sistemi (hortum, rakor, kanal, aparatlar) | Flex & Bağlantı | 47 | yeni (soru 2) |

## Ortak kartların temizliği (ECA'nın payı F6.4a3'te ayrıldı)
- Tüm markaları kendi kartına geçen ortak kartlar **kaldırılır**, adresleri ilgili ürün grubu sayfasına yönlenir:
  `radyator-ve-termostatik-vanalar`, `basinc-dusuruculer`, `emniyet-ventilleri`, `cekvalfler`, `filtreler-…`, `prujorler-…`, `siber-vanalar`.
- `su-kuresel-vanalari` → yalnız **Türkoğlu** kartı olarak kalır (KAS/ECA satırları çıkar; ECA görseli kalkar → Türkoğlu görseli F6.4q).
- `yerden-isitma-kollektorleri`, `yerden-isitma-aksesuarlari`, `pex-baglantilar-ve-vanalar` → yalnız **Fırat** (F6.4e'de seriye dönüşür).
- `dogalgaz-flex-…` → yalnız **Baykara**; `ara-kesme-valfleri` → ECA çıkar (KAS + Visam, KAS payı F6.4d2'de).
- Eski kartlardaki "Mağazamızdaki" KAS satırları `docs/taslaklar/kas-eski-magaza-listeleri.md`'ye saklanır.

## Kullanıcıya sorular
1. Tesisat kataloğunun tamamı mı (≈550 kod, 12 kart)?
2. Kastak esnek doğalgaz sistemi eklensin mi?
3. Ortak kartların kaldırılıp yönlendirilmesi uygun mu?

## F6.4d2 — Armatür kartları (ONAYLANDI ve UYGULANDI 2026-11-20: mağazadaki 4 seri — Antoryum, Raflesya, Lilyum, Arnika; özel evye yok)
Katalog: 254 ürün / 270 kod (fiyat okunmaz). Eski mağaza listesindeki Yasemin, Topaç, Berilyum, Kardelen, Kuartz, Safir 2026 listesinde yok.

| Kart | Ürün grubu | Not |
|---|---|---|
| KAS Antoryum Serisi (lavabo, banyo, evye, duş, aplike, kuğu, çanak, Green, Medikal, renkli) | Batarya Serileri | mağazada var |
| KAS Raflesya Serisi · KAS Lilyum Serisi · KAS Arnika Serisi | Batarya Serileri | mağazada var |
| (soru 1) Calista, Fione (+ İpeksi), Lavinya, Anemon, Rubini Botti, Osmanlı (Harem, Saray), Mia Baby | Batarya Serileri | katalogda var |
| KAS Spiralli & Özel Evye Bataryaları (Adonis, Viola, Jasmin, Antik, Akrobat) | Eviye Bataryaları | soru 2 |
| KAS Ankastre Duş Setleri (Raflesya Kare/Elite, Antoryum, Kanola, Fione) | Ankastre Sistemler | |
| KAS Duş Setleri (Elmas, Zümrüt; tepe duş: Raflesya şelale, Antoryum soft, Lilyum fıskiye, Alga, Perla panel) | Duş Sistemleri | `kas-dus-setleri` (adres korunur) |
| KAS Musluklar & Taharet (Kumru, Antoryum, Çisil, Derya, Damla, filtreli taharet, Mamba) | Musluklar | `kas-musluklar-ve-taharet-musluklari` (adres korunur) |
| KAS Ankastre Ara Muslukları (Sakura, Arnika, Kanola, Fione, Alga, Antoryum, Anemon, Lilyum, Raflesya) | Tesisat Valfleri | `ara-kesme-valfleri` → yalnız Visam kalır |
| KAS Armatür Yedek Parçaları (kartuş, salmastra, volan, armatür boruları, spiral hortum, duş başlığı) | Yedek Parça & Uzatma | yeni |

`kas-lavabo-bataryalari`, `kas-banyo-bataryalari`, `kas-eviye-mutfak-bataryalari` → kalkar, Batarya Serileri'ne yönlenir.
