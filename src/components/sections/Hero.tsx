import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Button from '../ui/Button'
import { SITE_CONFIG } from '../../data/content'
import { useLang } from '../../contexts/LanguageContext'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const { t } = useLang()

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
  }

  return (
    <section
      id="anasayfa"
      ref={ref}
      className="relative min-h-screen flex flex-col overflow-hidden bg-navy-900"
    >
      {/* Background layer */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #060E1E 0%, #0A1628 40%, #162D55 70%, #0A1628 100%)',
          }}
          aria-hidden="true"
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src="/videos/fuar-video.mp4" type="video/mp4" />
        </video>
        <div className="industrial-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(6,14,30,0.88) 0%, rgba(6,14,30,0.35) 30%, rgba(6,14,30,0.0) 60%), linear-gradient(to right, rgba(6,14,30,0.55) 0%, rgba(6,14,30,0.1) 40%, rgba(6,14,30,0.0) 100%)',
          }}
          aria-hidden="true"
        />
      </motion.div>

      {/* Big "2026" watermark */}
      <div
        className="absolute bottom-0 right-0 font-display leading-none select-none pointer-events-none overflow-hidden"
        style={{
          fontSize: 'clamp(120px, 28vw, 420px)',
          color: 'rgba(255,255,255,0.04)',
          lineHeight: 0.85,
          transform: 'translateY(15%)',
        }}
        aria-hidden="true"
      >
        2026
      </div>

      {/* Crimson left accent line */}
      <div className="absolute left-0 top-1/3 bottom-24 w-1 bg-crimson/60" aria-hidden="true" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex-1 flex items-end"
        style={{ y: contentY, opacity }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full pt-28 pb-40">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            {/* Overline */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-white/50 mb-6 flex items-center gap-3"
            >
              <span className="inline-block w-8 h-px bg-crimson" />
              {t.hero.edition(SITE_CONFIG.edition)}
            </motion.p>

            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-white leading-none mb-6"
              style={{
                fontSize: 'clamp(64px, 11vw, 160px)',
                lineHeight: 0.9,
                letterSpacing: '0.02em',
              }}
            >
              {t.hero.titleLines[0]}
              <br />
              <span className="text-crimson">{t.hero.titleLines[1]}</span>
              <br />
              {t.hero.titleLines[2]}
            </motion.h1>

            {/* Divider */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
              <span className="h-px flex-1 max-w-16 bg-crimson/60" />
              <p className="font-sans text-base sm:text-lg text-white/70 max-w-xl leading-relaxed">
                {SITE_CONFIG.slogan}
              </p>
            </motion.div>

            {/* Date + Venue badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
              <span className="inline-flex items-center gap-2 font-sans text-sm font-medium text-white/80 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2">
                <span className="w-1.5 h-1.5 rounded-full bg-crimson" />
                {t.dates}
              </span>
              <span className="inline-flex items-center gap-2 font-sans text-sm font-medium text-white/80 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2">
                <span className="w-1.5 h-1.5 rounded-full bg-crimson" />
                {SITE_CONFIG.venue}
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="#ziyaretci">
                {t.hero.visitorBtn}
              </Button>
              <Button variant="white-outline" size="lg" href="#katilim">
                {t.hero.exhibitorBtn}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        style={{ opacity }}
      >
        <span className="font-sans text-xs tracking-[0.2em] uppercase text-white/40">
          {t.hero.scroll}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDownIcon className="w-5 h-5 text-white/40" />
        </motion.div>
      </motion.div>

      {/* Bottom crimson accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-crimson/60 to-transparent" />
    </section>
  )
}
