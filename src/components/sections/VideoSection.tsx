import { useState } from 'react'
import ScrollReveal from '../ui/ScrollReveal'
import { useLang } from '../../contexts/LanguageContext'

const IFRAME_ALLOW =
  'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'

function YouTubeEmbed({
  id,
  title,
  portrait = false,
}: {
  id: string
  title: string
  portrait?: boolean
}) {
  const [loaded, setLoaded] = useState(false)
  const thumbnail = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`

  if (loaded) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
        title={title}
        allow={IFRAME_ALLOW}
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 w-full h-full border-0"
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className="absolute inset-0 w-full h-full group/preview overflow-hidden bg-navy-800 text-left"
      aria-label={`${title} videosunu oynat`}
    >
      <img
        src={thumbnail}
        alt=""
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/preview:scale-105 ${
          portrait ? 'scale-125' : ''
        }`}
      />
      <span className="absolute inset-0 bg-navy-950/45 group-hover/preview:bg-navy-950/35 transition-colors duration-300" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="w-16 h-16 rounded-full bg-crimson text-white flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover/preview:scale-105">
          <span className="ml-1 w-0 h-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-current" />
        </span>
      </span>
    </button>
  )
}

export default function VideoSection() {
  const { t } = useLang()
  const v = t.videos

  return (
    <section
      id="neden-cef"
      className="relative bg-navy-950 industrial-grid py-14 sm:py-24 overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-crimson to-transparent"
        aria-hidden="true"
      />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-crimson/20" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 z-10">
        <ScrollReveal className="mb-10 sm:mb-12">
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

        <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 lg:items-stretch">
          <ScrollReveal direction="left" delay={0.15} className="w-full lg:flex-1 min-w-0">
            <div className="bg-navy-900 border border-white/10 overflow-hidden group">
              <div className="h-0.5 bg-crimson w-full" />
              <div className="aspect-video w-full relative">
                <YouTubeEmbed id="iLOfDr_saa4" title={v.main.title} />
              </div>
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

          <ScrollReveal direction="right" delay={0.25} className="w-full lg:w-auto lg:flex-shrink-0 lg:flex lg:flex-col">
            <div className="w-full max-w-[300px] mx-auto lg:mx-0 lg:max-w-none lg:w-[270px] xl:w-[300px] lg:h-full">
              <div className="bg-navy-900 border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden lg:h-full lg:flex lg:flex-col">
                <div className="flex items-center gap-2 px-4 pt-3 pb-2 flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-crimson" />
                  <span className="font-sans text-[10px] font-semibold tracking-[0.15em] uppercase text-white/40">
                    Shorts
                  </span>
                </div>
                <div className="aspect-[9/16] lg:aspect-auto lg:flex-1 w-full relative">
                  <YouTubeEmbed id="soiKJnToqB4" title={v.shorts.title} portrait />
                </div>
                <div className="px-4 py-3 border-t border-white/10 flex-shrink-0">
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

      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        aria-hidden="true"
      />
    </section>
  )
}
