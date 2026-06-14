import Image from 'next/image'
import { partnerGroups, universities } from '@/data/site'
import EnquiryBlock from '@/components/shared/EnquiryBlock'

const LogoPlaceholder = () => (
  <div
    style={{
      width: '100%',
      height: 80,
      borderRadius: 10,
      background: '#F4F6FA',
      border: '1.5px dashed #D5DBE6',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      color: '#9AA6BE',
    }}
  >
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
    <span style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 600, fontSize: 11, letterSpacing: '0.8px', textTransform: 'uppercase' }}>
      Logo
    </span>
  </div>
)

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#F2F4F7', borderBottom: '1px solid #E6E9F0' }}>
        <div style={{ width: 'min(1180px, 92%)', margin: '0 auto', padding: 'clamp(48px, 6vw, 80px) 0', textAlign: 'center' }}>
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
              margin: '14px auto 0',
              maxWidth: '18em',
            }}
          >
            University &amp; accreditation partners
          </h1>
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.4vw, 1.18rem)',
              lineHeight: 1.6,
              color: '#48536B',
              margin: '16px auto 0',
              maxWidth: '42em',
            }}
          >
            We work alongside universities, awarding organisations, professional bodies and delivery partners to bring you recognised qualifications.
          </p>
        </div>
      </section>

      {/* Partner groups */}
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
        {partnerGroups.map((g, gi) => {
          const isUniversities = gi === 0
          return (
            <div key={g.title}>
              {/* Group header */}
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
                  <h2
                    style={{
                      fontFamily: 'var(--font-montserrat), sans-serif',
                      fontWeight: 800,
                      fontSize: 'clamp(1.4rem, 2.6vw, 1.9rem)',
                      letterSpacing: '-0.4px',
                      color: '#1B2A4A',
                      margin: 0,
                    }}
                  >
                    {g.title}
                  </h2>
                  <p style={{ fontSize: '1rem', lineHeight: 1.55, color: '#5A647A', margin: '7px 0 0' }}>{g.desc}</p>
                </div>
                <span
                  style={{
                    flexShrink: 0,
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontWeight: 700,
                    fontSize: 12.5,
                    letterSpacing: '0.4px',
                    color: isUniversities ? '#1F8A5B' : '#D4891A',
                    background: isUniversities ? '#EAF7EF' : '#FFF3DE',
                    padding: '7px 14px',
                    borderRadius: 100,
                  }}
                >
                  {isUniversities ? `${universities.length} partners` : `${g.count} logos to add`}
                </span>
              </div>

              {/* University group — show real logos */}
              {isUniversities ? (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: 16,
                    marginTop: 24,
                  }}
                >
                  {universities.map((u) => (
                    <div
                      key={u.name}
                      style={{
                        background: '#fff',
                        border: '1px solid #E6E9F0',
                        borderRadius: 16,
                        padding: '24px 20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: 110,
                      }}
                    >
                      <Image
                        src={u.logo}
                        alt={u.name}
                        width={160}
                        height={70}
                        style={{ objectFit: 'contain', maxHeight: 60, width: 'auto' }}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                /* Other groups — placeholder grid */
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                    gap: 16,
                    marginTop: 24,
                  }}
                >
                  {Array.from({ length: g.count }).map((_, i) => (
                    <div
                      key={i}
                      style={{
                        background: '#fff',
                        border: '1px solid #E6E9F0',
                        borderRadius: 16,
                        padding: 18,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: 118,
                      }}
                    >
                      <LogoPlaceholder />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </section>

      <EnquiryBlock />
    </>
  )
}
