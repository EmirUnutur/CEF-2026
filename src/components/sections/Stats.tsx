import ScrollReveal from '../ui/ScrollReveal'
import AnimatedCounter from '../ui/AnimatedCounter'
import { STATS } from '../../data/content'
import { useLang } from '../../contexts/LanguageContext'

export default function Stats() {
  const { t } = useLang()

  return (
    <section id="istatistikler" className="bg-white border-t border-ivory-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-20">

        {/* Overline */}
        <ScrollReveal direction="up">
          <p className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-crimson mb-10 flex items-center gap-2">
            <span className="inline-block w-8 h-px bg-crimson" />
            {t.stats.overline}
          </p>
        </ScrollReveal>

        {/* 4-column stat grid — gap-px creates thin ivory separators */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-ivory-dark">
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.id} delay={i * 0.1}>
              <div className="bg-white group relative overflow-hidden cursor-default p-8 sm:p-10 min-h-[180px] flex flex-col justify-between">

                {/* Left accent line — subtle at rest, crimson on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-ivory-dark group-hover:bg-crimson transition-colors duration-300" />

                {/* Top crimson line — slides in on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-crimson scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div
                  className="font-display text-navy-900 leading-none mb-4"
                  style={{ fontSize: 'clamp(52px, 5.5vw, 88px)', lineHeight: 1 }}
                >
                  <AnimatedCounter
                    value={stat.value}
                    animateFrom={stat.animateFrom}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={1800 + i * 120}
                  />
                </div>

                <div>
                  <p className="font-display text-base sm:text-lg text-crimson tracking-wide leading-tight mb-1">
                    {t.stats.items[i].label}
                  </p>
                  <p className="font-sans text-xs text-navy-400 leading-snug">
                    {t.stats.items[i].sublabel}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
