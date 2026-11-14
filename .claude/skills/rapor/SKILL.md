---
name: rapor
description: Beyin takımına (planlama sohbeti) yapıştırılacak kısa durum raporu hazırla.
disable-model-invocation: true
---

Kullanıcı, planlama yapılan ayrı Claude sohbetine ("beyin takımı") durum aktaracak.
Dosyaları değiştirme; sadece oku ve aşağıdaki formatta, tek bir kod bloğu içinde rapor üret:

```
## Selam Katalog — Durum Raporu (<tarih>)
Biten görevler: <PLAN.md'de [x] olanların kimlikleri, son 5 tanesi açık yazılı>
Şu an / yarım kalan: <...>
Sıradaki: <...>
Site adresi: <...>
Kullanıcıdan beklenenler: <DURUM.md'den>
Beyin takımına sorular / karar gerekenler: <varsa, maddeler halinde>
Öneriler: <DURUM.md > Öneriler>
Teknik notlar: <beyin takımının bilmesi gereken kısıtlar, ör. içerik şemasındaki değişiklikler>
```

Eğer `docs/ICERIK-SEMASI.md` son rapordan beri değiştiyse, raporun altına "Şema değişti, ICERIK-SEMASI.md'yi de
beyin takımına gönder" notu ekle.
