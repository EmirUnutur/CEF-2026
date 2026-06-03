# ÇEF 2026 — Çerkezköy Endüstriyel Fuarı Web Sitesi

Çerkezköy Ticaret ve Sanayi Odası tarafından düzenlenen **Çerkezköy Endüstriyel Fuarı 2026** için hazırlanmış tanıtım ve ziyaretçi kayıt sitesi.

**Fuar Tarihleri:** 09–11 Eylül 2026  
**Mekan:** Çerkezköy Kapalı Pazar Alanı, Çerkezköy / Tekirdağ

---

## Teknolojiler

| Teknoloji | Versiyon |
|---|---|
| React | 19 |
| TypeScript | 5 |
| Vite | 6 |
| Tailwind CSS | 4 |
| Framer Motion | 12 |

---

## Gereksinimler

- **Node.js** 18 veya üzeri
- **npm** 9 veya üzeri

---

## Kurulum

### 1. Bağımlılıkları yükle

```bash
npm install
```

### 2. Ortam değişkenlerini yapılandır

`.env.example` dosyasını `.env` olarak kopyalayın ve değerleri doldurun:

```bash
cp .env.example .env
```

`.env` dosyasını açıp `VITE_SHEETS_ENDPOINT` değerini Google Apps Script Web App URL'si ile doldurun.

### 3. Geliştirme sunucusunu başlat

```bash
npm run dev
```

Tarayıcıda `http://localhost:5173` adresine gidin.

---

## Build & Deploy

### Production build oluştur

```bash
npm run build
```

Çıktı `dist/` klasörüne yazılır. Bu klasörü herhangi bir statik hosting platformuna (Vercel, Netlify, vb.) yükleyebilirsiniz.

### Build önizlemesi

```bash
npm run preview
```

---

## Proje Yapısı

```
├── public/                  # Statik dosyalar (görseller, videolar, favicon)
│   ├── images/              # Fuar fotoğrafları ve logolar
│   ├── videos/              # Fuar tanıtım videosu
│   └── downloads/           # İndirilecek dosyalar (katılımcı listesi)
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar, Footer, MobileNav
│   │   ├── sections/        # Sayfa bölümleri (Hero, About, Sectors, vb.)
│   │   └── ui/              # Tekrar kullanılabilir UI bileşenleri
│   ├── contexts/            # React context (dil yönetimi)
│   ├── data/                # Site içeriği ve yapılandırma
│   ├── i18n/                # Türkçe / İngilizce çeviriler
│   └── main.tsx             # Uygulama giriş noktası
├── index.html               # HTML şablonu
├── vite.config.ts           # Vite yapılandırması
└── .env                     # Ortam değişkenleri (git'e eklenmez)
```

---

## Ortam Değişkenleri

| Değişken | Açıklama |
|---|---|
| `VITE_SHEETS_ENDPOINT` | Ziyaretçi kayıt formunun verilerini alan Google Apps Script Web App URL'si |

---

## Özellikler

- Türkçe / İngilizce çift dil desteği (localStorage ile kalıcı)
- Ziyaretçi kayıt formu → Google Sheets entegrasyonu
- 14 bölüm: Hero, Hakkında, Neden ÇEF?, Sektörler, İstatistikler, Katılım, Ziyaretçi Formu, Galeri, Ulaşım, İletişim ve daha fazlası
- Mobil uyumlu tasarım, mobil alt navigasyon barı
- Framer Motion animasyonları

---

## Lisans

© 2026 Çerkezköy Ticaret ve Sanayi Odası. Tüm hakları saklıdır.
