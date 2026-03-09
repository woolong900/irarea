import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { Container, Card, CardContent, CardTitle, CardDescription } from '@/components'
import { Link } from '@/lib/i18n'
import { getProductMainImage } from '@/lib/images'
import { getLocalizedProduct } from '@/lib/i18n/products'
import type { Locale } from '@/lib/i18n/config'

const scenarioProducts: Record<string, string[]> = {
  thermography: ['plug617r', 'min612r-pro', 'yxi256', 'iha417w'],
  'security-monitoring': ['twin1212', 'plug1212r', 'xh1207mb', 'igs612'],
  'optical-gas-imaging': ['xh615hmg', 'xh615la', 'xh1210lc', 'plug617r'],
  'firefighting-rescue': ['twin612', 'yxi160', 'yxw256', 'plug612r'],
  'uavs-payload': ['igs412', 'igs612', 'twin412', 'mini212'],
  'personal-vision': ['yxi96', 'yxp160', 'yxw256', 'tm256'],
}

interface Props {
  scenario: string
  locale: string
}

export default async function RelatedSolutionProducts({ scenario, locale }: Props) {
  const t = await getTranslations('solutions')
  const productIds = scenarioProducts[scenario] || []
  const products = productIds
    .map((id) => getLocalizedProduct(id, locale as Locale))
    .filter(Boolean)

  if (products.length === 0) return null

  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
            {t('relatedProducts')}
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            {t('relatedProductsDesc')}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            if (!product) return null
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
      </Container>
    </section>
  )
}
