import Link from 'next/link'
import { contact } from '@/data/site'
import { getProgrammeCategories } from '@/sanity/queries'

const CATEGORY_LABELS: Record<string, string> = {
  mba: 'MBA Programmes',
  undergraduate: 'Undergraduate',
  postgraduate: 'Postgraduate',
}

export default async function Footer() {
  const categories = await getProgrammeCategories()
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#0F1D33', color: '#C3CBDB' }}>
      <div
        style={{
          width: 'min(1180px, 92%)',
          margin: '0 auto',
          padding: 'clamp(34px, 4.5vw, 52px) 0 24px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '36px 48px',
        }}
      >
        {/* Brand column */}
        <div style={{ flex: '1 1 240px', maxWidth: 300 }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none' }}>
            <span style={{ textAlign: 'left' }}>
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-montserrat), sans-serif',
                  fontWeight: 800,
                  fontSize: 18,
                  color: '#fff',
                }}
              >
                ESM
              </span>
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontWeight: 500,
                  fontSize: 9.5,
                  color: '#7E8AA3',
                  letterSpacing: '2.4px',
                  marginTop: 3,
                }}
              >
                BUSINESS SCHOOL
              </span>
            </span>
          </Link>
          <p style={{ fontSize: 13.5, lineHeight: 1.55, color: '#9AA6BE', margin: '14px 0 0' }}>
            Accredited British qualifications for ambitious professionals — delivered flexibly from the UAE to the world.
          </p>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '36px clamp(40px, 5vw, 72px)' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 700, fontSize: 12, letterSpacing: '0.8px', textTransform: 'uppercase', color: '#7E8AA3', marginBottom: 13 }}>
              Programmes
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9, fontSize: 14 }}>
              {categories.map(({ cat }) => {
                const label = CATEGORY_LABELS[cat] ?? cat.charAt(0).toUpperCase() + cat.slice(1)
                return (
                  <Link key={cat} href={`/programmes?cat=${encodeURIComponent(cat)}`} style={{ whiteSpace: 'nowrap', color: '#C3CBDB', textDecoration: 'none' }}>
                    {label}
                  </Link>
                )
              })}
            </div>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 700, fontSize: 12, letterSpacing: '0.8px', textTransform: 'uppercase', color: '#7E8AA3', marginBottom: 13 }}>
              Company
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9, fontSize: 14 }}>
              <Link href="/about" style={{ whiteSpace: 'nowrap', color: '#C3CBDB', textDecoration: 'none' }}>About Us</Link>
              <Link href="/partners" style={{ whiteSpace: 'nowrap', color: '#C3CBDB', textDecoration: 'none' }}>Partnerships</Link>
              <Link href="/contact" style={{ whiteSpace: 'nowrap', color: '#C3CBDB', textDecoration: 'none' }}>Contact</Link>
            </div>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 700, fontSize: 12, letterSpacing: '0.8px', textTransform: 'uppercase', color: '#7E8AA3', marginBottom: 13 }}>
              Get in touch
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9, fontSize: 14, color: '#9AA6BE' }}>
              <span style={{ whiteSpace: 'nowrap' }}>UAE · {contact.website}</span>
              <span style={{ whiteSpace: 'nowrap' }}>{contact.email}</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div
          style={{
            width: 'min(1180px, 92%)',
            margin: '0 auto',
            padding: '14px 0',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px 18px',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 12.5,
            color: '#7E8AA3',
          }}
        >
          <span>© {year} ESM Business School. All rights reserved.</span>
          <span style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="/privacy" style={{ color: '#7E8AA3', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: '#7E8AA3', textDecoration: 'none' }}>Terms & Conditions</Link>
            <span>A brand of ESM Global</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
