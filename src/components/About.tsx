import { useTranslation } from 'react-i18next'
import { useInView } from '../hooks/UseInView'

export default function About() {
  const { t } = useTranslation()
  const [ref, inView] = useInView()

  const stats = [
    { num: t('about.stat1_num'), lbl: t('about.stat1_lbl') },
    { num: t('about.stat2_num'), lbl: t('about.stat2_lbl') },
    { num: t('about.stat3_num'), lbl: t('about.stat3_lbl') },
  ]

  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >

          {/* Text column */}
          <div>
            <p
              className={`text-wg-green text-sm font-semibold tracking-widest uppercase mb-4 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {t('about.label')}
            </p>

            <h2
              className={`font-display text-4xl lg:text-5xl font-bold text-wg-iron leading-tight mb-6 transition-all duration-700 delay-100 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {t('about.title')}
            </h2>

            <p
              className={`text-wg-iron/75 text-lg leading-relaxed transition-all duration-700 delay-200 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {t('about.body')}
            </p>

            {/* Accent line — brand element */}
            <div
              className={`mt-8 w-16 h-1 bg-wg-green rounded-full transition-all duration-700 delay-300 ${
                inView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              } origin-left`}
            />
          </div>

          {/* Stats column */}
          <div
            className={`grid grid-cols-3 gap-6 transition-all duration-700 delay-300 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {stats.map(({ num, lbl }, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-wg-nube shadow-sm"
              >
                <span className="font-display text-4xl lg:text-5xl font-bold text-wg-abrego leading-none mb-2">
                  {num}
                </span>
                <span className="text-xs sm:text-sm text-wg-iron font-medium leading-tight">
                  {lbl}
                </span>
              </div>
            ))}

            {/* Brand quote */}
            <div className="col-span-3 mt-2 p-6 rounded-2xl bg-wg-abrego relative overflow-hidden">
              <div className="absolute inset-0 wind-lines-light pointer-events-none opacity-60" />
              <p className="relative font-display text-xl lg:text-2xl font-semibold text-white leading-snug">
                "Somos el viento a favor."
              </p>
              <p className="relative mt-2 text-wg-alisio text-sm font-medium">
                Western Group®
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}