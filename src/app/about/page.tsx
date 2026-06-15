import Image from 'next/image'
import { getSiteSettings } from '@/sanity/queries'
import EnquiryBlock from '@/components/shared/EnquiryBlock'
import SectionHeader from '@/components/shared/SectionHeader'
import Testimonials from '@/components/home/Testimonials'
import { ShieldIcon } from '@/components/shared/icons'

export const revalidate = 60

const VISION_ICONS = [
  <svg key="globe" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M2 12h20M12 3a15 15 0 010 18M12 3a15 15 0 000 18" /></svg>,
  <svg key="star" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 6.9H22l-6 4.4 2.3 7-6.3-4.4L5.7 20l2.3-7-6-4.4h7.6z" /></svg>,
  <svg key="check" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>,
  <svg key="heart" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>,
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
  const settings = await getSiteSettings().catch(() => null)

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
          {whyEsm.map((w) => (
            <div key={w.title} style={{ background: '#fff', border: '1px solid #E6E9F0', borderRadius: 18, padding: '30px 26px' }}>
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 50, height: 50, borderRadius: 13, background: 'linear-gradient(135deg, #FFF3DE, #FCE3B5)' }}>
                <ShieldIcon />
              </span>
              <h3 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 700, fontSize: '1.18rem', color: '#1B2A4A', margin: '20px 0 0' }}>{w.title}</h3>
              <p style={{ fontSize: '0.98rem', lineHeight: 1.6, color: '#5A647A', margin: '10px 0 0' }}>{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />
      <EnquiryBlock />
    </>
  )
}
