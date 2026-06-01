import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CogIcon, CpuChipIcon, WrenchScrewdriverIcon, BoltIcon, FireIcon,
  TruckIcon, ComputerDesktopIcon, Cog6ToothIcon, ShieldCheckIcon, ArchiveBoxIcon,
  ArrowDownTrayIcon, BuildingOffice2Icon,
} from '@heroicons/react/24/outline'
import ScrollReveal from '../ui/ScrollReveal'
import SectionTitle from '../ui/SectionTitle'
import { SECTORS, COMPANIES } from '../../data/content'
import { useLang } from '../../contexts/LanguageContext'

const iconMap: Record<string, React.ReactNode> = {
  cog:     <CogIcon className="w-6 h-6" />,
  cpu:     <CpuChipIcon className="w-6 h-6" />,
  wrench:  <WrenchScrewdriverIcon className="w-6 h-6" />,
  bolt:    <BoltIcon className="w-6 h-6" />,
  fire:    <FireIcon className="w-6 h-6" />,
  truck:   <TruckIcon className="w-6 h-6" />,
  desktop: <ComputerDesktopIcon className="w-6 h-6" />,
  cog6:    <Cog6ToothIcon className="w-6 h-6" />,
  shield:  <ShieldCheckIcon className="w-6 h-6" />,
  archive: <ArchiveBoxIcon className="w-6 h-6" />,
}

export default function Sectors() {
  const { t } = useLang()
  const [activeId, setActiveId] = useState<string | null>(null)

  const filtered = activeId
    ? COMPANIES.filter((c) => c.sector === activeId)
    : COMPANIES

  const countFor = (id: string) => COMPANIES.filter((c) => c.sector === id).length

  return (
    <section id="sektorler" className="bg-navy-900 industrial-grid py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-crimson/40" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">

        {/* Section title */}
        <ScrollReveal className="mb-12">
          <SectionTitle
            overline={t.sectors.overline}
            title={t.sectors.title}
            subtitle={t.sectors.subtitle}
            light
            align="center"
          />
        </ScrollReveal>

        {/* Sector cards — tıklanabilir filtre */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
          {SECTORS.map((sector, i) => {
            const count = countFor(sector.id)
            const isActive = activeId === sector.id
            return (
              <motion.button
                key={sector.id}
                type="button"
                onClick={() => setActiveId(isActive ? null : sector.id)}
                className={`border p-4 sm:p-5 flex flex-col items-start gap-3 relative overflow-hidden text-left transition-colors duration-200 ${
                  isActive
                    ? 'border-crimson bg-crimson/12'
                    : 'border-white/10 hover:border-crimson/50 bg-transparent hover:bg-crimson/6'
                }`}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-crimson" />
                )}

                <div className={`transition-colors duration-200 ${isActive ? 'text-crimson' : 'text-white/45'}`}>
                  {iconMap[sector.icon]}
                </div>

                <p className={`font-sans text-sm font-medium leading-tight transition-colors duration-200 ${isActive ? 'text-white' : 'text-white/65'}`}>
                  {t.sectors.names[i]}
                </p>

                {count > 0 && (
                  <span className={`font-sans text-[10px] font-semibold tracking-[0.12em] uppercase px-2 py-0.5 transition-colors duration-200 ${
                    isActive ? 'bg-crimson text-white' : 'bg-white/10 text-white/40'
                  }`}>
                    {count} firma
                  </span>
                )}

                <span className="absolute bottom-2 right-3 font-display text-3xl text-white/5 leading-none pointer-events-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </motion.button>
            )
          })}
        </div>

        {/* Firma listesi paneli */}
        <ScrollReveal>
          <div className="border border-white/10">
            {/* Panel header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <BuildingOffice2Icon className="w-5 h-5 text-crimson flex-shrink-0" />
                <div>
                  <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-white/40">
                    {activeId
                      ? t.sectors.names[SECTORS.findIndex((s) => s.id === activeId)]
                      : t.sectors.companiesAll}
                  </p>
                  <p className="font-sans text-sm font-medium text-white">
                    <span className="text-crimson font-display text-lg leading-none mr-1.5">
                      {filtered.length}
                    </span>
                    {t.sectors.companiesLabel}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {activeId && (
                  <button
                    onClick={() => setActiveId(null)}
                    className="font-sans text-xs text-white/40 hover:text-white/70 transition-colors duration-150 underline underline-offset-2"
                  >
                    {t.sectors.showAll}
                  </button>
                )}
                <a
                  href="/downloads/katilimci-listesi.xlsx"
                  download
                  className="flex items-center gap-2 font-sans text-xs font-semibold text-white/60 border border-white/20 hover:border-crimson hover:text-crimson px-4 py-2 transition-all duration-200"
                >
                  <ArrowDownTrayIcon className="w-3.5 h-3.5" />
                  {t.sectors.downloadExcel}
                </a>
              </div>
            </div>

            {/* Firma grid */}
            <div className="p-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId ?? 'all'}
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  {filtered.map((company) => (
                    <div
                      key={company.name}
                      className="flex items-center gap-2.5 border border-white/8 bg-white/4 px-3.5 py-2.5 group hover:border-white/20 hover:bg-white/8 transition-colors duration-150"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-crimson/70 flex-shrink-0" />
                      <span className="font-sans text-xs text-white/65 group-hover:text-white/90 leading-snug transition-colors duration-150 truncate">
                        {company.name}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
