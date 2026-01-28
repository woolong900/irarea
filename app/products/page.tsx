import type { Metadata } from 'next'
import Image from 'next/image'
import { Container, Card, CardContent, CardTitle, CardDescription } from '@/components'
import { getProductMainImage } from '@/lib/images'
import { products } from '@/lib/products'
import Link from 'next/link'

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

// 按类别分组
const groupedProducts = products.reduce(
  (acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = []
    }
    acc[product.category].push(product)
    return acc
  },
  {} as Record<string, typeof products>
)

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative text-white py-16 md:py-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/products-hero-bg.webp')" }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-dark/40 to-transparent" />
        <Container className="relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Products</h1>
            <p className="text-lg text-neutral-300">
              High-performance uncooled and cooled thermal imaging modules for diverse applications.
            </p>
          </div>
        </Container>
      </section>

      {/* Products Grid */}
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
                    <Link
                      key={product.id}
                      href={`/${product.id}`}
                      className="group block"
                    >
                      <Card className="h-full">
                        {/* Product Image */}
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
