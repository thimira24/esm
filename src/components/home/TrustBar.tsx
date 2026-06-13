import { partners } from '@/data/site'

export default function TrustBar() {
  return (
    <section style={{ borderBottom: '1px solid #E6E9F0', overflow: 'hidden' }}>
      <div
        style={{
          width: 'min(1180px, 92%)',
          margin: '0 auto',
          padding: '24px 0',
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
          }}
        >
          Awarded &amp; accredited by
        </span>
        <div
          className="marquee-mask"
          style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}
        >
          <div
            className="animate-marquee"
            style={{ display: 'flex', width: 'max-content' }}
          >
            {/* Doubled list for seamless loop */}
            {[...partners, ...partners].map((p, i) => (
              <div
                key={i}
                aria-hidden={i >= partners.length}
                style={{
                  flexShrink: 0,
                  marginRight: 'clamp(28px, 4vw, 56px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  opacity: 0.85,
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 38,
                    height: 38,
                    borderRadius: 9,
                    background: '#F2F4F7',
                    fontFamily: 'var(--font-montserrat), sans-serif',
                    fontWeight: 800,
                    fontSize: 13,
                    color: '#1B2A4A',
                  }}
                >
                  {p.m}
                </span>
                <span
                  style={{
                    whiteSpace: 'nowrap',
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontWeight: 600,
                    fontSize: 13,
                    color: '#6B7689',
                  }}
                >
                  {p.l}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
