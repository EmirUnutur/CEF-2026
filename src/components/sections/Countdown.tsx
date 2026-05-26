import { motion } from 'framer-motion'
import { useCountdown } from '../../hooks/useCountdown'
import Button from '../ui/Button'
import { SITE_CONFIG } from '../../data/content'
import { useLang } from '../../contexts/LanguageContext'

const PAD = (n: number) => String(n).padStart(2, '0')

interface UnitCardProps {
  value: number | string
  label: string
  index: number
}

function UnitCard({ value, label, index }: UnitCardProps) {
  return (
    <motion.div
      className="flex-1 min-w-0 bg-navy-900 text-white flex flex-col items-center justify-center py-8 px-4 relative overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="industrial-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-crimson" />
      <div className="absolute inset-0 bg-crimson/0 group-hover:bg-crimson/5 transition-colors duration-300" />

      <span
        className="font-display text-white relative z-10 leading-none"
        style={{ fontSize: 'clamp(44px, 8vw, 96px)', letterSpacing: '0.02em' }}
      >
        {typeof value === 'number' ? PAD(value) : value}
      </span>
      <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mt-2 relative z-10">
        {label}
      </span>
    </motion.div>
  )
}

export default function Countdown() {
  const time = useCountdown(SITE_CONFIG.targetDate)
  const { t } = useLang()

  return (
    <section id="geri-sayim" className="bg-ivory ivory-grid py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-3 flex items-center justify-center gap-2">
            <span className="inline-block w-6 h-px bg-current opacity-60" />
            ÇEF 2026
            <span className="inline-block w-6 h-px bg-current opacity-60" />
          </p>
          <h2
            className="font-display text-navy-900 leading-none"
            style={{ fontSize: 'clamp(40px, 7vw, 80px)' }}
          >
            {t.countdown.title}
          </h2>
          <p className="font-sans text-sm text-navy-600 mt-3 tracking-wide">
            {t.dates} · {SITE_CONFIG.venue}
          </p>
        </motion.div>

        {time.isExpired ? (
          <motion.p
            className="text-center font-display text-4xl text-crimson"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {t.countdown.expired}
          </motion.p>
        ) : (
          <div className="flex gap-3 sm:gap-4">
            <UnitCard value={time.days}    label={t.countdown.labels[0]} index={0} />
            <UnitCard value={time.hours}   label={t.countdown.labels[1]} index={1} />
            <UnitCard value={time.minutes} label={t.countdown.labels[2]} index={2} />
            <UnitCard value={time.seconds} label={t.countdown.labels[3]} index={3} />
          </div>
        )}

        <motion.div
          className="flex flex-wrap gap-4 justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button variant="primary" size="lg" href="#ziyaretci">
            {t.countdown.visitorBtn}
          </Button>
          <Button variant="outline" size="lg" href="#katilim">
            {t.countdown.exhibitorBtn}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
