import Link from 'next/link'
import { getFeaturedProgrammes } from '@/sanity/queries'
import ProgrammeCard from '@/components/programmes/ProgrammeCard'
import SectionHeader from '@/components/shared/SectionHeader'

export default async function FeaturedProgrammes() {
  const featured = await getFeaturedProgrammes()

  return (
    <section style={{ width: 'min(1180px, 92%)', margin: '0 auto', padding: 'clamp(64px, 8vw, 108px) 0' }}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: 18,
        }}
      >
        <SectionHeader eyebrow="Programmes" title="Find your next qualification" />
        <Link
          href="/programmes"
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontWeight: 700,
            fontSize: 15,
            color: '#1B2A4A',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            textDecoration: 'none',
          }}
        >
          View all programmes <span style={{ color: '#F5A623' }}>→</span>
        </Link>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
          marginTop: 42,
        }}
      >
        {featured.map((p) => (
          <ProgrammeCard key={p.id} programme={p} />
        ))}
      </div>
    </section>
  )
}
