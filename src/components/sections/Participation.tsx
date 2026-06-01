import { motion } from 'framer-motion'
import {
  BuildingOffice2Icon,
  CheckIcon,
  EnvelopeIcon,
  PhoneIcon,
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

            {/* Right — contact info (2/5) */}
            <div className="lg:col-span-2 p-8 sm:p-12 flex flex-col gap-6">

              <div>
                <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-3">
                  {p.contact.heading}
                </p>
                <p className="font-sans text-sm text-white/65 leading-relaxed">
                  Stand alanı, katılım koşulları ve fiyatlandırma hakkında bilgi almak için aşağıdaki iletişim kanallarından bize ulaşabilirsiniz.
                </p>
              </div>

              <div className="h-px bg-white/10" />

              {/* Phone — text only */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <PhoneIcon className="w-4 h-4 text-crimson" />
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-white/35 mb-1">
                    {p.contact.phoneLabel}
                  </p>
                  <p className="font-sans text-base font-semibold text-white">
                    {SITE_CONFIG.phone}
                  </p>
                </div>
              </div>

              {/* Email — text only */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <EnvelopeIcon className="w-4 h-4 text-crimson" />
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-white/35 mb-1">
                    {p.contact.emailLabel}
                  </p>
                  <p className="font-sans text-sm font-medium text-white/80 break-all">
                    {SITE_CONFIG.email}
                  </p>
                </div>
              </div>

              <div className="h-px bg-white/10" />

              {/* Urgency */}
              <div className="border-l-2 border-crimson pl-4">
                <p className="font-sans text-xs text-white/50 leading-relaxed">
                  {p.exhibitor.urgency}
                </p>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
