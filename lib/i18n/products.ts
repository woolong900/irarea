import { products as enProducts, getProduct as getEnProduct, getRelatedProducts as getEnRelatedProducts, getProductType, type Product, type ProductType } from '../products'
import { products as bgProducts, getProduct as getBgProduct } from './products-bg'
import { products as csProducts, getProduct as getCsProduct } from './products-cs'
import { products as daProducts, getProduct as getDaProduct } from './products-da'
import { products as deProducts, getProduct as getDeProduct } from './products-de'
import { products as elProducts, getProduct as getElProduct } from './products-el'
import { products as esProducts, getProduct as getEsProduct } from './products-es'
import { products as etProducts, getProduct as getEtProduct } from './products-et'
import { products as fiProducts, getProduct as getFiProduct } from './products-fi'
import { products as frProducts, getProduct as getFrProduct } from './products-fr'
import { products as hrProducts, getProduct as getHrProduct } from './products-hr'
import { products as huProducts, getProduct as getHuProduct } from './products-hu'
import { products as itProducts, getProduct as getItProduct } from './products-it'
import { products as ltProducts, getProduct as getLtProduct } from './products-lt'
import { products as lvProducts, getProduct as getLvProduct } from './products-lv'
import { products as nlProducts, getProduct as getNlProduct } from './products-nl'
import { products as noProducts, getProduct as getNoProduct } from './products-no'
import { products as plProducts, getProduct as getPlProduct } from './products-pl'
import { products as ptProducts, getProduct as getPtProduct } from './products-pt'
import { products as roProducts, getProduct as getRoProduct } from './products-ro'
import { products as ruProducts, getProduct as getRuProduct } from './products-ru'
import { products as skProducts, getProduct as getSkProduct } from './products-sk'
import { products as slProducts, getProduct as getSlProduct } from './products-sl'
import { products as srProducts, getProduct as getSrProduct } from './products-sr'
import { products as svProducts, getProduct as getSvProduct } from './products-sv'
import { products as trProducts, getProduct as getTrProduct } from './products-tr'
import { products as ukProducts, getProduct as getUkProduct } from './products-uk'
import type { Locale } from './config'

const localeProductsMap: Record<string, { products: Product[], getProduct: (id: string) => Product | undefined }> = {
  bg: { products: bgProducts, getProduct: getBgProduct },
  cs: { products: csProducts, getProduct: getCsProduct },
  da: { products: daProducts, getProduct: getDaProduct },
  de: { products: deProducts, getProduct: getDeProduct },
  el: { products: elProducts, getProduct: getElProduct },
  es: { products: esProducts, getProduct: getEsProduct },
  et: { products: etProducts, getProduct: getEtProduct },
  fi: { products: fiProducts, getProduct: getFiProduct },
  fr: { products: frProducts, getProduct: getFrProduct },
  hr: { products: hrProducts, getProduct: getHrProduct },
  hu: { products: huProducts, getProduct: getHuProduct },
  it: { products: itProducts, getProduct: getItProduct },
  lt: { products: ltProducts, getProduct: getLtProduct },
  lv: { products: lvProducts, getProduct: getLvProduct },
  nl: { products: nlProducts, getProduct: getNlProduct },
  no: { products: noProducts, getProduct: getNoProduct },
  pl: { products: plProducts, getProduct: getPlProduct },
  pt: { products: ptProducts, getProduct: getPtProduct },
  ro: { products: roProducts, getProduct: getRoProduct },
  ru: { products: ruProducts, getProduct: getRuProduct },
  sk: { products: skProducts, getProduct: getSkProduct },
  sl: { products: slProducts, getProduct: getSlProduct },
  sr: { products: srProducts, getProduct: getSrProduct },
  sv: { products: svProducts, getProduct: getSvProduct },
  tr: { products: trProducts, getProduct: getTrProduct },
  uk: { products: ukProducts, getProduct: getUkProduct },
}

function getLocalizedProductsForLocale(localizedProducts: Product[]): Product[] {
  return enProducts.map(enProduct => {
    const localizedProduct = localizedProducts.find(p => p.id === enProduct.id)
    return localizedProduct || enProduct
  })
}

export function getLocalizedProducts(locale: Locale): Product[] {
  const entry = localeProductsMap[locale]
  if (entry) return getLocalizedProductsForLocale(entry.products)
  return enProducts
}

export function getLocalizedProduct(id: string, locale: Locale): Product | undefined {
  const entry = localeProductsMap[locale]
  if (entry) return entry.getProduct(id) || getEnProduct(id)
  return getEnProduct(id)
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
