import { motion } from 'framer-motion'
import {
  MapPinIcon,
  UserGroupIcon,
  ArrowTrendingUpIcon,
  ArrowsRightLeftIcon,
} from '@heroicons/react/24/outline'
import { useLang } from '../../contexts/LanguageContext'

const ICONS = [
  <MapPinIcon className="w-7 h-7" />,
  <UserGroupIcon className="w-7 h-7" />,
  <ArrowTrendingUpIcon className="w-7 h-7" />,
  <ArrowsRightLeftIcon className="w-7 h-7" />,
]

export default function WhyCEF() {
  const { t } = useLang()

  return (
    <section id="neden-cef" className="relative bg-navy-900 overflow-hidden py-20 sm:py-32">

      {/* Arka plan katmanları */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #060E1E 0%, #0A1628 50%, #162D55 100%)' }}
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
        <source src="/videos/robotvideo.mp4" type="video/mp4" />
      </video>
      <div className="industrial-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(6,14,30,0.72) 0%, rgba(6,14,30,0.60) 40%, rgba(6,14,30,0.80) 100%)',
        }}
        aria-hidden="true"
      />

      {/* İçerik */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">

        {/* Başlık */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-crimson mb-4 flex items-center justify-center gap-3">
            <span className="inline-block w-8 h-px bg-crimson opacity-70" />
            {t.whyCEF.overline}
            <span className="inline-block w-8 h-px bg-crimson opacity-70" />
          </p>
          <h2
            className="font-display text-white leading-none"
            style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}
          >
            {t.whyCEF.titleLines[0]}
            <br />
            <span className="text-crimson">{t.whyCEF.titleLines[1]}</span>
          </h2>
        </motion.div>

        {/* Kartlar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {t.whyCEF.items.map((item, i) => (
            <motion.div
              key={i}
              className="relative flex flex-col group cursor-default overflow-hidden p-6 sm:p-8"
              style={{
                background: 'rgba(6,14,30,0.72)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(6px)',
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                y: -6,
                boxShadow: '0 24px 48px -12px rgba(0,0,0,0.5)',
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-crimson scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="absolute inset-0 bg-crimson/0 group-hover:bg-crimson/5 transition-colors duration-300" aria-hidden="true" />

              <div className="relative z-10 w-14 h-14 bg-white/8 border border-white/12 text-white flex items-center justify-center mb-6 group-hover:bg-crimson group-hover:border-crimson transition-colors duration-300">
                {ICONS[i]}
              </div>

              <span className="relative z-10 font-display text-5xl text-white/8 group-hover:text-crimson/20 leading-none mb-2 transition-colors duration-300">
                0{i + 1}
              </span>

              <h3 className="relative z-10 font-display text-2xl text-white leading-tight mb-3 tracking-wide">
                {item.title}
              </h3>
              <p className="relative z-10 font-sans text-sm text-white/60 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
