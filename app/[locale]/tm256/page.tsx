import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import ProductPage from '@/components/ProductPage'
import { ProductJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'
import { getProduct } from '@/lib/products'
import { getLocalizedProduct, getLocalizedRelatedProducts } from '@/lib/i18n/products'
import { getProductMainImage } from '@/lib/images'
import { notFound } from 'next/navigation'
import type { Locale } from '@/lib/i18n/config'

const product = getProduct('tm256')
const productImage = product ? getProductMainImage(product.id) : ''

export const metadata: Metadata = {
  title: product ? `${product.name} - ${product.subtitle}` : 'TM256 Thermal Module',
  description: product?.description?.substring(0, 155) + '...' || 'High-performance thermal imaging module from IR AREA.',
  keywords: product ? [product.name, product.category, 'thermal module', 'infrared detector', 'IR AREA'] : [],
  openGraph: {
    title: product ? `${product.name} | IR AREA` : 'Thermal Module',
    description: product?.description?.substring(0, 155) || 'High-performance thermal imaging module.',
    images: productImage ? [productImage] : [],
    type: 'website',
  },
  alternates: {
    canonical: `https://irarea.com/tm256`,
  },
}

interface PageProps {
  params: Promise<{ locale: string }>
}

export default async function Timo256Page({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  
  const localizedProduct = getLocalizedProduct('tm256', locale as Locale)
  const relatedProducts = getLocalizedRelatedProducts('tm256', locale as Locale, 4)
  
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
