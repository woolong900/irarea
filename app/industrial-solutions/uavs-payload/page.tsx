import type { Metadata } from 'next'
import { Container, ImageCarousel } from '@/components'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'UAVs Payload Solutions',
  description:
    'Thermal imaging solutions for UAV equipment inspection, enforcement & rescue, firefighting applications, and animal observation.',
}

const applications = [
  {
    title: 'Equipment Inspection',
    description:
      'In routine inspection of petrochemical pipelines, power transmission and photovoltaic power generation systems, there may be problems of blind areas and low inspection efficiency in manual operation. UAVs equipped with infrared thermal imaging can quickly detect abnormal high or low temperature areas, analyzing oil leakage in pipelines or overheating risks in power lines and photovoltaic panels.',
    solution: 'UAV-mounted Thermal Imaging Modules',
    features: [
      'Extremely compact and lightweight design',
      'Professional thermography analysis: regional analysis, multi-spots measurement',
      'Isotherm, high temperature alarm, hot spot automatic tracking',
      'Low power consumption for extended flight time',
      'Quick detection of abnormal temperature areas',
      'Improved inspection efficiency with reduced personnel risk',
    ],
    images: ['/images/equipment-inspection-1.webp', '/images/equipment-inspection-2.webp'],
  },
  {
    title: 'Enforcement & Rescue',
    description:
      'UAVs equipped with infrared thermal imaging can work throughout day and night without external light sources. They can penetrate heavy smoke, haze and other adverse conditions with visual distance of several hundred meters. They can quickly identify human bodies in complex environments or camouflage conditions, ideal for disaster response and law enforcement.',
    solution: 'UAV-mounted Thermal Imaging Systems',
    features: [
      'Day and night operation capability',
      'Penetrate smoke and haze conditions',
      'Visual distance of several hundred meters',
      'Quick human identification in complex environments',
      'Professional thermography analysis',
      'Low power consumption for long battery life',
    ],
    images: ['/images/enforcement-rescue-1.webp', '/images/enforcement-rescue-2.webp'],
  },
  {
    title: 'Firefighting Application',
    description:
      'UAVs equipped with infrared thermal imaging modules can overlook fires through thick smoke, quickly locating trapped people, fire points and potential risks. They help firefighters formulate accurate fire-fighting plans and can patrol forests and grasslands to find high-temperature or flammable points.',
    solution: 'UAV-mounted Fire Detection Systems',
    features: [
      'See through thick smoke',
      'Quick location of trapped persons',
      'Fire point identification',
      'Risk assessment capability',
      'Forest and grassland patrol',
      'Early detection of high-temperature points',
    ],
    images: ['/images/firefighting-application-1.webp', '/images/firefighting-application-2.webp'],
  },
  {
    title: 'Animal Observation',
    description:
      'Infrared thermal imaging modules enable UAVs to have non-contact detection of heat. As long as there is significant temperature difference between animals and the environment, hidden animals can be found. UAVs have characteristics of large depth, wide field of view and high mobility, improving survey timeliness and accuracy while reducing danger to personnel.',
    solution: 'UAV-mounted Wildlife Monitoring Systems',
    features: [
      'Non-contact heat detection',
      'Detection of animals with temperature difference',
      'Large depth and wide field of view',
      'High mobility for wildlife tracking',
      'Improved population survey accuracy',
      'Reduced interference to wild animals',
    ],
    images: ['/images/animal-investigation-1.webp', '/images/animal-investigation-2.webp'],
  },
]

export default function UAVsPayloadPage() {
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
              <span className="text-white">UAVs Payload</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">UAVs Payload</h1>
            <p className="text-lg text-neutral-300">
              Compact and lightweight thermal imaging solutions designed for drone integration, enabling equipment inspection, rescue operations, firefighting support, and wildlife observation.
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
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
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
