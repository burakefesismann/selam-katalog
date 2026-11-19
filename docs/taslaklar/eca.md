# ECA — kart taslağı (F6.4a)

> Durum: **ONAYLANDI (2026-11-19)** — 9 seri (Tiera, Life, Luna, Nita, Dalia, Dream, Lia, Niobe, Spylos + sonradan Icon, Royal;
> Novita, Osmanlı, Medical şimdilik yok), yeni Batarya Serileri grubu, teknik 13 kart. İç takım kartı: ECA değil Serel
> (Serel kataloğunda "Serel İç Takımlar") → ECA çıkar, Serel payı F6.4b'de.
> Kaynak: ECA Armatür 2026-2 (161 sayfa) + ECA Teknik Ürünler 2026-2 (44 sayfa), `npm run katalog:cikar`.
> Fiyat alınmaz. Kodlar ve teknik bilgiler katalogdan; uydurma yok. Model sayıları otomatik ayrıştırmadan (±birkaç).

## Bugün
24 kartta ECA var: 9'u sadece ECA (6 `marka_tur` armatür kartı + banyo aksesuarı + havlupan + panel radyatör), 15'i KAS/Fırat/
Visam/Türkoğlu ile ortak grup kartı. Armatür kartlarındaki seri adları (Myra, Mina, Purity, Delta, Caro, Spil…) 2026-2
listesinde seri olarak yok; listede **14 seri** var.

## Öneri

### A. Batarya serileri — her seri bir kart (`seri`), yeni alt grup **Armatür › Batarya Serileri**
Kartın içinde serinin tüm ürünleri kod tablosu olarak: lavabo, banyo, eviye, yüksek/orta boy lavabo, ankastre gruplar…
Renkler aynı satırda (ör. `102108989` Krom · C1 Mat Siyah · A1 Altın görünümlü). Ana görsel katalogdaki seri görseli.

| Seri | Katalog sayfası | Ürün (≈) | Not |
|---|---|---|---|
| Novita | 4–5 | 7 | yeni seri |
| Icon | 6–9 | 15 | |
| Life | 10–27 | 39 | en geniş seri |
| Royal | 28–34 | 24 | |
| Tiera | 35–46 | 27 | krom, mat siyah, altın |
| Luna | 47–53 | 21 | |
| Nita | 54–61 | 31 | renkli eviye seçenekleri |
| Dream | 62–71 | 30 | |
| Dalia | 72–84 | 36 | Dalia-Minimal dahil |
| Niobe | 85–88 | 16 | |
| Lia | 89–93 | 17 | |
| Spylos | 94–95 | 6 | ekonomik |
| Osmanlı | 96–99 | 10 | klasik |
| Medical | 100 | 3 | engelli / doktor bataryası |

Örnek satırlar (Tiera): `102108989` Tiera Lavabo Bataryası — çıkış ucu 132 mm · `102102469` Tiera Banyo Bataryası —
çıkış ucu 164 mm · `102118123` Tiera Eviye Bataryası — 360° döner, çıkış ucu 197 mm …

### B. Diğer armatür kartları (`seri`, tür bazında)
| Kart | Ürün grubu | Sayfa | Ürün (≈) | Eski kart |
|---|---|---|---|---|
| ECA Özel Mutfak Bataryaları (spiralli, esnek uçlu, yaylı, Flux, Wica, Ivy…) | Eviye Bataryaları | 101–105 | 20 | `eca-eviye-mutfak-bataryalari` (adres korunur) |
| ECA Termostatik Bataryalar | Ankastre Sistemler | 106–110 | 11 | `eca-ankastre-…` (adres korunur) |
| ECA Fotoselli Bataryalar & Zaman Ayarlı Musluklar | Lavabo Bataryaları | 111–119 | 31 | yeni |
| ECA Küvet Bataryaları (ayaklı, ankastre) | Banyo Bataryaları | 120–121 | 6 | yeni |
| ECA El Duşu Takımları (mafsallı, hareketli üst takım) | Duş Sistemleri | 122–129 | 20 | yeni |
| ECA Duş Kolonları, Tepe Duşları & Ankastre Duş Setleri (başlık, boru, dirsek) | Duş Sistemleri | 130–145 | 40 | `eca-dus-setleri-ve-tepe-duslari` (adres korunur) |
| ECA Ara Musluklar & Taharet (ara kesme, filtreli ara, ara taharet) | Musluklar | 147–151 | 18 | `eca-musluklar-ve-taharet-musluklari` (adres korunur) |
| ECA Musluklar (çamaşır, bahçe, klozet, kurna, klozet bataryası) | Musluklar | 146, 152–153 | 8 | yeni |
| ECA Sifonlar & Uzatmalar | Yedek Parça & Uzatma | 154–156 | 14 | yeni |

`eca-lavabo-bataryalari` ve `eca-banyo-bataryalari` kalkar → adresleri **Batarya Serileri** sayfasına yönlenir (QR bozulmaz).

### C. Teknik ürünler — ortak kartlardan ECA payı ayrılır (`seri`)
| Kart | Ürün grubu | Sayfa | Ürün (≈) | Ortak karttan ayrılan |
|---|---|---|---|---|
| ECA Termostatik Radyatör Vanaları | Radyatör & Termostatik Vanalar | 4–8 | 18 | `radyator-ve-termostatik-vanalar` |
| ECA Radyatör Vanaları & Rakorları (düz, köşe, PEX, krom, H-valf, geri dönüş) | Radyatör & Termostatik Vanalar | 9–16 | 42 | aynı + `pex-baglantilar-ve-vanalar`, `rakor-ve-uzatmalar` |
| ECA Otomatik Hava Atıcılar | Tesisat Valfleri | 17 | 4 | `prujorler-otomatik-hava-atici` |
| ECA Emniyet Valfleri | Tesisat Valfleri | 18 | 6 | `emniyet-ventilleri` |
| ECA Yerden Isıtma Kollektörleri (modüler, debimetreli, paslanmaz) | Yerden Isıtma | 19–23 | ~100 | `yerden-isitma-kollektorleri` |
| ECA Yerden Isıtma Kontrol & Aksesuarları (oda termostatı, aktüatör, motorlu vana, hava-su boşaltma, askı) | Yerden Isıtma | 24–28 | 32 | `yerden-isitma-aksesuarlari` |
| ECA Doğalgaz Küresel Vanaları | Şiber & Gaz Vanaları | 29 | 15 | yeni |
| ECA Su Küresel Vanaları (içme suyu, endüstriyel, rakorlu, mini) | Küresel Vanalar | 30–33 | 53 | `su-kuresel-vanalari` |
| ECA Şiber, Stop & Kosva Vanaları | Şiber & Gaz Vanaları | 34–35 | 16 | `siber-vanalar` |
| ECA Çekvalfler | Tesisat Valfleri | 36 | 15 | `cekvalfler` |
| ECA Flatörler | Tesisat Valfleri | 37 | 7 | `flatorler` (zaten sadece ECA → dönüşür) |
| ECA Filtreler | Tesisat Valfleri | 37 | 9 | `filtreler-pislik-tutucu-y-filtre` |
| ECA Su Basınç Düşürücüleri | Tesisat Valfleri | 38–39 | 14 | `basinc-dusuruculer` |

Ortak kartlardan `eca` çıkar; o kartlar diğer markalarla kalır (KAS'ın payı F6.4d'de ayrılır).
`ara-kesme-valfleri` kartından da `eca` çıkar (ECA ankastre ara kesme valfleri B'deki Ara Musluklar kartında).
Alınmayanlar: fark basınç / dengeleme valfleri (s.3 — bizim gruplara uzak).

### D. Dokunulmayanlar
ECA Banyo Aksesuarları, ECA Havlupanlar, ECA Panel Radyatörler (katalog yok — mevcut haliyle kalır).
`rezervuar-ic-takimlari-ve-klozet-kapaklari` [Visam, ECA]: ECA katalogda iç takım yok → `eca` çıkar mı? (soru 4)

## Görseller
Her karta 1–3 görsel, katalogdaki gömülü ürün fotoğraflarından (beyaz zemin). Seri kartında ana görsel lavabo bataryası,
ikinci görsel banyo/eviye. Model satırlarına küçük görsel şimdilik konmaz (gerekirse sonra).

## Toplam
Bugün 24 kartta ECA → öneriyle **~38 ECA kartı** (14 seri + 9 armatür + 13 teknik + 3 dokunulmayan), hepsi tek markalı.

## Kullanıcıya sorular
1. Seri kartları yeni **Armatür › Batarya Serileri** grubunda olsun mu? (KAS serileri de buraya gelir)
2. 14 serinin hepsi mi, yoksa mağazada olanlar mı?
3. Teknik bölme (C) uygun mu?
4. Rezervuar iç takımları kartından ECA çıksın mı?
