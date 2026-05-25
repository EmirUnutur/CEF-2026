import { HomeIcon, UserPlusIcon, PhotoIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

const ITEMS = [
  { label: 'Ana Sayfa', Icon: HomeIcon, href: '#anasayfa', highlight: false },
  { label: 'Ziyaretçi', Icon: UserPlusIcon, href: '#ziyaretci', highlight: true },
  { label: 'Galeri', Icon: PhotoIcon, href: '#galeri', highlight: false },
  { label: 'İletişim', Icon: EnvelopeIcon, href: '#iletisim', highlight: false },
]

export default function MobileNav() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-ivory-dark shadow-[0_-4px_24px_rgba(10,22,40,0.08)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      aria-label="Mobil navigasyon"
    >
      <div className="flex">
        {ITEMS.map(({ label, Icon, href, highlight }) => (
          <a
            key={href}
            href={href}
            className={`flex-1 flex flex-col items-center justify-center gap-1 py-3 min-h-[60px] transition-colors duration-150 ${
              highlight
                ? 'bg-crimson text-white'
                : 'text-navy-400 hover:text-crimson'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="font-sans text-[10px] font-semibold tracking-[0.08em] uppercase">
              {label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  )
}
