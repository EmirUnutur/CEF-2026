import { motion } from 'framer-motion'
import { BuildingOffice2Icon, UsersIcon } from '@heroicons/react/24/outline'
import ScrollReveal from '../ui/ScrollReveal'
import Button from '../ui/Button'

interface ParticipationCardProps {
  type: 'exhibitor' | 'visitor'
  icon: React.ReactNode
  title: string
  subtitle: string
  description: string
  features: string[]
  ctaLabel: string
  ctaHref: string
  index: number
}

function ParticipationCard({
  type,
  icon,
  title,
  subtitle,
  description,
  features,
  ctaLabel,
  ctaHref,
  index,
}: ParticipationCardProps) {
  const isExhibitor = type === 'exhibitor'

  return (
    <motion.div
      className={`relative flex flex-col p-8 sm:p-12 overflow-hidden ${
        isExhibitor
          ? 'bg-navy-900 text-white'
          : 'bg-white border border-ivory-dark text-navy-900'
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background decoration */}
      {isExhibitor && (
        <div className="industrial-grid absolute inset-0 opacity-100" aria-hidden="true" />
      )}
      <div
        className={`absolute top-0 left-0 right-0 h-1 ${
          isExhibitor ? 'bg-crimson' : 'bg-navy-900'
        }`}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Icon */}
        <div
          className={`w-16 h-16 flex items-center justify-center mb-6 ${
            isExhibitor ? 'bg-white/10 text-white' : 'bg-navy-900 text-white'
          }`}
        >
          {icon}
        </div>

        {/* Label */}
        <p
          className={`font-sans text-xs font-semibold tracking-[0.2em] uppercase mb-3 ${
            isExhibitor ? 'text-white/50' : 'text-crimson'
          }`}
        >
          {subtitle}
        </p>

        {/* Title */}
        <h3
          className={`font-display leading-tight mb-4 ${
            isExhibitor ? 'text-white' : 'text-navy-900'
          }`}
          style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
        >
          {title}
        </h3>

        <div className={`w-10 h-0.5 mb-6 ${isExhibitor ? 'bg-crimson' : 'bg-navy-900'}`} />

        {/* Description */}
        <p
          className={`font-sans text-base leading-relaxed mb-8 ${
            isExhibitor ? 'text-white/70' : 'text-navy-600'
          }`}
        >
          {description}
        </p>

        {/* Features */}
        <ul className="flex flex-col gap-3 mb-10 flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3">
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                isExhibitor ? 'bg-crimson' : 'bg-crimson'
              }`} />
              <span className={`font-sans text-sm ${isExhibitor ? 'text-white/65' : 'text-navy-600'}`}>
                {f}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button
          variant={isExhibitor ? 'white-outline' : 'primary'}
          size="lg"
          href={ctaHref}
        >
          {ctaLabel}
        </Button>
      </div>
    </motion.div>
  )
}

export default function Participation() {
  return (
    <section id="participation" className="bg-ivory ivory-grid py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <ScrollReveal className="text-center mb-14">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-3 flex items-center justify-center gap-2">
            <span className="inline-block w-6 h-px bg-current opacity-60" />
            Katılım
            <span className="inline-block w-6 h-px bg-current opacity-60" />
          </p>
          <h2
            className="font-display text-navy-900 leading-none"
            style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}
          >
            SİZ DE YERİNİZİ ALIN
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ParticipationCard
            type="exhibitor"
            icon={<BuildingOffice2Icon className="w-8 h-8" />}
            subtitle="Katılımcılar İçin"
            title="FİRMANIZI TANITMA FIRSATI"
            description="Firmanızı tanıtın, yeni iş bağlantıları kurun, ürün ve hizmetlerinizi hedef kitlenizle buluşturun. Trakya'nın sanayi profesyonelleriyle aynı platformda yer alın."
            features={[
              'Stand alanı ve sergileme imkânı',
              'Sektörel networking etkinlikleri',
              'Katılımcı rehberinde yer alma',
              'Sosyal medya tanıtım desteği',
              'Özel B2B görüşme imkânı',
            ]}
            ctaLabel="Katılımcı Bilgisi Al"
            ctaHref="#contact"
            index={0}
          />
          <ParticipationCard
            type="visitor"
            icon={<UsersIcon className="w-8 h-8" />}
            subtitle="Ziyaretçiler İçin"
            title="YENİLİKLERİ KEŞFEDİN"
            description="Sektördeki yenilikleri keşfedin, üreticilerle tanışın, yeni tedarik ve iş fırsatları yakalayın. 3 günlük etkinlik boyunca Trakya sanayiinin kalbi burada atacak."
            features={[
              'Ücretsiz ziyaretçi girişi',
              'Canlı ürün demonstrasyonları',
              'Konferans ve seminer programı',
              'Sektörel tanışma etkinlikleri',
              'Fuar kataloğu ve rehber',
            ]}
            ctaLabel="Ziyaretçi Kayıt"
            ctaHref="#visitor"
            index={1}
          />
        </div>
      </div>
    </section>
  )
}
