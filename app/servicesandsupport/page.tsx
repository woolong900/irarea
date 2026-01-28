import type { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components'

export const metadata: Metadata = {
  title: 'Technical Support & Services - Thermal Imaging Solutions',
  description:
    'IR AREA provides comprehensive technical support for thermal imaging solutions: SDK development, optical design, algorithm optimization, and complete thermal system integration. Expert guidance from detector selection to final product.',
  keywords: ['thermal imaging support', 'IR detector SDK', 'thermal camera development', 'infrared technical support', 'thermal system integration'],
  openGraph: {
    title: 'Technical Support & Services | IR AREA',
    description: 'Comprehensive technical support for thermal imaging solutions including SDK, optical design, and system integration.',
  },
  alternates: {
    canonical: 'https://irarea.com/servicesandsupport',
  },
}

const faqs = [
  {
    question: 'Q1: What is infrared thermal imaging?',
    answer:
      "Infrared thermal imaging is a method of using infrared radiation and thermal energy to gather information about objects, in order to formulate images of them, even in low visibility environments. It's based on the fact that all objects emit infrared radiation depending on their temperature.",
  },
  {
    question: 'Q2:What is thermography?',
    answer:
      'Thermography is a non-invasive diagnostic method, based on object surface temperature detection. The infrared (IR) radiation emitted from an object is captured by an infrared camera and converted into thermal images or thermograms showing temperature distribution patterns.',
  },
  {
    question: 'Q3: What is the advantage of infrared thermal imaging?',
    answer: null,
    list: [
      'See through total darkness',
      'Identification under camouflage',
      'Long range detection',
      'Heat distribution detection',
      'Non-contact temperature measurement',
      'Occupation awareness',
    ],
  },
  {
    question: 'Q4: What is infrared detector/thermal imaging sensor?',
    answer:
      'Infrared waves cannot be seen with the human eye. Infrared detector/thermal imaging sensor is an optical-electrical device to react to infrared radiation and convert the detected radiation into measurable electrical signals for subsequent signal processing and image display.',
  },
  {
    question: 'Q5: What is the difference between uncooled and cooled IR detectors?',
    answer:
      'There are currently two types of infrared thermal imaging sensors on the market, cooled and uncooled.Uncooled IR detectors operate at ambient temperature without additional cooling system, featuring lower cost, smaller size, lighter weight and lower power consumption. Cooled IR detectors need to be cooled to cryogenic temperatures (typically 77K) by built-in cryocoolers for higher sensitivity and faster response time.',
  },
  {
    question: 'Q6: What is thermal imaging module?',
    answer:
      'There are currently two types of infrared thermal imaging sensors on the market, cooled and uncooled. Uncooled IR detectors operate at ambient temperature without additional cooling, making them cost-effective, compact, and energy-efficient. Cooled IR detectors require cryogenic cooling for enhanced sensitivity. A thermal imaging module integrates the detector with optics and electronics into a complete imaging solution.',
  },
  {
    question: 'Q7: What is NETD?',
    answer:
      'NETD refers to "Noise Equivalent Temperature Difference". It is a measure of how well a thermal imaging detector is able to distinguish between very small differences in thermal radiation in the image. The lower the NETD value, the better the thermal sensitivity of the detector.',
  },
  {
    question: 'Q8: What is SWaP3?',
    answer:
      'SWaP3 refers to size, weight, power, performance and price. It indicates the technology trend of infrared industry.',
  },
  {
    question: 'Q9: What is DRI?',
    answer:
      'DRI usually refers detection, recognition and identification distance of a thermal imaging system. It is a crucial parameter to judge the performance of a thermal imaging system, especially in security and surveillance applications.',
  },
  {
    question: 'Q10: What is WLP? What\'s the advantage of WLP?',
    answer:
      'WLP refers to wafer level package. Together with metal package, ceramic package, they are the 3 main package formats of uncooled infrared detectors. WLP offers significant advantages including smaller size, lower cost at high volumes, and better integration possibilities for consumer applications.',
  },
]

export default function ServicesAndSupportPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/hero-services.webp)' }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        <Container className="relative">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Services & Support</h1>
            <p className="text-lg md:text-xl text-neutral-200">
              Professional thermal imaging solutions and expert technical support
            </p>
          </div>
        </Container>
      </section>

      {/* Core Services */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left - Text Content */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
                &ldquo;Core&rdquo; Services with Self-independent Infrared Detectors
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-8">
                After years of industrial application experience, ChengJing Technology is capable
                to provide professional, efficient and convenient solutions for customers in different
                industries.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-neutral-700">
                    Both uncooled and cooled IR detectors in different formats and pixel size
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <p className="text-neutral-700">
                    Three production lines with annual production capability up to millions of detectors.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p className="text-neutral-700">World-leading technology in infrared industry</p>
                </div>
              </div>
            </div>

            {/* Right - Video */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <video
                src="/videos/atn_thor6_mini.webm"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* One-Stop Solution */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Not Only IR Detector, but ONE-STOP Solution
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              The Infrared Platform developed by ChengJing covers every component in a complete
              infrared camera, including IR lens, IR detectors, hardware & processing electronics,
              software & solutions. Each part is designed as standard module for flexible integration
              combination. ChengJing is open to share its application experience accumulated in the past
              10 years to support our partners to design their own complete infrared products easily,
              economically and efficiently.
            </p>
          </div>

          {/* Service Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* First image - full size */}
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/services2.webp"
                alt="Service 1"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>
            {/* Second image - smaller and centered */}
            <div className="flex justify-center">
              <div className="relative w-1/4 aspect-square">
                <Image
                  src="/images/services3.webp"
                  alt="Service 2"
                  fill
                  sizes="15vw"
                  className="object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
            {/* Third image - smaller and centered */}
            <div className="flex justify-center">
              <div className="relative w-2/3 aspect-[16/9]">
                <Image
                  src="/images/services4.webp"
                  alt="Service 3"
                  fill
                  sizes="40vw"
                  className="object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 text-center">
              Frequently asked questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-neutral-50 rounded-lg p-6 border border-neutral-200"
                >
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                    <strong>{faq.question}</strong>
                  </h3>
                  {faq.answer && (
                    <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
                  )}
                  {faq.list && (
                    <ul className="list-disc list-inside text-neutral-600 space-y-1 mt-2">
                      {faq.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
