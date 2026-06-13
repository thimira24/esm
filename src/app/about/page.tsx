import Image from 'next/image'
import { testimonials, whyEsm, partners, aboutTimeline } from '@/data/site'
import EnquiryBlock from '@/components/shared/EnquiryBlock'

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4891A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" />
  </svg>
)

const visionCards = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M2 12h20M12 3a15 15 0 010 18M12 3a15 15 0 000 18" /></svg>,
    title: 'Access',
    desc: 'Removing the barriers of cost, location and rigid schedules.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 6.9H22l-6 4.4 2.3 7-6.3-4.4L5.7 20l2.3-7-6-4.4h7.6z" /></svg>,
    title: 'Excellence',
    desc: 'Only qualifications that are genuinely recognised and respected.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>,
    title: 'Impact',
    desc: 'Real outcomes — promotions, new roles and life-changing progress.',
  },
]

export default function AboutPage() {
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
              British education, rooted in the UAE
            </h1>
            <p style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.18rem)', lineHeight: 1.65, color: '#48536B', margin: '18px 0 0' }}>
              ESM Business School is the student-facing brand of ESM Global, an internationally operating education and business services company headquartered in the UAE. We bring recognised British qualifications to professionals across the region and around the world.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.65, color: '#48536B', margin: '16px 0 0' }}>
              Our mission is simple: make accredited, career-changing education flexible, affordable and genuinely supported — wherever our students happen to be.
            </p>
          </div>
          <div
            style={{
              position: 'relative',
              minHeight: 'clamp(280px, 34vw, 380px)',
              borderRadius: 24,
              background: 'radial-gradient(120% 120% at 80% 12%, rgba(245,166,35,0.45), transparent 52%), linear-gradient(135deg, #243a63, #0F1D33)',
              boxShadow: '0 26px 60px rgba(15,29,51,0.28)',
            }}
          >
            <div className="dot-pattern-sm" style={{ position: 'absolute', inset: 0, borderRadius: 24 }} />
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
          <span style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 600, fontSize: 13, letterSpacing: '1.5px', color: '#D4891A', textTransform: 'uppercase' }}>Our story</span>
          <h2
            style={{
              fontFamily: 'var(--font-montserrat), sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3.4vw, 2.5rem)',
              lineHeight: 1.12,
              letterSpacing: '-0.5px',
              color: '#1B2A4A',
              margin: '14px 0 0',
            }}
          >
            From a bold idea to a global classroom
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#48536B', margin: '18px 0 0' }}>
            ESM Business School began with a simple frustration: too many capable professionals in the UAE were locked out of recognised British qualifications by rigid timetables, travel and cost.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#48536B', margin: '16px 0 0' }}>
            So we built the alternative — accredited diplomas delivered flexibly, supported by real people, and rooted locally. What started with a handful of learners is now a community of thousands across the region and beyond.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 30 }}>
            {[{ n: '4,200+', l: 'Graduates' }, { n: '30+', l: 'Countries' }].map((s) => (
              <div key={s.n} style={{ flex: '1 1 130px', background: '#F2F4F7', borderRadius: 14, padding: '18px 20px' }}>
                <div style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 800, fontSize: '1.7rem', color: '#1B2A4A' }}>{s.n}</div>
                <div style={{ fontSize: 13, color: '#6B7689', marginTop: 2 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div style={{ background: '#fff', border: '1px solid #E6E9F0', borderRadius: 20, padding: 'clamp(26px, 3.5vw, 38px)', boxShadow: '0 14px 40px rgba(15,29,51,0.06)' }}>
          {aboutTimeline.map((item, i) => (
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
                {i < aboutTimeline.length - 1 && (
                  <span style={{ flex: 1, width: 2, background: '#EEF1F6', marginTop: 6 }} />
                )}
              </div>
              <div style={{ paddingBottom: i < aboutTimeline.length - 1 ? 26 : 0 }}>
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
          <span style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 600, fontSize: 13, letterSpacing: '1.8px', color: '#F5A623', textTransform: 'uppercase' }}>Our vision</span>
          <h2
            style={{
              fontFamily: 'var(--font-montserrat), sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              lineHeight: 1.2,
              letterSpacing: '-0.5px',
              color: '#fff',
              margin: '18px 0 0',
            }}
          >
            A world where a great career is never limited by where you happen to live.
          </h2>
          <p style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.2rem)', lineHeight: 1.65, color: '#C3CBDB', margin: '18px auto 0', maxWidth: '38em' }}>
            We&apos;re building the most trusted route to recognised qualifications for ambitious people across the UAE and the wider region — flexible, affordable and genuinely human.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18, marginTop: 46, textAlign: 'left' }}>
            {visionCards.map((card) => (
              <div key={card.title} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 16, padding: 26 }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 46, height: 46, borderRadius: 12, background: 'rgba(245,166,35,0.18)' }}>
                  {card.icon}
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
        <div style={{ textAlign: 'center', maxWidth: '40em', margin: '0 auto' }}>
          <span style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 600, fontSize: 13, letterSpacing: '1.5px', color: '#D4891A', textTransform: 'uppercase' }}>Why choose ESM</span>
          <h2 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3.4vw, 2.5rem)', lineHeight: 1.12, color: '#1B2A4A', margin: '14px 0 0' }}>
            What sets us apart
          </h2>
        </div>
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

      {/* Testimonials */}
      <section style={{ background: '#F2F4F7' }}>
        <div style={{ width: 'min(1180px, 92%)', margin: '0 auto', padding: 'clamp(56px, 7vw, 96px) 0' }}>
          <div style={{ textAlign: 'center', maxWidth: '40em', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 600, fontSize: 13, letterSpacing: '1.5px', color: '#D4891A', textTransform: 'uppercase' }}>Student success</span>
            <h2 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3.4vw, 2.5rem)', lineHeight: 1.12, letterSpacing: '-0.5px', color: '#1B2A4A', margin: '14px 0 0' }}>
              What our students say
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 24, marginTop: 46 }}>
            {testimonials.map((t) => (
              <div key={t.name} style={{ background: '#fff', borderRadius: 18, padding: '32px 30px', boxShadow: '0 1px 2px rgba(15,29,51,0.05)' }}>
                <div style={{ fontSize: 38, lineHeight: 0.6, color: '#F5A623', fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 800 }}>&ldquo;</div>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.62, color: '#33405C', margin: '14px 0 0' }}>{t.quote}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 13, marginTop: 24, paddingTop: 20, borderTop: '1px solid #F2F4F7' }}>
                  <Image src={t.img} alt={t.name} width={46} height={46} style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                  <span>
                    <span style={{ display: 'block', fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 700, fontSize: 15, color: '#1B2A4A' }}>{t.name}</span>
                    <span style={{ display: 'block', fontSize: 13, color: '#6B7689' }}>{t.role}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section style={{ background: 'linear-gradient(140deg, #1B2A4A, #0F1D33)', position: 'relative', overflow: 'hidden' }}>
        <div className="dot-pattern" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'relative', width: 'min(1180px, 92%)', margin: '0 auto', padding: 'clamp(54px, 7vw, 88px) 0', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 800, fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', color: '#fff', margin: 0 }}>
            Accreditations &amp; memberships
          </h2>
          <p style={{ color: '#B8C1D4', margin: '12px auto 0', maxWidth: '34em' }}>
            We partner with recognised UK awarding bodies and quality-assurance organisations.{' '}
            <span style={{ color: '#F5A623' }}>(Partner logos to be supplied by the ESM marketing team.)</span>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 16, marginTop: 38 }}>
            {partners.map((p) => (
              <div key={p.m} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 14, padding: '24px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 52, height: 52, borderRadius: 12, background: '#fff', fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 800, fontSize: 16, color: '#1B2A4A' }}>{p.m}</span>
                <span style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 600, fontSize: 13, color: '#C3CBDB' }}>{p.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnquiryBlock />
    </>
  )
}
