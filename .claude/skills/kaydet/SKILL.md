---
name: kaydet
description: Acil durum kaydı — limit dolmadan önce yarım işi DURUM.md'ye yaz ve WIP commit at.
disable-model-invocation: true
---

Kullanıcı oturum limitinin dolmak üzere olduğunu düşünüyor. Yeni iş başlatma. Hemen:

1. `DURUM.md > Yarım kalan` bölümüne yaz:
   - Hangi görev (kimlik)
   - Tamamlanan adımlar
   - Kalan adımlar (bir sonraki oturum hiçbir şey hatırlamadan devam edebilecek netlikte)
   - Dokunulan dosyalar
   - Bilinen sorun/hata varsa tam mesajıyla
2. `git add -A && git commit -m "WIP <görev>: <kısa durum>"` ve mümkünse `git push`.
3. Kullanıcıya tek satır: "Kaydedildi. Limit açılınca yeni sohbette /devam yazman yeterli."
