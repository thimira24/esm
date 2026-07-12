import Image from 'next/image'
import Link from 'next/link'
import { getSiteSettings, getPartners } from '@/sanity/queries'
import EnquiryBlock from '@/components/shared/EnquiryBlock'
import SectionHeader from '@/components/shared/SectionHeader'

export const revalidate = 60

const VISION_ICONS = [
  <svg key="globe" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M2 12h20M12 3a15 15 0 010 18M12 3a15 15 0 000 18" /></svg>,
  <svg key="star" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 6.9H22l-6 4.4 2.3 7-6.3-4.4L5.7 20l2.3-7-6-4.4h7.6z" /></svg>,
  <svg key="check" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>,
  <svg key="heart" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>,
]

// Distinct icons cycled across the "Why choose ESM" cards.
const WHY_ICONS = [
  <svg key="shield" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4891A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" /></svg>,
  <svg key="cap" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4891A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5z" /><path d="M6 12v5c3 2 9 2 12 0v-5" /></svg>,
  <svg key="globe" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4891A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" /></svg>,
  <svg key="medal" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4891A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="9" r="6" /><path d="M8.5 14 7 22l5-3 5 3-1.5-8" /></svg>,
  <svg key="clock" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4891A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>,
  <svg key="users" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4891A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" /><circle cx="10" cy="7" r="4" /><path d="M21 21v-2a4 4 0 00-3-3.87" /></svg>,
]

// DEMO faculty content — placeholder photos/names until real profiles are supplied.
const FACULTY = [
  { name: 'Dr. Sarah Whitfield', role: 'Dean of Business & Management', bio: 'PhD in Strategic Management with 18+ years leading postgraduate business education across the UK and GCC.', photo: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Prof. James Okoro', role: 'Head of Faculty', bio: 'Chartered management practitioner and researcher in leadership and organisational behaviour.', photo: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Dr. Aisha Rahman', role: 'Academic Director', bio: 'Leads curriculum quality and assessment so every programme meets UK academic standards.', photo: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { name: 'Michael Chen', role: 'Student Success Lead', bio: 'Guides learners from enrolment to graduation with personalised academic and career support.', photo: 'https://randomuser.me/api/portraits/men/75.jpg' },
]

const FALLBACK_ABOUT = {
  heading: '',
  body1: '',
  body2: '',
  imageUrl: null as string | null,
  storyHeading: '',
  storyBody1: '',
  storyBody2: '',
  timeline: [] as { year: string; desc: string; current?: boolean }[],
  visionHeading: '',
  visionSubtext: '',
  visionCards: [] as { title: string; desc: string }[],
}

export default async function AboutPage() {
  const [settings, partnerData] = await Promise.all([
    getSiteSettings().catch(() => null),
    getPartners().catch(() => []),
  ])

  const accreditationPartners = (partnerData as { name: string; type: string; logoPath: string }[])
    .filter((p) => p.logoPath && ['university', 'awarding', 'professional'].includes(p.type))

  const a = { ...FALLBACK_ABOUT, ...settings?.about }
  const timeline: { year: string; desc: string; current?: boolean }[] = a.timeline ?? []
  const visionCards: { title: string; desc: string }[] = a.visionCards ?? []
  const whyEsm: { title: string; desc: string }[] = settings?.whyEsm ?? []
  const stats: { number: string; label: string }[] = settings?.stats ?? []

  const imgSrc = a.imageUrl ?? '/hero-graduate.png'

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#F2F4F7', borderBottom: '1px solid #E6E9F0' }}>
        <div
          style={{
            width: 'min(1180px, 92%)',
            margin: '0 auto',
            padding: 'clamp(48px, 6vw, 84px) 0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(36px, 5vw, 60px)',
            alignItems: 'center',
          }}
        >
          <div>
            <span style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 600, fontSize: 13, letterSpacing: '1.5px', color: '#D4891A', textTransform: 'uppercase' }}>
              About ESM
            </span>
            <h1
              style={{
                fontFamily: 'var(--font-montserrat), sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4.4vw, 3.2rem)',
                lineHeight: 1.08,
                letterSpacing: '-1px',
                color: '#1B2A4A',
                margin: '14px 0 0',
              }}
            >
              {a.heading}
            </h1>
            <p style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.18rem)', lineHeight: 1.65, color: '#48536B', margin: '18px 0 0' }}>
              {a.body1}
            </p>
            {a.body2 && (
              <p style={{ fontSize: '1.05rem', lineHeight: 1.65, color: '#48536B', margin: '16px 0 0' }}>
                {a.body2}
              </p>
            )}
          </div>
          <div
            style={{
              position: 'relative',
              minHeight: 'clamp(280px, 34vw, 380px)',
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: '0 26px 60px rgba(15,29,51,0.28)',
            }}
          >
            <Image
              src={imgSrc}
              alt={a.heading}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,29,51,0.45) 0%, transparent 60%)' }} />
          </div>
        </div>
      </section>

      {/* Our story */}
      <section
        style={{
          width: 'min(1180px, 92%)',
          margin: '0 auto',
          padding: 'clamp(56px, 7vw, 96px) 0',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(40px, 5vw, 72px)',
          alignItems: 'start',
        }}
      >
        <div>
          <SectionHeader eyebrow="Our story" title={a.storyHeading} />
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#48536B', margin: '18px 0 0' }}>
            {a.storyBody1}
          </p>
          {a.storyBody2 && (
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#48536B', margin: '16px 0 0' }}>
              {a.storyBody2}
            </p>
          )}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 30 }}>
            {stats.slice(0, 2).map((s) => (
              <div key={s.number} style={{ flex: '1 1 130px', background: '#F2F4F7', borderRadius: 14, padding: '18px 20px' }}>
                <div style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 800, fontSize: '1.7rem', color: '#1B2A4A' }}>{s.number}</div>
                <div style={{ fontSize: 13, color: '#6B7689', marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div style={{ background: '#fff', border: '1px solid #E6E9F0', borderRadius: 20, padding: 'clamp(26px, 3.5vw, 38px)', boxShadow: '0 14px 40px rgba(15,29,51,0.06)' }}>
          {timeline.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 18 }}>
              <div style={{ flexShrink: 0, width: 18, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    background: item.current ? '#1B2A4A' : '#F5A623',
                    boxShadow: item.current ? '0 0 0 4px #E6E9F0' : '0 0 0 4px #FFF3DE',
                    display: 'block',
                  }}
                />
                {i < timeline.length - 1 && (
                  <span style={{ flex: 1, width: 2, background: '#EEF1F6', marginTop: 6 }} />
                )}
              </div>
              <div style={{ paddingBottom: i < timeline.length - 1 ? 26 : 0 }}>
                <div style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 700, fontSize: 13, letterSpacing: '0.5px', color: item.current ? '#1B2A4A' : '#D4891A' }}>
                  {item.year}
                </div>
                <div style={{ fontSize: '0.98rem', lineHeight: 1.55, color: '#5A647A', marginTop: 5 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vision */}
      <section style={{ background: 'radial-gradient(120% 130% at 88% 8%, rgba(245,166,35,0.4), transparent 50%), linear-gradient(140deg, #1B2A4A, #0F1D33)', position: 'relative', overflow: 'hidden' }}>
        <div className="dot-pattern" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'relative', width: 'min(1000px, 92%)', margin: '0 auto', padding: 'clamp(60px, 8vw, 104px) 0', textAlign: 'center' }}>
          <SectionHeader eyebrow="Our vision" title={a.visionHeading} center light />
          <p style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.2rem)', lineHeight: 1.65, color: '#C3CBDB', margin: '18px auto 0', maxWidth: '38em' }}>
            {a.visionSubtext}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18, marginTop: 46, textAlign: 'left' }}>
            {visionCards.map((card, i) => (
              <div key={card.title} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 16, padding: 26 }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 46, height: 46, borderRadius: 12, background: 'rgba(245,166,35,0.18)' }}>
                  {VISION_ICONS[i % VISION_ICONS.length]}
                </span>
                <h3 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 700, fontSize: '1.15rem', color: '#fff', margin: '18px 0 0' }}>{card.title}</h3>
                <p style={{ fontSize: '0.97rem', lineHeight: 1.6, color: '#A9B3C7', margin: '8px 0 0' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ESM */}
      <section style={{ width: 'min(1180px, 92%)', margin: '0 auto', padding: 'clamp(56px, 7vw, 96px) 0' }}>
        <SectionHeader eyebrow="Why choose ESM" title="What sets us apart" center />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 22, marginTop: 46 }}>
          {whyEsm.map((w, i) => (
            <div key={w.title} style={{ background: '#fff', border: '1px solid #E6E9F0', borderRadius: 18, padding: '30px 26px' }}>
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 50, height: 50, borderRadius: 13, background: 'linear-gradient(135deg, #FFF3DE, #FCE3B5)' }}>
                {WHY_ICONS[i % WHY_ICONS.length]}
              </span>
              <h3 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 700, fontSize: '1.18rem', color: '#1B2A4A', margin: '20px 0 0' }}>{w.title}</h3>
              <p style={{ fontSize: '0.98rem', lineHeight: 1.6, color: '#5A647A', margin: '10px 0 0' }}>{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Faculty (demo content — real profiles to follow) */}
      <section style={{ background: '#F2F4F7' }}>
        <div style={{ width: 'min(1180px, 92%)', margin: '0 auto', padding: 'clamp(56px, 7vw, 96px) 0' }}>
          <SectionHeader eyebrow="Our faculty" title="Learn from experienced academics & practitioners" center />
          <p style={{ fontSize: 'clamp(1.02rem, 1.3vw, 1.15rem)', lineHeight: 1.65, color: '#48536B', margin: '18px auto 0', maxWidth: '42em', textAlign: 'center' }}>
            Our programmes are led by qualified academics and industry practitioners who bring real-world insight into every session — combining UK academic rigour with practical, career-focused teaching.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 22, marginTop: 46 }}>
            {FACULTY.map((f) => (
              <div key={f.name} style={{ background: '#fff', border: '1px solid #E6E9F0', borderRadius: 18, padding: 26, textAlign: 'center' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={f.photo} alt={f.name} style={{ width: 96, height: 96, borderRadius: '50%', objectFit: 'cover', margin: '0 auto', display: 'block', border: '3px solid #FCE3B5' }} />
                <h3 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 700, fontSize: '1.12rem', color: '#1B2A4A', margin: '16px 0 0' }}>{f.name}</h3>
                <div style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 600, fontSize: 13, color: '#D4891A', marginTop: 4 }}>{f.role}</div>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.55, color: '#5A647A', margin: '12px 0 0' }}>{f.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations & Partnerships */}
      {accreditationPartners.length > 0 && (
        <section style={{ width: 'min(1180px, 92%)', margin: '0 auto', padding: 'clamp(56px, 7vw, 96px) 0' }}>
          <SectionHeader eyebrow="Accreditations & partnerships" title="Recognised & regulated by leading UK institutions" center />
          <p style={{ fontSize: 'clamp(1.02rem, 1.3vw, 1.15rem)', lineHeight: 1.65, color: '#48536B', margin: '18px auto 0', maxWidth: '42em', textAlign: 'center' }}>
            Every ESM qualification is awarded and quality-assured by established UK universities, regulated awarding organisations and professional bodies — so your certificate carries genuine international recognition.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16, marginTop: 46 }}>
            {accreditationPartners.map((p) => (
              <div key={p.name} style={{ background: '#fff', border: '1px solid #E6E9F0', borderRadius: 16, padding: '22px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 100 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.logoPath} alt={p.name} style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: 52 }} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Link href="/partners" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 700, fontSize: 15, color: '#D4891A', textDecoration: 'none' }}>
              View all partners →
            </Link>
          </div>
        </section>
      )}

      <EnquiryBlock />
    </>
  )
}
