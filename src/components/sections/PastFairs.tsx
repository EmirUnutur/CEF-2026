import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRightIcon, ArrowLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import ScrollReveal from '../ui/ScrollReveal'
import Button from '../ui/Button'
import { PAST_FAIRS } from '../../data/content'

export default function PastFairs() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'right' ? 320 : -320, behavior: 'smooth' })
  }

  return (
    <section id="past-fairs" className="bg-ivory py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-3 flex items-center gap-2">
              <span className="inline-block w-8 h-px bg-current" />
              Fuar Arşivi
            </p>
            <h2
              className="font-display text-navy-900 leading-none"
              style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}
            >
              GEÇMİŞ FUARLAR
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {/* Arrow buttons */}
            <button
              onClick={() => scroll('left')}
              aria-label="Önceki"
              className="w-10 h-10 flex items-center justify-center border border-ivory-deep text-navy-600 hover:border-navy-700 hover:text-navy-900 transition-colors duration-200"
            >
              <ArrowLeftIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Sonraki"
              className="w-10 h-10 flex items-center justify-center border border-ivory-deep text-navy-600 hover:border-navy-700 hover:text-navy-900 transition-colors duration-200"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
            <Button variant="outline" size="md" href="#gallery">
              Tüm Galeri
              <ArrowRightIcon className="w-4 h-4" />
            </Button>
          </div>
        </ScrollReveal>

        {/* Scroll wrapper — negative margin so cards bleed to edge on mobile */}
        <div className="relative">
          {/* Right fade hint */}
          <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-ivory to-transparent pointer-events-none z-10" />

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-5 sm:-mx-8 px-5 sm:px-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {PAST_FAIRS.map((fair, i) => (
              <motion.div
                key={fair.year}
                className="flex-none w-64 sm:w-72 snap-start group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
              >
                {/* Image area */}
                <div className="relative aspect-[4/3] overflow-hidden mb-3 bg-navy-800">
                  <img
                    src={fair.image}
                    alt={fair.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/30 transition-colors duration-300" />

                  {/* Year badge */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                    <span
                      className="font-display leading-none text-white/20 group-hover:text-white/30 transition-colors duration-300"
                      style={{ fontSize: '56px' }}
                    >
                      {fair.year}
                    </span>
                    <ArrowRightIcon className="w-5 h-5 text-white/0 group-hover:text-white transition-all duration-300 translate-x-2 group-hover:translate-x-0" />
                  </div>

                  {/* Crimson top line */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-crimson scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>

                {/* Label */}
                <div className="flex items-center justify-between">
                  <p className="font-display text-xl text-navy-900 tracking-wide">
                    {fair.label}
                  </p>
                  <span className="font-sans text-xs text-navy-500 tracking-wide">
                    Arşiv
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
