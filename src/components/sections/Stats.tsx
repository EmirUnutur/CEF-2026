import ScrollReveal from '../ui/ScrollReveal'
import AnimatedCounter from '../ui/AnimatedCounter'
import { STATS } from '../../data/content'
import { useLang } from '../../contexts/LanguageContext'

export default function Stats() {
  const { t } = useLang()

  return (
    <section id="istatistikler" className="bg-navy-900 relative overflow-hidden">
      {/* Top crimson accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-crimson" />

      {/* Industrial grid overlay */}
      <div className="industrial-grid absolute inset-0 opacity-30" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* Left — title block (2/5) */}
          <ScrollReveal direction="left" className="lg:col-span-2">
            <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-4 flex items-center gap-2">
              <span className="inline-block w-8 h-px bg-current" />
              {t.stats.overline}
            </p>

            <h2
              className="font-display text-white leading-none mb-6"
              style={{ fontSize: 'clamp(44px, 6vw, 88px)', lineHeight: 0.88 }}
            >
              {t.stats.titleLines[0]}
              <br />
              <span className="text-crimson">{t.stats.titleLines[1]}</span>
            </h2>

            <div className="w-12 h-px bg-white/20 mb-6" />

            <p className="font-sans text-sm text-white/55 leading-relaxed max-w-xs">
              {t.stats.subtitle}
            </p>
          </ScrollReveal>

          {/* Right — stat grid (3/5) */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-px bg-white/8">
            {STATS.map((stat, i) => (
              <ScrollReveal key={stat.id} delay={i * 0.08}>
                <div className="bg-navy-900 relative group cursor-default flex flex-col justify-between p-7 sm:p-8 min-h-[160px]">
                  {/* Hover top bar */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-crimson scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div
                    className="font-display text-white leading-none mb-3"
                    style={{ fontSize: 'clamp(52px, 7vw, 88px)', lineHeight: 1 }}
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
                    <p className="font-sans text-xs text-white/40 leading-snug">
                      {t.stats.items[i].sublabel}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(6,14,30,0.5))' }}
        aria-hidden="true"
      />
    </section>
  )
}
