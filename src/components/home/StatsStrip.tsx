import { getSiteSettings } from '@/sanity/queries'
import { stats as fallbackStats } from '@/data/site'

export const revalidate = 60

export default async function StatsStrip() {
  const settings = await getSiteSettings()
  const stats = settings?.stats?.length ? settings.stats : fallbackStats.map(s => ({ number: s.n, label: s.l }))

  return (
    <section
      style={{
        background: 'linear-gradient(140deg, #1B2A4A, #0F1D33)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="dot-pattern" style={{ position: 'absolute', inset: 0 }} />
      <div
        style={{
          position: 'relative',
          width: 'min(1180px, 92%)',
          margin: '0 auto',
          padding: 'clamp(54px, 7vw, 84px) 0',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 34,
          textAlign: 'center',
        }}
      >
        {stats.map((s: { number?: string; n?: string; label?: string; l?: string }) => (
          <div key={s.number ?? s.n}>
            <div
              style={{
                fontFamily: 'var(--font-montserrat), sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)',
                color: '#F5A623',
                lineHeight: 1,
              }}
            >
              {s.number ?? s.n}
            </div>
            <div style={{ fontSize: 14, color: '#B8C1D4', marginTop: 10, letterSpacing: '0.3px' }}>
              {s.label ?? s.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
