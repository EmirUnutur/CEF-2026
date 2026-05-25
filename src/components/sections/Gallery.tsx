import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import ScrollReveal from '../ui/ScrollReveal'

// All available gallery photos mapped from /public/images/gallery/
const GALLERY_ITEMS = [
  { id: 1,  src: '/images/gallery/2025.jpg',                          alt: 'ÇEF 2025 — Fuar Alanı',        label: 'Fuar Alanı',    year: '2025' },
  { id: 2,  src: '/images/gallery/2025.2.jpg',                        alt: 'ÇEF 2025 — Katılımcılar',      label: 'Katılımcılar',  year: '2025' },
  { id: 3,  src: '/images/gallery/2025.3.jpg',                        alt: 'ÇEF 2025',                      label: 'ÇEF 2025',      year: '2025' },
  { id: 4,  src: '/images/gallery/2024.jpg',                          alt: 'ÇEF 2024 — Genel Görünüm',     label: 'Genel Görünüm', year: '2024' },
  { id: 5,  src: '/images/gallery/2024.2.jpg',                        alt: 'ÇEF 2024 — Standlar',          label: 'Standlar',      year: '2024' },
  { id: 6,  src: '/images/gallery/2023.jpg',                          alt: 'ÇEF 2023 — Açılış',            label: 'Açılış',        year: '2023' },
  { id: 7,  src: '/images/gallery/2023.2.jpg',                        alt: 'ÇEF 2023 — Sergi',             label: 'Sergi',         year: '2023' },
  { id: 8,  src: '/images/gallery/2023.3.jpg',                        alt: 'ÇEF 2023 — Ziyaretçiler',     label: 'Ziyaretçiler',  year: '2023' },
  { id: 9,  src: '/images/gallery/2022.jpg',                          alt: 'ÇEF 2022 — Fuar',              label: 'Fuar 2022',     year: '2022' },
  { id: 10, src: '/images/gallery/2022.2.jpg',                        alt: 'ÇEF 2022 — Ekipmanlar',        label: 'Ekipmanlar',    year: '2022' },
  { id: 11, src: '/images/gallery/2021.jpeg',                         alt: 'ÇEF 2021 — Fuar',              label: 'Fuar 2021',     year: '2021' },
  { id: 12, src: '/images/gallery/2020.jpg',                          alt: 'ÇEF 2020 — Fuar',              label: 'Fuar 2020',     year: '2020' },
  { id: 13, src: '/images/gallery/2019.jpg',                          alt: 'ÇEF 2019 — Genel Görünüm',    label: 'Genel Görünüm', year: '2019' },
  { id: 14, src: '/images/gallery/2019.2.jpg',                        alt: 'ÇEF 2019 — Standlar',         label: 'Standlar',      year: '2019' },
  { id: 15, src: '/images/gallery/2019.3.jpg',                        alt: 'ÇEF 2019 — Katılımcılar',     label: 'Katılımcılar',  year: '2019' },
  { id: 16, src: '/images/gallery/C_aBL1oW0AAIGet-2-1024x682.jpg',   alt: 'Çerkezköy Endüstriyel Fuarı', label: 'Fuar Anı',      year: '2019' },
  { id: 17, src: '/images/gallery/2018.jpg',                          alt: 'ÇEF 2018 — Fuar',              label: 'Fuar 2018',     year: '2018' },
  { id: 18, src: '/images/gallery/2018.2.jpg',                        alt: 'ÇEF 2018 — Katılımcılar',     label: 'Katılımcılar',  year: '2018' },
  { id: 19, src: '/images/gallery/2017.jpg',                          alt: 'ÇEF 2017 — İlk Edisyon',      label: 'İlk Edisyon',   year: '2017' },
]

const YEARS = ['Tümü', '2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017']

export default function Gallery() {
  const [activeYear, setActiveYear] = useState('Tümü')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = activeYear === 'Tümü'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((g) => g.year === activeYear)

  const lightboxIndex = lightbox !== null ? filtered.findIndex((g) => g.id === lightbox) : -1

  const prev = () => {
    if (lightboxIndex > 0) setLightbox(filtered[lightboxIndex - 1].id)
  }
  const next = () => {
    if (lightboxIndex < filtered.length - 1) setLightbox(filtered[lightboxIndex + 1].id)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') setLightbox(null)
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
  }

  return (
    <section id="galeri" className="bg-white py-20 sm:py-32 border-t border-ivory-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <ScrollReveal className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-3 flex items-center gap-2">
                <span className="inline-block w-8 h-px bg-current" />
                Fotoğraf Arşivi
              </p>
              <h2
                className="font-display text-navy-900 leading-none"
                style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}
              >
                GALERİ
              </h2>
            </div>

            {/* Year filter — horizontal scroll on mobile */}
            <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 sm:flex-wrap sm:justify-end"
              style={{ scrollbarWidth: 'none' }}>
              {YEARS.map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  aria-pressed={activeYear === year}
                  className={`flex-none font-sans text-xs font-semibold tracking-[0.15em] uppercase px-4 py-2.5 border transition-all duration-200 ${
                    activeYear === year
                      ? 'bg-navy-900 text-white border-navy-900'
                      : 'bg-transparent text-navy-600 border-ivory-deep hover:border-navy-700 hover:text-navy-900'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3, delay: i * 0.025 }}
                className="relative aspect-[4/3] overflow-hidden cursor-pointer group bg-navy-800"
                onClick={() => setLightbox(item.id)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/45 transition-colors duration-300" />

                {/* Top crimson line on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-crimson scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Label on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-navy-950/80 to-transparent pt-8">
                  <p className="font-display text-white text-base leading-tight tracking-wide">{item.label}</p>
                  <p className="font-sans text-white/60 text-xs">ÇEF {item.year}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center font-sans text-sm text-navy-400 py-16">
            Bu yıl için görsel bulunamadı.
          </p>
        )}

        <p className="font-sans text-xs text-navy-400 text-center mt-6">
          Görsellere tıklayarak tam ekranda görüntüleyebilirsiniz
        </p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && lightboxIndex !== -1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-navy-950/96 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
          >
            {/* Close */}
            <button
              className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors z-10 p-2"
              onClick={() => setLightbox(null)}
              aria-label="Kapat (Esc)"
            >
              <XMarkIcon className="w-7 h-7" />
            </button>

            {/* Prev */}
            {lightboxIndex > 0 && (
              <button
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-3 z-10"
                onClick={(e) => { e.stopPropagation(); prev() }}
                aria-label="Önceki"
              >
                <ArrowLeftIcon className="w-7 h-7" />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                className="w-full max-h-[75vh] object-contain"
              />
              <div className="bg-navy-900/80 px-5 py-3 flex justify-between items-center">
                <div>
                  <p className="font-display text-white text-xl tracking-wide">{filtered[lightboxIndex].label}</p>
                  <p className="font-sans text-white/50 text-xs">ÇEF {filtered[lightboxIndex].year}</p>
                </div>
                <p className="font-sans text-white/30 text-xs">
                  {lightboxIndex + 1} / {filtered.length}
                </p>
              </div>
            </motion.div>

            {/* Next */}
            {lightboxIndex < filtered.length - 1 && (
              <button
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-3 z-10"
                onClick={(e) => { e.stopPropagation(); next() }}
                aria-label="Sonraki"
              >
                <ArrowRightIcon className="w-7 h-7" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
