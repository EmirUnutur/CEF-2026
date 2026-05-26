import ScrollReveal from '../ui/ScrollReveal'
import AnimatedCounter from '../ui/AnimatedCounter'
import { STATS } from '../../data/content'
import { useLang } from '../../contexts/LanguageContext'

export default function Stats() {
  const { t } = useLang()

  return (
    <section id="istatistikler" className="bg-white py-20 sm:py-28 border-t border-ivory-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <ScrollReveal className="text-center mb-14">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-3 flex items-center justify-center gap-2">
            <span className="inline-block w-6 h-px bg-current opacity-60" />
            {t.stats.overline}
            <span className="inline-block w-6 h-px bg-current opacity-60" />
          </p>
          <h2
            className="font-display text-navy-900 leading-none"
            style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}
          >
            {t.stats.title}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ivory-dark">
          {STATS.map((stat, i) => (
            <div
              key={stat.id}
              className="bg-white flex flex-col items-center justify-center text-center py-10 px-6 relative group"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-crimson scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div
                className="font-display text-navy-900 leading-none mb-2"
                style={{ fontSize: 'clamp(48px, 7vw, 88px)' }}
              >
                <AnimatedCounter
                  value={stat.value}
                  animateFrom={stat.animateFrom}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={1800 + i * 100}
                />
              </div>

              <p className="font-display text-xl text-crimson tracking-wide mb-1">
                {t.stats.items[i].label}
              </p>
              <p className="font-sans text-xs text-navy-500">
                {t.stats.items[i].sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
