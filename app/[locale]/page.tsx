import Image from 'next/image'
import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import { Container, Button, ContactForm, HoverVideo } from '@/components'
import { Link } from '@/lib/i18n'
import { IMAGES } from '@/lib/images'

interface HomePageProps {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  
  const t = await getTranslations('home')
  const tSolutions = await getTranslations('solutions')

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-hero-gradient text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${IMAGES.heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            }}
          />
        </div>

        <Container className="relative py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl">
              {t('hero.description')}
            </p>
            <p className="text-neutral-400 mb-8">{t('hero.trusted')}</p>
            <Button href="/products" variant="primary" size="lg">
              {t('hero.explore')}
            </Button>
          </div>
        </Container>
      </section>

      {/* Company Introduction */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                {t('company.title')}
              </h3>
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-6">
                {t('company.description')}
              </p>
              <p className="text-2xl md:text-3xl font-bold text-primary-600">{t('company.globalReach')}</p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/infrared-drone-camera.webp"
                alt="Infrared Drone Camera"
                width={448}
                height={336}
                className="w-full max-w-md rounded-lg shadow-card"
                unoptimized
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Media Center - ATN Style */}
      <section className="py-16 md:py-24">
        <Container>
          {/* Section Header */}
          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
              {t('media.title')}
            </h3>
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl">
              {t('media.description')}
            </p>
          </div>

          {/* Video Grid - Three equal width videos */}
          <div className="grid md:grid-cols-3 gap-6">
            <HoverVideo
              src="/videos/atn_tech_001.mp4"
              label={t('media.thermal')}
            />
            <HoverVideo
              src="/videos/atn_tech_003.mp4"
              label={t('media.daytime')}
            />
            <HoverVideo
              src="/videos/atn_tech_002.mp4"
              label={t('media.nightVision')}
            />
          </div>
        </Container>
      </section>

      {/* Application Scenarios */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              {t('scenarios.title')}
            </h3>
            <p className="text-lg md:text-xl text-neutral-600">
              {t('scenarios.description')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { image: '/images/scenarios/scenario-1.webp', titleKey: 'thermography', link: '/industrial-solutions/thermography' },
              { image: '/images/safe-city-1.webp', titleKey: 'securityMonitoring', link: '/industrial-solutions/security-monitoring' },
              { image: '/images/gas-detection-1.webp', titleKey: 'opticalGasImaging', link: '/industrial-solutions/optical-gas-imaging' },
              { image: '/images/forest-fire-prevention-1.webp', titleKey: 'firefightingRescue', link: '/industrial-solutions/firefighting-rescue' },
              { image: '/images/firefighting-application-1.webp', titleKey: 'uavsPayload', link: '/industrial-solutions/uavs-payload' },
              { image: '/images/animal-tracking-2.webp', titleKey: 'personalVision', link: '/industrial-solutions/personal-vision' },
            ].map((item, index) => {
              const title = tSolutions(item.titleKey)
              const content = (
                <div
                  key={index}
                  className="group rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="aspect-square overflow-hidden relative">
                    <Image
                      src={item.image}
                      alt={title || `Application scenario ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {title && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <h4 className="text-white font-semibold text-lg">{title}</h4>
                      </div>
                    )}
                  </div>
                </div>
              );
              return item.link ? (
                <Link key={index} href={item.link}>
                  {content}
                </Link>
              ) : (
                content
              );
            })}
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Contact Info */}
            <div className="flex flex-col">
              <div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
                  {t('contact.title')}
                </h3>
                <p className="text-lg text-neutral-600 mb-8">
                  {t('contact.description')}
                </p>

                <div className="space-y-5">
                  {/* Phone */}
                  <a href="tel:+86-13385207064" className="flex items-center gap-3 group">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-neutral-700 group-hover:text-primary-600 transition-colors">+86 13385207064</span>
                  </a>

                  {/* Email */}
                  <a href="mailto:hi@irarea.com" className="flex items-center gap-3 group">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-neutral-700 group-hover:text-primary-600 transition-colors">hi@irarea.com</span>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-neutral-700">ShenZhen, China</span>
                  </div>
                </div>
              </div>

              {/* Bottom info */}
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <p className="text-sm text-neutral-500 mb-4">{t('contact.businessHours')}</p>
                <p className="text-neutral-700">{t('contact.weekdays')}</p>
                <p className="text-neutral-700">{t('contact.weekend')}</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
