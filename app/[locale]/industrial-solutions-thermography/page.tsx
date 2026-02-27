import type { Metadata } from 'next'
import { Container } from '@/components'

export const metadata: Metadata = {
  title: 'Industrial Solutions - Thermography',
  description:
    'Advanced thermography solutions from ChengJing for industrial monitoring, diagnostics, and temperature measurement applications.',
}

export default function ThermographyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-16 md:py-24">
        <Container>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Thermography</h1>
            <p className="text-lg text-neutral-300">
              Advanced thermal imaging solutions for industrial monitoring and diagnostics.
            </p>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
              Radiometric Thermal Imaging
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Thermography is the science of using infrared imaging for detecting and measuring
              thermal energy radiated from an object. It enables non-contact temperature measurement
              and thermal pattern visualization for predictive maintenance, quality control, and
              process monitoring.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-neutral-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  Industrial Applications
                </h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>• Electrical equipment inspection</li>
                  <li>• Mechanical system monitoring</li>
                  <li>• Building diagnostics</li>
                  <li>• Process temperature control</li>
                </ul>
              </div>
              <div className="bg-neutral-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">Key Benefits</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>• Non-contact measurement</li>
                  <li>• Real-time monitoring</li>
                  <li>• Early fault detection</li>
                  <li>• Cost-effective maintenance</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
