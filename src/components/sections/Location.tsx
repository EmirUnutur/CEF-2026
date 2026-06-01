import { MapPinIcon } from '@heroicons/react/24/outline'
import ScrollReveal from '../ui/ScrollReveal'
import Button from '../ui/Button'
import { SITE_CONFIG } from '../../data/content'
import { useLang } from '../../contexts/LanguageContext'

export default function Location() {
  const { t } = useLang()
  const loc = t.location

  return (
    <section id="ulasim" className="bg-ivory py-10 sm:py-14 border-t border-ivory-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <ScrollReveal className="mb-8">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-3 flex items-center gap-2">
            <span className="inline-block w-8 h-px bg-current" />
            {loc.overline}
          </p>
          <h2
            className="font-display text-navy-900 leading-none"
            style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}
          >
            {loc.title}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

          {/* Info card */}
          <ScrollReveal direction="left">
            <div className="bg-white border border-ivory-dark p-8 flex flex-col gap-6 h-full">

              {/* Venue */}
              <div>
                <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-navy-400 mb-2">
                  {loc.venueLabel}
                </p>
                <h3 className="font-display text-2xl sm:text-3xl text-navy-900 leading-tight mb-2">
                  {loc.venueName}
                </h3>
                <p className="font-sans text-sm text-navy-400">
                  {t.dates} · {SITE_CONFIG.city}
                </p>
              </div>

              <div className="h-px bg-ivory-dark" />

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-crimson/10 text-crimson flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPinIcon className="w-5 h-5" />
                </div>
                <p className="font-sans text-sm text-navy-600 leading-relaxed">
                  {SITE_CONFIG.address}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-auto">
                <Button variant="primary" size="lg" href={SITE_CONFIG.mapsDirectionsUrl}>
                  <MapPinIcon className="w-5 h-5" />
                  {loc.directions}
                </Button>
              </div>

            </div>
          </ScrollReveal>

          {/* Map */}
          <ScrollReveal direction="right" delay={0.15}>
            <div className="relative aspect-video lg:aspect-auto lg:h-full min-h-[260px] border border-ivory-dark overflow-hidden bg-ivory-dark">
              <iframe
                src={SITE_CONFIG.mapEmbedUrl}
                className="absolute inset-0 w-full h-full border-0 grayscale opacity-80"
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
