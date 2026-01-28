import type { Metadata } from 'next'
import { Container } from '@/components'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thermal Imaging Solutions - Industrial Applications & Use Cases',
  description:
    'Explore IR AREA thermal imaging solutions: Thermography for predictive maintenance, security monitoring, optical gas imaging (OGI), firefighting & rescue, UAV payloads, and personal night vision applications.',
  keywords: ['thermal imaging solutions', 'thermography', 'security monitoring', 'optical gas imaging', 'firefighting thermal', 'UAV thermal camera', 'night vision'],
  openGraph: {
    title: 'Industrial Thermal Imaging Solutions | IR AREA',
    description: 'Complete thermal imaging solutions for thermography, security, gas detection, firefighting, UAVs and personal vision.',
  },
  alternates: {
    canonical: 'https://irarea.com/industrial-solutions',
  },
}

const solutions = [
  {
    id: 'thermography',
    title: 'Thermography',
    href: '/industrial-solutions/thermography',
    description: 'Advanced thermal imaging for power maintenance, machine vision, building HVAC, and predictive maintenance.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: 'security',
    title: 'Security Monitoring',
    href: '/industrial-solutions/security-monitoring',
    description: 'Safe city surveillance, infrastructure monitoring, border security, and maritime cruising solutions.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 'gas',
    title: 'Optical Gas Imaging',
    href: '/industrial-solutions/optical-gas-imaging',
    description: 'Visualize invisible VOCs and detect gas leakages with high-sensitivity thermal imaging.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: 'firefighting',
    title: 'Firefighting & Rescue',
    href: '/industrial-solutions/firefighting-rescue',
    description: 'Forest fire prevention, fire detection, and search & rescue operations with thermal imaging.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
  },
  {
    id: 'uavs',
    title: 'UAVs Payload',
    href: '/industrial-solutions/uavs-payload',
    description: 'Thermal imaging solutions for equipment inspection, enforcement, firefighting, and animal observation.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    id: 'personal',
    title: 'Personal Vision',
    href: '/industrial-solutions/personal-vision',
    description: 'Outdoor leisure, animal observation, and enforcement patrol with portable thermal devices.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
]

const applicationScenarios = [
  {
    category: 'Thermography',
    scenarios: [
      {
        title: 'Power Maintenance',
        description: 'Thermal imaging technique is an advanced technology for diagnosing the hot spots in substations, transmission lines and distribution networks. It helps quickly locate hot spots, determine the severity of problems, and establish repair timeframes.',
        features: ['Support LAN interface with Gigabit Ethernet', 'High precision temperature measurement', 'Professional thermography analysis', 'Optional wide angle lens'],
      },
      {
        title: 'Machine Vision',
        description: 'Infrared thermal imaging enables machines to "see" the invisible and carry out non-contact temperature measurement accurately, fearless of smoke, dust, glare, or back-lighting.',
        features: ['Non-contact accurate measurement', 'Process instruction and sorting', 'Moisture and contamination detection', 'Material thickness monitoring'],
      },
      {
        title: 'Building HVAC',
        description: 'Infrared thermal imaging technology identifies building safety issues from surface temperature distribution, detecting defective insulation, electrical failures, water seepage, and more.',
        features: ['Pseudo-color visual enhancement', 'Non-invasive inspection', 'Extremely compact and lightweight', 'Low cost integration'],
      },
    ],
  },
  {
    category: 'Security Monitoring',
    scenarios: [
      {
        title: 'Safe City',
        description: 'Thermal imaging surveillance systems provide fast, economical solutions to increase security and protect citizens in areas lacking sufficient illumination, enabling continuous day and night monitoring.',
        features: ['Continuous 24/7 operation', 'High temperature alarm', 'Intrusion detection support', 'Flexible network transmission'],
      },
      {
        title: 'Infrastructure Monitoring',
        description: 'Thermal imaging systems cover long ranges up to 20 kilometers for power plants, industrial areas, dams, and airports, serving as early warning detection and intrusion monitoring systems.',
        features: ['Long-range detection up to 20km', 'Early warning capabilities', 'Harsh environment operation', 'Hot spot automatic tracking'],
      },
      {
        title: 'Border Security',
        description: 'Thermal imaging systems with long detection range operate in extreme weather conditions day and night, making them ideal for border zone reconnaissance and detection.',
        features: ['Large array for wide FOV', 'Motorized zoom lens', 'Stable harsh environment work', 'Multi-light fusion systems'],
      },
    ],
  },
  {
    category: 'Firefighting & Rescue',
    scenarios: [
      {
        title: 'Forest Fire Prevention',
        description: 'Forest fire prevention systems with IR integrated carry out real-time, long-distance monitoring in all weather conditions, finding accumulated heat, hidden fire sources, or early fires.',
        features: ['Large array for wide FOV searching', 'Long-focus lens for extended range', 'High temperature alarm', 'Hot spot automatic tracking'],
      },
      {
        title: 'Fire Prevention',
        description: 'Infrared thermal imaging detects abnormal temperature rises before visible fire occurs, providing early warning without interference by smoke, strong light, or darkness.',
        features: ['Non-contact heat detection', 'Penetrate smoke imaging', 'Clear backlight imaging', 'Fire investigation support'],
      },
      {
        title: 'Search & Rescue',
        description: 'Thermal imagers help firefighters see through smoke, clearly showing the real situation of fire scenes for quick and effective decision-making in rescue operations.',
        features: ['Smoke penetration capability', 'Extremely compact design', 'Low power consumption', 'Long battery life'],
      },
    ],
  },
  {
    category: 'UAVs Payload',
    scenarios: [
      {
        title: 'Equipment Inspection',
        description: 'UAVs with infrared thermal imaging quickly detect abnormal temperature areas in petrochemical pipelines, power lines, and photovoltaic systems, improving inspection efficiency.',
        features: ['Compact and lightweight', 'Professional thermography analysis', 'Low power consumption', 'Regional temperature measurement'],
      },
      {
        title: 'Enforcement & Rescue',
        description: 'IR UAVs work throughout day and night, penetrating heavy smoke and haze with visual distance of several hundred meters, quickly identifying humans in complex environments.',
        features: ['Day and night operation', 'Smoke penetration', 'Human identification', 'Disaster response support'],
      },
      {
        title: 'Animal Observation',
        description: 'Infrared thermal imaging enables UAVs to detect animals with significant temperature differences from the environment, improving survey accuracy while reducing interference.',
        features: ['Non-contact heat detection', 'Wide field of view', 'High mobility', 'Wildlife protection support'],
      },
    ],
  },
]

export default function IndustrialSolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-16 md:py-24">
        <Container>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Industrial Solutions</h1>
            <p className="text-lg text-neutral-300">
              Comprehensive thermal imaging solutions for diverse industrial applications including thermography, security monitoring, gas detection, firefighting, UAVs, and personal vision.
            </p>
          </div>
        </Container>
      </section>

      {/* Solutions Overview - 6 Categories */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Explore Our Solutions
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of thermal imaging solutions designed for specific industry needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution) => (
              <Link
                key={solution.id}
                href={solution.href}
                className="group block bg-neutral-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  {solution.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{solution.description}</p>
                <div className="mt-4 flex items-center text-primary-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Application Scenarios */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Application Scenarios
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Discover how our thermal imaging technology is applied across various industries and use cases.
            </p>
          </div>

          <div className="space-y-16">
            {applicationScenarios.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-xl font-bold text-neutral-900 mb-8 flex items-center">
                  <span className="w-8 h-8 bg-primary-600 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-3">
                    {categoryIndex + 1}
                  </span>
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.scenarios.map((scenario, scenarioIndex) => (
                    <div
                      key={scenarioIndex}
                      className="bg-white rounded-lg p-6 shadow-card hover:shadow-lg transition-shadow"
                    >
                      <h4 className="text-lg font-semibold text-neutral-900 mb-3">
                        {scenario.title}
                      </h4>
                      <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                        {scenario.description}
                      </p>
                      <ul className="space-y-2">
                        {scenario.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                            <svg className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
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
              Need a Custom Solution?
            </h2>
            <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
              Our team of experts can help you find the perfect thermal imaging solution for your specific application requirements.
            </p>
            <Link
              href="https://wa.me/8615080329022"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Contact Us
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
