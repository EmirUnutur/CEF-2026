import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import ScrollReveal from '../ui/ScrollReveal'
import { SITE_CONFIG, SOCIAL_LINKS } from '../../data/content'
import { SOCIAL_ICON_MAP } from '../ui/SocialIcons'
import { useLang } from '../../contexts/LanguageContext'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact

  const contactCards = [
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      label: c.cards.email.label,
      value: SITE_CONFIG.email,
      href: `mailto:${SITE_CONFIG.email}`,
      external: false,
      cta: c.cards.email.cta,
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      label: c.cards.phone.label,
      value: SITE_CONFIG.phone,
      href: `tel:${SITE_CONFIG.phone}`,
      external: false,
      cta: c.cards.phone.cta,
    },
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      label: c.cards.address.label,
      value: SITE_CONFIG.address,
      href: SITE_CONFIG.mapsDirectionsUrl,
      external: true,
      cta: c.cards.address.cta,
    },
  ]

  return (
    <section id="iletisim" className="bg-ivory py-20 sm:py-32 border-t border-ivory-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <ScrollReveal className="mb-14">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-3 flex items-center gap-2">
            <span className="inline-block w-8 h-px bg-current" />
            {c.overline}
          </p>
          <h2
            className="font-display text-navy-900 leading-none"
            style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}
          >
            {c.title}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {contactCards.map((card, i) => (
            <ScrollReveal key={card.label} delay={i * 0.1}>
              <a
                href={card.href}
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noopener noreferrer' : undefined}
                className="group flex flex-col gap-4 bg-white border border-ivory-dark p-8 hover:border-crimson/50 hover:shadow-md transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 bg-crimson/10 text-crimson flex items-center justify-center group-hover:bg-crimson group-hover:text-white transition-colors duration-300">
                  {card.icon}
                </div>
                <div className="flex-1">
                  <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-navy-400 mb-1">
                    {card.label}
                  </p>
                  <p className="font-sans text-base text-navy-800 leading-snug">
                    {card.value}
                  </p>
                </div>
                <span className="font-sans text-xs text-crimson opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {card.cta}
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Organizer info + social */}
        <ScrollReveal>
          <div className="relative bg-navy-900 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-crimson" aria-hidden="true" />
            <div className="industrial-grid absolute inset-0 opacity-40" aria-hidden="true" />

            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 px-8 sm:px-12 py-8">
              <div className="flex flex-col items-start gap-2">
                <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-1">
                  {c.organizer}
                </p>
                <p className="font-display text-2xl text-white tracking-wide mb-0.5">
                  ÇERKEZKÖY TSO
                </p>
                <p className="font-sans text-sm text-white/55">
                  {c.orgFull}
                </p>
              </div>

              <div className="hidden sm:block w-px self-stretch my-2 bg-white/10" aria-hidden="true" />

              <div className="flex flex-col items-start sm:items-end gap-2">
                <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-white/35">
                  {c.social}
                </p>
                <div className="flex gap-2.5" role="list" aria-label={c.social}>
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
                        className={`w-9 h-9 flex items-center justify-center border transition-colors duration-200 ${
                          isPlaceholder
                            ? 'border-white/10 text-white/20 cursor-not-allowed'
                            : 'border-white/20 text-white/50 hover:border-crimson hover:text-crimson cursor-pointer'
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
        </ScrollReveal>

      </div>
    </section>
  )
}
