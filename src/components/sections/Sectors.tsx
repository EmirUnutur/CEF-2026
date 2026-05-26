import { motion } from 'framer-motion'
import {
  CogIcon,
  CpuChipIcon,
  WrenchScrewdriverIcon,
  BoltIcon,
  FireIcon,
  TruckIcon,
  ComputerDesktopIcon,
  Cog6ToothIcon,
  ShieldCheckIcon,
  ArchiveBoxIcon,
} from '@heroicons/react/24/outline'
import ScrollReveal from '../ui/ScrollReveal'
import SectionTitle from '../ui/SectionTitle'
import { SECTORS } from '../../data/content'
import { useLang } from '../../contexts/LanguageContext'

const iconMap: Record<string, React.ReactNode> = {
  cog: <CogIcon className="w-7 h-7" />,
  cpu: <CpuChipIcon className="w-7 h-7" />,
  wrench: <WrenchScrewdriverIcon className="w-7 h-7" />,
  bolt: <BoltIcon className="w-7 h-7" />,
  fire: <FireIcon className="w-7 h-7" />,
  truck: <TruckIcon className="w-7 h-7" />,
  desktop: <ComputerDesktopIcon className="w-7 h-7" />,
  cog6: <Cog6ToothIcon className="w-7 h-7" />,
  shield: <ShieldCheckIcon className="w-7 h-7" />,
  archive: <ArchiveBoxIcon className="w-7 h-7" />,
}

export default function Sectors() {
  const { t } = useLang()

  return (
    <section id="sektorler" className="bg-navy-900 industrial-grid py-20 sm:py-32 relative overflow-hidden">
      <div
        className="absolute right-0 top-0 bottom-0 w-1 bg-crimson/40"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">

        <ScrollReveal className="mb-16">
          <SectionTitle
            overline={t.sectors.overline}
            title={t.sectors.title}
            subtitle={t.sectors.subtitle}
            light
            align="center"
          />
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {SECTORS.map((sector, i) => (
            <motion.div
              key={sector.id}
              className="border border-white/10 p-4 sm:p-5 flex flex-col items-start gap-4 group cursor-default relative overflow-hidden min-h-[88px]"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ borderColor: 'rgba(196, 30, 58, 0.6)', y: -4 }}
            >
              <div className="absolute inset-0 bg-crimson/0 group-hover:bg-crimson/8 transition-colors duration-300" />
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-crimson scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="relative z-10 text-white/50 group-hover:text-crimson transition-colors duration-300">
                {iconMap[sector.icon]}
              </div>
              <p className="relative z-10 font-sans text-sm font-medium text-white/70 group-hover:text-white leading-tight transition-colors duration-300">
                {t.sectors.names[i]}
              </p>

              <span className="absolute bottom-3 right-3 font-display text-3xl text-white/5 group-hover:text-white/10 leading-none transition-colors duration-300">
                {String(i + 1).padStart(2, '0')}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
