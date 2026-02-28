export const locales = ['en', 'de', 'it', 'es', 'uk', 'fr', 'pt', 'nl', 'pl'] as const
export const defaultLocale = 'en' as const

export type Locale = (typeof locales)[number]

export const localeNames: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  it: 'Italiano',
  es: 'Español',
  uk: 'Українська',
  fr: 'Français',
  pt: 'Português',
  nl: 'Nederlands',
  pl: 'Polski',
}

export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  de: '🇩🇪',
  it: '🇮🇹',
  es: '🇪🇸',
  uk: '🇺🇦',
  fr: '🇫🇷',
  pt: '🇵🇹',
  nl: '🇳🇱',
  pl: '🇵🇱',
}
