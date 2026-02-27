import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Container, ImageCarousel, Button, RelatedSolutionProducts, WhatsAppCta } from '@/components'

export const metadata: Metadata = {
  title: 'Security Monitoring Solutions',
  description:
    'Thermal imaging solutions for safe city surveillance, infrastructure monitoring, border security, maritime cruising, and mining safety applications.',
}

interface PageProps {
  params: Promise<{ locale: string }>
}

export default async function SecurityMonitoringPage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('securityPage')
  const st = await getTranslations('solutions')

  const applications = [
    {
      title: t('app1_title'),
      description: t('app1_desc'),
      solution: t('app1_solution'),
      features: [t('app1_f1'), t('app1_f2'), t('app1_f3'), t('app1_f4'), t('app1_f5')],
      images: ['/images/safe-city-1.webp', '/images/safe-city-2.webp'],
    },
    {
      title: t('app2_title'),
      description: t('app2_desc'),
      solution: t('app2_solution'),
      features: [t('app2_f1'), t('app2_f2'), t('app2_f3'), t('app2_f4'), t('app2_f5')],
      images: ['/images/fort-monitoring-1.webp', '/images/fort-monitoring-2.webp'],
    },
    {
      title: t('app3_title'),
      description: t('app3_desc'),
      solution: t('app3_solution'),
      features: [t('app3_f1'), t('app3_f2'), t('app3_f3'), t('app3_f4'), t('app3_f5')],
      images: ['/images/border-monitoring-1.webp', '/images/border-monitoring-2.webp'],
    },
    {
      title: t('app4_title'),
      description: t('app4_desc'),
      solution: t('app4_solution'),
      features: [t('app4_f1'), t('app4_f2'), t('app4_f3'), t('app4_f4'), t('app4_f5')],
      images: ['/images/maritime-cruising-1.webp', '/images/maritime-cruising-2.webp'],
    },
    {
      title: t('app5_title'),
      description: t('app5_desc'),
      solution: t('app5_solution'),
      features: [t('app5_f1'), t('app5_f2'), t('app5_f3'), t('app5_f4'), t('app5_f5')],
      images: ['/images/mining-safety-1.webp', '/images/mining-safety-2.webp'],
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-16 md:py-24">
        <Container>
          <div className="max-w-4xl">
            <nav className="flex items-center gap-2 text-sm text-neutral-300 mb-6">
              <a href={`/${locale}/industrial-solutions`} className="hover:text-white transition-colors">
                {t('breadcrumb')}
              </a>
              <span>/</span>
              <span className="text-white">{t('title')}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('title')}</h1>
            <p className="text-lg text-neutral-300">
              {t('description')}
            </p>
          </div>
        </Container>
      </section>

      {/* Applications */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="space-y-12">
            {applications.map((app, index) => (
              <div key={index} className="border-b border-neutral-100 pb-10 last:border-0 last:pb-0">
                {/* Title and Description - Full Width Top */}
                <div className="mb-8">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full mb-4">
                    {t('application')} {index + 1}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                    {app.title}
                  </h2>
                  <p className="text-base text-neutral-600 leading-relaxed">
                    {app.description}
                  </p>
                </div>

                {/* Solution and Image - Side by Side */}
                <div className="bg-neutral-50 rounded-2xl p-6 lg:p-8">
                  <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
                    {/* Image - Left */}
                    <div>
                      {app.images ? (
                        <ImageCarousel images={app.images} alt={app.title} />
                      ) : (
                        <div className="bg-neutral-200 rounded-xl aspect-video flex items-center justify-center">
                          <div className="text-center text-neutral-400">
                            <svg className="w-16 h-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <p className="text-sm">{app.title}</p>
                          </div>
                        </div>
                      )}
                    </div>
                    {/* Solution - Right */}
                    <div>
                      <h4 className="text-base font-semibold text-neutral-900 mb-2 inline-block border-b-2 border-red-500 pb-1">{t('solution')}</h4>
                      <p className="text-base text-neutral-600 mb-5">{app.solution}</p>
                      <h4 className="text-base font-semibold text-neutral-900 mb-2">{t('keyFeatures')}</h4>
                      <ul className="space-y-2">
                        {app.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-base text-neutral-700">
                            <svg className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <RelatedSolutionProducts scenario="security-monitoring" locale={locale} />

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              {t('ctaTitle')}
            </h2>
            <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
              {t('ctaDesc')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/industrial-solutions">
                {t('ctaButton')}
              </Button>
              <WhatsAppCta label={st('whatsappCta')} />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
