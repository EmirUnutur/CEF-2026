// ─── Site Configuration ───────────────────────────────────────────────────────

export const SITE_CONFIG = {
  name: 'Çerkezköy Endüstriyel Fuarı',
  shortName: 'ÇEF',
  year: '2026',
  edition: 10,
  slogan: "Trakya'nın Sanayi Gücünü Buluşturan Endüstriyel Platform",
  dates: '09–11 Eylül 2026',
  venue: 'Çerkezköy Kapalı Pazar Alanı',
  city: 'Çerkezköy / Tekirdağ',
  targetDate: new Date('2026-09-09T09:00:00'),
  email: 'info@endustriyelfuar.org',
  phone: '0282 726 88 88',
  address: 'Çerkezköy Kapalı Pazar Alanı, Çerkezköy / Tekirdağ',
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=41.2820396,27.9981517',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=41.2820396,27.9981517&z=16&output=embed&hl=tr',
}

// ─── Navigation ───────────────────────────────────────────────────────────────

export const NAV_ITEMS = [
  { label: 'Ana Sayfa', href: '#anasayfa' },
  { label: 'Neden ÇEF?', href: '#neden-cef' },
  { label: 'Sektörler', href: '#sektorler' },
  { label: 'Ziyaretçi', href: '#ziyaretci' },
  { label: 'Geçmiş Fuarlar', href: '#gecmis-fuarlar' },
]

export const HAKKINDA_DROPDOWN = [
  { label: 'Galeri', href: '#galeri', description: 'Fotoğraf arşivini incele' },
  { label: 'Ulaşım', href: '#ulasim', description: 'Fuar alanına ulaşım bilgisi' },
  { label: 'İletişim', href: '#iletisim', description: 'Bize ulaşın' },
]

// ─── Why CEF? ─────────────────────────────────────────────────────────────────

export const WHY_CEF_ITEMS = [
  {
    id: 'regional',
    icon: 'map-pin',
    title: 'Bölgesel Sanayi Gücü',
    description:
      "Trakya'nın üretim potansiyelini ve sanayi firmalarını buluşturan tek çatılı endüstriyel platform.",
  },
  {
    id: 'connections',
    icon: 'users',
    title: 'Doğru İş Bağlantıları',
    description:
      'Hedef kitlenizle yüz yüze tanışın, güvenilir iş ortaklıkları kurun ve kalıcı ticari ilişkiler geliştirin.',
  },
  {
    id: 'markets',
    icon: 'trending-up',
    title: 'Yeni Pazar Fırsatları',
    description:
      'Ürün ve hizmetlerinizi potansiyel alıcılarla buluşturun; yeni müşteri ve ihracat kapıları açın.',
  },
  {
    id: 'interaction',
    icon: 'arrows',
    title: 'Sektörler Arası Etkileşim',
    description:
      'Farklı sektörlerden profesyonellerle bir araya gelin, bilgi paylaşın ve inovatif çözümler keşfedin.',
  },
]

// ─── Sectors ──────────────────────────────────────────────────────────────────

export const SECTORS = [
  { id: 'machinery', name: 'Makine ve Ekipman', icon: 'cog' },
  { id: 'automation', name: 'Otomasyon ve Robotik', icon: 'cpu' },
  { id: 'metal', name: 'Metal ve Yan Sanayi', icon: 'wrench' },
  { id: 'electrical', name: 'Elektrik ve Elektronik', icon: 'bolt' },
  { id: 'energy', name: 'Enerji Sistemleri', icon: 'fire' },
  { id: 'logistics', name: 'Lojistik ve Depolama', icon: 'truck' },
  { id: 'software', name: 'Endüstriyel Yazılım', icon: 'desktop' },
  { id: 'production', name: 'Üretim Teknolojileri', icon: 'cog6' },
  { id: 'safety', name: 'İş Güvenliği', icon: 'shield' },
  { id: 'packaging', name: 'Ambalaj ve Paketleme', icon: 'archive' },
]

// ─── Statistics ───────────────────────────────────────────────────────────────

export const STATS = [
  {
    id: 'edition',
    value: 10,
    suffix: '.',
    prefix: '',
    label: 'Edisyon',
    sublabel: '2026 yılında gerçekleşiyor',
    animateFrom: 0,
  },
  {
    id: 'days',
    value: 3,
    suffix: '',
    prefix: '',
    label: 'Günlük Fuar',
    sublabel: '09–11 Eylül 2026',
    animateFrom: 0,
  },
  {
    id: 'founded',
    value: 2017,
    suffix: '',
    prefix: '',
    label: "'dan Beri",
    sublabel: 'Kesintisiz büyüyen organizasyon',
    animateFrom: 2014,
  },
  {
    id: 'editions',
    value: 8,
    suffix: '+',
    prefix: '',
    label: 'Geçmiş Fuar',
    sublabel: 'Kapsamlı arşiv ve deneyim',
    animateFrom: 0,
  },
]

// ─── Past Fairs ───────────────────────────────────────────────────────────────

export const PAST_FAIRS = [
  { year: '2025', label: 'ÇEF 2025', image: '/images/gallery/2025.jpg', alt: 'Çerkezköy Endüstriyel Fuarı 2025' },
  { year: '2024', label: 'ÇEF 2024', image: '/images/gallery/2024.jpg', alt: 'Çerkezköy Endüstriyel Fuarı 2024' },
  { year: '2023', label: 'ÇEF 2023', image: '/images/gallery/2023.jpg', alt: 'Çerkezköy Endüstriyel Fuarı 2023' },
  { year: '2022', label: 'ÇEF 2022', image: '/images/gallery/2022.jpg', alt: 'Çerkezköy Endüstriyel Fuarı 2022' },
  { year: '2021', label: 'ÇEF 2021', image: '/images/gallery/2021.jpeg', alt: 'Çerkezköy Endüstriyel Fuarı 2021' },
  { year: '2020', label: 'ÇEF 2020', image: '/images/gallery/2020.jpg', alt: 'Çerkezköy Endüstriyel Fuarı 2020' },
  { year: '2019', label: 'ÇEF 2019', image: '/images/gallery/2019.jpg', alt: 'Çerkezköy Endüstriyel Fuarı 2019' },
  { year: '2018', label: 'ÇEF 2018', image: '/images/gallery/2018.jpg', alt: 'Çerkezköy Endüstriyel Fuarı 2018' },
  { year: '2017', label: 'ÇEF 2017', image: '/images/gallery/2017.jpg', alt: 'Çerkezköy Endüstriyel Fuarı 2017' },
]

// ─── Social Media ─────────────────────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/cerkezkoytso/', icon: 'instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/cerkezkoytso', icon: 'facebook' },
  { label: 'Twitter / X', href: '#', icon: 'twitter' },
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { label: 'YouTube', href: '#', icon: 'youtube' },
]

// ─── Footer Links ─────────────────────────────────────────────────────────────

export const FOOTER_LINKS = [
  {
    heading: 'Fuar',
    items: [
      { label: 'Ana Sayfa', href: '#anasayfa' },
      { label: 'Neden ÇEF?', href: '#neden-cef' },
      { label: 'Sektörler', href: '#sektorler' },
      { label: 'Geçmiş Fuarlar', href: '#gecmis-fuarlar' },
    ],
  },
  {
    heading: 'Katılım',
    items: [
      { label: 'Katılımcı Bilgisi', href: '#katilim' },
      { label: 'Ziyaretçi Kayıt', href: '#ziyaretci' },
      { label: 'Galeri', href: '#galeri' },
      { label: 'Ulaşım', href: '#ulasim' },
    ],
  },
]
