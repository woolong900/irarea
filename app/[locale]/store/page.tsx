import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Container, Button } from '@/components'

export const metadata: Metadata = {
  title: 'Buy Thermal Imaging Products - Get Quote & Pricing',
  description:
    'Purchase IR AREA thermal imaging products directly. Get quotes for infrared detectors, thermal modules, and complete thermal cameras. Contact our sales team for pricing and samples.',
  keywords: ['buy thermal camera', 'infrared detector price', 'thermal module quote', 'thermal imaging purchase'],
  openGraph: {
    title: 'Buy Thermal Imaging Products | IR AREA Store',
    description: 'Get quotes and pricing for infrared detectors, thermal modules, and thermal cameras.',
  },
  alternates: {
    canonical: 'https://irarea.com/store',
  },
}

interface PageProps {
  params: Promise<{ locale: string }>
}

export default async function StorePage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('storePage')

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

      {/* Content */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
              {t('pricingTitle')}
            </h2>
            <p className="text-neutral-600 mb-8">
              {t('pricingDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/products">{t('viewProducts')}</Button>
              <Button href="https://wa.me/8615080329022" variant="outline">
                {t('contactSales')}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
