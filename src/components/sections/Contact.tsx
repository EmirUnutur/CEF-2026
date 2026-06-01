import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import ScrollReveal from '../ui/ScrollReveal'
import { SITE_CONFIG } from '../../data/content'
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
    <section id="iletisim" className="bg-ivory py-10 sm:py-14 border-t border-ivory-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <ScrollReveal className="mb-8">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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

      </div>
    </section>
  )
}
