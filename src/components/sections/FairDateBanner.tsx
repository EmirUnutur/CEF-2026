import { motion } from 'framer-motion'
import { CalendarDaysIcon, MapPinIcon, UserPlusIcon } from '@heroicons/react/24/outline'
import { SITE_CONFIG } from '../../data/content'
import { useLang } from '../../contexts/LanguageContext'

const ease = [0.22, 1, 0.36, 1] as const

export default function FairDateBanner() {
  const { t } = useLang()

  return (
    <div className="relative bg-crimson overflow-hidden">
      {/* Industrial grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      {/* Top edge — matches Sectors dark bg */}
      <div className="absolute top-0 left-0 right-0 h-px bg-crimson-dark" aria-hidden="true" />

      {/* Diagonal light sweep */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 sm:py-6">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-0 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-crimson-dark/40">

          {/* Edition block */}
          <motion.div
            className="flex items-center gap-4 py-3 sm:py-0 sm:pr-8"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0, ease }}
          >
            <span
              className="font-display text-white leading-none"
              style={{ fontSize: 'clamp(40px, 5vw, 56px)', lineHeight: 1 }}
            >
              {SITE_CONFIG.edition}.
            </span>
            <div className="flex flex-col">
              <span className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-white/60">
                {t.about.editionLabel}
              </span>
              <span className="font-sans text-xs font-semibold text-white/80 mt-0.5">
                ÇEF 2026
              </span>
            </div>
          </motion.div>

          {/* Date block */}
          <motion.div
            className="flex items-center gap-3 py-3 sm:py-0 sm:px-8"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.08, ease }}
          >
            <div className="w-9 h-9 flex-shrink-0 bg-black/15 flex items-center justify-center">
              <CalendarDaysIcon className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-white/60">
                Tarih
              </span>
              <span className="font-display text-white text-xl leading-none tracking-wide">
                {t.dates}
              </span>
            </div>
          </motion.div>

          {/* Venue block */}
          <motion.div
            className="flex items-center gap-3 py-3 sm:py-0 sm:px-8 flex-1"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.16, ease }}
          >
            <div className="w-9 h-9 flex-shrink-0 bg-black/15 flex items-center justify-center">
              <MapPinIcon className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-white/60">
                Mekan
              </span>
              <span className="font-sans text-sm font-semibold text-white leading-snug">
                {SITE_CONFIG.venue}
              </span>
              <span className="font-sans text-xs text-white/60">
                {SITE_CONFIG.city}
              </span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="py-3 sm:py-0 sm:pl-8"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.24, ease }}
          >
            <a
              href="#ziyaretci"
              className="inline-flex items-center gap-2.5 font-sans text-sm font-semibold text-crimson bg-white px-5 py-2.5 hover:bg-white/90 transition-colors duration-200 whitespace-nowrap"
            >
              <UserPlusIcon className="w-4 h-4" />
              {t.nav.visitorCta}
            </a>
          </motion.div>

        </div>
      </div>

      {/* Bottom edge — blends into Participation ivory */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-crimson-dark/30" aria-hidden="true" />
    </div>
  )
}
