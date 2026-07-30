import Link from 'next/link'
import type { ReactNode } from 'react'
import SectionHeader from '@/components/shared/SectionHeader'
import EnquiryForm from '@/components/shared/EnquiryForm'
import { CheckIcon } from '@/components/shared/icons'
import { getSiteSettings } from '@/sanity/queries'
import { pageMetadata } from '@/lib/seo'

export const revalidate = 60

export const metadata = pageMetadata({
  title: 'New Zealand Chapter — Healthcare Education',
  description:
    'ESM New Zealand Chapter delivers internationally recognised, UK-awarded health & social care qualifications for New Zealand healthcare professionals — including the NZQA Level 8 Diploma. 100% online, flexible study.',
  path: '/nz',
})

const NZ_PHONE_DISPLAY = '+64 22 457 9249'
const NZ_PHONE_TEL = '+64224579249'
const NZ_WHATSAPP = 'https://wa.me/64224579249'

const NAVY = '#1B2A4A'
const GOLD = '#F5A623'
const GOLD_DEEP = '#D4891A'

// Line-icon set (feather-style) for the "Why choose" cards.
const icon = (paths: ReactNode) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={GOLD_DEEP} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {paths}
  </svg>
)

const WHY = [
  {
    title: 'Healthcare-Focused Education',
    desc: 'Specialist programmes designed exclusively for health and social care professionals.',
    icon: icon(<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.29 1.51 4.04 3 5.5l7 7z" />),
  },
  {
    title: 'Internationally Recognised Qualifications',
    desc: 'Gain respected qualifications that support professional growth and global career opportunities.',
    icon: icon(<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 010 18 15 15 0 010-18" /></>),
  },
  {
    title: 'Flexible Learning',
    desc: 'Study online from anywhere while balancing your work and personal commitments.',
    icon: icon(<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>),
  },
  {
    title: 'Industry-Relevant Curriculum',
    desc: 'Develop practical skills and leadership capabilities aligned with today’s healthcare challenges.',
    icon: icon(<><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" /></>),
  },
  {
    title: 'Dedicated Student Support',
    desc: 'Receive guidance from enrolment through to graduation with a team committed to your success.',
    icon: icon(<><path d="M17 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" /><circle cx="9.5" cy="7" r="4" /><path d="M22 21v-2a4 4 0 00-3-3.87" /></>),
  },
]

const HIGHLIGHTS = [
  'NZQA Level 8 Equivalent Qualification',
  'UK Awarded Qualification',
  '100% Online Learning',
  'Flexible Study for Working Professionals',
  'Internationally Recognised',
  'Progression Opportunities to Higher Qualifications',
]

const TRUST_CHIPS = ['NZQA Level 8', 'UK Awarded', '100% Online']

export default async function NewZealandPage() {
  const settings = await getSiteSettings().catch(() => null)
  const formspree: string | undefined = settings?.contact?.formspree

  // NZ-specific option for the enquiry form's programme dropdown.
  const nzProgrammes = [
    { id: 'nzqa-l8', title: 'NZQA Level 8 Diploma in Health & Social Care', uniName: 'UK Awarded' },
  ]

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        style={{
          background: [
            'radial-gradient(ellipse 70% 90% at 100% 0%, rgba(245,166,35,0.18) 0%, transparent 55%)',
            'radial-gradient(ellipse 55% 70% at 0% 100%, rgba(27,42,74,0.08) 0%, transparent 50%)',
            'linear-gradient(135deg, #EDF0F7 0%, #F5F3EF 100%)',
          ].join(', '),
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: 'min(880px, 92%)',
            margin: '0 auto',
            padding: 'clamp(64px, 9vw, 120px) 0 clamp(56px, 7vw, 96px)',
            textAlign: 'center',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: '1.5px',
              color: GOLD_DEEP,
              textTransform: 'uppercase',
            }}
          >
            <span style={{ width: 24, height: 2, background: GOLD, display: 'inline-block' }} />
            ESM · New Zealand Chapter
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-montserrat), sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2.1rem, 5vw, 3.4rem)',
              lineHeight: 1.06,
              letterSpacing: '-1px',
              color: NAVY,
              margin: '20px 0 0',
              textWrap: 'balance',
            }}
          >
            Educating Healthcare Professionals. Transforming Healthcare.
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.5vw, 1.22rem)',
              lineHeight: 1.65,
              color: '#48536B',
              margin: '22px auto 0',
              maxWidth: '44em',
            }}
          >
            ESM — New Zealand Chapter is dedicated to advancing the healthcare workforce through
            high-quality, internationally recognised education. Our programmes equip professionals with
            the knowledge, leadership, and practical skills needed to thrive in today’s evolving health
            and social care environment.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 34, justifyContent: 'center' }}>
            <a
              href="#enquire"
              style={{
                background: GOLD,
                color: NAVY,
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontWeight: 700,
                fontSize: 16,
                padding: '15px 30px',
                borderRadius: 11,
                boxShadow: '0 10px 26px rgba(245,166,35,0.4)',
                textDecoration: 'none',
              }}
            >
              Enquire Now
            </a>
            <a
              href="#programme"
              style={{
                background: '#fff',
                color: NAVY,
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontWeight: 700,
                fontSize: 16,
                padding: '15px 30px',
                borderRadius: 11,
                border: '1.5px solid #D5DBE6',
                textDecoration: 'none',
              }}
            >
              View Featured Programme
            </a>
          </div>

          {/* Trust chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 30, justifyContent: 'center' }}>
            {TRUST_CHIPS.map((chip) => (
              <span
                key={chip}
                style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontWeight: 600,
                  fontSize: 13,
                  color: '#33405C',
                  background: 'rgba(255,255,255,0.75)',
                  border: '1px solid #E1E5EF',
                  borderRadius: 999,
                  padding: '8px 16px',
                }}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why choose ───────────────────────────────────── */}
      <section style={{ width: 'min(1180px, 92%)', margin: '0 auto', padding: 'clamp(64px, 8vw, 104px) 0' }}>
        <SectionHeader eyebrow="Why choose us" title="Why Choose ESM — New Zealand Chapter?" center />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: 24,
            marginTop: 50,
          }}
        >
          {WHY.map((v) => (
            <div
              key={v.title}
              style={{
                background: '#fff',
                border: '1px solid #E6E9F0',
                borderRadius: 18,
                padding: '32px 28px',
                boxShadow: '0 1px 2px rgba(15,29,51,0.04)',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 54,
                  height: 54,
                  borderRadius: 14,
                  background: '#FFF4E2',
                }}
              >
                {v.icon}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-montserrat), sans-serif',
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  color: NAVY,
                  margin: '20px 0 0',
                }}
              >
                {v.title}
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: 1.62, color: '#5A647A', margin: '10px 0 0' }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Educational approach (navy band) ─────────────── */}
      <section style={{ background: NAVY }}>
        <div
          style={{
            width: 'min(820px, 92%)',
            margin: '0 auto',
            padding: 'clamp(64px, 8vw, 104px) 0',
            textAlign: 'center',
          }}
        >
          <SectionHeader eyebrow="Our approach" title="Our Educational Approach" center light />
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.5vw, 1.2rem)',
              lineHeight: 1.7,
              color: '#C4CCDD',
              margin: '22px auto 0',
              maxWidth: '46em',
            }}
          >
            We believe healthcare education should be practical, accessible, and transformative. Our
            programmes combine academic excellence with real-world application, empowering professionals
            to improve patient outcomes, strengthen healthcare services, and become future leaders in the
            health and social care sector.
          </p>
        </div>
      </section>

      {/* ── Featured programme ───────────────────────────── */}
      <section id="programme" style={{ background: '#F2F4F7', borderTop: '1px solid #E6E9F0' }}>
        <div
          style={{
            width: 'min(1180px, 92%)',
            margin: '0 auto',
            padding: 'clamp(64px, 8vw, 104px) 0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(36px, 5vw, 60px)',
            alignItems: 'center',
          }}
        >
          {/* Left — copy */}
          <div>
            <SectionHeader eyebrow="Featured programme" title="NZQA Level 8 Diploma in Health & Social Care (UK)" />
            <p
              style={{
                fontSize: 'clamp(1.02rem, 1.4vw, 1.15rem)',
                lineHeight: 1.66,
                color: '#48536B',
                margin: '18px 0 0',
                maxWidth: '34em',
              }}
            >
              Advance your career with a postgraduate-level qualification benchmarked to the New Zealand
              Qualifications Framework (NZQF) Level 8. Designed for healthcare professionals, this
              programme develops advanced knowledge in leadership, healthcare management, quality
              improvement, and evidence-based practice.
            </p>
            <a
              href="#enquire"
              style={{
                display: 'inline-block',
                marginTop: 28,
                background: GOLD,
                color: NAVY,
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontWeight: 700,
                fontSize: 16,
                padding: '14px 28px',
                borderRadius: 11,
                boxShadow: '0 10px 24px rgba(245,166,35,0.35)',
                textDecoration: 'none',
              }}
            >
              Learn More
            </a>
          </div>

          {/* Right — highlights card */}
          <div
            style={{
              background: '#fff',
              border: '1px solid #E6E9F0',
              borderRadius: 22,
              padding: 'clamp(28px, 3.5vw, 40px)',
              boxShadow: '0 20px 50px rgba(15,29,51,0.1)',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                color: GOLD_DEEP,
                margin: '0 0 20px',
              }}
            >
              Programme Highlights
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {HIGHLIGHTS.map((h) => (
                <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span
                    style={{
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 34,
                      height: 34,
                      borderRadius: 9,
                      background: '#EAF7EF',
                    }}
                  >
                    <CheckIcon />
                  </span>
                  <span
                    style={{
                      fontSize: 15.5,
                      color: '#33405C',
                      fontFamily: 'var(--font-dm-sans), sans-serif',
                      fontWeight: 500,
                    }}
                  >
                    {h}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Enquiry / CTA ────────────────────────────────── */}
      <section id="enquire" style={{ background: '#fff', borderTop: '1px solid #E6E9F0' }}>
        <div
          style={{
            width: 'min(1180px, 92%)',
            margin: '0 auto',
            padding: 'clamp(56px, 7vw, 96px) 0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(36px, 5vw, 60px)',
            alignItems: 'center',
          }}
        >
          {/* Left */}
          <div>
            <SectionHeader eyebrow="Enquire now" title="Start Your Journey with ESM — New Zealand Chapter" />
            <p
              style={{
                fontSize: 'clamp(1.02rem, 1.4vw, 1.15rem)',
                lineHeight: 1.62,
                color: '#48536B',
                margin: '16px 0 0',
                maxWidth: '34em',
              }}
            >
              Invest in your professional future with education that is flexible, globally recognised, and
              designed for the evolving healthcare industry. Join ESM New Zealand and become part of a
              community committed to advancing healthcare through education.
            </p>

            {/* Contact chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 26 }}>
              <a
                href={`tel:${NZ_PHONE_TEL}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontWeight: 700,
                  fontSize: 15,
                  color: NAVY,
                  background: '#F2F4F7',
                  border: '1px solid #E1E5EF',
                  borderRadius: 11,
                  padding: '12px 18px',
                  textDecoration: 'none',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GOLD_DEEP} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                {NZ_PHONE_DISPLAY}
              </a>
              <a
                href={NZ_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontWeight: 700,
                  fontSize: 15,
                  color: '#fff',
                  background: '#25D366',
                  borderRadius: 11,
                  padding: '12px 18px',
                  textDecoration: 'none',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.16c-.24.68-1.42 1.31-1.96 1.36-.5.05-1.14.08-1.84-.12-.42-.13-.97-.31-1.66-.61-2.93-1.27-4.84-4.22-4.99-4.42-.15-.2-1.2-1.59-1.2-3.03s.76-2.15 1.03-2.45c.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2.01.89 2.16.07.15.12.32.02.51-.1.19-.15.32-.29.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.02 1.12 1 2.07 1.31 2.36 1.46.29.15.46.12.63-.07.17-.2.73-.85.92-1.14.19-.29.39-.24.66-.15.27.1 1.7.8 1.99.95.29.15.48.22.55.34.07.12.07.68-.17 1.36z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right — form */}
          <EnquiryForm
            programmes={nzProgrammes}
            formspree={formspree}
            subject="New enquiry — ESM New Zealand"
            source="NZ Landing Page (/nz)"
          />
        </div>
      </section>
    </>
  )
}
