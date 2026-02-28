import createMiddleware from 'next-intl/middleware'
import { routing } from './lib/i18n/navigation'

export default createMiddleware(routing)

export const config = {
  // Match all pathnames except for
  // - api routes
  // - _next (Next.js internals)
  // - static files (images, etc.)
  matcher: ['/', '/(en|de|it|es|uk|fr|pt|nl|pl|ru|tr|ro|el|cs|hu|sv|bg|da|fi|no|sk|hr|sr|lt|sl|lv|et)/:path*'],
}
