import Link from 'next/link'
import Image from 'next/image'
import Container from './Container'
import Nav from './Nav'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-100 shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-md"
          >
            <Image
              src="/images/logo-irarea-simple.svg"
              alt="IR AREA"
              width={160}
              height={40}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </Link>

          {/* Navigation */}
          <Nav />
        </div>
      </Container>
    </header>
  )
}
