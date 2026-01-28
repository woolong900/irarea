import type { Metadata } from 'next'
import { Container, ImageCarousel } from '@/components'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Personal Vision Solutions',
  description:
    'Thermal imaging solutions for outdoor leisure, animal observation, and enforcement patrol with portable and wearable devices.',
}

const applications = [
  {
    title: 'Outdoor Leisure',
    description:
      'Outdoor sports have been praised as a healthy lifestyle, including mountain climbing, camping, adventure, rock climbing, and caving. In the dark night or dense jungle, thermal imagers help travelers quickly observe surroundings to detect wild animals and ensure camp safety. They also help see road conditions clearly to avoid getting lost regardless of weather conditions.',
    solution: 'Goggles, Industrial Mobile Phone, Smartphone Plug-in Thermal Imager',
    features: [
      'Extremely compact and lightweight design',
      'Low power consumption for long battery life',
      'Multi video format output',
      'Support LCOS/LCD/OLED display devices',
      'Quick environment observation',
      'All-weather navigation assistance',
    ],
    images: ['/images/outdoor-exercise-1.webp', '/images/outdoor-recreation-2.webp'],
  },
  {
    title: 'Animal Observation',
    description:
      'Infrared thermal imaging can see animal thermal images through temperature difference without any light at night, which is suitable for wildlife observation and protection in mountain forest, grassland, desert, water area and other terrain. Non-invasive observation protects wildlife while enabling detailed study.',
    solution: 'Handheld, Goggles, Infrared Helmet, Infrared Glasses',
    features: [
      '3S fast booting for quick deployment',
      'Shutterless-like working mode for fluent imaging',
      'Various reticles for better observation',
      'Shock and vibration resistant',
      'Low power consumption for long battery time',
      'Support storage and WiFi transmission',
    ],
    images: ['/images/animal-tracking-1.webp', '/images/animal-tracking-2.webp'],
  },
  {
    title: 'Enforcement Patrol',
    description:
      'In poor vision at night or in mountains and forests, thermal imaging assists in investigation, patrol, search, monitoring and tracking of personnel all day long in darkness or bad weather. The equipment absorbs infrared thermal radiation for imaging without emitting light, enabling covert reconnaissance without exposing law enforcement personnel.',
    solution: 'Handheld, Goggles, Infrared Helmet, Infrared Glasses',
    features: [
      '3S fast booting for rapid response',
      'Shutterless-like working mode for smooth imaging',
      'Various reticles for target identification',
      'Shock and vibration resistant for field use',
      'Covert operation without light emission',
      'Support storage and WiFi transmission',
    ],
    images: ['/images/enforcement-patrol-1.webp', '/images/enforcement-patrol-2.webp'],
  },
]

export default function PersonalVisionPage() {
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
              <span className="text-white">Personal Vision</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Personal Vision</h1>
            <p className="text-lg text-neutral-300">
              Compact and portable thermal imaging solutions for outdoor enthusiasts, wildlife observers, and law enforcement professionals.
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
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
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
