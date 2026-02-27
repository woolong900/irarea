import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import ProductPage from '@/components/ProductPage'
import { ProductJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'
import { getProduct } from '@/lib/products'
import { getLocalizedProduct, getLocalizedRelatedProducts } from '@/lib/i18n/products'
import { getProductMainImage } from '@/lib/images'
import { notFound } from 'next/navigation'
import type { Locale } from '@/lib/i18n/config'

const product = getProduct('igs612')
const productImage = product ? getProductMainImage(product.id) : ''

export const metadata: Metadata = {
  title: product ? `${product.name} - ${product.subtitle}` : 'IGS612 Thermal Module',
  description: product?.description?.substring(0, 155) + '...' || 'High-performance thermal imaging product from IR AREA.',
  keywords: product ? [product.name, product.category, 'thermal imaging', 'infrared', 'IR AREA'] : [],
  openGraph: {
    title: product ? `${product.name} | IR AREA` : 'Thermal Product',
    description: product?.description?.substring(0, 155) || 'High-performance thermal imaging product.',
    images: productImage ? [productImage] : [],
    type: 'website',
  },
  alternates: {
    canonical: `https://irarea.com/igs612`,
  },
}

interface PageProps {
  params: Promise<{ locale: string }>
}

export default async function Igs612Page({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  
  const localizedProduct = getLocalizedProduct('igs612', locale as Locale)
  const relatedProducts = getLocalizedRelatedProducts('igs612', locale as Locale, 4)
  
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
