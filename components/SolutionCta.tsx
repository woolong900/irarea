import { getTranslations } from 'next-intl/server'
import Container from './Container'
import WhatsAppCta from './WhatsAppCta'

export default async function SolutionCta() {
  const t = await getTranslations('landingPage')

  return (
    <section className="py-16 md:py-20 bg-neutral-50">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {t('ctaTitle')}
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            {t('ctaDesc')}
          </p>
          <WhatsAppCta label={t('chatWhatsApp')} />
        </div>
      </Container>
    </section>
  )
}
