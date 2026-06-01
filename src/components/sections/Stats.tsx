import ScrollReveal from '../ui/ScrollReveal'
import AnimatedCounter from '../ui/AnimatedCounter'
import { STATS } from '../../data/content'
import { useLang } from '../../contexts/LanguageContext'

export default function Stats() {
  const { t } = useLang()

  return (
    <section id="istatistikler" className="bg-white border-t border-ivory-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* Left — title block (2/5) */}
          <ScrollReveal direction="left" className="lg:col-span-2">
            <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-4 flex items-center gap-2">
              <span className="inline-block w-8 h-px bg-current" />
              {t.stats.overline}
            </p>

            <h2
              className="font-display text-navy-900 leading-none mb-5"
              style={{ fontSize: 'clamp(44px, 6vw, 88px)', lineHeight: 0.88 }}
            >
              {t.stats.titleLines[0]}
              <br />
              <span className="text-crimson">{t.stats.titleLines[1]}</span>
            </h2>

            <div className="w-12 h-1 bg-crimson mb-5" />

            <p className="font-sans text-sm text-navy-500 leading-relaxed max-w-xs">
              {t.stats.subtitle}
            </p>
          </ScrollReveal>

          {/* Right — stat grid (3/5) */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-px bg-ivory-dark">
            {STATS.map((stat, i) => (
              <ScrollReveal key={stat.id} delay={i * 0.08}>
                <div className="bg-white relative group cursor-default flex flex-col justify-between p-7 sm:p-8 min-h-[150px]">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-crimson scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div
                    className="font-display text-navy-900 leading-none mb-3"
                    style={{ fontSize: 'clamp(52px, 6vw, 80px)', lineHeight: 1 }}
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
                    <p className="font-display text-lg text-crimson tracking-wide leading-tight mb-1">
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
      </div>
    </section>
  )
}
