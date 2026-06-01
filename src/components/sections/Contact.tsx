import { EnvelopeIcon, PhoneIcon, MapPinIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import ScrollReveal from '../ui/ScrollReveal'
import { SITE_CONFIG } from '../../data/content'
import { useLang } from '../../contexts/LanguageContext'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact
  const loc = t.location

  return (
    <section id="iletisim" className="bg-ivory py-10 sm:py-14 border-t border-ivory-dark">
      {/* ulasim anchor for navbar link */}
      <span id="ulasim" className="block absolute -mt-20" aria-hidden="true" />

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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-stretch">

          {/* Left — contact info (2/5) */}
          <ScrollReveal direction="left" className="lg:col-span-2 flex flex-col gap-4">

            {/* Email */}
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="group flex items-center gap-4 bg-white border border-ivory-dark p-6 hover:border-crimson/50 hover:shadow-sm transition-all duration-300"
            >
              <div className="w-11 h-11 bg-crimson/10 text-crimson flex items-center justify-center flex-shrink-0 group-hover:bg-crimson group-hover:text-white transition-colors duration-300">
                <EnvelopeIcon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-navy-400 mb-0.5">
                  {c.cards.email.label}
                </p>
                <p className="font-sans text-sm font-medium text-navy-800 truncate">
                  {SITE_CONFIG.email}
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="group flex items-center gap-4 bg-white border border-ivory-dark p-6 hover:border-crimson/50 hover:shadow-sm transition-all duration-300"
            >
              <div className="w-11 h-11 bg-crimson/10 text-crimson flex items-center justify-center flex-shrink-0 group-hover:bg-crimson group-hover:text-white transition-colors duration-300">
                <PhoneIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-navy-400 mb-0.5">
                  {c.cards.phone.label}
                </p>
                <p className="font-sans text-sm font-medium text-navy-800">
                  {SITE_CONFIG.phone}
                </p>
              </div>
            </a>

            {/* Address + directions */}
            <div className="bg-white border border-ivory-dark p-6 flex flex-col gap-4 flex-1">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-crimson/10 text-crimson flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPinIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-navy-400 mb-1">
                    {c.cards.address.label}
                  </p>
                  <p className="font-sans text-sm text-navy-700 leading-relaxed">
                    {SITE_CONFIG.address}
                  </p>
                </div>
              </div>

              <a
                href={SITE_CONFIG.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.1em] uppercase text-crimson hover:text-navy-900 transition-colors duration-200"
              >
                <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
                {loc.directions}
              </a>
            </div>

          </ScrollReveal>

          {/* Right — map (3/5) */}
          <ScrollReveal direction="right" delay={0.1} className="lg:col-span-3">
            <div className="w-full h-full min-h-[320px] lg:min-h-0 border border-ivory-dark overflow-hidden bg-ivory-dark">
              <iframe
                src={SITE_CONFIG.mapEmbedUrl}
                className="w-full h-full min-h-[320px] lg:min-h-full border-0 grayscale opacity-85"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={loc.mapTitle}
              />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
