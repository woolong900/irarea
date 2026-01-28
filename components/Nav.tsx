'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLink {
  href: string
  label: string
  children?: { href: string; label: string }[]
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/servicesandsupport', label: 'Services&Support' },
  { href: '/about-us', label: 'About Us' },
  {
    href: '/industrial-solutions',
    label: 'Industrial Solutions',
    children: [
      { href: '/industrial-solutions/thermography', label: 'Thermography' },
      { href: '/industrial-solutions/security-monitoring', label: 'Security Monitoring' },
      { href: '/industrial-solutions/optical-gas-imaging', label: 'Optical Gas Imaging' },
      { href: '/industrial-solutions/firefighting-rescue', label: 'Firefighting & Rescue' },
      { href: '/industrial-solutions/uavs-payload', label: 'UAVs Payload' },
      { href: '/industrial-solutions/personal-vision', label: 'Personal Vision' },
    ],
  },
]

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className="block-header__nav">
      {/* Desktop Navigation */}
      <ul className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <li
            key={link.href}
            className="relative"
            onMouseEnter={() => link.children && setOpenDropdown(link.href)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link
              href={link.href}
              className={`nav-link text-sm font-medium py-2 flex items-center gap-1 ${
                isActive(link.href) ? 'nav-link-active' : ''
              }`}
            >
              {link.label}
              {link.children && (
                <svg
                  className={`w-4 h-4 transition-transform ${openDropdown === link.href ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </Link>
            {/* Dropdown Menu */}
            {link.children && openDropdown === link.href && (
              <div className="absolute top-full left-0 pt-2 w-56">
                <ul className="bg-white rounded-lg shadow-lg border border-neutral-100 py-2">
                  {link.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          isActive(child.href)
                            ? 'text-primary-600 bg-primary-50'
                            : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-50'
                        }`}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        type="button"
        className="lg:hidden p-2 rounded-md text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
        {isOpen ? (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-neutral-200">
          <span className="text-lg font-semibold text-neutral-900">Menu</span>
          <button
            type="button"
            className="p-2 rounded-md text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="p-4 space-y-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.children ? (
                <>
                  <button
                    type="button"
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-md text-base font-medium transition-colors ${
                      isActive(link.href)
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900'
                    }`}
                    onClick={() => setOpenMobileSubmenu(openMobileSubmenu === link.href ? null : link.href)}
                  >
                    {link.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${openMobileSubmenu === link.href ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openMobileSubmenu === link.href && (
                    <ul className="mt-1 ml-4 space-y-1">
                      <li>
                        <Link
                          href={link.href}
                          className={`block px-4 py-2 rounded-md text-sm transition-colors ${
                            pathname === link.href
                              ? 'text-primary-600 bg-primary-50'
                              : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          Overview
                        </Link>
                      </li>
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={`block px-4 py-2 rounded-md text-sm transition-colors ${
                              isActive(child.href)
                                ? 'text-primary-600 bg-primary-50'
                                : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive(link.href)
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
