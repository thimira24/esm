import { values } from '@/data/site'

const ShieldIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#D4891A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" />
  </svg>
)

export default function ValueProps() {
  return (
    <section style={{ width: 'min(1180px, 92%)', margin: '0 auto', padding: 'clamp(64px, 8vw, 108px) 0' }}>
      <div style={{ maxWidth: '42em', margin: '0 auto', textAlign: 'center' }}>
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
          Why ESM
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
            textWrap: 'balance',
          } as React.CSSProperties}
        >
          Recognised qualifications, on your terms
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: 24,
          marginTop: 50,
        }}
      >
        {values.map((v) => (
          <div
            key={v.title}
            style={{
              background: '#fff',
              border: '1px solid #E6E9F0',
              borderRadius: 18,
              padding: '34px 30px',
              boxShadow: '0 1px 2px rgba(15,29,51,0.04)',
            }}
          >
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 56,
                height: 56,
                borderRadius: 14,
                background: 'linear-gradient(135deg, #FFF3DE, #FCE3B5)',
              }}
            >
              <ShieldIcon />
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-montserrat), sans-serif',
                fontWeight: 700,
                fontSize: '1.3rem',
                color: '#1B2A4A',
                margin: '22px 0 0',
              }}
            >
              {v.title}
            </h3>
            <p style={{ fontSize: '1rem', lineHeight: 1.62, color: '#5A647A', margin: '12px 0 0' }}>{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
