import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Button from '../ui/Button'
import { useLang } from '../../contexts/LanguageContext'
import type { Lang } from '../../i18n/translations'

function LangToggle({
  lang,
  setLang,
  scrolled,
  mobile = false,
}: {
  lang: Lang
  setLang: (l: Lang) => void
  scrolled: boolean
  mobile?: boolean
}) {
  return (
    <div className={`flex items-center gap-0 ${mobile ? '' : 'ml-2'}`}>
      {(['tr', 'en'] as Lang[]).map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && (
            <span className={`text-[10px] leading-none select-none ${
              mobile ? 'text-navy-300' : scrolled ? 'text-navy-300' : 'text-white/50'
            }`}>|</span>
          )}
          <button
            onClick={() => setLang(l)}
            className={`font-sans text-[11px] font-bold tracking-[0.12em] px-2 py-1 transition-colors duration-200 ${
              lang === l
                ? 'text-crimson'
                : mobile
                  ? 'text-navy-400 hover:text-crimson'
                  : scrolled
                    ? 'text-navy-400 hover:text-crimson'
                    : 'text-white/70 hover:text-white'
            }`}
          >
            {l.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, setLang, t } = useLang()
  const contactNavItem = { label: t.nav.dropdown[2].label, href: '#iletisim' }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const navLinkClass = `font-sans text-[13.5px] font-medium px-3 py-2 transition-colors duration-200 hover:text-crimson relative group ${
    scrolled ? 'text-navy-700' : 'text-white/95'
  }`

  const navLinkStyle = !scrolled
    ? { textShadow: '0 1px 3px rgba(0,0,0,0.95), 0 2px 12px rgba(0,0,0,0.7)' }
    : undefined

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-ivory/95 backdrop-blur-md shadow-sm'
          : 'bg-gradient-to-b from-navy-900/55 to-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between transition-all duration-400 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <a href="#anasayfa" aria-label="ÇEF — Çerkezköy Endüstriyel Fuarı Ana Sayfa">
          <img
            src="/images/cef.png"
            alt="Çerkezköy Ticaret ve Sanayi Odası"
            draggable={false}
            className="block w-auto transition-all duration-300"
            style={{
              height: scrolled ? '52px' : '58px',
              mixBlendMode: scrolled ? 'multiply' : 'normal',
              filter: scrolled ? 'none' : 'brightness(0) invert(1)',
            }}
          />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {[...t.nav.items, contactNavItem].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={navLinkClass}
              style={navLinkStyle}
            >
              {item.label}
              <span className="absolute bottom-0 left-3 right-3 h-px bg-crimson scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle lang={lang} setLang={setLang} scrolled={scrolled} />
          <div className="hidden sm:block">
            <Button variant={scrolled ? 'primary' : 'white-outline'} size="sm" href="#ziyaretci">
              {t.nav.visitorCta}
            </Button>
          </div>
          <button
            className={`lg:hidden p-2 rounded-sm transition-colors duration-200 ${
              scrolled ? 'text-navy-900 hover:text-crimson' : 'text-white hover:text-white/70'
            }`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-ivory border-t border-ivory-dark"
          >
            <nav className="max-w-7xl mx-auto px-5 py-4 flex flex-col">
              {[...t.nav.items, contactNavItem].map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className="font-sans text-sm font-medium text-navy-700 hover:text-crimson py-3 border-b border-ivory-dark transition-colors duration-150"
                >
                  {item.label}
                </motion.a>
              ))}

              <div className="pt-4 flex items-center gap-3">
                <Button variant="primary" size="md" className="flex-1 justify-center" href="#ziyaretci" onClick={() => setMobileOpen(false)}>
                  {t.nav.visitorCta}
                </Button>
                <LangToggle lang={lang} setLang={setLang} scrolled={scrolled} mobile />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
