import { products as enProducts, getProduct as getEnProduct, getRelatedProducts as getEnRelatedProducts, getProductType, type Product, type ProductType } from '../products'
import { products as deProducts, getProduct as getDeProduct } from './products-de'
import { products as itProducts, getProduct as getItProduct } from './products-it'
import { products as esProducts, getProduct as getEsProduct } from './products-es'
import { products as ukProducts, getProduct as getUkProduct } from './products-uk'
import type { Locale } from './config'

// Localized product data
// Products with translations use localized data, others fall back to English

function getLocalizedProductsForLocale(locale: Locale, localizedProducts: Product[]): Product[] {
  return enProducts.map(enProduct => {
    const localizedProduct = localizedProducts.find(p => p.id === enProduct.id)
    return localizedProduct || enProduct
  })
}

export function getLocalizedProducts(locale: Locale): Product[] {
  switch (locale) {
    case 'de':
      return getLocalizedProductsForLocale(locale, deProducts)
    case 'it':
      return getLocalizedProductsForLocale(locale, itProducts)
    case 'es':
      return getLocalizedProductsForLocale(locale, esProducts)
    case 'uk':
      return getLocalizedProductsForLocale(locale, ukProducts)
    default:
      return enProducts
  }
}

export function getLocalizedProduct(id: string, locale: Locale): Product | undefined {
  switch (locale) {
    case 'de':
      return getDeProduct(id) || getEnProduct(id)
    case 'it':
      return getItProduct(id) || getEnProduct(id)
    case 'es':
      return getEsProduct(id) || getEnProduct(id)
    case 'uk':
      return getUkProduct(id) || getEnProduct(id)
    default:
      return getEnProduct(id)
  }
}

export function getLocalizedRelatedProducts(productId: string, locale: Locale, limit: number = 4): Product[] {
  // Get related products based on English data (category matching)
  const relatedEnProducts = getEnRelatedProducts(productId, limit)
  
  // Return localized versions
  return relatedEnProducts.map(enProduct => {
    const localized = getLocalizedProduct(enProduct.id, locale)
    return localized || enProduct
  })
}

export function getLocalizedProductsByType(type: ProductType, locale: Locale): Product[] {
  const allLocalized = getLocalizedProducts(locale)
  return allLocalized.filter((p) => {
    const enProduct = enProducts.find(ep => ep.id === p.id)
    return enProduct ? getProductType(enProduct) === type : false
  })
}

export { type Product, type ProductType }
