import { motion } from 'framer-motion'
import { BuildingOffice2Icon, UsersIcon, ArrowDownIcon, ArrowDownTrayIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import ScrollReveal from '../ui/ScrollReveal'
import Button from '../ui/Button'
import { SITE_CONFIG } from '../../data/content'
import { useLang } from '../../contexts/LanguageContext'

export default function Participation() {
  const { t } = useLang()
  const { participation: p } = t

  return (
    <section id="katilim" className="bg-ivory ivory-grid py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Section header */}
        <ScrollReveal className="text-center mb-12">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-3 flex items-center justify-center gap-2">
            <span className="inline-block w-6 h-px bg-current opacity-60" />
            {p.overline}
            <span className="inline-block w-6 h-px bg-current opacity-60" />
          </p>
          <h2
            className="font-display text-navy-900 leading-none"
            style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}
          >
            {p.title}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

          {/* ── Exhibitor card (dark) ── */}
          <motion.div
            className="relative flex flex-col p-8 sm:p-10 overflow-hidden bg-navy-900 text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="industrial-grid absolute inset-0 opacity-100" aria-hidden="true" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-crimson" aria-hidden="true" />

            <div className="relative z-10 flex flex-col h-full">
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center mb-5 bg-white/10 text-white">
                <BuildingOffice2Icon className="w-7 h-7" />
              </div>

              <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-3">
                {p.exhibitor.subtitle}
              </p>

              <h3
                className="font-display text-white leading-tight mb-3"
                style={{ fontSize: 'clamp(26px, 3.5vw, 42px)' }}
              >
                {p.exhibitor.title}
              </h3>

              <div className="w-10 h-0.5 bg-crimson mb-5" />

              <p className="font-sans text-sm text-white/70 leading-relaxed mb-6">
                {p.exhibitor.desc}
              </p>

              <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                {p.exhibitor.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-crimson" />
                    <span className="font-sans text-sm text-white/65">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Urgency note */}
              <div className="border border-crimson/30 bg-crimson/8 px-4 py-3 mb-5">
                <p className="font-sans text-xs text-crimson leading-snug">
                  ⚑ {p.exhibitor.urgency}
                </p>
              </div>

              {/* CTA */}
              <Button variant="white-outline" size="lg" href="#iletisim" className="mb-5">
                {p.exhibitor.cta}
              </Button>

              {/* Contact info strip */}
              <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-2 font-sans text-xs text-white/50 hover:text-white transition-colors duration-150"
                >
                  <PhoneIcon className="w-3.5 h-3.5 flex-shrink-0" />
                  {SITE_CONFIG.phone}
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 font-sans text-xs text-white/50 hover:text-white transition-colors duration-150"
                >
                  <EnvelopeIcon className="w-3.5 h-3.5 flex-shrink-0" />
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── Visitor card (light) ── */}
          <motion.div
            className="relative flex flex-col p-8 sm:p-10 overflow-hidden bg-white border border-ivory-dark text-navy-900"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-navy-900" aria-hidden="true" />

            <div className="relative z-10 flex flex-col h-full">
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center mb-5 bg-navy-900 text-white">
                <UsersIcon className="w-7 h-7" />
              </div>

              <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-3">
                {p.visitor.subtitle}
              </p>

              <h3
                className="font-display text-navy-900 leading-tight mb-3"
                style={{ fontSize: 'clamp(26px, 3.5vw, 42px)' }}
              >
                {p.visitor.title}
              </h3>

              <div className="w-10 h-0.5 bg-navy-900 mb-5" />

              <p className="font-sans text-sm text-navy-600 leading-relaxed mb-6">
                {p.visitor.desc}
              </p>

              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {p.visitor.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-crimson" />
                    <span className="font-sans text-sm text-navy-600">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Scroll nudge — form is right below */}
              <div className="border border-ivory-dark bg-ivory/60 px-5 py-4 flex items-center justify-between gap-4">
                <div>
                  <p className="font-sans text-xs font-semibold text-navy-700 mb-0.5">
                    Kayıt formu aşağıda
                  </p>
                  <p className="font-sans text-xs text-navy-400">
                    Ücretsiz ziyaretçi kaydı için formu doldurun.
                  </p>
                </div>
                <a
                  href="#ziyaretci-form"
                  className="flex-shrink-0 w-9 h-9 border border-navy-200 flex items-center justify-center text-navy-400 hover:border-crimson hover:text-crimson transition-colors duration-200"
                  aria-label="Forma git"
                >
                  <ArrowDownIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Excel download strip ── */}
        <ScrollReveal delay={0.2}>
          <div className="bg-white border border-ivory-dark flex flex-col sm:flex-row items-center justify-between gap-5 px-7 py-5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-600/10 flex items-center justify-center flex-shrink-0">
                <ArrowDownTrayIcon className="w-5 h-5 text-green-700" />
              </div>
              <div>
                <p className="font-sans text-sm font-semibold text-navy-800 mb-0.5">
                  {p.download.label}
                </p>
                <p className="font-sans text-xs text-navy-500">
                  {p.download.desc}
                </p>
              </div>
            </div>
            <a
              href="/downloads/katilimci-listesi.xlsx"
              download
              className="flex-shrink-0 flex items-center gap-2 font-sans text-sm font-semibold text-green-700 border border-green-600/40 bg-green-50 hover:bg-green-600 hover:text-white hover:border-green-600 px-5 py-2.5 transition-all duration-200 whitespace-nowrap"
            >
              <ArrowDownTrayIcon className="w-4 h-4" />
              {p.download.cta}
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
