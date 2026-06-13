import Image from 'next/image'
import { testimonials } from '@/data/site'

export default function Testimonials() {
  return (
    <section style={{ background: '#F2F4F7' }}>
      <div style={{ width: 'min(1180px, 92%)', margin: '0 auto', padding: 'clamp(64px, 8vw, 108px) 0' }}>
        <div style={{ textAlign: 'center', maxWidth: '40em', margin: '0 auto' }}>
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
            Student success
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
            Careers, changed
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: 24,
            marginTop: 46,
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                background: '#fff',
                borderRadius: 18,
                padding: '32px 30px',
                boxShadow: '0 1px 2px rgba(15,29,51,0.05)',
              }}
            >
              <div
                style={{
                  fontSize: 38,
                  lineHeight: 0.6,
                  color: '#F5A623',
                  fontFamily: 'var(--font-montserrat), sans-serif',
                  fontWeight: 800,
                }}
              >
                &ldquo;
              </div>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.62, color: '#33405C', margin: '14px 0 0' }}>
                {t.quote}
              </p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 13,
                  marginTop: 24,
                  paddingTop: 20,
                  borderTop: '1px solid #F2F4F7',
                }}
              >
                <Image
                  src={t.img}
                  alt={t.name}
                  width={46}
                  height={46}
                  style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                />
                <span>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-montserrat), sans-serif',
                      fontWeight: 700,
                      fontSize: 15,
                      color: '#1B2A4A',
                    }}
                  >
                    {t.name}
                  </span>
                  <span style={{ display: 'block', fontSize: 13, color: '#6B7689' }}>{t.role}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
