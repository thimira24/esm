import Link from 'next/link'
import { getProgrammeCategories, getSiteSettings } from '@/sanity/queries'

const CATEGORY_LABELS: Record<string, string> = {
  mba: 'MBA Programmes',
  undergraduate: 'Undergraduate',
  postgraduate: 'Postgraduate',
}

// Social icons (24×24, solid glyphs). Add a URL in Site Settings → an icon
// appears here; leave a field empty and its icon is hidden.
const SOCIAL_ICONS: Record<string, { label: string; path: string }> = {
  linkedin: { label: 'LinkedIn', path: 'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z' },
  facebook: { label: 'Facebook', path: 'M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z' },
  instagram: { label: 'Instagram', path: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38.66-.67 1.07-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM18.41 4.15a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z' },
  twitter: { label: 'Twitter / X', path: 'M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.22-6.82-5.97 6.82H1.66l7.73-8.83L1.24 2.25H8.07l4.71 6.23 5.46-6.23zm-1.16 17.52h1.83L7.01 4.13H5.05l12.03 15.64z' },
  youtube: { label: 'YouTube', path: 'M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.08 0 12 0 12s0 3.92.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z' },
}

export default async function Footer() {
  const [categories, settings] = await Promise.all([getProgrammeCategories(), getSiteSettings().catch(() => null)])
  const contact = settings?.contact ?? {}
  const social = settings?.social ?? {}
  const year = new Date().getFullYear()

  // Only platforms with a non-empty URL get an icon
  const socialLinks = Object.keys(SOCIAL_ICONS)
    .map((key) => ({ key, href: (social?.[key] as string | undefined)?.trim(), ...SOCIAL_ICONS[key] }))
    .filter((s) => s.href)

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
            Accredited British qualifications for ambitious professionals, delivered flexibly from the UAE to the world.
          </p>

          {socialLinks.length > 0 && (
            <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
              {socialLinks.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 34,
                    height: 34,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.06)',
                    color: '#C3CBDB',
                    textDecoration: 'none',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          )}
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
