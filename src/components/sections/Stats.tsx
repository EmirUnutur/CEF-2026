import ScrollReveal from '../ui/ScrollReveal'
import AnimatedCounter from '../ui/AnimatedCounter'
import { STATS } from '../../data/content'
import { useLang } from '../../contexts/LanguageContext'

export default function Stats() {
  const { t } = useLang()

  return (
    <section id="istatistikler" className="bg-white border-t border-ivory-dark">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-20">
        {/* Section label */}
        <ScrollReveal direction="up">
          <p className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-crimson mb-10 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-crimson" />
            {t.stats.overline}
          </p>
        </ScrollReveal>

        {/* 4-column stat grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-ivory-dark">
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.id} delay={i * 0.1}>
              <div className="group px-6 sm:px-8 first:pl-0 last:pr-0 py-4 relative">
                {/* Hover underline */}
                <div className="absolute bottom-0 left-6 right-6 first:left-0 h-px bg-crimson scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div
                  className="font-display text-navy-900 leading-none mb-3"
                  style={{ fontSize: 'clamp(56px, 6vw, 96px)', lineHeight: 1 }}
                >
                  <AnimatedCounter
                    value={stat.value}
                    animateFrom={stat.animateFrom}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={1800 + i * 120}
                  />
                </div>

                <p className="font-display text-base sm:text-lg text-crimson tracking-wide leading-tight mb-1">
                  {t.stats.items[i].label}
                </p>
                <p className="font-sans text-xs text-navy-400 leading-snug">
                  {t.stats.items[i].sublabel}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
