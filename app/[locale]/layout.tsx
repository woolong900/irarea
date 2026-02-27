import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Header, Footer, WhatsAppButton, OrganizationJsonLd, WebSiteJsonLd, GoogleAnalytics } from '@/components'
import { locales, type Locale } from '@/lib/i18n/config'
import '@/styles/globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto',
})

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  metadataBase: new URL('https://irarea.com'),
  title: {
    default: 'IR AREA - Professional Infrared Thermal Imaging Solutions | Thermal Detectors & Modules',
    template: '%s | IR AREA',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  description:
    'IR AREA provides professional infrared thermal imaging solutions including uncooled & cooled detectors, thermal modules, and complete thermal cameras. Industry-leading NETD performance, wide temperature measurement range, and global technical support.',
  keywords: [
    'infrared detector',
    'thermal imaging',
    'thermal camera',
    'uncooled detector',
    'cooled detector',
    'thermal module',
    'IR detector',
    'LWIR detector',
    'MWIR detector',
    'VOx detector',
    'thermal sensor',
    'infrared sensor',
    'thermography',
    'night vision',
    'IR AREA',
  ],
  authors: [{ name: 'ShenZhen ChengJing Technology Co., Ltd' }],
  creator: 'IR AREA',
  publisher: 'IR AREA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://irarea.com',
    siteName: 'IR AREA',
    title: 'IR AREA - Professional Infrared Thermal Imaging Solutions',
    description:
      'Industry-leading infrared thermal detectors and modules. Uncooled VOx detectors, cooled MWIR/LWIR modules, and complete thermal imaging solutions for thermography, security, and industrial applications.',
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'IR AREA - Infrared Thermal Imaging Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IR AREA - Professional Infrared Thermal Imaging Solutions',
    description:
      'Industry-leading infrared thermal detectors and modules for thermography, security, and industrial applications.',
    images: ['/images/og-image.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://irarea.com',
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params

  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  // Get messages for the locale
  const messages = await getMessages()

  return (
    <html lang={locale} className={roboto.variable}>
      <head>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className={`${roboto.className} min-h-screen flex flex-col`}>
        <GoogleAnalytics />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
