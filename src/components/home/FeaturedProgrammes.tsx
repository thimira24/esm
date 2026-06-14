import Link from 'next/link'
import { getProgrammeCategories } from '@/sanity/queries'
import SectionHeader from '@/components/shared/SectionHeader'

export const revalidate = 60

const CATEGORY_META: Record<string, {
  label: string
  desc: string
  icon: React.ReactNode
  accent: string
  accentLight: string
  order: number
}> = {
  mba: {
    label: 'MBA Programmes',
    desc: 'Level 7 PGD + MBA pathways from leading UK universities. Choose a General MBA or specialise in Finance, Marketing, HRM, Project Management and more.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    accent: '#1B2A4A',
    accentLight: '#EEF1F6',
    order: 1,
  },
  undergraduate: {
    label: 'Undergraduate',
    desc: 'Level 5 Extended Diploma + UK Honours degree. Earn a fully accredited BA or BSc through a flexible online pathway — no traditional A-levels required.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
        <path d="M8 7h8M8 11h6" />
      </svg>
    ),
    accent: '#1B2A4A',
    accentLight: '#EEF1F6',
    order: 2,
  },
  postgraduate: {
    label: 'Postgraduate',
    desc: 'Advanced specialist qualifications including MA Education, MSc Artificial Intelligence, Level 7 Dual Certifications and NZQA Level 8 diplomas.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    accent: '#1B2A4A',
    accentLight: '#EEF1F6',
    order: 3,
  },
}

const DEFAULT_META = {
  label: (cat: string) => cat.charAt(0).toUpperCase() + cat.slice(1),
  desc: 'Explore our programmes in this category.',
  icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
    </svg>
  ),
  accent: '#6B7689',
  accentLight: '#F2F4F7',
}

export default async function FeaturedProgrammes() {
  const categories = await getProgrammeCategories()

  const sorted = categories
    .filter(c => c.cat && CATEGORY_META[c.cat]?.order !== undefined || true)
    .sort((a, b) => {
      const oa = CATEGORY_META[a.cat]?.order ?? 99
      const ob = CATEGORY_META[b.cat]?.order ?? 99
      return oa - ob
    })

  return (
    <section style={{ background: '#F2F4F7' }}>
      <div style={{ width: 'min(1180px, 92%)', margin: '0 auto', padding: 'clamp(64px, 8vw, 108px) 0' }}>

        {/* Header row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 18, marginBottom: 48 }}>
          <SectionHeader
            eyebrow="Programme Portfolio"
            title="Find your next qualification"
          />
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
              whiteSpace: 'nowrap',
            }}
          >
            View all programmes <span style={{ color: '#F5A623' }}>→</span>
          </Link>
        </div>

        {/* Category cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {sorted.map(({ cat, count, examples }) => {
            const meta = CATEGORY_META[cat]
            const accent = meta?.accent ?? DEFAULT_META.accent
            const accentLight = meta?.accentLight ?? DEFAULT_META.accentLight
            const label = meta?.label ?? DEFAULT_META.label(cat)
            const desc = meta?.desc ?? DEFAULT_META.desc
            const icon = meta?.icon ?? DEFAULT_META.icon

            return (
              <div
                key={cat}
                style={{
                  background: '#fff',
                  borderRadius: 20,
                  border: '1px solid #E6E9F0',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 0,
                  boxShadow: '0 2px 8px rgba(15,29,51,0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Decorative top bar */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: accent, borderRadius: '20px 20px 0 0' }} />

                {/* Icon + count row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
                  <span style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: 56, height: 56, borderRadius: 15,
                    background: accentLight, color: accent,
                  }}>
                    {icon}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontWeight: 700, fontSize: 13,
                    color: accent, background: accentLight,
                    padding: '6px 14px', borderRadius: 100,
                    letterSpacing: '0.3px',
                  }}>
                    {count} programme{count !== 1 ? 's' : ''}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: 'var(--font-montserrat), sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(1.2rem, 2vw, 1.45rem)',
                  color: '#1B2A4A',
                  margin: '0 0 12px',
                  lineHeight: 1.2,
                }}>
                  {label}
                </h3>

                {/* Description */}
                <p style={{ fontSize: '0.97rem', lineHeight: 1.65, color: '#5A647A', margin: '0 0 24px', flexGrow: 1 }}>
                  {desc}
                </p>

                {/* Example programmes */}
                <ul style={{ margin: '0 0 28px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {examples.map((title) => (
                    <li key={title} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <span style={{
                        flexShrink: 0, marginTop: 4,
                        width: 6, height: 6, borderRadius: '50%',
                        background: accent, display: 'block',
                      }} />
                      <span style={{ fontSize: '0.9rem', color: '#48536B', lineHeight: 1.45 }}>{title}</span>
                    </li>
                  ))}
                  {count > 3 && (
                    <li style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ flexShrink: 0, marginTop: 4, width: 6, height: 6, borderRadius: '50%', background: '#D5DBE6', display: 'block' }} />
                      <span style={{ fontSize: '0.88rem', color: '#9AA6BE' }}>+{count - 3} more programmes</span>
                    </li>
                  )}
                </ul>

                {/* CTA */}
                <Link
                  href={`/programmes?cat=${encodeURIComponent(cat)}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontWeight: 700,
                    fontSize: 14.5,
                    color: '#fff',
                    background: accent,
                    padding: '13px 22px',
                    borderRadius: 11,
                    textDecoration: 'none',
                    transition: 'opacity 0.15s',
                  }}
                >
                  Explore {label} <span style={{ fontSize: 16 }}>→</span>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
