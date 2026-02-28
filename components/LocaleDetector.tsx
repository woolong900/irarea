'use client'

import { useEffect } from 'react'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/lib/i18n'
import { locales, countryToLocale, type Locale } from '@/lib/i18n/config'

const browserLangToLocale: Record<string, Locale> = {
  en: 'en', 'en-US': 'en', 'en-GB': 'en', 'en-AU': 'en',
  de: 'de', 'de-DE': 'de', 'de-AT': 'de', 'de-CH': 'de',
  it: 'it', 'it-IT': 'it',
  es: 'es', 'es-ES': 'es', 'es-MX': 'es', 'es-AR': 'es',
  uk: 'uk', 'uk-UA': 'uk',
  fr: 'fr', 'fr-FR': 'fr', 'fr-CA': 'fr', 'fr-BE': 'fr',
  pt: 'pt', 'pt-PT': 'pt', 'pt-BR': 'pt',
  nl: 'nl', 'nl-NL': 'nl', 'nl-BE': 'nl',
  pl: 'pl', 'pl-PL': 'pl',
  ru: 'ru', 'ru-RU': 'ru',
  tr: 'tr', 'tr-TR': 'tr',
  ro: 'ro', 'ro-RO': 'ro',
  el: 'el', 'el-GR': 'el',
  cs: 'cs', 'cs-CZ': 'cs',
  hu: 'hu', 'hu-HU': 'hu',
  sv: 'sv', 'sv-SE': 'sv',
  bg: 'bg', 'bg-BG': 'bg',
  da: 'da', 'da-DK': 'da',
  fi: 'fi', 'fi-FI': 'fi',
  no: 'no', 'no-NO': 'no', nb: 'no', 'nb-NO': 'no', nn: 'no', 'nn-NO': 'no',
  sk: 'sk', 'sk-SK': 'sk',
  hr: 'hr', 'hr-HR': 'hr',
  sr: 'sr', 'sr-RS': 'sr',
  lt: 'lt', 'lt-LT': 'lt',
  sl: 'sl', 'sl-SI': 'sl',
  lv: 'lv', 'lv-LV': 'lv',
  et: 'et', 'et-EE': 'et',
}

export default function LocaleDetector() {
  const currentLocale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const detectAndRedirect = async () => {
      // Skip if user has manually selected a language
      try {
        const savedLocale = localStorage.getItem('preferred-locale')
        if (savedLocale && locales.includes(savedLocale as Locale)) {
          if (savedLocale !== currentLocale) {
            router.replace(pathname, { locale: savedLocale as Locale })
          }
          return
        }
      } catch {}

      // Skip if already detected in this session
      try {
        if (sessionStorage.getItem('locale-detected')) return
        sessionStorage.setItem('locale-detected', 'true')
      } catch {}

      let detectedLocale: Locale | null = null

      // Step 1: Check browser language
      if (typeof navigator !== 'undefined' && navigator.language) {
        const browserLang = navigator.language
        detectedLocale = browserLangToLocale[browserLang] || browserLangToLocale[browserLang.split('-')[0]] || null
      }

      // Step 2: If browser language not matched, try IP-based detection
      if (!detectedLocale) {
        try {
          const response = await fetch('https://ipapi.co/json/', { 
            signal: AbortSignal.timeout(3000)
          })
          if (response.ok) {
            const data = await response.json()
            const countryCode = data.country_code
            if (countryCode && countryToLocale[countryCode]) {
              detectedLocale = countryToLocale[countryCode]
            }
          }
        } catch {
          // IP detection failed, continue with default
        }
      }

      // Redirect if detected locale differs from current
      if (detectedLocale && detectedLocale !== currentLocale) {
        router.replace(pathname, { locale: detectedLocale })
      }
    }

    detectAndRedirect()
  }, [currentLocale, pathname, router])

  return null
}
