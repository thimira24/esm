import { getPartners } from '@/sanity/queries'
import HeaderClient from './HeaderClient'

export const revalidate = 60

export default async function Header() {
  const partners = await getPartners().catch(() => [])
  const universities = (partners as { name: string; type: string; logoPath: string }[]).filter(
    (p) => p.type === 'university'
  )
  return <HeaderClient universities={universities} />
}
