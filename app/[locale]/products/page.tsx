import type { Metadata } from 'next'
import Image from 'next/image'
import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import { Container, Card, CardContent, CardTitle, CardDescription, SolutionCta } from '@/components'
import { Link } from '@/lib/i18n'
import { getProductMainImage } from '@/lib/images'
import { productTypes, getProductsByType } from '@/lib/products'
import { getLocalizedProducts } from '@/lib/i18n/products'
import type { Locale } from '@/lib/i18n/config'

export const metadata: Metadata = {
  title: 'Infrared Thermal Products - Detectors, Modules & Cameras',
  description:
    'Browse IR AREA thermal imaging products: Uncooled VOx detectors (256×192 to 1280×1024), cooled MWIR/LWIR modules, thermal camera cores, and handheld thermal imagers. Industry-leading NETD < 30mK performance.',
  keywords: ['thermal detector', 'infrared module', 'thermal camera', 'VOx detector', 'cooled detector', 'uncooled detector', 'thermal imager', 'IR module'],
  openGraph: {
    title: 'Thermal Imaging Products - Detectors, Modules & Cameras | IR AREA',
    description: 'Complete range of infrared thermal products from uncooled detectors to cooled modules and thermal cameras.',
    images: ['/images/products-hero-bg.webp'],
  },
  alternates: {
    canonical: 'https://irarea.com/products',
  },
}

interface ProductsPageProps {
  params: Promise<{ locale: string }>
}

export default async function ProductsPage({ params }: ProductsPageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations('products')
  const localizedProducts = getLocalizedProducts(locale as Locale)

  const groupedProducts = localizedProducts.reduce(
    (acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = []
      }
      acc[product.category].push(product)
      return acc
    },
    {} as Record<string, typeof localizedProducts>
  )

  return (
    <>
      <section
        className="relative text-white py-16 md:py-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/products-hero-bg.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-dark/40 to-transparent" />
        <Container className="relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('title')}</h1>
            <p className="text-lg text-neutral-300">
              {t('description')}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-14 bg-white">
        <Container>
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">{t('browseByCategory')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productTypes.map((type) => {
              const typeKey = type.replace(/-/g, '_')
              const count = getProductsByType(type).length
              return (
                <Link key={type} href={`/products/${type}`} className="group block">
                  <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white p-6 h-full transition-all duration-300 group-hover:border-primary-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors mb-2">
                      {t(`types.${typeKey}`)}
                    </h3>
                    <p className="text-sm text-neutral-500 mb-4 line-clamp-2">
                      {t(`typeDesc.${typeKey}`)}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-primary-600">
                      {count} {t('productsCount')}
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

      <section className="py-16 md:py-20 bg-neutral-50">
        <Container>
          {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
            <div key={category} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-bold text-neutral-900 mb-8 pb-4 border-b border-neutral-200">
                {category}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryProducts.map((product) => {
                  const image = getProductMainImage(product.id)
                  return (
                    <Link key={product.id} href={`/${product.id}`} className="group block">
                      <Card className="h-full">
                        <div className="h-48 bg-neutral-100 rounded-t-lg flex items-center justify-center overflow-hidden relative">
                          {image ? (
                            <Image
                              src={image}
                              alt={product.name}
                              fill
                              sizes="(max-width: 768px) 50vw, 25vw"
                              className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <span className="text-4xl font-bold text-neutral-400 group-hover:text-primary-500 transition-colors">
                              {product.name}
                            </span>
                          )}
                        </div>
                        <CardContent>
                          <CardTitle className="group-hover:text-primary-600 transition-colors">
                            {product.name}
                          </CardTitle>
                          <CardDescription>{product.subtitle}</CardDescription>
                        </CardContent>
                      </Card>
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </Container>
      </section>

      <SolutionCta />
    </>
  )
}
