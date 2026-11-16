/**
 * npm run katalog:pdf  (önce npm run build)
 * dist/'i küçük bir yerel sunucuyla açar, /katalog-yazdir/ sayfasını başsız tarayıcıyla A4 PDF'e basar:
 *   dist/selam-insaat-urun-katalogu.pdf  → sitede "Kataloğu indir" linki buna gider.
 * Tarayıcı: CHROME_PATH ortam değişkeni; yoksa Linux'ta google-chrome/chromium, Windows'ta Edge/Chrome.
 * GitHub Actions (ubuntu) her yayında çalıştırır (.github/workflows/deploy.yml).
 */
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { createReadStream, existsSync, mkdtempSync, rmSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { tmpdir } from 'node:os';
import { extname, join, normalize, resolve } from 'node:path';
import { KOK } from './ortak.ts';

const DIST = join(KOK, 'dist');
const BASE = '/selam-katalog/'; // astro.config.mjs > base (alan adı bağlanınca "/")
export const PDF_ADI = 'selam-insaat-urun-katalogu.pdf';
const CIKTI = join(DIST, PDF_ADI);

if (!existsSync(join(DIST, 'katalog-yazdir', 'index.html'))) {
  console.error('✗ dist/katalog-yazdir bulunamadı. Önce: npm run build');
  process.exit(1);
}

function tarayiciBul(): string {
  const adaylar = [
    process.env.CHROME_PATH,
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ].filter(Boolean) as string[];
  const bulunan = adaylar.find((a) => existsSync(a));
  if (!bulunan) {
    console.error('✗ Chrome/Edge bulunamadı. CHROME_PATH ortam değişkeniyle yolu verin.');
    process.exit(1);
  }
  return bulunan;
}

const TUR: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.json': 'application/json',
};

// Basit statik sunucu: /selam-katalog/... → dist/...
const sunucu = createServer((istek, yanit) => {
  let yol = decodeURIComponent((istek.url ?? '/').split('?')[0]);
  if (!yol.startsWith(BASE)) {
    yanit.writeHead(404).end();
    return;
  }
  yol = yol.slice(BASE.length);
  let dosya = normalize(join(DIST, yol));
  if (!dosya.startsWith(DIST)) {
    yanit.writeHead(403).end();
    return;
  }
  if (existsSync(dosya) && statSync(dosya).isDirectory()) dosya = join(dosya, 'index.html');
  if (!existsSync(dosya)) {
    yanit.writeHead(404).end();
    return;
  }
  yanit.writeHead(200, { 'Content-Type': TUR[extname(dosya)] ?? 'application/octet-stream' });
  createReadStream(dosya).pipe(yanit);
});

await new Promise<void>((tamam) => sunucu.listen(0, '127.0.0.1', () => tamam()));
const adres = sunucu.address();
const port = typeof adres === 'object' && adres ? adres.port : 0;
const sayfa = `http://127.0.0.1:${port}${BASE}katalog-yazdir/`;
const profil = mkdtempSync(join(tmpdir(), 'selam-pdf-'));

try {
  const tarayici = tarayiciBul();
  console.log(`Basılıyor: ${sayfa}\nTarayıcı: ${tarayici}`);
  // Eşzamansız olmalı: execFileSync Node'u kilitler, yerel sunucu tarayıcıya cevap veremez (zaman aşımı)
  await promisify(execFile)(
    tarayici,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      '--no-first-run',
      `--user-data-dir=${profil}`,
      '--no-pdf-header-footer',
      '--run-all-compositor-stages-before-draw',
      '--virtual-time-budget=20000',
      `--print-to-pdf=${resolve(CIKTI)}`,
      sayfa,
    ],
    { timeout: 180_000 },
  );
} finally {
  sunucu.close();
  rmSync(profil, { recursive: true, force: true });
}

if (!existsSync(CIKTI) || statSync(CIKTI).size < 10_000) {
  console.error('✗ PDF üretilemedi.');
  process.exit(1);
}
console.log(`✓ ${PDF_ADI} — ${Math.round(statSync(CIKTI).size / 1024)} KB`);
