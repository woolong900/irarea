import Image from 'next/image'
import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Container, Card, CardContent, CardTitle, CardDescription } from '@/components'
import { Link } from '@/lib/i18n'
import { getProductMainImage } from '@/lib/images'
import { productTypes, type ProductType } from '@/lib/products'
import { getLocalizedProductsByType } from '@/lib/i18n/products'
import type { Locale } from '@/lib/i18n/config'

export function generateStaticParams() {
  return productTypes.map((type) => ({ type }))
}

interface PageProps {
  params: Promise<{ locale: string; type: string }>
}

export default async function ProductTypePage({ params }: PageProps) {
  const { locale, type } = await params
  setRequestLocale(locale)

  if (!productTypes.includes(type as ProductType)) {
    notFound()
  }

  const t = await getTranslations('products')
  const typeKey = type.replace(/-/g, '_') as 'uncooled_detectors' | 'uncooled_modules' | 'cooled_detectors' | 'cooled_modules'

  const filteredProducts = getLocalizedProductsByType(type as ProductType, locale as Locale)

  const groupedProducts = filteredProducts.reduce(
    (acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = []
      }
      acc[product.category].push(product)
      return acc
    },
    {} as Record<string, typeof filteredProducts>
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
            <nav className="flex items-center gap-2 text-sm text-neutral-300 mb-6">
              <Link href="/products" className="hover:text-white transition-colors">
                {t('title')}
              </Link>
              <span>/</span>
              <span className="text-white">{t(`types.${typeKey}`)}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t(`types.${typeKey}`)}</h1>
            <p className="text-lg text-neutral-300">
              {t(`typeDesc.${typeKey}`)}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-neutral-50">
        <Container>
          <div className="flex flex-wrap gap-3 mb-12">
            {productTypes.map((pt) => {
              const ptKey = pt.replace(/-/g, '_')
              const isActive = pt === type
              return (
                <Link
                  key={pt}
                  href={`/products/${pt}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-neutral-700 hover:bg-primary-50 hover:text-primary-600 border border-neutral-200'
                  }`}
                >
                  {t(`types.${ptKey}`)}
                </Link>
              )
            })}
            <Link
              href="/products"
              className="px-4 py-2 rounded-full text-sm font-medium bg-white text-neutral-700 hover:bg-primary-50 hover:text-primary-600 border border-neutral-200 transition-colors"
            >
              {t('viewAll')}
            </Link>
          </div>

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
    </>
  )
}
