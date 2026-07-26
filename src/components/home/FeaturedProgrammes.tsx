import Link from 'next/link'
import { getProgrammeCategories } from '@/sanity/queries'
import SectionHeader from '@/components/shared/SectionHeader'

export const revalidate = 60

const CATEGORY_META: Record<string, {
  label: string
  desc: string
  image: string
  order: number
}> = {
  undergraduate: {
    label: 'Undergraduate',
    desc: 'Level 5 Extended Diploma + UK Honours degree. Earn a fully accredited BA or BSc through a flexible online pathway — no traditional A-levels required.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=700&q=80',
    order: 1,
  },
  pgd: {
    label: 'Postgraduate Diploma',
    desc: 'Advanced specialist qualifications including Level 7 Dual Certifications and NZQA Level 8 diplomas. Build expertise for senior roles.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=700&q=80',
    order: 2,
  },
  masters: {
    label: 'Master Programs',
    desc: 'MBA pathways and Master\'s degrees from leading UK universities. Choose a General MBA or specialise in Finance, Marketing, HRM, Project Management and more.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=700&q=80',
    order: 3,
  },
  'teacher-education': {
    label: 'Teacher Education',
    desc: 'Professional teaching qualifications and education programmes for aspiring and existing educators.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=700&q=80',
    order: 4,
  },
}

export default async function FeaturedProgrammes() {
  const categories = await getProgrammeCategories()

  const sorted = categories.sort((a, b) => {
    const oa = CATEGORY_META[a.cat]?.order ?? 99
    const ob = CATEGORY_META[b.cat]?.order ?? 99
    return oa - ob
  })

  return (
    <section style={{ background: '#F2F4F7' }}>
      <style>{`
        .featured-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; align-items: stretch; }
        .featured-card { transition: transform 0.2s, box-shadow 0.2s; box-shadow: 0 2px 8px rgba(15,29,51,0.04); height: 100%; }
        .featured-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(15,29,51,0.12); }
        .featured-card-img { position: relative; }
        .featured-card-img img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        @media (max-width: 768px) {
          .featured-grid { grid-template-columns: 1fr; }
          .featured-card { flex-direction: column !important; }
          .featured-card-img { width: 100% !important; min-height: 200px !important; height: 200px !important; }
        }
      `}</style>
      <div style={{ width: 'min(1180px, 92%)', margin: '0 auto', padding: 'clamp(64px, 8vw, 108px) 0' }}>

        {/* Header row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 18, marginBottom: 48 }}>
          <SectionHeader eyebrow="Programme Portfolio" title="Find your next qualification" />
          <Link
            href="/programmes"
            style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 700, fontSize: 15, color: '#1B2A4A', display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', whiteSpace: 'nowrap' }}
          >
            View all programmes <span style={{ color: '#F5A623' }}>→</span>
          </Link>
        </div>

        {/* Category cards */}
        <div className="featured-grid">
          {sorted.map(({ cat, count, examples }) => {
            const meta = CATEGORY_META[cat]
            const label = meta?.label ?? cat.charAt(0).toUpperCase() + cat.slice(1)
            const desc = meta?.desc ?? 'Explore our programmes in this category.'
            const image = meta?.image ?? 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=700&q=80'

            return (
              <Link
                key={cat}
                href={`/programmes?cat=${encodeURIComponent(cat)}`}
                className="featured-card"
                style={{
                  background: '#fff',
                  borderRadius: 20,
                  overflow: 'hidden',
                  display: 'flex',
                  textDecoration: 'none',
                  border: '1px solid #E6E9F0',
                }}
              >
                {/* Image */}
                <div className="featured-card-img" style={{ position: 'relative', width: '45%', minHeight: 280, flexShrink: 0, overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt={label}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(15,29,51,0.3) 0%, rgba(15,29,51,0.1) 100%)' }} />
                  {/* Programme count overlay */}
                  <div style={{
                    position: 'absolute',
                    bottom: 16,
                    left: 16,
                    background: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(8px)',
                    padding: '8px 14px',
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-montserrat), sans-serif',
                      fontWeight: 800,
                      fontSize: 18,
                      color: '#1B2A4A',
                    }}>
                      {count}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-dm-sans), sans-serif',
                      fontWeight: 500,
                      fontSize: 12,
                      color: '#5A647A',
                      lineHeight: 1.2,
                    }}>
                      programme{count !== 1 ? 's' : ''}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '28px 28px 28px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <h3 style={{
                      fontFamily: 'var(--font-montserrat), sans-serif',
                      fontWeight: 800,
                      fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
                      color: '#1B2A4A',
                      margin: 0,
                      lineHeight: 1.25,
                    }}>
                      {label}
                    </h3>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: '#5A647A', margin: '0 0 20px', flex: 1 }}>
                    {desc}
                  </p>

                  {/* Example programmes */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {examples.slice(0, 3).map((title, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#F5A623', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.85rem', color: '#48536B', lineHeight: 1.4 }}>{title}</span>
                      </div>
                    ))}
                    {count > 3 && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#D5DBE6', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.82rem', color: '#9AA6BE' }}>+{count - 3} more</span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
