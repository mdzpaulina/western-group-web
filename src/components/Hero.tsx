import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-wg-abrego pt-16 lg:pt-20"
    >
      {/* Background: wind lines texture from brand guide */}
      <div className="absolute inset-0 wind-lines-light pointer-events-none" />

      {/* Radial green glow — brand atmosphere */}
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(50,205,15,0.18) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute -bottom-40 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(50,205,15,0.10) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        <div className="max-w-3xl">

          {/* Headline */}
          <h1
            className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[1.0] text-white mb-4 opacity-0 animate-fade-up animate-delay-200"
            style={{ animationFillMode: 'forwards' }}
          >
            Western <span className="text-wg-green">Group</span>
          </h1>

          {/* Description */}
          <p
            className="mt-6 text-lg sm:text-xl text-white/75 max-w-xl leading-relaxed opacity-0 animate-fade-up animate-delay-400"
            style={{ animationFillMode: 'forwards' }}
          >
            {t('hero.desc')}
          </p>

          {/* CTAs */}
          <div
            className="mt-10 flex flex-wrap gap-4 opacity-0 animate-fade-up animate-delay-500"
            style={{ animationFillMode: 'forwards' }}
          >
            <button
              onClick={() => scrollTo('unidades')}
              className="px-7 py-3.5 bg-wg-green text-wg-abrego font-semibold rounded-lg hover:bg-wg-alisio transition-colors duration-200 text-sm sm:text-base"
            >
              {t('hero.cta_units')}
            </button>
            <button
              onClick={() => scrollTo('contacto')}
              className="px-7 py-3.5 border border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 text-sm sm:text-base"
            >
              {t('hero.cta_contact')}
            </button>
          </div>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />
    </section>
  )
}