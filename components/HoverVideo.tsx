'use client'

import { useRef } from 'react'

interface HoverVideoProps {
  src: string
  label: string
}

export function HoverVideo({ src, label }: HoverVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    videoRef.current?.play()
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div 
      className="group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Bottom gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
        {/* Text and button on overlay */}
        <div className="absolute inset-x-0 bottom-0 p-6">
          <h4 className="text-2xl text-white font-bold tracking-wider mb-3">{label}</h4>
          <button className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
            Explore Technology
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
