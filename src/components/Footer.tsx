import { useTranslation } from 'react-i18next'

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  const links = [
    { id: 'nosotros',  label: t('nav.about') },
    { id: 'unidades',  label: t('nav.units') },
    { id: 'cobertura', label: t('nav.coverage') },
    { id: 'contacto',  label: t('nav.contact') },
  ]

  return (
    <footer className="bg-[#02200f] border-t border-wg-abrego">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* Brand */}
          <div className="max-w-xs">
            <img
              src="/logo-un-piso.svg"
              alt="Western Group"
              className="h-10 w-auto object-contain"
            />
            <p className="mt-3 text-white/50 text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {links.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-white/50 hover:text-wg-green text-sm transition-colors duration-200"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-white/30 text-xs">
          <p>© {year} Western Group®. {t('footer.rights')}</p>
          <p>westerngroup.mx</p>
        </div>
      </div>
    </footer>
  )
}