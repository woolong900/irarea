'use client'

import { useRef } from 'react'
import Image from 'next/image'

interface Application {
  title: string
  description: string
  image: string
  category: string
}

interface ApplicationCarouselProps {
  applications: Application[]
}

export function ApplicationCarousel({ applications }: ApplicationCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="relative">
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-neutral-700 hover:text-primary-600 transition-colors -ml-5"
        aria-label="Scroll left"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-neutral-700 hover:text-primary-600 transition-colors -mr-5"
        aria-label="Scroll right"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {applications.map((app, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[320px] bg-white rounded-xl overflow-hidden shadow-card hover:shadow-lg transition-shadow group"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={app.image}
                alt={app.title}
                fill
                sizes="320px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                  {app.category}
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-neutral-900 mb-2 line-clamp-1">
                {app.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3">
                {app.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
