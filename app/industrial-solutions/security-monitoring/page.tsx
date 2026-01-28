import type { Metadata } from 'next'
import { Container, ImageCarousel } from '@/components'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Security Monitoring Solutions',
  description:
    'Thermal imaging solutions for safe city surveillance, infrastructure monitoring, border security, maritime cruising, and mining safety applications.',
}

const applications = [
  {
    title: 'Safe City',
    description:
      'City areas lacking sufficient illumination have higher criminality rates and require more manpower to monitor. Thermal imaging surveillance systems are a fast, economical and ideal solution to increase security and protect citizens\' lives and property through prevention and faster response in critical situations.',
    solution: 'Box Camera, Dome Camera, IR/Visual Dual-light Security Monitoring System',
    features: [
      'Continuous working through day and night',
      'Support LAN interface: Gigabit Ethernet adaptive, hundred meters transmission',
      'High temperature alarm, hot spot automatic tracking',
      'Support intrusion alarm function',
      'Flexible network configuration',
    ],
    images: ['/images/safe-city-1.webp', '/images/safe-city-2.webp'],
  },
  {
    title: 'Infrastructure Monitoring',
    description:
      'Intrusion prevention and detection work in and around power plants, industrial areas, dams, airports and other large infrastructure is challenging due to their size, lighting conditions and terrain. Thermal imaging systems can cover long ranges up to 20 kilometers, serving as early warning detection and intrusion monitoring cameras.',
    solution: 'Box Camera, Dome Camera, IR/Visual Dual-light Security Monitoring System',
    features: [
      'Long-range detection up to 20 kilometers',
      'Continuous 24/7 operation',
      'Support LAN interface for flexible networking',
      'High temperature alarm, hot spot automatic tracking',
      'Support intrusion alarm function',
    ],
    images: ['/images/fort-monitoring-1.webp', '/images/fort-monitoring-2.webp'],
  },
  {
    title: 'Border Security',
    description:
      'Borders and coastlines often have complex terrain spanning vast areas with various and harsh weather conditions. Ordinary monitoring systems cannot withstand all weather conditions and fail to meet long-range intrusion detection requirements. Thermal imaging systems have long detection and recognition range, operating in extreme conditions day and night.',
    solution: 'Dual-light, Three-light or Multi-light Fusion Systems',
    features: [
      'Large array for wide FOV searching',
      'Motorized/continuous zoom long-focus lens for extended range',
      'Support intrusion alarm function',
      'Stable work under harsh environment',
      'Multi-spectral fusion capabilities',
    ],
    images: ['/images/border-monitoring-1.webp', '/images/border-monitoring-2.webp'],
  },
  {
    title: 'Maritime Cruising',
    description:
      'Infrared thermal imaging detectors and modules can be integrated into fixed or hand-held devices for commercial ships, government ships, fishing boats and cruise ships. It detects water areas at long range without fear of total darkness, rain, fog and sun glare, especially suitable for night navigation, anti-collision, anti-piracy and search & rescue.',
    solution: 'Ship-borne Turret, Handheld Thermal Imager',
    features: [
      'All day and night work, penetrate fog, anti-glare',
      'Long-range monitoring extends response time',
      'Shock and vibration resistant for harsh offshore environment',
      'Automatic hotspot tracking',
      'Low power consumption for long battery life',
    ],
    images: ['/images/maritime-cruising-1.webp', '/images/maritime-cruising-2.webp'],
  },
  {
    title: 'Mining Safety',
    description:
      'Coal mine safety is important but very difficult due to the harsh smoggy, dusty and dark environment below the mine. IR stationary monitoring systems, portable thermal imagers, and robots with IR function are applied in coal mines to inspect hidden fire sources, flooded locations, and motorized equipment.',
    solution: 'On-line Surveillance, Robots, Portable Thermal Imager',
    features: [
      'Professional thermographic analysis: regional analysis, multi-spots measurement',
      'Isotherm, high temperature alarm, hot spot automatic tracking',
      'Penetrate smoke for clear imaging',
      'Clear imaging under strong light, backlight and dark conditions',
      'Rugged design for harsh environments',
    ],
    images: ['/images/mining-safety-1.webp', '/images/mining-safety-2.webp'],
  },
]

export default function SecurityMonitoringPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-16 md:py-24">
        <Container>
          <div className="max-w-4xl">
            <nav className="flex items-center gap-2 text-sm text-neutral-300 mb-6">
              <Link href="/industrial-solutions" className="hover:text-white transition-colors">
                Industrial Solutions
              </Link>
              <span>/</span>
              <span className="text-white">Security Monitoring</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Security Monitoring</h1>
            <p className="text-lg text-neutral-300">
              Comprehensive thermal imaging solutions for safe city surveillance, infrastructure protection, border security, maritime applications, and mining safety.
            </p>
          </div>
        </Container>
      </section>

      {/* Applications */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="space-y-20">
            {applications.map((app, index) => (
              <div key={index} className="border-b border-neutral-100 pb-16 last:border-0 last:pb-0">
                {/* Title and Description - Full Width Top */}
                <div className="mb-8">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full mb-4">
                    Application {index + 1}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                    {app.title}
                  </h2>
                  <p className="text-base text-neutral-600 leading-relaxed">
                    {app.description}
                  </p>
                </div>

                {/* Solution and Image - Side by Side */}
                <div className="bg-neutral-50 rounded-2xl p-6 lg:p-8">
                  <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
                    {/* Image - Left */}
                    <div>
                      {app.images ? (
                        <ImageCarousel images={app.images} alt={app.title} />
                      ) : (
                        <div className="bg-neutral-200 rounded-xl aspect-video flex items-center justify-center">
                          <div className="text-center text-neutral-400">
                            <svg className="w-16 h-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <p className="text-sm">{app.title}</p>
                          </div>
                        </div>
                      )}
                    </div>
                    {/* Solution - Right */}
                    <div>
                      <h4 className="text-base font-semibold text-neutral-900 mb-2 inline-block border-b-2 border-red-500 pb-1">Solution</h4>
                      <p className="text-base text-neutral-600 mb-5">{app.solution}</p>
                      <h4 className="text-base font-semibold text-neutral-900 mb-2">Key Features</h4>
                      <ul className="space-y-2">
                        {app.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-base text-neutral-700">
                            <svg className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Explore More Solutions
            </h2>
            <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
              Discover our complete range of industrial thermal imaging solutions.
            </p>
            <Link
              href="/industrial-solutions"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              View All Solutions
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
