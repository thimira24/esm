import Link from 'next/link'
import Image from 'next/image'
import { getProgrammeCategories } from '@/sanity/queries'
import SectionHeader from '@/components/shared/SectionHeader'

export const revalidate = 60

const CATEGORY_META: Record<string, {
  label: string
  desc: string
  image: string
  order: number
}> = {
  mba: {
    label: 'MBA Programmes',
    desc: 'Level 7 PGD + MBA pathways from leading UK universities. Choose a General MBA or specialise in Finance, Marketing, HRM, Project Management and more.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=700&q=80',
    order: 1,
  },
  undergraduate: {
    label: 'Undergraduate',
    desc: 'Level 5 Extended Diploma + UK Honours degree. Earn a fully accredited BA or BSc through a flexible online pathway — no traditional A-levels required.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80',
    order: 2,
  },
  postgraduate: {
    label: 'Postgraduate',
    desc: 'Advanced specialist qualifications including MA Education, MSc Artificial Intelligence, Level 7 Dual Certifications and NZQA Level 8 diplomas.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=700&q=80',
    order: 3,
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {sorted.map(({ cat, count, examples }) => {
            const meta = CATEGORY_META[cat]
            const label = meta?.label ?? cat.charAt(0).toUpperCase() + cat.slice(1)
            const desc = meta?.desc ?? 'Explore our programmes in this category.'
            const image = meta?.image ?? 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=700&q=80'

            return (
              <div
                key={cat}
                style={{
                  background: '#fff',
                  borderRadius: 20,
                  border: '1px solid #E6E9F0',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 2px 12px rgba(15,29,51,0.07)',
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', height: 200, flexShrink: 0 }}>
                  <Image
                    src={image}
                    alt={label}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    style={{ objectFit: 'cover' }}
                  />
                  {/* Dark overlay */}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,29,51,0.55) 0%, rgba(15,29,51,0.05) 60%)' }} />
                  {/* Count badge */}
                  <span style={{
                    position: 'absolute', top: 14, right: 14,
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontWeight: 700, fontSize: 12.5,
                    color: '#1B2A4A', background: '#F5A623',
                    padding: '5px 13px', borderRadius: 100,
                    letterSpacing: '0.3px',
                  }}>
                    {count} programme{count !== 1 ? 's' : ''}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: '26px 26px 28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{
                    fontFamily: 'var(--font-montserrat), sans-serif',
                    fontWeight: 800,
                    fontSize: 'clamp(1.15rem, 2vw, 1.4rem)',
                    color: '#1B2A4A',
                    margin: '0 0 10px',
                    lineHeight: 1.2,
                  }}>
                    {label}
                  </h3>

                  <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: '#5A647A', margin: '0 0 20px', flexGrow: 1 }}>
                    {desc}
                  </p>

                  {/* Example programmes */}
                  <ul style={{ margin: '0 0 24px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
                    {examples.map((title) => (
                      <li key={title} style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                        <span style={{ flexShrink: 0, marginTop: 5, width: 5, height: 5, borderRadius: '50%', background: '#F5A623', display: 'block' }} />
                        <span style={{ fontSize: '0.88rem', color: '#48536B', lineHeight: 1.45 }}>{title}</span>
                      </li>
                    ))}
                    {count > 3 && (
                      <li style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                        <span style={{ flexShrink: 0, width: 5, height: 5, borderRadius: '50%', background: '#D5DBE6', display: 'block' }} />
                        <span style={{ fontSize: '0.85rem', color: '#9AA6BE' }}>+{count - 3} more programmes</span>
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
                      background: '#1B2A4A',
                      padding: '13px 22px',
                      borderRadius: 11,
                      textDecoration: 'none',
                    }}
                  >
                    Explore {label} <span style={{ fontSize: 16 }}>→</span>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
