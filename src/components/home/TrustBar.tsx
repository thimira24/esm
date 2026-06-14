import Image from 'next/image'
import { universities } from '@/data/site'

export default function TrustBar() {
  const doubled = [...universities, ...universities]

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
          Awarded &amp; accredited by
        </span>

        <div className="marquee-mask" style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
          <div className="animate-marquee" style={{ display: 'flex', alignItems: 'center', width: 'max-content', gap: 0 }}>
            {doubled.map((u, i) => (
              <div
                key={i}
                aria-hidden={i >= universities.length}
                style={{
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 'clamp(32px, 4.5vw, 60px)',
                  height: 48,
                }}
              >
                <Image
                  src={u.logo}
                  alt={u.name}
                  width={140}
                  height={48}
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'center',
                    maxHeight: 44,
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
