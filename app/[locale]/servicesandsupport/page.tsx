import type { Metadata } from 'next'
import Image from 'next/image'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Container } from '@/components'

export const metadata: Metadata = {
  title: 'Technical Support & Services - Thermal Imaging Solutions',
  description:
    'IR AREA provides comprehensive technical support for thermal imaging solutions: SDK development, optical design, algorithm optimization, and complete thermal system integration. Expert guidance from detector selection to final product.',
  keywords: ['thermal imaging support', 'IR detector SDK', 'thermal camera development', 'infrared technical support', 'thermal system integration'],
  openGraph: {
    title: 'Technical Support & Services | IR AREA',
    description: 'Comprehensive technical support for thermal imaging solutions including SDK, optical design, and system integration.',
  },
  alternates: {
    canonical: 'https://irarea.com/servicesandsupport',
  },
}

interface PageProps {
  params: Promise<{ locale: string }>
}

export default async function ServicesAndSupportPage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('servicesPage')

  const faqs = [
    { question: t('faq1_q'), answer: t('faq1_a'), list: null },
    { question: t('faq2_q'), answer: t('faq2_a'), list: null },
    { question: t('faq3_q'), answer: null, list: [t('faq3_l1'), t('faq3_l2'), t('faq3_l3'), t('faq3_l4'), t('faq3_l5'), t('faq3_l6')] },
    { question: t('faq4_q'), answer: t('faq4_a'), list: null },
    { question: t('faq5_q'), answer: t('faq5_a'), list: null },
    { question: t('faq6_q'), answer: t('faq6_a'), list: null },
    { question: t('faq7_q'), answer: t('faq7_a'), list: null },
    { question: t('faq8_q'), answer: t('faq8_a'), list: null },
    { question: t('faq9_q'), answer: t('faq9_a'), list: null },
    { question: t('faq10_q'), answer: t('faq10_a'), list: null },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/hero-services.webp)' }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        <Container className="relative">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{t('title')}</h1>
            <p className="text-lg md:text-xl text-neutral-200">
              {t('description')}
            </p>
          </div>
        </Container>
      </section>

      {/* Core Services */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left - Text Content */}
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
                    <svg
                      className="w-6 h-6 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-neutral-700">
                    {t('coreService1')}
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <p className="text-neutral-700">
                    {t('coreService2')}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p className="text-neutral-700">{t('coreService3')}</p>
                </div>
              </div>
            </div>

            {/* Right - Video */}
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

      {/* One-Stop Solution */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              {t('oneStopTitle')}
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              {t('oneStopDesc')}
            </p>
          </div>

          {/* Service Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* First image - full size */}
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/services2.webp"
                alt="Service 1"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>
            {/* Second image - smaller and centered */}
            <div className="flex justify-center">
              <div className="relative w-1/4 aspect-square">
                <Image
                  src="/images/services3.webp"
                  alt="Service 2"
                  fill
                  sizes="15vw"
                  className="object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
            {/* Third image - smaller and centered */}
            <div className="flex justify-center">
              <div className="relative w-2/3 aspect-[16/9]">
                <Image
                  src="/images/services4.webp"
                  alt="Service 3"
                  fill
                  sizes="40vw"
                  className="object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 text-center">
              {t('faqTitle')}
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-neutral-50 rounded-lg p-6 border border-neutral-200"
                >
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                    <strong>{faq.question}</strong>
                  </h3>
                  {faq.answer && (
                    <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
                  )}
                  {faq.list && (
                    <ul className="list-disc list-inside text-neutral-600 space-y-1 mt-2">
                      {faq.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
