'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { Container, Button } from '@/components'
import { Link } from '@/lib/i18n'
import type { Product } from '@/lib/products'
import { getProductImages, getProductMainImage } from '@/lib/images'

interface ProductPageProps {
  product: Product
  relatedProducts?: Product[]
}

export default function ProductPage({ product, relatedProducts = [] }: ProductPageProps) {
  const t = useTranslations('product')
  const locale = useLocale()
  const images = getProductImages(product.id)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0)
  
  const mainImage = images.length > 0 ? images[selectedImageIndex] : null
  const thumbnailsPerPage = 4
  const canGoPrev = selectedImageIndex > 0
  const canGoNext = selectedImageIndex < images.length - 1

  useEffect(() => {
    if (selectedImageIndex < thumbnailStartIndex) {
      setThumbnailStartIndex(selectedImageIndex)
    } else if (selectedImageIndex >= thumbnailStartIndex + thumbnailsPerPage) {
      setThumbnailStartIndex(selectedImageIndex - thumbnailsPerPage + 1)
    }
  }, [selectedImageIndex, thumbnailStartIndex])

  const goToPrevImage = () => {
    if (canGoPrev) {
      setSelectedImageIndex(selectedImageIndex - 1)
    }
  }

  const goToNextImage = () => {
    if (canGoNext) {
      setSelectedImageIndex(selectedImageIndex + 1)
    }
  }

  const visibleThumbnails = images.slice(thumbnailStartIndex, thumbnailStartIndex + thumbnailsPerPage)

  return (
    <>
      {/* Product Header */}
      <section className="bg-hero-gradient text-white py-8 md:py-12">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
              <p className="text-lg text-neutral-300 mt-2">{product.subtitle}</p>
            </div>
            <Button
              href="https://wa.me/8615080329022"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-dark self-start md:self-center"
            >
              {t('contactSales')}
            </Button>
          </div>
        </Container>
      </section>

      {/* Product Gallery & Description */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Product Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="bg-neutral-100 rounded-xl aspect-square flex items-center justify-center overflow-hidden relative">
                {mainImage ? (
                  <Image
                    src={mainImage}
                    alt={product.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-6"
                    priority
                  />
                ) : (
                  <span className="text-5xl font-bold text-neutral-300">{product.name}</span>
                )}
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={goToPrevImage}
                    disabled={!canGoPrev}
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                      canGoPrev
                        ? 'border-neutral-300 hover:border-primary-500 hover:bg-primary-50 text-neutral-600 hover:text-primary-600'
                        : 'border-neutral-200 text-neutral-300 cursor-not-allowed'
                    }`}
                    aria-label={t('previousImage')}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <div className="flex-1 flex gap-2 justify-center">
                    {visibleThumbnails.map((img, idx) => {
                      const actualIndex = thumbnailStartIndex + idx
                      return (
                        <button
                          type="button"
                          key={actualIndex}
                          onClick={() => setSelectedImageIndex(actualIndex)}
                          className={`w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden flex-shrink-0 transition-all border-2 relative ${
                            selectedImageIndex === actualIndex
                              ? 'border-primary-500 shadow-md'
                              : 'border-neutral-200 hover:border-neutral-400'
                          }`}
                        >
                          <Image
                            src={img}
                            alt={`${product.name} - ${actualIndex + 1}`}
                            fill
                            sizes="80px"
                            className="object-contain bg-neutral-50 p-1"
                          />
                        </button>
                      )
                    })}
                  </div>

                  <button
                    type="button"
                    onClick={goToNextImage}
                    disabled={!canGoNext}
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                      canGoNext
                        ? 'border-neutral-300 hover:border-primary-500 hover:bg-primary-50 text-neutral-600 hover:text-primary-600'
                        : 'border-neutral-200 text-neutral-300 cursor-not-allowed'
                    }`}
                    aria-label={t('nextImage')}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}

              {images.length > 1 && (
                <p className="text-center text-sm text-neutral-500">
                  {selectedImageIndex + 1} / {images.length}
                </p>
              )}
            </div>

            {/* Right: Product Description */}
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">{t('description')}</h2>
              <div className="prose prose-neutral max-w-none space-y-4 flex-1">
                {product.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-neutral-700 leading-relaxed">{paragraph}</p>
                ))}
              </div>
              <div className="mt-auto pt-10 flex items-center gap-4 p-5 bg-primary-50 rounded-xl border border-primary-100">
                <p className="text-neutral-800 font-medium">
                  {t('interested', { name: product.name })}
                </p>
                <Button href="https://wa.me/8615080329022" className="flex-shrink-0">
                  {t('contactSales')}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Features */}
      {product.features.length > 0 && (
        <section className="py-12 md:py-16 bg-neutral-50">
          <Container>
            <h2 className="text-2xl font-bold text-neutral-900 mb-8">{t('features')}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {product.features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg p-5 border-l-4 border-primary-500 shadow-sm"
                >
                  <h3 className="font-semibold text-neutral-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-neutral-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Specifications */}
      {product.specifications.length > 0 && (
        <section className="py-12 md:py-16 bg-white">
          <Container>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">{t('specifications')}</h2>
            <div className="overflow-hidden rounded-xl border border-neutral-200">
              <table className="w-full">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="px-6 py-4 text-left font-semibold text-neutral-700 w-1/3">{t('parameter')}</th>
                    <th className="px-6 py-4 text-left font-semibold text-neutral-700">{t('value')}</th>
                  </tr>
                </thead>
                <tbody>
                  {product.specifications.map((spec, index) => (
                    <tr
                      key={index}
                      className={`border-t border-neutral-200 ${
                        index % 2 === 1 ? 'bg-neutral-50' : 'bg-white'
                      }`}
                    >
                      <td className="px-6 py-4 font-medium text-neutral-700">{spec.label}</td>
                      <td className="px-6 py-4 text-neutral-600">{spec.values.join(' / ')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </section>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 md:py-16 bg-neutral-50">
          <Container>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
                {t('relatedProducts')}
              </h2>
              <p className="text-neutral-600">{t('relatedDescription')}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => {
                const productImage = getProductMainImage(relatedProduct.id)
                return (
                  <Link
                    key={relatedProduct.id}
                    href={`/${relatedProduct.id}`}
                    className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-neutral-200"
                  >
                    <div className="aspect-square bg-neutral-100 relative overflow-hidden">
                      {productImage ? (
                        <Image
                          src={productImage}
                          alt={relatedProduct.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-2xl font-bold text-neutral-300">{relatedProduct.name}</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <span className="text-xs text-primary-600 font-medium">{relatedProduct.category}</span>
                      <h3 className="font-semibold text-neutral-900 mt-1 group-hover:text-primary-600 transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-sm text-neutral-600 mt-1 line-clamp-2">{relatedProduct.subtitle}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </Container>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-neutral-100">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              {t('interested', { name: product.name })}
            </h2>
            <p className="text-neutral-600 mb-8">
              {t('ctaDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="https://wa.me/8615080329022">
                {t('contactSales')}
              </Button>
              <Link 
                href="/products"
                className="btn btn-outline"
              >
                {t('viewAll')}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
