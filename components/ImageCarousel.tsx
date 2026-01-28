'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface ImageCarouselProps {
  images: string[]
  alt: string
  interval?: number
}

export function ImageCarousel({ images, alt, interval = 4000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  if (images.length === 0) return null

  if (images.length === 1) {
    return (
      <div className="rounded-lg overflow-hidden relative aspect-video">
        <Image
          src={images[0]}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    )
  }

  return (
    <div className="rounded-lg overflow-hidden relative aspect-video">
      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`${alt} ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`object-cover transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white w-4'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
