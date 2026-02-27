'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLocale } from 'next-intl'

interface CardProps {
  children: ReactNode
  className?: string
  href?: string
  hover?: boolean
}

export default function Card({
  children,
  className = '',
  href,
  hover = true,
}: CardProps) {
  const locale = useLocale()
  const baseStyles = `bg-white rounded-lg shadow-card ${
    hover ? 'transition-all duration-200 hover:shadow-card-hover hover:-translate-y-1' : ''
  }`

  if (href) {
    // External links use regular anchor tag
    if (href.startsWith('http')) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseStyles} block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ${className}`}
        >
          {children}
        </a>
      )
    }
    // Internal links - prepend locale
    const localizedHref = `/${locale}${href.startsWith('/') ? href : `/${href}`}`
    return (
      <Link
        href={localizedHref}
        className={`${baseStyles} block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ${className}`}
      >
        {children}
      </Link>
    )
  }

  return <div className={`${baseStyles} ${className}`}>{children}</div>
}

interface CardImageProps {
  src: string
  alt: string
  className?: string
}

export function CardImage({ src, alt, className = '' }: CardImageProps) {
  return (
    <div className={`relative overflow-hidden rounded-t-lg aspect-[4/3] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
      />
    </div>
  )
}

interface CardContentProps {
  children: ReactNode
  className?: string
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return <div className={`p-4 md:p-6 ${className}`}>{children}</div>
}

interface CardTitleProps {
  children: ReactNode
  as?: 'h2' | 'h3' | 'h4'
  className?: string
}

export function CardTitle({ children, as: Component = 'h3', className = '' }: CardTitleProps) {
  return (
    <Component className={`text-lg font-semibold text-neutral-900 ${className}`}>
      {children}
    </Component>
  )
}

interface CardDescriptionProps {
  children: ReactNode
  className?: string
}

export function CardDescription({ children, className = '' }: CardDescriptionProps) {
  return <p className={`text-neutral-600 mt-2 ${className}`}>{children}</p>
}
