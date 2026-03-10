import type { Metadata } from 'next'
import ProductPage from '@/components/ProductPage'
import { ProductJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'
import { getProduct } from '@/lib/products'
import { getProductMainImage } from '@/lib/images'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { getLocalizedProduct, getLocalizedRelatedProducts } from '@/lib/i18n/products'
import type { Locale } from '@/lib/i18n/config'

interface PageProps {
  params: Promise<{ locale: string }>
}

const product = getProduct('ht-t-series')
const productImage = product ? getProductMainImage(product.id) : ''

export const metadata: Metadata = {
  title: product ? `${product.name} - ${product.subtitle}` : 'HT T01/T02/T03 USB2.0 Infrared Module',
  description: product?.description?.substring(0, 155) + '...' || 'High-performance USB2.0 infrared thermal module from IR AREA.',
  keywords: product ? [product.name, product.category, 'thermal imaging', 'infrared', 'IR AREA', 'USB infrared module', 'thermal module'] : [],
  openGraph: {
    title: product ? `${product.name} | IR AREA` : 'Thermal Product',
    description: product?.description?.substring(0, 155) || 'High-performance thermal imaging product.',
    images: productImage ? [productImage] : [],
    type: 'website',
  },
  alternates: {
    canonical: `https://irarea.com/ht-t-series`,
  },
}

export default async function HtTSeriesPage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const localizedProduct = getLocalizedProduct('ht-t-series', locale as Locale)
  const relatedProducts = getLocalizedRelatedProducts('ht-t-series', locale as Locale)

  if (!localizedProduct) {
    notFound()
  }
  
  return (
    <>
      <ProductJsonLd
        name={localizedProduct.name}
        description={localizedProduct.description}
        image={productImage || '/images/og-image.webp'}
        category={localizedProduct.category}
        url={`https://irarea.com/${localizedProduct.id}`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://irarea.com' },
          { name: 'Products', url: 'https://irarea.com/products' },
          { name: localizedProduct.name, url: `https://irarea.com/${localizedProduct.id}` },
        ]}
      />
      <ProductPage product={localizedProduct} relatedProducts={relatedProducts} />
    </>
  )
}
