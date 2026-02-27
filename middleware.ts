import createMiddleware from 'next-intl/middleware'
import { routing } from './lib/i18n/navigation'

export default createMiddleware(routing)

export const config = {
  // Match all pathnames except for
  // - api routes
  // - _next (Next.js internals)
  // - static files (images, etc.)
  matcher: ['/', '/(de|it|es|en|uk)/:path*'],
}
