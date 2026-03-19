import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Container, CollapsibleFAQ, ApplicationCarousel } from '@/components'
import { Link } from '@/lib/i18n'
import { productTypes, getProductsByType } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Thermal Imaging Solutions - Custom Solutions for Your Scenarios | IR AREA',
  description:
    'Professional thermal imaging solutions provider. From long-range monitoring to ultra-lightweight applications, we tailor thermal imaging solutions for your specific needs.',
  keywords: ['thermal imaging', 'infrared detector', 'thermal camera', 'custom thermal solution', 'UAV thermal camera', 'drone thermal imaging', 'security thermal', 'drone infrared camera', 'aerial thermal payload'],
  openGraph: {
    title: 'Custom Thermal Imaging Solutions | IR AREA',
    description: 'Professional thermal imaging solutions tailored for your specific scenarios.',
    images: ['/images/hero-services.webp'],
  },
  alternates: {
    canonical: 'https://irarea.com/landing',
  },
}

interface PageProps {
  params: Promise<{ locale: string }>
}

export default async function LandingPage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('servicesPage')
  const isPage = await getTranslations('isPage')
  const pt = await getTranslations('products')
  const lt = await getTranslations('landingPage')

  const faqs = [
    { question: lt('faq1_q'), answer: lt('faq1_a'), list: null },
    { question: lt('faq2_q'), answer: lt('faq2_a'), list: null },
    { question: lt('faq3_q'), answer: lt('faq3_a'), list: null },
    { question: lt('faq4_q'), answer: lt('faq4_a'), list: null },
    { question: lt('faq5_q'), answer: lt('faq5_a'), list: null },
  ]

  const solutions = [
    {
      id: 'thermography',
      title: isPage('sol_thermo_title'),
      href: '/industrial-solutions/thermography',
      description: isPage('sol_thermo_desc'),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      id: 'security',
      title: isPage('sol_security_title'),
      href: '/industrial-solutions/security-monitoring',
      description: isPage('sol_security_desc'),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: 'gas',
      title: isPage('sol_gas_title'),
      href: '/industrial-solutions/optical-gas-imaging',
      description: isPage('sol_gas_desc'),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      id: 'firefighting',
      title: isPage('sol_fire_title'),
      href: '/industrial-solutions/firefighting-rescue',
      description: isPage('sol_fire_desc'),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      ),
    },
    {
      id: 'uavs',
      title: isPage('sol_uavs_title'),
      href: '/industrial-solutions/uavs-payload',
      description: isPage('sol_uavs_desc'),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
    },
    {
      id: 'personal',
      title: isPage('sol_personal_title'),
      href: '/industrial-solutions/personal-vision',
      description: isPage('sol_personal_desc'),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
  ]

  const applicationScenarios = [
    { title: 'Power Maintenance', description: 'Real-time temperature monitoring for electrical equipment, early detection of potential failures.', image: '/images/power-maintenance-1.webp', category: 'Thermography' },
    { title: 'Industrial Vision', description: 'Non-contact temperature measurement for manufacturing processes and quality control.', image: '/images/industrial-vision-1.webp', category: 'Thermography' },
    { title: 'Building HVAC', description: 'Energy efficiency analysis and thermal insulation assessment for buildings.', image: '/images/building-hvac-1.webp', category: 'Thermography' },
    { title: 'Safe City', description: '24/7 perimeter security and intrusion detection regardless of lighting conditions.', image: '/images/safe-city-1.webp', category: 'Security' },
    { title: 'Border Monitoring', description: 'Long-range surveillance for border security and illegal crossing detection.', image: '/images/border-monitoring-1.webp', category: 'Security' },
    { title: 'Maritime Cruising', description: 'Night navigation assistance and search & rescue at sea.', image: '/images/maritime-cruising-1.webp', category: 'Security' },
    { title: 'Gas Detection', description: 'Visualize invisible gas leaks in industrial facilities for safety compliance.', image: '/images/gas-detection-1.webp', category: 'Gas Imaging' },
    { title: 'Forest Fire Prevention', description: 'Early detection of wildfires and hotspots for rapid response.', image: '/images/forest-fire-prevention-1.webp', category: 'Firefighting' },
    { title: 'Fire Detection', description: 'Smoke penetration for firefighter safety and victim location.', image: '/images/fire-prevention-1.webp', category: 'Firefighting' },
    { title: 'UAV Inspection', description: 'Aerial thermal inspection for power lines, pipelines, and infrastructure.', image: '/images/equipment-inspection-1.webp', category: 'UAV' },
    { title: 'Enforcement & Rescue', description: 'Search and rescue operations with aerial thermal imaging.', image: '/images/enforcement-rescue-1.webp', category: 'UAV' },
    { title: 'Animal Observation', description: 'Wildlife monitoring and tracking without disturbing natural habitats.', image: '/images/animal-investigation-1.webp', category: 'UAV' },
    { title: 'Outdoor Recreation', description: 'Night hiking, camping, and outdoor activities with thermal vision.', image: '/images/outdoor-exercise-1.webp', category: 'Personal' },
    { title: 'Animal Tracking', description: 'Hunting and wildlife observation with handheld thermal devices.', image: '/images/animal-tracking-1.webp', category: 'Personal' },
    { title: 'Enforcement Patrol', description: 'Night patrol and surveillance for law enforcement.', image: '/images/enforcement-patrol-1.webp', category: 'Personal' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/hero-services.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <Container className="relative">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{t('description')}</h1>
            <p className="text-lg md:text-xl text-neutral-200">{t('subtitle')}</p>
          </div>
        </Container>
      </section>

      {/* Core Services */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
                {t('coreServicesTitle')}
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-8">
                {t('coreServicesDesc')}
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-neutral-700">{t('coreService1')}</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="text-neutral-700">{t('coreService2')}</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-neutral-700">{t('coreService3')}</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <video
                src="/videos/atn_thor6_mini.webm"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Explore Our Solutions - 6 Blocks */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              {isPage('exploreTitle')}
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              {isPage('exploreDesc')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution) => (
              <Link
                key={solution.id}
                href={solution.href}
                className="group block bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-neutral-200 hover:border-primary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  {solution.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{solution.description}</p>
                <div className="mt-4 flex items-center text-primary-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {isPage('learnMore')}
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Application Scenarios Carousel */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              {isPage('scenariosTitle')}
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              {isPage('scenariosDesc')}
            </p>
          </div>
          <ApplicationCarousel applications={applicationScenarios} />
        </Container>
      </section>

      {/* Browse by Category */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <Container>
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">{pt('browseByCategory')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productTypes.map((type) => {
              const typeKey = type.replace(/-/g, '_')
              const count = getProductsByType(type).length
              return (
                <Link key={type} href={`/products/${type}`} className="group block">
                  <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-6 h-full transition-all duration-300 group-hover:border-primary-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors mb-2">
                      {pt(`types.${typeKey}`)}
                    </h3>
                    <p className="text-sm text-neutral-500 mb-4 line-clamp-2">
                      {pt(`typeDesc.${typeKey}`)}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-primary-600">
                      {count} {pt('productsCount')}
                      <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </Container>
      </section>

      {/* FAQ Section - Collapsible */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 text-center">
              {lt('faqTitle')}
            </h2>
            <CollapsibleFAQ faqs={faqs} />
          </div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#F5F5F5' }}>
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              {lt('ctaTitle')}
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              {lt('ctaDesc')}
            </p>
            <a
              href="https://wa.me/8613385207064"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {lt('chatWhatsApp')}
            </a>
          </div>
        </Container>
      </section>
    </>
  )
}
