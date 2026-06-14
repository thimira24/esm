import Image from 'next/image'
import { getPartners } from '@/sanity/queries'
import EnquiryBlock from '@/components/shared/EnquiryBlock'

export const revalidate = 60

type Partner = { name: string; type: string; logoPath: string }

const GROUP_LABELS: Record<string, { title: string; desc: string }> = {
  university:   { title: 'University Partners',       desc: 'Degree-awarding UK universities whose programmes we represent and deliver across the region.' },
  awarding:     { title: 'Awarding Organisations',    desc: 'Regulated UK awarding bodies that certify and quality-assure our diplomas.' },
  professional: { title: 'Professional Bodies',       desc: 'Industry institutes offering recognition, membership and chartered progression.' },
  delivery:     { title: 'Delivery & Employer Partners', desc: 'Delivery, employer and ecosystem partners that support our students and graduates.' },
}

const TYPE_ORDER = ['university', 'awarding', 'professional', 'delivery']

export default async function PartnersPage() {
  const partnerData: Partner[] = await getPartners() ?? []

  // Group partners by type, preserve preferred order
  const grouped = TYPE_ORDER.reduce<Record<string, Partner[]>>((acc, type) => {
    const group = partnerData.filter(p => p.type === type)
    if (group.length > 0) acc[type] = group
    return acc
  }, {})

  // Any types not in TYPE_ORDER (custom types the client added)
  partnerData.forEach(p => {
    if (!TYPE_ORDER.includes(p.type) && p.type) {
      if (!grouped[p.type]) grouped[p.type] = []
      if (!grouped[p.type].find(x => x.name === p.name)) grouped[p.type].push(p)
    }
  })

  const groups = Object.entries(grouped)

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#F2F4F7', borderBottom: '1px solid #E6E9F0' }}>
        <div style={{ width: 'min(1180px, 92%)', margin: '0 auto', padding: 'clamp(48px, 6vw, 80px) 0' }}>
          <span style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 600, fontSize: 13, letterSpacing: '1.5px', color: '#D4891A', textTransform: 'uppercase' }}>
            Partnerships
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-montserrat), sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2.1rem, 4.5vw, 3.4rem)',
              lineHeight: 1.08,
              letterSpacing: '-1px',
              color: '#1B2A4A',
              margin: '14px 0 0',
            }}
          >
            University &amp; accreditation partners
          </h1>
          <p style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.18rem)', lineHeight: 1.6, color: '#48536B', margin: '16px 0 0', maxWidth: '42em' }}>
            We work alongside universities, awarding organisations, professional bodies and delivery partners to bring you recognised qualifications.
          </p>
        </div>
      </section>

      {/* Partner groups — only rendered if they have partners in Sanity */}
      <section
        style={{
          width: 'min(1180px, 92%)',
          margin: '0 auto',
          padding: 'clamp(48px, 6vw, 84px) 0',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(48px, 6vw, 72px)',
        }}
      >
        {groups.map(([type, partners]) => {
          const meta = GROUP_LABELS[type] ?? { title: type, desc: '' }
          return (
            <div key={type}>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 12,
                  paddingBottom: 18,
                  borderBottom: '2px solid #F2F4F7',
                }}
              >
                <div style={{ maxWidth: '46em' }}>
                  <h2 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 800, fontSize: 'clamp(1.4rem, 2.6vw, 1.9rem)', letterSpacing: '-0.4px', color: '#1B2A4A', margin: 0 }}>
                    {meta.title}
                  </h2>
                  {meta.desc && <p style={{ fontSize: '1rem', lineHeight: 1.55, color: '#5A647A', margin: '7px 0 0' }}>{meta.desc}</p>}
                </div>
                <span style={{ flexShrink: 0, fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 700, fontSize: 12.5, letterSpacing: '0.4px', color: '#1F8A5B', background: '#EAF7EF', padding: '7px 14px', borderRadius: 100 }}>
                  {partners.length} {partners.length === 1 ? 'partner' : 'partners'}
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16, marginTop: 24 }}>
                {partners.map((p) => (
                  <div
                    key={p.name}
                    style={{ background: '#fff', border: '1px solid #E6E9F0', borderRadius: 16, padding: '24px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 110 }}
                  >
                    <Image
                      src={p.logoPath || '/logos/universities/placeholder.svg'}
                      alt={p.name}
                      width={160}
                      height={56}
                      style={{ objectFit: 'contain', width: '100%', height: 56 }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )
        })}

        {groups.length === 0 && (
          <p style={{ color: '#9AA6BE', textAlign: 'center', padding: '60px 0' }}>No partners added yet.</p>
        )}
      </section>

      <EnquiryBlock />
    </>
  )
}
