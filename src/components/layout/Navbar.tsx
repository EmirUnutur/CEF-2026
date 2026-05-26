import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import Button from '../ui/Button'
import { useLang } from '../../contexts/LanguageContext'
import type { Lang } from '../../i18n/translations'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { lang, setLang, t } = useLang()

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

  const LangToggle = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={`flex items-center gap-0 ${mobile ? '' : 'ml-2'}`}>
      {(['tr', 'en'] as Lang[]).map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && (
            <span className={`text-[10px] leading-none select-none ${
              mobile ? 'text-navy-300' : scrolled ? 'text-navy-300' : 'text-white/20'
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
                    : 'text-white/40 hover:text-white/70'
            }`}
          >
            {l.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  )

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-ivory/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
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
        {/* Logo */}
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

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {t.nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`font-sans text-sm font-medium px-3 py-2 transition-colors duration-200 hover:text-crimson relative group ${
                scrolled ? 'text-navy-700' : 'text-white/85'
              }`}
            >
              {item.label}
              <span className="absolute bottom-0 left-3 right-3 h-px bg-crimson scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </a>
          ))}

          {/* Hakkında dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-1 font-sans text-sm font-medium px-3 py-2 transition-colors duration-200 hover:text-crimson relative group ${
                scrolled ? 'text-navy-700' : 'text-white/85'
              }`}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              {t.nav.about}
              <ChevronDownIcon
                className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
              />
              <span className="absolute bottom-0 left-3 right-3 h-px bg-crimson scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-full left-0 mt-1 bg-white border border-ivory-dark shadow-xl min-w-[200px] py-2 z-50"
                >
                  {t.nav.dropdown.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setDropdownOpen(false)}
                      className="flex flex-col px-5 py-3 hover:bg-ivory transition-colors duration-150 group/item border-l-2 border-transparent hover:border-crimson"
                    >
                      <span className="font-sans text-sm font-semibold text-navy-800 group-hover/item:text-crimson transition-colors duration-150">
                        {item.label}
                      </span>
                      <span className="font-sans text-xs text-navy-400 mt-0.5">
                        {item.description}
                      </span>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Right: Lang toggle + CTA + Hamburger */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex"><LangToggle /></div>
          <div>
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

      {/* Mobile Menu */}
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
              {t.nav.items.map((item, i) => (
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

              {/* Hakkında accordion in mobile */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: t.nav.items.length * 0.04, duration: 0.3 }}
                className="border-b border-ivory-dark"
              >
                <button
                  onClick={() => setMobileDropdownOpen((v) => !v)}
                  className="flex items-center justify-between w-full font-sans text-sm font-medium text-navy-700 py-3 hover:text-crimson transition-colors duration-150"
                >
                  {t.nav.about}
                  <ChevronDownIcon
                    className={`w-4 h-4 transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      {t.nav.dropdown.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={() => { setMobileOpen(false); setMobileDropdownOpen(false) }}
                          className="flex items-center gap-2 pl-4 pr-2 py-2.5 font-sans text-sm text-navy-500 hover:text-crimson transition-colors duration-150 border-l-2 border-crimson/30 ml-2 mb-1"
                        >
                          <span className="w-1 h-1 rounded-full bg-crimson/60 flex-shrink-0" />
                          {item.label}
                        </a>
                      ))}
                      <div className="pb-2" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <div className="pt-4 flex items-center gap-3">
                <Button variant="primary" size="md" className="flex-1 justify-center" href="#ziyaretci" onClick={() => setMobileOpen(false)}>
                  {t.nav.visitorCta}
                </Button>
                <LangToggle mobile />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
