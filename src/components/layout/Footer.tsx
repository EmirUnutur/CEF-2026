import { SITE_CONFIG, FOOTER_LINKS, SOCIAL_LINKS } from '../../data/content'
import { SOCIAL_ICON_MAP } from '../ui/SocialIcons'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display text-3xl tracking-widest text-white leading-none">ÇEF</span>
              <div className="flex flex-col leading-none">
                <span className="font-sans text-[10px] font-semibold tracking-[0.25em] uppercase text-white/50">
                  2026
                </span>
                <span className="w-full h-0.5 bg-crimson mt-0.5" />
              </div>
            </div>
            <p className="font-sans text-sm text-white/55 leading-relaxed mb-5">
              {SITE_CONFIG.slogan}
            </p>
            <p className="font-sans text-sm text-white/40 leading-relaxed">
              {SITE_CONFIG.dates}
              <br />
              {SITE_CONFIG.venue}
            </p>
          </div>

          {/* Footer link columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <h4 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-4">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-150"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-4">
              İletişim
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-150"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-150"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <p className="font-sans text-sm text-white/60 leading-relaxed">
                  {SITE_CONFIG.address}
                </p>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-6" role="list" aria-label="Sosyal medya">
              {SOCIAL_LINKS.map((s) => {
                const Icon = SOCIAL_ICON_MAP[s.icon]
                const isPlaceholder = s.href === '#'
                return (
                  <a
                    key={s.icon}
                    href={isPlaceholder ? undefined : s.href}
                    role="listitem"
                    aria-label={s.label}
                    target={isPlaceholder ? undefined : '_blank'}
                    rel={isPlaceholder ? undefined : 'noopener noreferrer'}
                    onClick={isPlaceholder ? (e) => e.preventDefault() : undefined}
                    className={`transition-colors duration-150 ${
                      isPlaceholder
                        ? 'text-white/20 cursor-not-allowed'
                        : 'text-white/40 hover:text-crimson cursor-pointer'
                    }`}
                  >
                    {Icon && <Icon />}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-white/30">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. Tüm hakları saklıdır.
          </p>
          <p className="font-sans text-xs text-white/20">
            {SITE_CONFIG.city}
          </p>
        </div>
      </div>
    </footer>
  )
}
