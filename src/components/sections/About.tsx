import { motion } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'
import Button from '../ui/Button'
import { SITE_CONFIG } from '../../data/content'
import { useLang } from '../../contexts/LanguageContext'

const IMAGE_SRCS = [
  '/images/gallery/2025.jpg',
  '/images/gallery/2025.2.jpg',
  '/images/gallery/2024.jpg',
  '/images/gallery/2024.2.jpg',
]

export default function About() {
  const { t } = useLang()

  return (
    <section id="hakkinda" className="bg-white py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Text column */}
          <ScrollReveal direction="left">
            <div>
              <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-4 flex items-center gap-2">
                <span className="inline-block w-8 h-px bg-current" />
                {t.about.overline}
              </p>

              <h2
                className="font-display text-navy-900 leading-none mb-6"
                style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}
              >
                {t.about.titleLines[0]}
                <br />
                {t.about.titleLines[1]}
                <br />
                {t.about.titleLines[2]}
              </h2>

              <div className="w-16 h-1 bg-crimson mb-8" />

              <p className="font-sans text-base sm:text-lg text-navy-600 leading-relaxed mb-6">
                {t.about.desc1}
              </p>

              <p className="font-sans text-base text-navy-600 leading-relaxed mb-10">
                {t.about.desc2(SITE_CONFIG.year, SITE_CONFIG.edition)}
              </p>

              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex flex-col">
                  <span className="font-display text-5xl text-navy-900 leading-none">
                    {SITE_CONFIG.edition}.
                  </span>
                  <span className="font-sans text-sm text-navy-500 mt-1">{t.about.editionLabel}</span>
                </div>
                <div className="w-px bg-ivory-deep self-stretch" />
                <div className="flex flex-col">
                  <span className="font-display text-5xl text-navy-900 leading-none">3</span>
                  <span className="font-sans text-sm text-navy-500 mt-1">{t.about.dayFairLabel}</span>
                </div>
                <div className="w-px bg-ivory-deep self-stretch" />
                <div className="flex flex-col">
                  <span className="font-display text-5xl text-crimson leading-none">2017</span>
                  <span className="font-sans text-sm text-navy-500 mt-1">{t.about.sinceLabel}</span>
                </div>
              </div>

              <Button variant="primary" size="lg" href="#neden-cef">
                {t.about.button}
              </Button>
            </div>
          </ScrollReveal>

          {/* Image column */}
          <ScrollReveal direction="right" delay={0.15}>
            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                {IMAGE_SRCS.map((src, i) => (
                  <motion.div
                    key={src}
                    className="relative aspect-square overflow-hidden bg-ivory-dark group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.35 }}
                  >
                    <img
                      src={src}
                      alt={t.about.images[i].alt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-colors duration-300" />
                  </motion.div>
                ))}
              </div>

              {/* Floating edition badge */}
              <motion.div
                className="absolute -bottom-5 right-0 sm:-right-5 bg-crimson text-white px-6 py-4 shadow-2xl z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="font-display text-4xl leading-none block">{SITE_CONFIG.edition}.</span>
                <span className="font-sans text-xs uppercase tracking-[0.15em] text-white/80">{t.about.editionLabel}</span>
              </motion.div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
