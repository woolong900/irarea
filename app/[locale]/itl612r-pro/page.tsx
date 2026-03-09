import { redirect } from 'next/navigation'

interface PageProps {
  params: Promise<{ locale: string }>
}

export default async function Itl612RproPage({ params }: PageProps) {
  const { locale } = await params
  redirect(`/${locale}/min612r-pro`)
}
