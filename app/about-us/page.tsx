import type { Metadata } from 'next'
import Image from 'next/image'
import { Container, ContactForm } from '@/components'

export const metadata: Metadata = {
  title: 'About Us - Leading Infrared Detector Manufacturer in China',
  description:
    'IR AREA (ChengJing Technology) is a leading infrared detector manufacturer in Shenzhen, China. 30,000㎡ facility, 1 million+ annual production capacity. Specializing in uncooled & cooled thermal imaging detectors with global reach.',
  keywords: ['infrared detector manufacturer', 'thermal imaging company', 'Shenzhen thermal detector', 'China IR detector', 'thermal sensor manufacturer'],
  openGraph: {
    title: 'About IR AREA - Leading Infrared Detector Manufacturer',
    description: 'Discover IR AREA - A leading infrared detector manufacturer with 30,000㎡ facility and 1 million+ annual production capacity.',
    images: ['/images/company-introduction1.webp'],
  },
  alternates: {
    canonical: 'https://irarea.com/about-us',
  },
}

export default function AboutUsPage() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section 
        className="relative text-white py-24 md:py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/images/hero-bg.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
          </div>
        </Container>
      </section>

      {/* Company Description */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Company Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg relative aspect-[4/3]">
              <Image
                src="/images/company-introduction1.webp"
                alt="ChengJing Technology Company"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            
            {/* Company Text */}
            <div className="space-y-5">
              <p className="text-base text-neutral-700 leading-relaxed">
                ShenZhen ChengJing Technology Co., Ltd is the world leading infrared detector
                manufacturer and service provider. It is willing to provide customers around the world
                with high-performance uncooled and cooled thermal imaging detectors, and to share its
                professional application experience with customers.
              </p>

              <p className="text-base text-neutral-700 leading-relaxed">
                ShenZhen ChengJing Technology Co., Ltd is located at Shenzhen, Guangdong, China. The
                company covers an area of 30 thousand square meters with 20 thousand square meters of
                dust-free fabrication workshops. It is equipped with full set of advanced fabrication
                equipment to fabricate both uncooled and cooled IR detectors. Currently, the annual
                production capacity of thermal imaging detectors has reached 1 million units.
              </p>

              <p className="text-base text-neutral-700 leading-relaxed">
                ChengJing IR detectors have been widely used in thermography, security & surveillance,
                personal vision, automotive and consumer infrared products. The volume production of
                wafer-level-packaging infrared detectors has been successfully achieved with very
                competitive cost for high volume consumer market.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                Leading Infrared Detector Manufacturer
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Expert in thermal imaging technology with global reach, offering high-performance
                uncooled and cooled detectors along with professional application insights from our
                advanced facility in Shenzhen.
              </p>
              <p className="text-xl md:text-2xl font-bold text-primary-600">
                150+ Global Reach
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg relative aspect-video">
              <Image
                src="/images/drone-thermal.webp"
                alt="Drone with thermal imaging"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Location Section */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Our Location</h3>
              <p className="text-neutral-600 leading-relaxed mb-8">
                Located in Shenzhen, Guangdong, China, ShenZhen ChengJing Technology Co., Ltd
                operates in a state-of-the-art facility dedicated to infrared detector manufacturing
                and innovation.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">
                    <strong>Address</strong>
                  </h4>
                  <p className="text-neutral-600">
                    WanLian Building, Baoan Street, Baoan District, Shenzhen, Guangdong, China
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">
                    <strong>Hours</strong>
                  </h4>
                  <p className="text-neutral-600">9 AM - 6 PM</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-lg overflow-hidden shadow-lg h-64 lg:h-80">
              <iframe
                src="https://maps.google.com/maps?q=Baoan+Street,Baoan+District,Shenzhen,Guangdong,China&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Contact Info */}
            <div className="flex flex-col">
              <div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
                  Enquire Now
                </h3>
                <p className="text-lg text-neutral-600 mb-8">
                  Please fill out & submit the form to receive an answer from our Sales Team or Application Engineers.
                </p>

                <div className="space-y-5">
                  {/* Phone */}
                  <a href="tel:+86-15080329022" className="flex items-center gap-3 group">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-neutral-700 group-hover:text-primary-600 transition-colors">+86 15080329022</span>
                  </a>

                  {/* Email */}
                  <a href="mailto:hi@irarea.com" className="flex items-center gap-3 group">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-neutral-700 group-hover:text-primary-600 transition-colors">hi@irarea.com</span>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-neutral-700">Shenzhen, China</span>
                  </div>
                </div>
              </div>

              {/* Bottom info */}
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <p className="text-sm text-neutral-500 mb-4">Business Hours</p>
                <p className="text-neutral-700">Monday - Friday: 9:00 AM - 6:00 PM (CST)</p>
                <p className="text-neutral-700">Saturday - Sunday: Closed</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
