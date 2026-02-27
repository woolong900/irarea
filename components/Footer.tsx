'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/lib/i18n'
import Container from './Container'

export default function Footer() {
  const t = useTranslations('footer')
  const tSolutions = useTranslations('solutions')

  return (
    <footer className="bg-dark text-white">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Products */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                {t('products')}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/products?category=uncooled-detectors"
                    className="text-neutral-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:text-white"
                  >
                    {t('uncooledDetectors')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?category=uncooled-modules"
                    className="text-neutral-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:text-white"
                  >
                    {t('uncooledModules')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?category=cooled-detectors"
                    className="text-neutral-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:text-white"
                  >
                    {t('cooledDetectors')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?category=cooled-modules"
                    className="text-neutral-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:text-white"
                  >
                    {t('cooledModules')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                {t('solutions')}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/industrial-solutions/thermography"
                    className="text-neutral-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:text-white"
                  >
                    {tSolutions('thermography')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industrial-solutions/security-monitoring"
                    className="text-neutral-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:text-white"
                  >
                    {tSolutions('securityMonitoring')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industrial-solutions/optical-gas-imaging"
                    className="text-neutral-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:text-white"
                  >
                    {tSolutions('opticalGasImaging')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industrial-solutions/firefighting-rescue"
                    className="text-neutral-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:text-white"
                  >
                    {tSolutions('firefightingRescue')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industrial-solutions/uavs-payload"
                    className="text-neutral-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:text-white"
                  >
                    {tSolutions('uavsPayload')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industrial-solutions/personal-vision"
                    className="text-neutral-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:text-white"
                  >
                    {tSolutions('personalVision')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                {t('company')}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about-us"
                    className="text-neutral-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:text-white"
                  >
                    {t('aboutUs')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicesandsupport"
                    className="text-neutral-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:text-white"
                  >
                    {t('servicesSupport')}
                  </Link>
                </li>
                <li>
                  <a
                    href="https://wa.me/8615080329022"
                    className="text-neutral-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:text-white"
                  >
                    {t('contactUs')}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                {t('contact')}
              </h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a
                    href="mailto:hi@irarea.com"
                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:text-white"
                  >
                    hi@irarea.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a
                    href="tel:+86-15080329022"
                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:text-white"
                  >
                    +86 15080329022
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>
                    {t('address')}
                  </span>
                </li>
              </ul>
              
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 py-6">
          <p className="text-center text-neutral-400 text-sm">
            {t('copyright')}
          </p>
        </div>
      </Container>
    </footer>
  )
}
