export function OrganizationJsonLd() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'IR AREA',
    legalName: 'ShenZhen ChengJing Technology Co., Ltd',
    url: 'https://irarea.com',
    logo: 'https://irarea.com/images/logo-irarea.svg',
    description: 'Professional infrared thermal imaging solutions provider. Manufacturing uncooled and cooled thermal detectors, modules, and cameras.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '6th Floor, WanLian Building, Baoan Street',
      addressLocality: 'Shenzhen',
      addressRegion: 'Guangdong',
      postalCode: '518000',
      addressCountry: 'CN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+86-13385207064',
      contactType: 'sales',
      email: 'hi@irarea.com',
      availableLanguage: ['English', 'Chinese'],
    },
    sameAs: [
      'https://wa.me/8613385207064',
    ],
    foundingLocation: {
      '@type': 'Place',
      name: 'Shenzhen, China',
    },
    areaServed: 'Worldwide',
    knowsAbout: [
      'Infrared Detectors',
      'Thermal Imaging',
      'Uncooled Detectors',
      'Cooled Detectors',
      'Thermal Modules',
      'Thermal Cameras',
      'Thermography',
      'Night Vision',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  )
}

export function WebSiteJsonLd() {
  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'IR AREA',
    url: 'https://irarea.com',
    description: 'Professional infrared thermal imaging solutions - detectors, modules, and cameras.',
    publisher: {
      '@type': 'Organization',
      name: 'IR AREA',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://irarea.com/products?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
    />
  )
}

interface ProductJsonLdProps {
  name: string
  description: string
  image: string
  category: string
  url: string
}

export function ProductJsonLd({ name, description, image, category, url }: ProductJsonLdProps) {
  const productData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: name,
    description: description,
    image: image.startsWith('http') ? image : `https://irarea.com${image}`,
    brand: {
      '@type': 'Brand',
      name: 'IR AREA',
    },
    category: category,
    url: url,
    manufacturer: {
      '@type': 'Organization',
      name: 'ShenZhen ChengJing Technology Co., Ltd',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      seller: {
        '@type': 'Organization',
        name: 'IR AREA',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }}
    />
  )
}

interface BreadcrumbJsonLdProps {
  items: Array<{ name: string; url: string }>
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  )
}
