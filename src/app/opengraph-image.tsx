import { ImageResponse } from 'next/og'

export const alt = 'ESM Business School — Accredited British Qualifications'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Branded social-share card. Rendered on demand by next/og — no static asset needed.
export default function OpengraphImage() {
  const navy = '#1B2A4A'
  const gold = '#D4891A'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: `linear-gradient(135deg, ${navy} 0%, #24365B 100%)`,
          color: '#fff',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 92,
              height: 92,
              borderRadius: 18,
              background: gold,
              color: navy,
              fontSize: 46,
              fontWeight: 800,
              letterSpacing: -1,
            }}
          >
            ESM
          </div>
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: 0.5 }}>
            Business School
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: gold,
              marginBottom: 20,
            }}
          >
            British Education · Based in the UAE
          </div>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            Accredited British
          </div>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            qualifications for
          </div>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            ambitious professionals.
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 26, color: '#B7C0D6' }}>esmbusinessschool.com</div>
          <div style={{ display: 'flex', gap: 28, fontSize: 22, color: '#B7C0D6' }}>
            <span>Business</span>
            <span style={{ color: gold }}>·</span>
            <span>Technology</span>
            <span style={{ color: gold }}>·</span>
            <span>Health &amp; Social Care</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
