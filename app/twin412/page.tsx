import type { Metadata } from 'next'
import ProductPage from '@/components/ProductPage'
import { ProductJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'
import { getProduct } from '@/lib/products'
import { getProductMainImage } from '@/lib/images'
import { notFound } from 'next/navigation'

const product = getProduct('twin412')
const productImage = product ? getProductMainImage(product.id) : ''

export const metadata: Metadata = {
  title: product ? `${product.name} - ${product.subtitle}` : 'TWIN412 Thermal Module',
  description: product?.description?.substring(0, 155) + '...' || 'High-performance thermal imaging product from IR AREA.',
  keywords: product ? [product.name, product.category, 'thermal imaging', 'infrared', 'IR AREA'] : [],
  openGraph: {
    title: product ? `${product.name} | IR AREA` : 'Thermal Product',
    description: product?.description?.substring(0, 155) || 'High-performance thermal imaging product.',
    images: productImage ? [productImage] : [],
    type: 'website',
  },
  alternates: {
    canonical: `https://irarea.com/twin412`,
  },
}

export default function Twin412Page() {
  if (!product) {
    notFound()
  }
  
  return (
    <>
      <ProductJsonLd
        name={product.name}
        description={product.description}
        image={productImage || '/images/og-image.webp'}
        category={product.category}
        url={`https://irarea.com/${product.id}`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://irarea.com' },
          { name: 'Products', url: 'https://irarea.com/products' },
          { name: product.name, url: `https://irarea.com/${product.id}` },
        ]}
      />
      <ProductPage product={product} />
    </>
  )
}
