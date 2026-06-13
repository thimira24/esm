import Link from 'next/link'
import { featured } from '@/data/programmes'
import ProgrammeCard from '@/components/programmes/ProgrammeCard'

export default function FeaturedProgrammes() {
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
        <div>
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
          <h2
            style={{
              fontFamily: 'var(--font-montserrat), sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.9rem, 3.6vw, 2.7rem)',
              lineHeight: 1.12,
              letterSpacing: '-0.5px',
              color: '#1B2A4A',
              margin: '14px 0 0',
            }}
          >
            Find your next qualification
          </h2>
        </div>
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
