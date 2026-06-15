import { Suspense } from 'react'
import { getAllProgrammes, getPartners } from '@/sanity/queries'
import ProgrammesGrid from '@/components/programmes/ProgrammesGrid'
import EnquiryBlock from '@/components/shared/EnquiryBlock'

export const revalidate = 60 // re-fetch from Sanity at most once per minute

export default async function ProgrammesPage() {
  const [programmes, partners] = await Promise.all([getAllProgrammes(), getPartners()])
  const universities = (partners as { name: string; type: string }[])
    .filter((p) => p.type === 'university')
    .map((p) => p.name)

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#F2F4F7', borderBottom: '1px solid #E6E9F0' }}>
        <div style={{ width: 'min(1180px, 92%)', margin: '0 auto', padding: 'clamp(48px, 6vw, 80px) 0' }}>
          <span
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: '1.5px',
              color: '#D4891A',
              textTransform: 'uppercase',
            }}
          >
            Programmes
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-montserrat), sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2.1rem, 4.5vw, 3.4rem)',
              lineHeight: 1.08,
              letterSpacing: '-1px',
              color: '#1B2A4A',
              margin: '14px 0 0',
            }}
          >
            Accredited diplomas across business, tech &amp; care
          </h1>
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.4vw, 1.18rem)',
              lineHeight: 1.6,
              color: '#48536B',
              margin: '16px 0 0',
              maxWidth: '40em',
            }}
          >
            Every programme is awarded by a recognised UK body and delivered flexibly online or blended. Filter by field to find your route.
          </p>
        </div>
      </section>

      <Suspense fallback={<div style={{ padding: '60px 0', textAlign: 'center', color: '#9AA6BE' }}>Loading…</div>}>
        <ProgrammesGrid programmes={programmes} universities={universities} />
      </Suspense>

      <EnquiryBlock />
    </>
  )
}
