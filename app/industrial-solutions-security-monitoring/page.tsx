import type { Metadata } from 'next'
import { Container } from '@/components'

export const metadata: Metadata = {
  title: 'Industrial Solutions - Security Monitoring',
  description:
    'ChengJing thermal imaging solutions for security and surveillance applications, featuring advanced detection and monitoring capabilities.',
}

export default function SecurityMonitoringPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-16 md:py-24">
        <Container>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Security Monitoring</h1>
            <p className="text-lg text-neutral-300">
              Comprehensive thermal imaging solutions for security and surveillance applications.
            </p>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
              Advanced Security Solutions
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Thermal imaging provides reliable 24/7 surveillance capabilities regardless of
              lighting conditions. Our security monitoring solutions detect intruders, monitor
              perimeters, and provide early warning in complete darkness, through fog, smoke, and
              adverse weather conditions.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-neutral-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">Applications</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>• Perimeter security</li>
                  <li>• Border surveillance</li>
                  <li>• Critical infrastructure protection</li>
                  <li>• Maritime monitoring</li>
                </ul>
              </div>
              <div className="bg-neutral-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">Features</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>• 24/7 operation capability</li>
                  <li>• Long-range detection</li>
                  <li>• Intrusion alarm support</li>
                  <li>• Multi-sensor fusion</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
