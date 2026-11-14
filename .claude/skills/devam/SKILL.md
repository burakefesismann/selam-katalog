---
name: devam
description: Kaldığımız yerden devam et — durumu oku, sıradaki görevi yap, kaydet ve özetle.
disable-model-invocation: true
---

Bu projede kaldığın yerden devam ediyorsun. Sırayla:

1. `docs/DURUM.md` ve `docs/PLAN.md` dosyalarını oku. `git status` ve `git log --oneline -10` çalıştır
   (git henüz kurulmadıysa bu adımı atla).
2. DURUM.md'de "Yarım kalan" bir iş varsa: `git diff` ve son WIP commit'e bakarak nerede kalındığını anla,
   önce onu bitir.
3. Yoksa PLAN.md'deki ilk işaretlenmemiş görevi al. Kullanıcı bir görev kimliği verdiyse onu al: $ARGUMENTS
4. Başlamadan önce kullanıcıya tek cümleyle hangi görevi yapacağını söyle ve `DURUM.md > Şu an` bölümünü güncelle.
5. Görevi CLAUDE.md'deki kurallara göre yap. Kullanıcıdan bir şey gerekiyorsa (karar, dosya, GitHub'da tıklama)
   açıkça ve adım adım iste, cevabını bekle.
6. Bitirince: `npm run build` (proje kurulduysa) → PLAN.md'de `[x]` → DURUM.md güncelle
   (Şu an, Sıradaki, Oturum günlüğü) → commit (`F#.#: açıklama`) → push.
7. Kullanıcıya Türkçe 3–5 satır özet ver: ne yapıldı, kendisi nasıl kontrol eder, sıradaki görev ne.
   Sıradaki görev için **yeni bir sohbet açıp tekrar `/devam` yazmasını** hatırlat.

Bağlam veya limit dolmak üzereyse işi yarıda bırakma: `DURUM.md > Yarım kalan` bölümüne durumu yaz ve
`WIP F#.#: ...` commit'i at.
