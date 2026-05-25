# CEF_WEBSITE_PLAN.md
## Çerkezköy Endüstriyel Fuarı 2026 — Proje Dokümantasyonu

---

## 1. Projenin Amacı

Çerkezköy Endüstriyel Fuarı 2026 için modern, responsive, animasyonlu ve kurumsal bir web sitesi geliştirmek.
Hedef: Katılımcı firmalar ve ziyaretçiler için bilgilendirici, güçlü bir dijital platform oluşturmak.

---

## 2. Referans Alınan Siteler

- **packagingfair.com** — Sayfa yapısı, bölüm akışı ve fuar sitesi mantığı
- **endustriyelfuar.org** — Mevcut ÇEF içerikleri, geçmiş fuarlar, sektörler
- **frontend-design skill (Anthropic)** — Tasarım kalitesi ve özgün estetik rehberliği

---

## 3. Tasarım Yaklaşımı

**Aesthetic Direction: "Premium Industrial Editorial"**

Endüstriyel üretim gücünü lüks bir dergi estetiğiyle birleştiren, kurumsal ve premium bir kimlik.
Sanayi fuarı atmosferi ağır basmakla birlikte; karanlık, neon veya oyunsu değil — açık, güçlü ve güvenilir.

**Temel prensipler:**
- Bol negatif alan (whitespace) + güçlü tipografi kesimleri
- Bebas Neue display font — endüstriyel, bold, komutan hissiyatı
- Asimetrik hero layout, büyük başlık kırılmaları
- Kırmızı accent yalnızca CTA ve önemli vurgularda (dağıtık değil, keskin)
- Subtle industrial grid dokusu dark section arka planlarında

---

## 4. Renk Paleti

| Değişken | Hex | Kullanım |
|----------|-----|----------|
| `navy-950` | `#060E1E` | Footer, en koyu arka plan |
| `navy-900` | `#0A1628` | Ana dark section rengi |
| `navy-800` | `#0F2040` | Dark kartlar |
| `navy-700` | `#162D55` | Gradient vurguları |
| `navy-600` | `#1E3A6E` | Açık lacivert |
| `ivory` | `#F7F6F2` | Açık section arka planı |
| `ivory-dark` | `#EAE9E3` | Kart kenarlıkları, separator |
| `crimson` | `#C41E3A` | Ana vurgu / CTA rengi |
| `crimson-dark` | `#A01830` | Hover state |

---

## 5. Sayfa Bölümleri

| ID | Bölüm | Arka Plan |
|----|-------|-----------|
| `#hero` | Hero — Full viewport | navy-900 |
| `#countdown` | Geri Sayım | ivory |
| `#about` | Fuar Hakkında | white |
| `#why-cef` | Neden ÇEF? | ivory |
| `#sectors` | Sektörler | navy-900 |
| `#stats` | Sayılarla ÇEF | white |
| `#participation` | Katılımcı & Ziyaretçi | ivory |
| `#past-fairs` | Geçmiş Fuarlar | ivory |
| `#location` | Ulaşım & Konum | navy-900 |
| `#contact` | Son CTA | navy-950 |

---

## 6. Component Yapısı

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          — Sticky navbar, scroll blur, mobile hamburger
│   │   └── Footer.tsx          — 4 kolonlu footer, sosyal medya
│   ├── sections/
│   │   ├── Hero.tsx            — Full-viewport hero, parallax, fade-in
│   │   ├── Countdown.tsx       — Canlı geri sayım sayacı
│   │   ├── About.tsx           — 2 kolonlu about, mini stats
│   │   ├── WhyCEF.tsx          — 4 avantaj kartı
│   │   ├── Sectors.tsx         — 10 sektör kartı
│   │   ├── Stats.tsx           — Animasyonlu istatistik sayaçları
│   │   ├── Participation.tsx   — Katılımcı & Ziyaretçi kartları
│   │   ├── PastFairs.tsx       — Yatay scroll galeri
│   │   ├── Location.tsx        — Harita + ulaşım bilgileri
│   │   └── CTASection.tsx      — Kapanış CTA
│   └── ui/
│       ├── Button.tsx          — primary / outline / white-outline / ghost
│       ├── SectionTitle.tsx    — overline + başlık + subtitle
│       ├── ScrollReveal.tsx    — whileInView animation wrapper
│       └── AnimatedCounter.tsx — Scroll-tetiklemeli sayaç animasyonu
├── data/
│   └── content.ts              — Tüm site içeriği (metin, tarih, linkler)
├── hooks/
│   └── useCountdown.ts         — Geri sayım hook'u
├── App.tsx
├── main.tsx
└── index.css                   — Tailwind v4 @theme config
```

---

## 7. Animasyon Planı

| Element | Animasyon | Tetikleyici |
|---------|-----------|-------------|
| Navbar | opacity + slide-down | mount |
| Navbar arka plan | blur + bg renk geçişi | scroll Y > 60px |
| Hero içerik | stagger fade-in + slide-up | mount (0.3s delay) |
| Hero arka plan | parallax Y offset | scroll |
| Hero opacity | fade-out | scroll progress |
| Bölüm başlıkları | fade-in + slide-up | whileInView |
| Avantaj kartları | stagger fade-in + slide-up | whileInView |
| Avantaj kartları hover | translateY(-6px) + shadow | hover |
| Sektör kartları | scale in | whileInView |
| Sektör kartları hover | translateY(-4px) + crimson border | hover |
| Stats sayaçlar | 0→hedef ease-out cubic | useInView |
| Geçmiş fuarlar | slide-in-right stagger | whileInView |
| Mobile menü | height + opacity | toggle |
| Butonlar | scale 1.02 | hover |
| Countdown saniye | anlık güncelleme | setInterval 1s |

---

## 8. Responsive Tasarım Notları

- **Breakpoints:** Tailwind varsayılanları (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)
- **Hero başlık:** `clamp(64px, 11vw, 160px)` — tüm ekranlarda orantılı
- **Bölüm padding:** `py-20 sm:py-32` — mobilde kompakt, masaüstünde geniş
- **Navbar:** Masaüstü yatay menü → mobil hamburger overlay
- **About grid:** `grid-cols-1 lg:grid-cols-2` — mobilde dikey, lg'de yatay
- **Sectors grid:** `grid-cols-2 sm:grid-cols-3 lg:grid-cols-5`
- **Stats grid:** `grid-cols-2 lg:grid-cols-4`
- **Past Fairs:** `overflow-x-auto` yatay kaydırma
- **Countdown:** `flex gap-3/4` — tüm ekranlarda 4 kart yanyana

---

## 9. Kullanılacak İçerikler

Tüm site metni `src/data/content.ts` dosyasında merkezi olarak tutulmaktadır.
İçerik değişikliği için yalnızca bu dosyayı düzenlemek yeterlidir.

**SITE_CONFIG** — İsim, tarih, yer, iletişim, hedef tarih
**NAV_ITEMS** — Navbar linkleri
**WHY_CEF_ITEMS** — 4 avantaj kartı
**SECTORS** — 10 sektör listesi
**STATS** — 4 istatistik değeri
**PAST_FAIRS** — 8 geçmiş fuar yılı
**SOCIAL_LINKS** — Sosyal medya URL'leri
**FOOTER_LINKS** — Footer link kolonları

---

## 10. Placeholder Alanlar (Değiştirilecek)

| Dosya | Placeholder | Yapılacak |
|-------|------------|-----------|
| `Hero.tsx` | `background: gradient` | `/images/hero-bg.jpg` ekle, opacity'yi 100 yap |
| `About.tsx` | `div` blokları (gradient bg) | `/images/about-1..4.jpg` ekle |
| `PastFairs.tsx` | gradient div | `/images/fair-YYYY.jpg` ekle |
| `Location.tsx` | map placeholder div | Google Maps iframe ekle |
| `content.ts` | `phone: '+90 XXX...'` | Gerçek telefon numarası |
| `content.ts` | `social href: '#'` | Gerçek sosyal medya URL'leri |
| `content.ts` | `mapsDirectionsUrl` | Gerçek Google Maps linki |
| `index.html` | `favicon.svg` | Gerçek ÇEF favicon |

---

## 11. Geliştirme Sırasında Oluşturulan/Değiştirilen Dosyalar

**Değiştirilen:**
- `vite.config.ts` — @tailwindcss/vite plugin eklendi
- `index.html` — TR lang, meta, Google Fonts (Bebas Neue + DM Sans)
- `src/index.css` — Tailwind v4 @theme, global reset, industrial-grid class
- `src/App.tsx` — Tüm sections ve layout bileşenleri bağlandı

**Oluşturulan (yeni):**
- `src/data/content.ts`
- `src/hooks/useCountdown.ts`
- `src/components/ui/Button.tsx`
- `src/components/ui/SectionTitle.tsx`
- `src/components/ui/ScrollReveal.tsx`
- `src/components/ui/AnimatedCounter.tsx`
- `src/components/layout/Navbar.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/sections/Hero.tsx`
- `src/components/sections/Countdown.tsx`
- `src/components/sections/About.tsx`
- `src/components/sections/WhyCEF.tsx`
- `src/components/sections/Sectors.tsx`
- `src/components/sections/Stats.tsx`
- `src/components/sections/Participation.tsx`
- `src/components/sections/PastFairs.tsx`
- `src/components/sections/Location.tsx`
- `src/components/sections/CTASection.tsx`
- `CEF_WEBSITE_PLAN.md` (bu dosya)

---

## 12. Sonraki Geliştirme Adımları

1. **Görseller:** `/public/images/` klasörüne hero, about ve galeri fotoğrafları ekle
2. **Harita:** Google Maps embed URL'si oluşturup `Location.tsx`'e ekle
3. **Kayıt formu:** `#visitor` ve `#participation` anchor'larına gerçek form sayfaları bağla
4. **İletişim sayfası:** `#contact` için form veya sayfa oluştur
5. **SEO:** `index.html`'e canonical, OG:image ekle
6. **Favicon:** Özel ÇEF favicon tasarla
7. **Sosyal medya:** `content.ts`'deki `href: '#'` değerlerini güncelle
8. **İletişim bilgileri:** Telefon, adres ve e-posta güncelle
9. **Galeri sayfası:** `#gallery` anchor'u için tam galeri bileşeni
10. **Mobil test:** Gerçek cihazda (iOS/Android) test

---

*Son güncelleme: 2026-05-25*
