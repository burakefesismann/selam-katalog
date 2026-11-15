/**
 * Panelde "markdown" alanına yazılan metni HTML'e çevirir (ör. marka "Uzun tanıtım").
 * İçerik sadece depoya yazma yetkisi olanlardan (panel/paket) gelir; ziyaretçi girdisi DEĞİLDİR.
 */
import { marked } from 'marked';

export function markdownHtml(metin: string | undefined): string {
  if (!metin?.trim()) return '';
  return marked.parse(metin, { async: false, gfm: true, breaks: true });
}
