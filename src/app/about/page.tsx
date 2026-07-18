import { getSiteSettings } from '@/sanity/queries'
import EnquiryBlock from '@/components/shared/EnquiryBlock'
import SectionHeader from '@/components/shared/SectionHeader'

export const revalidate = 60

type Person = { name?: string; role?: string; photo?: string }

const card: React.CSSProperties = { background: '#fff', border: '1px solid #E6E9F0', borderRadius: 18, boxShadow: '0 8px 26px rgba(15,29,51,0.05)' }

function PeopleGrid({ people }: { people: Person[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24, marginTop: 46 }}>
      {people.map((p, i) => (
        <div key={i} style={{ ...card, overflow: 'hidden', textAlign: 'center', paddingBottom: 22 }}>
          {p.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={p.photo} alt={p.name ?? ''} style={{ width: '100%', aspectRatio: '1 / 1', objectFit: 'cover', display: 'block' }} />
          ) : (
            <div style={{ width: '100%', aspectRatio: '1 / 1', background: 'linear-gradient(135deg, #F2F4F7, #E6E9F0)' }} />
          )}
          <h3 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#1B2A4A', margin: '18px 20px 0' }}>{p.name}</h3>
          {p.role && <div style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 600, fontSize: 13.5, color: '#D4891A', margin: '5px 20px 0', lineHeight: 1.4 }}>{p.role}</div>}
        </div>
      ))}
    </div>
  )
}

export default async function AboutPage() {
  const settings = await getSiteSettings().catch(() => null)

  const intro = settings?.aboutIntro ?? {}
  const presence = settings?.globalPresence ?? {}
  const portfolio = settings?.programmePortfolio ?? {}
  const leader = settings?.executiveLeadership ?? {}
  const operation = settings?.operationTeam ?? {}
  const faculty = settings?.facultyTeam ?? {}

  const countries: { name?: string; flag?: string }[] = presence.countries ?? []
  const portfolioItems: string[] = portfolio.items ?? []
  const opPeople: Person[] = operation.people ?? []
  const facPeople: Person[] = faculty.people ?? []

  return (
    <>
      {/* 1 — About ESM */}
      <section style={{ background: 'radial-gradient(120% 130% at 88% 8%, rgba(245,166,35,0.28), transparent 52%), linear-gradient(140deg, #1B2A4A, #0F1D33)', position: 'relative', overflow: 'hidden' }}>
        <div className="dot-pattern" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'relative', width: 'min(1080px, 92%)', margin: '0 auto', padding: 'clamp(56px, 7vw, 100px) 0' }}>
          <span style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 600, fontSize: 13, letterSpacing: '1.5px', color: '#F5A623', textTransform: 'uppercase' }}>About ESM</span>
          <h1 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4.4vw, 3.2rem)', lineHeight: 1.08, letterSpacing: '-1px', color: '#fff', margin: '14px 0 0' }}>
            {intro.heading || 'ESM Global'}
          </h1>
          {intro.intro && (
            <p style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.2rem)', lineHeight: 1.7, color: '#C3CBDB', margin: '20px 0 0', maxWidth: '54em' }}>{intro.intro}</p>
          )}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginTop: 40 }}>
            {intro.missionText && (
              <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 16, padding: 28 }}>
                <h2 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 700, fontSize: '1.25rem', color: '#F5A623', margin: 0 }}>{intro.missionTitle || 'Our Mission'}</h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.65, color: '#D7DEEA', margin: '12px 0 0' }}>{intro.missionText}</p>
              </div>
            )}
            {intro.visionText && (
              <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 16, padding: 28 }}>
                <h2 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 700, fontSize: '1.25rem', color: '#F5A623', margin: 0 }}>{intro.visionTitle || 'Our Vision'}</h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.65, color: '#D7DEEA', margin: '12px 0 0' }}>{intro.visionText}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2 — Global presence */}
      {countries.length > 0 && (
        <section style={{ width: 'min(1080px, 92%)', margin: '0 auto', padding: 'clamp(56px, 7vw, 92px) 0' }}>
          <SectionHeader eyebrow="Where we operate" title={presence.heading || 'Global Presence'} center />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 20, marginTop: 46 }}>
            {countries.map((c, i) => (
              <div key={i} style={{ ...card, padding: '22px 18px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
                {c.flag && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={c.flag} alt={c.name ?? ''} style={{ width: 88, height: 58, objectFit: 'cover', borderRadius: 8, border: '1px solid #E6E9F0' }} />
                )}
                <span style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 700, fontSize: '1rem', color: '#1B2A4A' }}>{c.name}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3 — Programme portfolio */}
      {portfolioItems.length > 0 && (
        <section style={{ background: '#F2F4F7' }}>
          <div style={{ width: 'min(1080px, 92%)', margin: '0 auto', padding: 'clamp(56px, 7vw, 92px) 0' }}>
            <SectionHeader eyebrow="What we offer" title={portfolio.heading || 'Programme Portfolio'} center />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 18, marginTop: 46 }}>
              {portfolioItems.map((item, i) => (
                <div key={i} style={{ ...card, padding: '26px 22px', display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 11, background: 'linear-gradient(135deg, #FFF3DE, #FCE3B5)', fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 800, color: '#D4891A', fontSize: 15 }}>{i + 1}</span>
                  <span style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 700, fontSize: '1.02rem', color: '#1B2A4A', lineHeight: 1.3 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4 — Executive leadership */}
      {(leader.photo || (leader.roles?.length ?? 0) > 0) && (
        <section style={{ width: 'min(1080px, 92%)', margin: '0 auto', padding: 'clamp(56px, 7vw, 92px) 0' }}>
          <SectionHeader eyebrow="Leadership" title={leader.heading || 'Executive Leadership'} center />
          <div style={{ ...card, marginTop: 46, overflow: 'hidden', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 0 }}>
            {leader.photo && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={leader.photo} alt={leader.name ?? 'Executive leadership'} style={{ width: '100%', height: '100%', minHeight: 320, objectFit: 'cover', display: 'block' }} />
            )}
            <div style={{ padding: 'clamp(28px, 3.5vw, 42px)' }}>
              {leader.name && <h3 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#1B2A4A', margin: 0 }}>{leader.name}</h3>}
              {(leader.roles ?? []).map((r: string, i: number) => (
                <div key={i} style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 600, fontSize: 14.5, color: '#D4891A', marginTop: i === 0 ? (leader.name ? 8 : 0) : 4 }}>{r}</div>
              ))}
              {(leader.qualifications?.length ?? 0) > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 20 }}>
                  {(leader.qualifications ?? []).map((q: string, i: number) => (
                    <span key={i} style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: 13, color: '#33405C', background: '#F2F4F7', border: '1px solid #E6E9F0', borderRadius: 100, padding: '7px 14px' }}>{q}</span>
                  ))}
                </div>
              )}
              {leader.experience && (
                <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#48536B', margin: '20px 0 0', borderTop: '1px solid #EEF1F6', paddingTop: 18 }}>{leader.experience}</p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 5 — ESM Operation */}
      {opPeople.length > 0 && (
        <section style={{ background: '#F2F4F7' }}>
          <div style={{ width: 'min(1080px, 92%)', margin: '0 auto', padding: 'clamp(56px, 7vw, 92px) 0' }}>
            <SectionHeader eyebrow="Our team" title={operation.heading || 'ESM Operation'} center />
            <PeopleGrid people={opPeople} />
          </div>
        </section>
      )}

      {/* 6 — Faculty of Management */}
      {facPeople.length > 0 && (
        <section style={{ width: 'min(1080px, 92%)', margin: '0 auto', padding: 'clamp(56px, 7vw, 92px) 0' }}>
          <SectionHeader eyebrow="Academics" title={faculty.heading || 'Faculty of Management'} center />
          <PeopleGrid people={facPeople} />
        </section>
      )}

      <EnquiryBlock />
    </>
  )
}
