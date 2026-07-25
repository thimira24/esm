import { getPartners, getSiteSettings } from '@/sanity/queries'

export const revalidate = 60

type Logo = { name?: string; logo?: string }

export default async function TrustBar() {
  const settings = await getSiteSettings().catch(() => null)
  const label: string = settings?.heroMarquee?.label || 'Awarded & accredited by'

  let logos: Logo[] = (settings?.heroMarquee?.logos ?? []).filter((l: Logo) => l.logo)
  // Fall back to the University Partners if the dedicated marquee is empty.
  if (logos.length === 0) {
    const partners = await getPartners().catch(() => [])
    logos = partners
      .filter((p: { type: string; logoPath?: string }) => p.type === 'university' && p.logoPath)
      .map((p: { name?: string; logoPath?: string }) => ({ name: p.name, logo: p.logoPath }))
  }
  if (logos.length === 0) return null

  const doubled = [...logos, ...logos]

  return (
    <section style={{ borderBottom: '1px solid #E6E9F0', overflow: 'hidden' }}>
      <div
        style={{
          width: 'min(1180px, 92%)',
          margin: '0 auto',
          padding: '20px 0',
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(16px, 2.5vw, 28px)',
        }}
      >
        <span
          style={{
            flexShrink: 0,
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontWeight: 600,
            fontSize: 12.5,
            letterSpacing: '1.5px',
            color: '#8A93A6',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </span>

        <div className="marquee-mask" style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
          <div className="animate-marquee" style={{ display: 'flex', alignItems: 'center', width: 'max-content', gap: 0 }}>
            {doubled.map((u, i) => (
              <div
                key={i}
                aria-hidden={i >= logos.length}
                style={{
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 'clamp(32px, 4.5vw, 60px)',
                  height: 48,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={u.logo}
                  alt={u.name ?? ''}
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'center',
                    maxHeight: 44,
                    maxWidth: 140,
                    width: 'auto',
                    filter: 'grayscale(1)',
                    opacity: 0.65,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
