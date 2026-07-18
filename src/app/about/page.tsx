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
  const leader = settings?.executiveLeadership ?? {}
  const operation = settings?.operationTeam ?? {}
  const faculty = settings?.facultyTeam ?? {}

  const acc = settings?.partnerAccreditation ?? {}
  const accItems: { name?: string; description?: string; logo?: string }[] = acc.items ?? []
  const recogLogos: { name?: string; logo?: string }[] = acc.recognitionLogos ?? []

  const countries: { name?: string; flag?: string }[] = presence.countries ?? []
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

      {/* 3 — Executive leadership message */}
      {(leader.photo || leader.message || (leader.roles?.length ?? 0) > 0) && (
        <section style={{ background: '#F2F4F7' }}>
          <div style={{ width: 'min(1080px, 92%)', margin: '0 auto', padding: 'clamp(56px, 7vw, 92px) 0' }}>
            <SectionHeader eyebrow="Leadership" title={leader.heading || 'A Message from Our Executive Leadership'} center />
            <div style={{ ...card, marginTop: 46, overflow: 'hidden', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 0 }}>
              {leader.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={leader.photo} alt={leader.name ?? 'Executive leadership'} style={{ width: '100%', height: '100%', minHeight: 340, objectFit: 'cover', display: 'block' }} />
              ) : <div />}
              <div style={{ padding: 'clamp(28px, 3.5vw, 44px)' }}>
                {leader.message && leader.message.split(/\n\s*\n/).map((para: string, i: number) => (
                  <p key={i} style={{ fontSize: '1.02rem', lineHeight: 1.7, color: '#48536B', margin: i === 0 ? 0 : '14px 0 0' }}>{para}</p>
                ))}
                {leader.name && <h3 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 800, fontSize: '1.3rem', color: '#1B2A4A', margin: leader.message ? '26px 0 0' : 0 }}>{leader.name}</h3>}
                {(leader.roles ?? []).map((r: string, i: number) => (
                  <div key={i} style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 600, fontSize: 14, color: '#D4891A', marginTop: i === 0 ? (leader.name ? 6 : 0) : 3 }}>{r}</div>
                ))}
                {(leader.qualifications?.length ?? 0) > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 20 }}>
                    {(leader.qualifications ?? []).map((q: string, i: number) => (
                      <span key={i} style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: 12.5, color: '#33405C', background: '#F2F4F7', border: '1px solid #E6E9F0', borderRadius: 100, padding: '6px 13px' }}>{q}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4 — Faculty of Business & Management */}
      {facPeople.length > 0 && (
        <section style={{ width: 'min(1080px, 92%)', margin: '0 auto', padding: 'clamp(56px, 7vw, 92px) 0' }}>
          <SectionHeader eyebrow="Academics" title={faculty.heading || 'Faculty of Business & Management'} center />
          <PeopleGrid people={facPeople} />
        </section>
      )}

      {/* 5 — Academic Operations Team */}
      {opPeople.length > 0 && (
        <section style={{ background: '#F2F4F7' }}>
          <div style={{ width: 'min(1080px, 92%)', margin: '0 auto', padding: 'clamp(56px, 7vw, 92px) 0' }}>
            <SectionHeader eyebrow="Our team" title={operation.heading || 'Academic Operations Team'} center />
            <PeopleGrid people={opPeople} />
          </div>
        </section>
      )}

      {/* 6 — Partnership & Accreditation */}
      {accItems.length > 0 && (
        <section style={{ width: 'min(1080px, 92%)', margin: '0 auto', padding: 'clamp(56px, 7vw, 92px) 0' }}>
          <SectionHeader eyebrow="Recognised & regulated" title={acc.heading || 'Partnership & Accreditation'} center />
          {acc.intro && (
            <p style={{ fontSize: 'clamp(1.02rem, 1.3vw, 1.15rem)', lineHeight: 1.65, color: '#48536B', margin: '18px auto 0', maxWidth: '46em', textAlign: 'center' }}>{acc.intro}</p>
          )}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 46 }}>
            {accItems.map((it, i) => (
              <div key={i} style={{ ...card, padding: 'clamp(22px, 3vw, 32px)', display: 'flex', flexWrap: 'wrap', gap: '22px 34px', alignItems: 'center' }}>
                {it.logo && (
                  <div style={{ flex: '0 0 180px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={it.logo} alt={it.name ?? ''} style={{ maxWidth: 180, maxHeight: 96, objectFit: 'contain' }} />
                  </div>
                )}
                <div style={{ flex: '1 1 320px' }}>
                  {it.name && <h3 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 700, fontSize: '1.2rem', color: '#1B2A4A', margin: 0 }}>{it.name}</h3>}
                  {it.description && <p style={{ fontSize: '1rem', lineHeight: 1.65, color: '#48536B', margin: '10px 0 0' }}>{it.description}</p>}
                </div>
              </div>
            ))}
          </div>

          {recogLogos.length > 0 && (
            <div style={{ marginTop: 56, textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 800, fontSize: 'clamp(1.3rem, 2.2vw, 1.7rem)', color: '#1B2A4A', margin: 0 }}>{acc.recognitionHeading || 'Recognition'}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 16, marginTop: 28 }}>
                {recogLogos.map((r, i) => (
                  <div key={i} style={{ ...card, padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 96 }}>
                    {r.logo && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={r.logo} alt={r.name ?? ''} style={{ maxWidth: '100%', maxHeight: 60, objectFit: 'contain' }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      <EnquiryBlock />
    </>
  )
}
