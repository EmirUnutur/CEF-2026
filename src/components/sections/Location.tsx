import { MapPinIcon, TruckIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import ScrollReveal from '../ui/ScrollReveal'
import Button from '../ui/Button'
import { SITE_CONFIG } from '../../data/content'

const transport = [
  {
    icon: <TruckIcon className="w-5 h-5" />,
    label: 'Karayolu',
    detail: 'D-100 karayolundan Çerkezköy çıkışı, yaklaşık 5 dk',
  },
  {
    icon: <ArrowRightCircleIcon className="w-5 h-5" />,
    label: 'Demiryolu',
    detail: "Çerkezköy Tren Garı'ndan yürüme mesafesinde",
  },
  {
    icon: <MapPinIcon className="w-5 h-5" />,
    label: 'Adres',
    detail: SITE_CONFIG.address,
  },
]

export default function Location() {
  return (
    <section id="location" className="bg-navy-900 industrial-grid py-20 sm:py-32 relative overflow-hidden">
      {/* Crimson left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-crimson/50" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">

        <ScrollReveal className="mb-14">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-3 flex items-center gap-2">
            <span className="inline-block w-8 h-px bg-crimson" />
            Ulaşım
          </p>
          <h2
            className="font-display text-white leading-none"
            style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}
          >
            FUAR ALANINA ULAŞIM
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Google Maps embed */}
          <ScrollReveal direction="left">
            <div className="relative aspect-video lg:aspect-square bg-navy-800 border border-white/10 overflow-hidden">
              <iframe
                src={SITE_CONFIG.mapEmbedUrl}
                className="w-full h-full border-0 grayscale contrast-125 opacity-90"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fuar Alanı Haritası — Çerkezköy"
              />
            </div>
          </ScrollReveal>

          {/* Info panel */}
          <ScrollReveal direction="right" delay={0.15}>
            <div className="flex flex-col gap-6">
              {/* Venue card */}
              <div className="bg-white/5 border border-white/10 p-6">
                <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-2">
                  Fuar Alanı
                </p>
                <h3 className="font-display text-3xl text-white mb-1 tracking-wide">
                  ÇERKEZKÖY KAPALI PAZAR ALANI
                </h3>
                <p className="font-sans text-sm text-white/55">
                  {SITE_CONFIG.dates} · {SITE_CONFIG.city}
                </p>
              </div>

              {/* Transport options */}
              <div className="flex flex-col gap-3">
                {transport.map((t) => (
                  <div
                    key={t.label}
                    className="flex items-start gap-4 bg-white/5 border border-white/10 p-4 group hover:border-crimson/40 transition-colors duration-200"
                  >
                    <div className="w-9 h-9 flex-shrink-0 bg-crimson/20 text-crimson flex items-center justify-center">
                      {t.icon}
                    </div>
                    <div>
                      <p className="font-sans text-sm font-semibold text-white/80 mb-0.5">{t.label}</p>
                      <p className="font-sans text-sm text-white/50">{t.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                variant="white-outline"
                size="lg"
                href={SITE_CONFIG.mapsDirectionsUrl}
              >
                <MapPinIcon className="w-5 h-5" />
                Yol Tarifi Al
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
