import ScrollReveal from '../ui/ScrollReveal'
import { useLang } from '../../contexts/LanguageContext'

const MAIN_VIDEO_URL  = 'https://www.youtube.com/embed/iLOfDr_saa4'
const SHORTS_VIDEO_URL = 'https://www.youtube.com/embed/soiKJnToqB4'

const IFRAME_ALLOW =
  'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'

export default function VideoSection() {
  const { t } = useLang()
  const v = t.videos

  return (
    <section
      id="neden-cef"
      className="relative bg-navy-950 industrial-grid py-16 sm:py-24 overflow-hidden"
    >
      {/* Top crimson accent */}
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-crimson to-transparent"
        aria-hidden="true"
      />

      {/* Right side vertical crimson line */}
      <div className="absolute right-0 top-0 bottom-0 w-px bg-crimson/20" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 z-10">

        {/* ── Section Header ─────────────────────────────────────────── */}
        <ScrollReveal className="mb-12">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-4 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-crimson" />
            {v.overline}
          </p>
          <h2
            className="font-display text-white leading-none mb-4"
            style={{ fontSize: 'clamp(40px, 6vw, 80px)', letterSpacing: '0.02em' }}
          >
            {v.title}
          </h2>
          <p className="font-sans text-white/60 text-base leading-relaxed max-w-2xl">
            {v.subtitle}
          </p>
        </ScrollReveal>

        {/* ── Video Layout ────────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* ── Main Video (16:9) ─────────────────────────────────────── */}
          <ScrollReveal direction="left" delay={0.15} className="w-full lg:flex-1 min-w-0">
            <div className="bg-navy-900 border border-white/10 overflow-hidden group">
              {/* Crimson top bar */}
              <div className="h-0.5 bg-crimson w-full" />

              {/* iframe wrapper — 16:9 */}
              <div className="aspect-video w-full relative">
                <iframe
                  src={MAIN_VIDEO_URL}
                  title={v.main.title}
                  allow={IFRAME_ALLOW}
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>

              {/* Meta */}
              <div className="px-5 py-4 border-t border-white/10">
                <p className="font-sans text-sm font-semibold text-white leading-snug">
                  {v.main.title}
                </p>
                <p className="font-sans text-xs text-white/50 mt-1 leading-relaxed">
                  {v.main.desc}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* ── Shorts Video (9:16) ───────────────────────────────────── */}
          <ScrollReveal direction="right" delay={0.25} className="w-full lg:w-auto lg:flex-shrink-0 flex justify-center lg:justify-start">
            <div className="w-full max-w-[300px] lg:max-w-none lg:w-[270px] xl:w-[300px]">

              {/* Phone-frame card */}
              <div className="bg-navy-900 border border-white/10 rounded-2xl overflow-hidden">
                {/* Shorts pill indicator */}
                <div className="flex items-center gap-2 px-4 pt-3 pb-2">
                  <span className="w-2 h-2 rounded-full bg-crimson" />
                  <span className="font-sans text-[10px] font-semibold tracking-[0.15em] uppercase text-white/40">
                    Shorts
                  </span>
                </div>

                {/* iframe wrapper — 9:16 */}
                <div className="aspect-[9/16] w-full relative">
                  <iframe
                    src={SHORTS_VIDEO_URL}
                    title={v.shorts.title}
                    allow={IFRAME_ALLOW}
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 w-full h-full border-0 rounded-none"
                  />
                </div>

                {/* Meta */}
                <div className="px-4 py-3 border-t border-white/10">
                  <p className="font-sans text-xs font-semibold text-white leading-snug">
                    {v.shorts.title}
                  </p>
                  <p className="font-sans text-[11px] text-white/45 mt-1 leading-relaxed">
                    {v.shorts.desc}
                  </p>
                </div>
              </div>

            </div>
          </ScrollReveal>

        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        aria-hidden="true"
      />
    </section>
  )
}
