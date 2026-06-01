import { motion } from 'framer-motion'
import {
  BuildingOffice2Icon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowTopRightOnSquareIcon,
  ArrowDownTrayIcon,
  CheckIcon,
} from '@heroicons/react/24/outline'
import ScrollReveal from '../ui/ScrollReveal'
import { SITE_CONFIG } from '../../data/content'
import { useLang } from '../../contexts/LanguageContext'

export default function Participation() {
  const { t } = useLang()
  const { participation: p } = t

  return (
    <section id="katilim" className="bg-ivory ivory-grid py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <ScrollReveal className="mb-10">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-3 flex items-center gap-2">
            <span className="inline-block w-8 h-px bg-current" />
            {p.overline}
          </p>
          <h2
            className="font-display text-navy-900 leading-none"
            style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}
          >
            {p.title}
          </h2>
        </ScrollReveal>

        {/* Main card */}
        <motion.div
          className="relative overflow-hidden bg-navy-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-crimson" aria-hidden="true" />
          <div className="industrial-grid absolute inset-0 opacity-100" aria-hidden="true" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5">

            {/* Left — benefits (3/5) */}
            <div className="lg:col-span-3 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center flex-shrink-0">
                  <BuildingOffice2Icon className="w-6 h-6 text-white" />
                </div>
                <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-white/50">
                  {p.exhibitor.subtitle}
                </p>
              </div>

              <h3
                className="font-display text-white leading-none mb-4"
                style={{ fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 0.92 }}
              >
                {p.exhibitor.title}
              </h3>

              <div className="w-10 h-0.5 bg-crimson mb-6" />

              <p className="font-sans text-sm text-white/70 leading-relaxed mb-8 max-w-lg">
                {p.exhibitor.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {p.exhibitor.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-sm bg-crimson/20 border border-crimson/40 flex items-center justify-center flex-shrink-0">
                      <CheckIcon className="w-3 h-3 text-crimson" />
                    </span>
                    <span className="font-sans text-sm text-white/70">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — contact action (2/5) */}
            <div className="lg:col-span-2 p-8 sm:p-12 flex flex-col">
              <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-6">
                {p.contact.heading}
              </p>

              <p className="font-sans text-sm text-white/60 leading-relaxed mb-8">
                {p.contact.desc}
              </p>

              {/* Phone */}
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="group flex items-center gap-4 border border-white/15 hover:border-crimson/60 bg-white/5 hover:bg-crimson/8 px-5 py-4 transition-all duration-200 mb-3"
              >
                <PhoneIcon className="w-5 h-5 text-crimson flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-white/35 mb-0.5">
                    {p.contact.phoneLabel}
                  </p>
                  <p className="font-sans text-sm font-semibold text-white group-hover:text-crimson transition-colors duration-200">
                    {SITE_CONFIG.phone}
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="group flex items-center gap-4 border border-white/15 hover:border-crimson/60 bg-white/5 hover:bg-crimson/8 px-5 py-4 transition-all duration-200 mb-8"
              >
                <EnvelopeIcon className="w-5 h-5 text-crimson flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-white/35 mb-0.5">
                    {p.contact.emailLabel}
                  </p>
                  <p className="font-sans text-sm font-semibold text-white group-hover:text-crimson transition-colors duration-200 truncate">
                    {SITE_CONFIG.email}
                  </p>
                </div>
              </a>

              {/* Urgency */}
              <div className="border-l-2 border-crimson pl-4 mb-8">
                <p className="font-sans text-xs text-white/55 leading-relaxed">
                  {p.exhibitor.urgency}
                </p>
              </div>

              {/* CTA */}
              <a
                href="#iletisim"
                className="group flex items-center justify-between gap-3 bg-crimson hover:bg-crimson/90 text-white px-6 py-4 transition-all duration-200 mt-auto"
              >
                <span className="font-sans text-sm font-semibold tracking-wide">
                  {p.exhibitor.cta}
                </span>
                <ArrowTopRightOnSquareIcon className="w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Excel download strip */}
        <ScrollReveal delay={0.15}>
          <div className="mt-4 bg-white border border-ivory-dark flex flex-col sm:flex-row items-center justify-between gap-5 px-7 py-5">
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
