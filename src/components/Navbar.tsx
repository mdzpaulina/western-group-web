import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useScrollAnimation } from '../hooks/UseScrollAnimation'

const NAV_SECTIONS = ['inicio', 'nosotros', 'unidades', 'cobertura', 'contacto']

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useScrollAnimation(NAV_SECTIONS)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')
  }

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const navLinks = [
    { key: 'inicio',    label: t('nav.home') },
    { key: 'nosotros',  label: t('nav.about') },
    { key: 'unidades',  label: t('nav.units') },
    { key: 'cobertura', label: t('nav.coverage') },
    { key: 'contacto',  label: t('nav.contact') },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-wg-nube"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">

        {/* Logo */}
        <button
          onClick={() => scrollTo('inicio')}
          className="flex items-center gap-2 focus:outline-none"
          aria-label="Western Group — Inicio"
        >
          <div className="h-12 lg:h-16 flex items-center">
            <img
              src="/logo-un-piso.svg"
              alt="Western Group"
              className="h-full w-auto object-contain"
            />
          </div>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                active === key
                  ? 'text-wg-green'
                  : 'text-wg-iron hover:text-wg-green'
              }`}
            >
              {label}
            </button>
          ))}

          {/* Lang toggle */}
          <button
            onClick={toggleLang}
            className="ml-3 px-3 py-1.5 text-sm font-semibold rounded-full border border-wg-iron text-wg-iron hover:bg-wg-iron hover:text-white transition-all duration-200"
            aria-label="Toggle language"
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleLang}
            className="px-2.5 py-1 text-xs font-semibold rounded-full border border-wg-iron text-wg-iron transition-all"
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            className="p-1.5 rounded-md transition-colors text-wg-iron"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-white border-t border-wg-nube ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-3 flex flex-col gap-1">
          {navLinks.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                active === key
                  ? 'text-wg-green bg-wg-brisa'
                  : 'text-wg-iron hover:text-wg-green hover:bg-wg-brisa'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}