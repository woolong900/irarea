import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Container, ImageCarousel, Button, RelatedSolutionProducts, WhatsAppCta } from '@/components'

export const metadata: Metadata = {
  title: 'Personal Vision Solutions',
  description:
    'Thermal imaging solutions for outdoor leisure, animal observation, and enforcement patrol with portable and wearable devices.',
}

interface PageProps {
  params: Promise<{ locale: string }>
}

export default async function PersonalVisionPage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('personalVisionPage')
  const st = await getTranslations('solutions')

  const applications = [
    {
      title: t('app1_title'),
      description: t('app1_desc'),
      solution: t('app1_solution'),
      features: [t('app1_f1'), t('app1_f2'), t('app1_f3'), t('app1_f4'), t('app1_f5'), t('app1_f6')],
      images: ['/images/outdoor-exercise-1.webp', '/images/outdoor-recreation-2.webp'],
    },
    {
      title: t('app2_title'),
      description: t('app2_desc'),
      solution: t('app2_solution'),
      features: [t('app2_f1'), t('app2_f2'), t('app2_f3'), t('app2_f4'), t('app2_f5'), t('app2_f6')],
      images: ['/images/animal-tracking-1.webp', '/images/animal-tracking-2.webp'],
    },
    {
      title: t('app3_title'),
      description: t('app3_desc'),
      solution: t('app3_solution'),
      features: [t('app3_f1'), t('app3_f2'), t('app3_f3'), t('app3_f4'), t('app3_f5'), t('app3_f6')],
      images: ['/images/enforcement-patrol-1.webp', '/images/enforcement-patrol-2.webp'],
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
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
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

      <RelatedSolutionProducts scenario="personal-vision" locale={locale} />

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
