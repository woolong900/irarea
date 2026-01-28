import { ReactNode } from 'react'
import Container from './Container'

interface SectionProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  id?: string
  as?: 'section' | 'div' | 'article'
  dark?: boolean
}

export default function Section({
  children,
  className = '',
  containerClassName = '',
  id,
  as: Component = 'section',
  dark = false,
}: SectionProps) {
  return (
    <Component
      id={id}
      className={`py-12 md:py-16 lg:py-20 ${
        dark ? 'bg-dark text-white' : ''
      } ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </Component>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({
  title,
  subtitle,
  centered = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`mb-8 md:mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className={`section-subtitle ${centered ? 'mx-auto' : ''}`}>{subtitle}</p>
      )}
    </div>
  )
}
