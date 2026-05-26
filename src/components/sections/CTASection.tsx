import { motion } from 'framer-motion'
import Button from '../ui/Button'
import { SITE_CONFIG } from '../../data/content'
import { useLang } from '../../contexts/LanguageContext'

export default function CTASection() {
  const { t } = useLang()
  const cta = t.cta

  return (
    <section
      id="kayit"
      className="bg-navy-950 industrial-grid py-24 sm:py-36 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-crimson to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900/50 to-transparent pointer-events-none" aria-hidden="true" />

      <div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display text-white/[0.025] leading-none"
          style={{ fontSize: 'clamp(100px, 20vw, 280px)' }}
        >
          ÇEF
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-white/40 mb-6 flex items-center justify-center gap-3">
            <span className="inline-block w-8 h-px bg-crimson/60" />
            {t.dates} · {SITE_CONFIG.venue}
            <span className="inline-block w-8 h-px bg-crimson/60" />
          </p>

          <h2
            className="font-display text-white leading-none mb-8"
            style={{ fontSize: 'clamp(48px, 9vw, 120px)', letterSpacing: '0.02em' }}
          >
            {cta.headlineLines[0]}
            <br />
            <span className="text-crimson">{cta.headlineLines[1]}</span>
            <br />
            {cta.headlineLines[2]}
          </h2>

          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="flex-1 max-w-24 h-px bg-white/15" />
            <span className="w-2 h-2 rounded-full bg-crimson" />
            <span className="flex-1 max-w-24 h-px bg-white/15" />
          </div>

          <p className="font-sans text-base sm:text-lg text-white/60 leading-relaxed mb-12 max-w-2xl mx-auto">
            {cta.sub}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="primary" size="lg" href="#ziyaretci">
              {cta.visitorBtn}
            </Button>
            <Button variant="white-outline" size="lg" href="#katilim">
              {cta.exhibitorBtn}
            </Button>
            <Button variant="ghost" size="lg" href={`mailto:${SITE_CONFIG.email}`}>
              <span className="text-white/70 hover:text-white transition-colors">
                {cta.contactBtn}
              </span>
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 justify-center mt-12 pt-10 border-t border-white/10">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="font-sans text-sm text-white/40 hover:text-white/70 transition-colors duration-150"
            >
              {SITE_CONFIG.email}
            </a>
            <span className="text-white/20">·</span>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="font-sans text-sm text-white/40 hover:text-white/70 transition-colors duration-150"
            >
              {SITE_CONFIG.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
