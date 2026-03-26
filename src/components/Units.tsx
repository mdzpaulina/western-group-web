import { useTranslation } from 'react-i18next'
import { useInView } from '../hooks/UseInView'


const units = [
  {
    key:    'container',
    image:  '/images/units/container-services.jpeg',
  },
  {
    key:    'stevedoring',
    image:  '/images/units/stevedoring.jpeg',
  },
  {
    key:    'logistics',
    image:  '/images/units/logistics.jpeg',
  },
  {
    key:    'tankcare',
    image:  '/images/units/tank-care.jpeg',
  },
]

export default function Units() {
  const { t } = useTranslation()
  const [ref, inView] = useInView(0.1)

  return (
    <section id="unidades" className="py-24 lg:py-32 bg-wg-nube/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={ref} className="max-w-2xl mb-14">
          <p
            className={`text-wg-green text-sm font-semibold tracking-widest uppercase mb-4 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {t('units.label')}
          </p>
          <h2
            className={`font-display text-4xl lg:text-5xl font-bold text-wg-iron leading-tight transition-all duration-700 delay-100 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {t('units.title')}
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {units.map(({ key, image }, i) => (
            <article
              key={key}
              className={`group relative rounded-2xl overflow-hidden bg-wg-abrego p-7 flex flex-col min-h-[320px] transition-all duration-700 ${
                inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${150 + i * 100}ms` }}
            >
              {/* Background photo */}
              <img
                src={image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
              {/* Dark overlay for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 pointer-events-none" />

              {/* Content */}
              <div className="relative flex-1 flex flex-col">
                <p className="text-white/60 text-xs font-semibold tracking-wider uppercase mb-1">
                  {t(`units.${key}.tagline`)}
                </p>
                <h3 className="font-display text-xl font-bold text-white mb-3 leading-tight">
                  {t(`units.${key}.name`)}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed flex-1">
                  {t(`units.${key}.desc`)}
                </p>

                {/* Port badges */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {(t(`units.${key}.ports`) as string).split(' · ').map((port) => (
                    <span
                      key={port}
                      className="px-2.5 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium"
                    >
                      {port}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-wg-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}