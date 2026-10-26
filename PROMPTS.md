# PROMPTS.md — AI bilan ishlash jurnali

Bu faylda sun’iy intellektga yozilgan barcha texnik so‘rovlar ketma-ket qayd etilgan.

---

## Prompt 1 — Arxitektura (PRD, Component Tree, papkalar, mock sxema)

**So‘rov:**
> Sen senior frontend arxitektorsan. IT kompaniya uchun React (Vite) da landing page loyihalash kerak.
> Menga quyidagilarni ber:
> 1. Texnik topshiriq (PRD): maqsad, auditoriya, funksional va nofunksional talablar.
> 2. Komponentlar daraxti (Component Tree).
> 3. Papkalar tuzilmasi (components/, data/, sections/).
> 4. Mock ma’lumotlar sxemasi.
> Bo‘limlar: Header, Hero, Services, Advantages, Stats, Testimonials, CTA, ContactForm, Footer.
> Qo‘shimcha kutubxona ishlatma, faqat React.

**Natija:**

### 1) PRD

- **Maqsad:** IT kompaniya xizmatlarini taqdim etish va mijozlardan so‘rov (lead) yig‘ish.
- **Auditoriya:** kichik va o‘rta biznes egalari, startaplar.
- **Funksional talablar:**
  - 9 ta alohida bo‘lim (Header, Hero, Services, Advantages, Stats, Testimonials, CTA, ContactForm, Footer).
  - Aloqa formasi: ism, telefon, xabar. Yuborilganda Toast chiqadi, maydonlar tozalanadi.
  - Sticky header va bo‘limlarga silliq o‘tish (scroll-smooth).
  - Tugmalarda hover effekti, statistikada raqam animatsiyasi.
- **Nofunksional talablar:** semantik HTML (`header`, `main`, `section`, `footer`), mobil qurilmalarga moslashuv, klaviatura fokusi, `prefers-reduced-motion` ni hurmat qilish, qo‘shimcha kutubxonasiz.

### 2) Component Tree

```
App
├── Header
│   └── Button
├── main
│   ├── Hero (Button)
│   ├── Services (SectionTitle)
│   ├── Advantages (SectionTitle)
│   ├── Stats (SectionTitle, Counter)
│   ├── Testimonials (SectionTitle)
│   ├── CTA (Button)
│   └── ContactForm (SectionTitle, Button, Toast)
└── Footer
```

### 3) Papkalar tuzilmasi

```
src/
├── components/   # qayta ishlatiladigan: Header, Footer, Button, SectionTitle, Toast
├── sections/     # sahifa bo‘limlari: Hero, Services, Advantages, Stats, Testimonials, CTA, ContactForm
├── data/         # mock ma’lumotlar: nav, services, advantages, stats, testimonials
├── App.jsx
├── main.jsx
└── index.css
```

### 4) Mock ma’lumotlar sxemasi

```
nav:          { id: string, label: string }
services:     { id: number, icon: string, title: string, description: string }
advantages:   { id: number, title: string, description: string }
stats:        { id: number, value: number, suffix: string, label: string }
testimonials: { id: number, name: string, role: string, text: string }
```

---

## Prompt 2 — Mock ma’lumotlar

**So‘rov:**
> data/ papkasi uchun yuqoridagi sxema bo‘yicha o‘zbek tilida mock ma’lumotlar yoz: 6 ta xizmat, 4 ta afzallik, 4 ta statistika, 3 ta fikr.

---

## Prompt 3 — Komponentlar

**So‘rov:**
> Har bir bo‘limni alohida React funksional komponent sifatida yoz. Ma’lumotni data/ dan o‘qi. Semantik teglardan foydalan, har bir `section` ga `aria-labelledby` ber, keraksiz `div` yozma.

---

## Prompt 4 — Aloqa formasi

**So‘rov:**
> ContactForm komponenti: ism, telefon, xabar maydonlari (controlled inputs). Yuborilganda Toast xabarnomasi chiqsin va maydonlar tozalansin. Toast 4 soniyadan keyin o‘zi yopilsin.

---

## Prompt 5 — UI/UX

**So‘rov:**
> Header `position: sticky` bo‘lsin, `html` ga `scroll-behavior: smooth` va `scroll-padding-top` qo‘sh. Tugmalarga hover effekti ber. Stats bo‘limida raqamlar ekranga kirganda 0 dan sanab chiqsin (IntersectionObserver, kutubxonasiz).

---

## Prompt 6 — Kodni tekshirish

**So‘rov:**
> Yozilgan kodni tekshir: semantik teglar to‘g‘rimi, ortiqcha `div` va keraksiz kutubxonalar bormi, `key` va `aria` atributlari joyidami?

**Mustaqil tekshiruv natijasi:**
- Ortiqcha kutubxona yo‘q: faqat `react` va `react-dom`.
- Struktura: `header` → `main` (ichida `section`lar) → `footer`.
- Ro‘yxatlar `ul/li` bilan berilgan, keraksiz o‘rovchi `div`lar olib tashlangan.
- Har bir bo‘lim sarlavhasi `aria-labelledby` bilan bog‘langan.
