import type { Metadata } from 'next'
import { Container, ImageCarousel } from '@/components'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thermography Solutions',
  description:
    'Advanced thermal imaging for power maintenance, machine vision, building HVAC, metallurgical petrochemical, predictive maintenance, and medical diagnosis.',
}

const applications = [
  {
    title: 'Power Maintenance',
    description:
      'Thermal imaging technique is an advanced technology for diagnosing hot spots in substations, transmission lines and distribution networks. It plays a key role in finding, preventing and handling accidents in the power industry. Infrared technology gives us the ability to "see" and measure temperatures on defective components and detect normal wear, chemical contamination, corrosion, fatigue and faulty assembly in electrical systems.',
    solution: 'On-line Monitoring Systems, Robots, Portable Thermal Imagers, UAV Payloads',
    features: [
      'Support LAN interface: Gigabit Ethernet adaptive, hundred meters transmission',
      'High precision temperature measurement, adjustable temperature range',
      'Professional thermography analysis: regional analysis, multi-spots temperature measurement',
      'Isotherm, high temperature alarm, hot spot automatic tracking',
      'Optional wide angle lens',
    ],
    images: ['/images/power-maintenance-1.webp', '/images/power-maintenance-2.webp'],
  },
  {
    title: 'Machine Vision',
    description:
      'Machine vision carries out measurement and makes judgment instead of human eyes. Infrared thermal imaging enables machines to "see" the invisible and carry out non-contact temperature measurement accurately, fearless of smoke, dust, glare, back-lighting etc. It can be applied in process instruction, packing, sorting, moisture detection, contamination monitoring, and abnormal temperature measurement.',
    solution: 'On-line Monitoring Systems, Robots, Nondestructive Testing',
    features: [
      'Support LAN interface: Gigabit Ethernet adaptive, flexible network',
      'High precision temperature measurement, adjustable temperature range',
      'High frame rate at window mode for nondestructive testing',
      'High sensitivity detection',
      'Wide angle lens options',
    ],
    images: ['/images/industrial-vision-1.webp', '/images/industrial-vision-2.webp'],
  },
  {
    title: 'Building HVAC',
    description:
      'If buildings have design defects such as unqualified insulation, hollowing, or moisture, they usually cannot be detected by naked eyes. Infrared thermal imaging technology identifies building safety from surface temperature distribution. It detects defective insulation, electrical failures, water seepage, pipeline issues, and mold.',
    solution: 'Portable Thermal Imager, Smartphone Plug-in Thermal Imager',
    features: [
      'Professional thermography analysis with multi-spots measurement',
      'Pseudo-color visual enhancement for slight temperature differences',
      'Walls and pipes details clearly visible',
      'Extremely tiny and lightweight design',
      'Low cost integration',
    ],
    images: ['/images/building-hvac-1.webp', '/images/building-hvac-2.webp'],
  },
  {
    title: 'Metallurgical Petrochemical',
    description:
      'Thermal imaging technology has broad applications in petrochemical and metallurgy industries, widely used for inspections of steel ladles, blast furnaces, converters, rotary kilns, and key channels. Inspection tools integrated with infrared thermal imaging help with difficult diagnostic challenges and day-to-day predictive maintenance operations.',
    solution: 'On-line Monitoring Systems, Portable Thermal Imager',
    features: [
      'Support LAN interface: Gigabit Ethernet adaptive',
      'High precision temperature measurement up to 2000°C with high temperature filter',
      'Professional thermography analysis: regional analysis, multi-spots measurement',
      'Isotherm, high temperature alarm, hot spot automatic tracking',
    ],
    images: ['/images/metallurgical-petrochemical-1.webp', '/images/building-hvac-2.webp'],
  },
  {
    title: 'Predictive Maintenance',
    description:
      'Infrared thermal imaging technology features real-time, accurate and non-destructive measurement. It enables condition monitoring and defect diagnosis while equipment is still running. It helps quickly locate hot spots, determine problem severity, and establish repair timeframes, greatly avoiding the risk of sudden equipment failure.',
    solution: 'On-line Surveillance, Robots, Portable Thermal Imager',
    features: [
      'Support LAN interface for flexible networking',
      'High precision temperature measurement',
      'Professional thermography analysis',
      'Extremely compact and portable design',
      'Low cost solutions available',
    ],
    images: ['/images/predictive-maintenance-1.webp', '/images/predictive-maintenance-2.webp'],
  },
  {
    title: 'Medical Diagnosis',
    description:
      'Painful diseases often show significant body temperature differences in lesion regions, such as acute/chronic shoulder and neck pain, cervical spondylopathy, lumbar spondylosis, and myofascial pain syndrome. Infrared thermal imaging technology has unique diagnostic value by presenting thermal images indicating temperature distribution.',
    solution: 'On-line Monitoring System',
    features: [
      'Pseudo-color visual enhancement for blood vessels and lesions location',
      'High precision <±0.5°C, surface uniformity <0.3°C',
      'Non-contact real-time temperature measurement',
      '51.8°×40° wide FOV diagnosis',
      'Nondestructive, non-radioactive, non-invasive',
    ],
    images: ['/images/medical-diagnosis-1.webp', '/images/medical-diagnosis-2.webp'],
  },
]

export default function ThermographyPage() {
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
              <span className="text-white">Thermography</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Thermography</h1>
            <p className="text-lg text-neutral-300">
              Advanced thermal imaging solutions for power maintenance, machine vision, building inspection, industrial monitoring, and medical diagnosis applications.
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
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
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
