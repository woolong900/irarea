import type { Metadata } from 'next'
import { Container, ImageCarousel } from '@/components'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Firefighting & Rescue Solutions',
  description:
    'Thermal imaging solutions for forest fire prevention, fire detection, and search & rescue operations with advanced smoke penetration capabilities.',
}

const applications = [
  {
    title: 'Forest Fire Prevention',
    description:
      'Forest fires prevention is challenging because the forest area is vast, foggy and dimly while initial fires are often small unobvious flames, which is difficult to see by human eyes or visual camera monitoring. The forest fire prevention system with IR integrated can carry out real-time, long-distance monitoring in all weather conditions for all day long.',
    solution: 'On-line Surveillance, UAVs',
    features: [
      'Large array for wide FOV searching',
      'Motorized/continuous zoom long-focus lens for extended range',
      'High temperature alarm with automatic alerts',
      'Hot spot automatic tracking',
      'All-weather 24/7 monitoring capability',
      'Early detection of accumulated heat and hidden fire sources',
    ],
    images: ['/images/forest-fire-prevention-1.webp', '/images/forest-fire-prevention-2.webp'],
  },
  {
    title: 'Fire Prevention',
    description:
      'Fire generally needs to go through the process of surface temperature rising, smog and visible fire. Infrared thermal imaging has the function of non-contact heat detection and temperature measurement. Before smog and visible fire, it can sensitively detect abnormal temperature rise and timely warn to eliminate fire hazards.',
    solution: 'On-line Surveillance, Robots',
    features: [
      'High temperature alarm, hot spot automatic tracking',
      'Penetrate smoke for clear imaging',
      'Clear imaging under strong light, backlight and dark conditions',
      'Non-contact heat detection',
      'Real-time temperature measurement',
      'Evidence collection for fire investigation',
    ],
    images: ['/images/fire-prevention-1.webp', '/images/fire-prevention-2.webp'],
  },
  {
    title: 'Search & Rescue',
    description:
      'Smoke generated from fire often causes great difficulties to rescue efforts, like hindering firefighters from finding passageways, locating trapped persons and valuables. Infrared thermal imagers help firefighters see through smoke, clearly showing the real situation of fire scenes for quick and effective decision-making.',
    solution: 'Handheld Thermal Imager, Firefighting Helmet, Firefighting Glasses, UAVs',
    features: [
      'Penetrate smoke for clear visibility',
      'Clear imaging under strong light, backlight and dark conditions',
      'Extremely compact and lightweight design',
      'Low power consumption for extended operation',
      'Long battery life for extended missions',
      'Quick location of trapped persons',
    ],
    images: ['/images/firefighting-application-1.webp', '/images/firefighting-application-2.webp'],
  },
]

export default function FirefightingRescuePage() {
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
              <span className="text-white">Firefighting & Rescue</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Firefighting & Rescue</h1>
            <p className="text-lg text-neutral-300">
              Advanced thermal imaging solutions for forest fire prevention, fire detection, and search & rescue operations with superior smoke penetration capabilities.
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
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
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
