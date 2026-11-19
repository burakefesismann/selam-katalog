"""
Üretici kataloglarından çalışma malzemesi çıkarır (F6.3, K16).

    npm run katalog:cikar                 # tüm kataloglar
    npm run katalog:cikar -- eca serel    # sadece bu markalar

Girdi : kataloglar/*.pdf            (gitignore — FİYAT İÇERİR, depoya girmez)
Çıktı : .katalog-calisma/<marka>/<katalog>/   (gitignore)
    metin/s-NNN.txt   sayfa metni — fiyat/TL/KDV/iskonto içeren satırlar ve fiyat biçimli sayılar ATILIR
    gorseller/        PDF'e gömülü görseller (sayfa görüntüsü değil → fiyat tablosu girmez), uzun kenar ≥ 300 px
    OZET.md           sayfa başlıkları, görsel listesi
Kullanım: F6.4'te marka marka seri listesi taslağı ve görsel seçimi için. Siteye/depoya FİYAT GİRMEZ.

Gereken araç (depoda yok, K14'teki Real-ESRGAN gibi kullanıcının bilgisayarında):
    %LOCALAPPDATA%\\selam-araclar\\pymupdf\\   ← PyMuPDF paketi (pip install --target <klasör> pymupdf)
Python 3.10+.
"""

import os
import re
import sys
import unicodedata

sys.stdout.reconfigure(encoding='utf-8')
ARAC = os.path.join(os.environ.get('LOCALAPPDATA', ''), 'selam-araclar', 'pymupdf')
sys.path.insert(0, ARAC)
try:
    import pymupdf
except ImportError:
    sys.exit(f'PyMuPDF bulunamadı: {ARAC}\nKurulum: pip install --target "{ARAC}" pymupdf')

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GIRDI = os.path.join(KOK, 'kataloglar')
CIKTI = os.path.join(KOK, '.katalog-calisma')
MIN_GORSEL = 300  # px, uzun kenar

# (dosya adı deseni — sadeleştirilmiş: küçük harf, Türkçe harfsiz) → (marka slug'ı, katalog kısa adı)
# Aynı kataloğun eski sürümleri ATLA listesinde.
KATALOGLAR = [
    (r'firatboru', 'firat', 'firat'),
    (r'^15 aralik 2025', 'dekor', 'dekor'),
    (r'poelsan', 'poelsan', 'poelsan'),
    (r'^2026-1 serel fiyat', 'serel', 'seramik-saglik'),
    (r'serel banyo aksesuar', 'serel', 'banyo-aksesuarlari'),
    (r'serel gomme rezervuar', 'serel', 'gomme-rezervuar'),
    (r'^2026-2 aryak', 'aryak', 'armatur'),
    (r'^2026-2 eca armatur', 'eca', 'armatur'),
    (r'^eca teknik urunler', 'eca', 'teknik-urunler'),
    (r'^borel', 'borel', 'yerden-isitma'),
    (r'^2026-2 fiyat listesi 07042026', 'orka', 'orka'),
    (r'istanbul firca', 'istanbul-firca', 'istanbul-firca'),
    (r'^fawori', 'fawori', 'fawori'),
    (r'^filli boya', 'filli-boya', 'filli-boya'),
    (r'^izeltas', 'izeltas', 'izeltas'),
    (r'^izocam', 'izocam', 'izocam'),
    (r'^kas armatur', 'kas', 'armatur'),
    (r'^kas 2026', 'kas', 'tesisat'),
    (r'^katalog-2025', 'samir', 'samir'),
    (r'^sumak pompa 2026', 'sumak', 'sumak'),
    (r'yapi sistemleri', 'sika', 'sika'),
    (r'^yapi fiyat listesi 2026', 'tesay', 'tesay'),
    (r'^isik-urun', 'isik', 'isik'),
]
ATLA = [r'^ar yak 2026-1', r'^eca armatur 2026-1', r'^teknik urunler 2026-1', r'^sumak 2025-1']

# Fiyat koruması: bu kelimeleri içeren satır tamamen atılır
# (f.yat: bozuk font eşlemesinde "fiyat" → "f ඈyat" gibi çıkabiliyor)
FIYAT_SATIR = re.compile(r'f\s?\S\s?yat|\bTL\b|₺|€|\$|\bEUR\b|\bUSD\b|\bKDV\b|iskonto|indirim|brüt|liste fiy', re.I)
# Fiyat biçimli sayılar atılır: 1.234,56 · 41.300 · 12,50 (ölçülerde de geçebilir — güvenlik öncelikli)
FIYAT_SAYI = re.compile(r'^\d{1,3}(\.\d{3})+(,\d{1,2})?$|^\d+,\d{2}$')


def sade(ad: str) -> str:
    ad = ad.replace('ı', 'i').replace('İ', 'i')
    ad = unicodedata.normalize('NFKD', ad)
    return ''.join(c for c in ad if not unicodedata.combining(c)).lower()


def temiz_satir(satir: str) -> str | None:
    if FIYAT_SATIR.search(satir):
        return None
    parcalar = [p for p in satir.split() if not FIYAT_SAYI.match(p)]
    s = ' '.join(parcalar).strip()
    return s or None


def sayfa_metni(sayfa) -> tuple[list[str], str | None]:
    """Satırlar (fiyatsız) + sayfanın en büyük puntolu başlığı"""
    satirlar, baslik = [], None
    for blok in sayfa.get_text('dict')['blocks']:
        for satir in blok.get('lines', []):
            metin = ' '.join(s['text'] for s in satir['spans']).strip()
            boyut = max((s['size'] for s in satir['spans']), default=0)
            t = temiz_satir(metin) if metin else None
            if not t:
                continue
            satirlar.append(t)
            if len(t) >= 3 and not re.fullmatch(r'[\d\s.,/x×-]+', t) and (baslik is None or boyut > baslik[0]):
                baslik = (boyut, t)
    return satirlar, (baslik[1][:80] if baslik else None)


def gorsel_kaydet(doc, xref: int, smask: int, hedef: str) -> tuple[int, int] | None:
    try:
        pix = pymupdf.Pixmap(doc, xref)
        if smask:
            try:
                pix = pymupdf.Pixmap(pix, pymupdf.Pixmap(doc, smask))
            except Exception:
                pass
        if pix.n - pix.alpha >= 4:  # CMYK → RGB
            pix = pymupdf.Pixmap(pymupdf.csRGB, pix)
        if max(pix.width, pix.height) < MIN_GORSEL:
            return None
        pix.save(hedef)
        return pix.width, pix.height
    except Exception:
        return None


def isle(dosya: str, marka: str, kisa: str) -> None:
    doc = pymupdf.open(os.path.join(GIRDI, dosya))
    kok = os.path.join(CIKTI, marka, kisa)
    os.makedirs(os.path.join(kok, 'metin'), exist_ok=True)
    os.makedirs(os.path.join(kok, 'gorseller'), exist_ok=True)
    ozet = [f'# {marka} — {kisa}', '', f'Kaynak: kataloglar/{dosya} · {len(doc)} sayfa · fiyatlar çıkarıldı', '',
            '| Sayfa | Başlık | Satır | Görseller |', '|---|---|---|---|']
    gorulen, toplam_gorsel, metinsiz = set(), 0, 0
    for i, sayfa in enumerate(doc, start=1):
        satirlar, baslik = sayfa_metni(sayfa)
        if not satirlar:
            metinsiz += 1
        with open(os.path.join(kok, 'metin', f's-{i:03d}.txt'), 'w', encoding='utf-8') as f:
            f.write('\n'.join(satirlar))
        adlar = []
        for g in sayfa.get_images(full=True):
            xref, smask = g[0], g[1]
            if xref in gorulen:
                continue
            gorulen.add(xref)
            ad = f's{i:03d}-x{xref}.png'
            boyut = gorsel_kaydet(doc, xref, smask, os.path.join(kok, 'gorseller', ad))
            if boyut:
                adlar.append(f'{ad} ({boyut[0]}×{boyut[1]})')
                toplam_gorsel += 1
        ozet.append(f'| {i} | {(baslik or "").replace("|", "/")} | {len(satirlar)} | {", ".join(adlar)} |')
    if metinsiz > len(doc) / 2:
        ozet.insert(3, '> ⚠ Sayfaların çoğunda metin yok (taranmış/dilimlenmiş katalog): görseller parça parça olabilir, '
                       'ürün listesi sayfa görüntüsünden elle çıkarılır.\n')
    with open(os.path.join(kok, 'OZET.md'), 'w', encoding='utf-8') as f:
        f.write('\n'.join(ozet) + '\n')
    print(f'✓ {marka}/{kisa}: {len(doc)} sayfa, {toplam_gorsel} görsel{" (taranmış)" if metinsiz > len(doc) / 2 else ""}')


def main() -> None:
    secili = set(sys.argv[1:])
    if not os.path.isdir(GIRDI):
        sys.exit(f'Klasör yok: {GIRDI}')
    eslesmeyen = []
    for dosya in sorted(os.listdir(GIRDI)):
        if not dosya.lower().endswith('.pdf'):
            continue
        s = sade(dosya)
        if any(re.search(d, s) for d in ATLA):
            continue
        es = next(((m, k) for d, m, k in KATALOGLAR if re.search(d, s)), None)
        if not es:
            eslesmeyen.append(dosya)
            continue
        if secili and es[0] not in secili:
            continue
        isle(dosya, *es)
    if eslesmeyen:
        print('⚠ Eşleşmeyen katalog (scripts/katalog-cikar.py > KATALOGLAR\'a ekle):')
        for d in eslesmeyen:
            print('   -', d)


if __name__ == '__main__':
    main()
