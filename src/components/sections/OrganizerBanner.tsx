import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { useLang } from '../../contexts/LanguageContext'

export default function OrganizerBanner() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const { t } = useLang()

  return (
    <motion.section
      ref={ref}
      className="relative bg-ivory overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      aria-label="Fuar Organizatörü"
    >
      <div className="ivory-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-crimson" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-ivory-deep" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 py-7 sm:py-0 sm:min-h-[120px]"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex-shrink-0 flex items-center justify-center sm:justify-start">
            <img
              src="/images/logoyatay.png"
              alt="Çerkezköy Ticaret ve Sanayi Odası"
              draggable={false}
              className="h-64 sm:h-60 w-auto block"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>

          <div
            className="hidden sm:block w-px self-stretch my-4 flex-shrink-0"
            style={{ background: 'rgba(10,22,40,0.15)' }}
            aria-hidden="true"
          />

          <div className="flex-1 min-w-0 text-center sm:text-left">
            <p
              className="font-sans font-bold uppercase text-navy-900 leading-tight"
              style={{ fontSize: 'clamp(11px, 1.4vw, 13.5px)', letterSpacing: '0.1em' }}
            >
              {t.banner.text}
            </p>
            <p
              className="font-sans text-navy-600 mt-1"
              style={{ fontSize: 'clamp(10px, 1vw, 12px)', letterSpacing: '0.04em' }}
            >
              {t.banner.sub}
            </p>
          </div>

          <div className="flex justify-center sm:justify-end flex-shrink-0">
            <a
              href="https://www.cerkezkoytso.org.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-sans font-semibold uppercase tracking-[0.08em] text-crimson border border-crimson/50 px-5 py-2.5 transition-all duration-200 hover:border-crimson hover:bg-crimson/8 focus-visible:outline-none"
              style={{ fontSize: '11px' }}
            >
              {t.banner.details}
              <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
