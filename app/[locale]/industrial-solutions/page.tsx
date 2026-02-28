import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Container } from '@/components'
import { Link } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Thermal Imaging Solutions - Industrial Applications & Use Cases',
  description:
    'Explore IR AREA thermal imaging solutions: Thermography for predictive maintenance, security monitoring, optical gas imaging (OGI), firefighting & rescue, UAV payloads, and personal night vision applications.',
  keywords: ['thermal imaging solutions', 'thermography', 'security monitoring', 'optical gas imaging', 'firefighting thermal', 'UAV thermal camera', 'drone thermal imaging', 'drone infrared payload', 'aerial thermal camera', 'night vision'],
  openGraph: {
    title: 'Industrial Thermal Imaging Solutions | IR AREA',
    description: 'Complete thermal imaging solutions for thermography, security, gas detection, firefighting, UAVs and personal vision.',
  },
  alternates: {
    canonical: 'https://irarea.com/industrial-solutions',
  },
}

interface PageProps {
  params: Promise<{ locale: string }>
}

export default async function IndustrialSolutionsPage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('isPage')

  const solutions = [
    {
      id: 'thermography',
      title: t('sol_thermo_title'),
      href: '/industrial-solutions/thermography',
      description: t('sol_thermo_desc'),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      id: 'security',
      title: t('sol_security_title'),
      href: '/industrial-solutions/security-monitoring',
      description: t('sol_security_desc'),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: 'gas',
      title: t('sol_gas_title'),
      href: '/industrial-solutions/optical-gas-imaging',
      description: t('sol_gas_desc'),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      id: 'firefighting',
      title: t('sol_fire_title'),
      href: '/industrial-solutions/firefighting-rescue',
      description: t('sol_fire_desc'),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      ),
    },
    {
      id: 'uavs',
      title: t('sol_uavs_title'),
      href: '/industrial-solutions/uavs-payload',
      description: t('sol_uavs_desc'),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
    },
    {
      id: 'personal',
      title: t('sol_personal_title'),
      href: '/industrial-solutions/personal-vision',
      description: t('sol_personal_desc'),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
  ]

  const applicationScenarios = [
    {
      category: t('cat_thermo'),
      scenarios: [
        {
          title: t('cat_thermo_s1_title'),
          description: t('cat_thermo_s1_desc'),
          features: [t('cat_thermo_s1_f1'), t('cat_thermo_s1_f2'), t('cat_thermo_s1_f3'), t('cat_thermo_s1_f4')],
        },
        {
          title: t('cat_thermo_s2_title'),
          description: t('cat_thermo_s2_desc'),
          features: [t('cat_thermo_s2_f1'), t('cat_thermo_s2_f2'), t('cat_thermo_s2_f3'), t('cat_thermo_s2_f4')],
        },
        {
          title: t('cat_thermo_s3_title'),
          description: t('cat_thermo_s3_desc'),
          features: [t('cat_thermo_s3_f1'), t('cat_thermo_s3_f2'), t('cat_thermo_s3_f3'), t('cat_thermo_s3_f4')],
        },
      ],
    },
    {
      category: t('cat_security'),
      scenarios: [
        {
          title: t('cat_security_s1_title'),
          description: t('cat_security_s1_desc'),
          features: [t('cat_security_s1_f1'), t('cat_security_s1_f2'), t('cat_security_s1_f3'), t('cat_security_s1_f4')],
        },
        {
          title: t('cat_security_s2_title'),
          description: t('cat_security_s2_desc'),
          features: [t('cat_security_s2_f1'), t('cat_security_s2_f2'), t('cat_security_s2_f3'), t('cat_security_s2_f4')],
        },
        {
          title: t('cat_security_s3_title'),
          description: t('cat_security_s3_desc'),
          features: [t('cat_security_s3_f1'), t('cat_security_s3_f2'), t('cat_security_s3_f3'), t('cat_security_s3_f4')],
        },
      ],
    },
    {
      category: t('cat_fire'),
      scenarios: [
        {
          title: t('cat_fire_s1_title'),
          description: t('cat_fire_s1_desc'),
          features: [t('cat_fire_s1_f1'), t('cat_fire_s1_f2'), t('cat_fire_s1_f3'), t('cat_fire_s1_f4')],
        },
        {
          title: t('cat_fire_s2_title'),
          description: t('cat_fire_s2_desc'),
          features: [t('cat_fire_s2_f1'), t('cat_fire_s2_f2'), t('cat_fire_s2_f3'), t('cat_fire_s2_f4')],
        },
        {
          title: t('cat_fire_s3_title'),
          description: t('cat_fire_s3_desc'),
          features: [t('cat_fire_s3_f1'), t('cat_fire_s3_f2'), t('cat_fire_s3_f3'), t('cat_fire_s3_f4')],
        },
      ],
    },
    {
      category: t('cat_uavs'),
      scenarios: [
        {
          title: t('cat_uavs_s1_title'),
          description: t('cat_uavs_s1_desc'),
          features: [t('cat_uavs_s1_f1'), t('cat_uavs_s1_f2'), t('cat_uavs_s1_f3'), t('cat_uavs_s1_f4')],
        },
        {
          title: t('cat_uavs_s2_title'),
          description: t('cat_uavs_s2_desc'),
          features: [t('cat_uavs_s2_f1'), t('cat_uavs_s2_f2'), t('cat_uavs_s2_f3'), t('cat_uavs_s2_f4')],
        },
        {
          title: t('cat_uavs_s3_title'),
          description: t('cat_uavs_s3_desc'),
          features: [t('cat_uavs_s3_f1'), t('cat_uavs_s3_f2'), t('cat_uavs_s3_f3'), t('cat_uavs_s3_f4')],
        },
      ],
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-16 md:py-24">
        <Container>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('title')}</h1>
            <p className="text-lg text-neutral-300">
              {t('description')}
            </p>
          </div>
        </Container>
      </section>

      {/* Solutions Overview - 6 Categories */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              {t('exploreTitle')}
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              {t('exploreDesc')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution) => (
              <Link
                key={solution.id}
                href={solution.href}
                className="group block bg-neutral-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  {solution.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{solution.description}</p>
                <div className="mt-4 flex items-center text-primary-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {t('learnMore')}
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Application Scenarios */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              {t('scenariosTitle')}
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              {t('scenariosDesc')}
            </p>
          </div>

          <div className="space-y-16">
            {applicationScenarios.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-xl font-bold text-neutral-900 mb-8 flex items-center">
                  <span className="w-8 h-8 bg-primary-600 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-3">
                    {categoryIndex + 1}
                  </span>
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.scenarios.map((scenario, scenarioIndex) => (
                    <div
                      key={scenarioIndex}
                      className="bg-white rounded-lg p-6 shadow-card hover:shadow-lg transition-shadow"
                    >
                      <h4 className="text-lg font-semibold text-neutral-900 mb-3">
                        {scenario.title}
                      </h4>
                      <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                        {scenario.description}
                      </p>
                      <ul className="space-y-2">
                        {scenario.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                            <svg className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

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
            <Link
              href="https://wa.me/8615080329022"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              {t('contactUs')}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
