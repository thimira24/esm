import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getAllProgrammes, getProgrammeById, getSiteSettings, getFaqs } from '@/sanity/queries'
import ProgrammeCard from '@/components/programmes/ProgrammeCard'
import FAQAccordion from '@/components/shared/FAQAccordion'
import { CheckIcon, StarIcon, WhatsAppIcon } from '@/components/shared/icons'

export const revalidate = 60

export async function generateStaticParams() {
  const programmes = await getAllProgrammes()
  return programmes.map((p) => ({ id: p.id }))
}

// UAE Dirham is pegged to USD at a fixed official rate (1 USD = 3.6725 AED).
const AED_PER_USD = 3.6725

// Convert an "AED 25,000" style fee to a rounded USD display, e.g. "≈ US$ 6,810".
// Returns null if no numeric amount can be parsed, so the USD line is simply hidden.
function feeInUsd(fee?: string): string | null {
  if (!fee) return null
  const amount = parseFloat(fee.replace(/[^\d.]/g, ''))
  if (!amount || Number.isNaN(amount)) return null
  const usd = Math.round(amount / AED_PER_USD / 10) * 10
  return `≈ US$ ${usd.toLocaleString('en-US')}`
}

const studyMethods = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4891A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Online & flexible',
    desc: 'Study from anywhere, fitting learning around work and family.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4891A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Live tutor support',
    desc: 'Scheduled live sessions and a personal tutor throughout.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4891A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6M9 15l2 2 4-4" />
      </svg>
    ),
    title: 'Coursework assessed',
    desc: 'Assessed through applied assignments — no exam halls.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4891A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" /><path d="M12 7.5V12l3 1.8" />
      </svg>
    ),
    title: 'Self-paced units',
    desc: 'Structured units you progress through at your own pace.',
  },
]

const partnerFacts = [
  { text: 'Ranked <strong style="color:#1B2A4A">#6 in the UK</strong> for Business and Management studies' },
  { text: 'Commendation from the <strong style="color:#1B2A4A">Quality Assurance Agency (QAA)</strong> in the UK' },
  { text: 'Awarded <strong style="color:#1B2A4A">Silver</strong> by the Teaching Excellence Framework (TEF)' },
  { text: 'A <strong style="color:#1B2A4A">96% graduate employability rate</strong> for their students' },
  { text: 'A rich <strong style="color:#1B2A4A">190-year history</strong> and international recognition' },
]

export default async function ProgrammeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const [programme, allProgrammes, settings, sanityFaqs] = await Promise.all([
    getProgrammeById(id),
    getAllProgrammes(),
    getSiteSettings().catch(() => null),
    getFaqs().catch(() => []),
  ])
  const contact = settings?.contact ?? {}
  const faqs = (sanityFaqs ?? []).map((f: { question: string; answer: string }) => ({ q: f.question, a: f.answer }))
  if (!programme) notFound()

  const feeUsd = feeInUsd(programme.fee)

  const similar = allProgrammes
    .filter((p) => p.cat === programme.cat && p.id !== programme.id)
    .concat(allProgrammes.filter((p) => p.cat !== programme.cat && p.id !== programme.id))
    .slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: 'radial-gradient(120% 130% at 88% 8%, rgba(245,166,35,0.4), transparent 50%), linear-gradient(140deg, #1B2A4A, #0F1D33)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="dot-pattern" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'relative', width: 'min(1180px, 92%)', margin: '0 auto', padding: 'clamp(44px, 6vw, 76px) 0' }}>
          <Link
            href="/programmes"
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontWeight: 600,
              fontSize: 14,
              color: '#C3CBDB',
              textDecoration: 'none',
            }}
          >
            ← All programmes
          </Link>
          <span
            style={{
              display: 'inline-block',
              margin: '20px 0 0',
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontWeight: 700,
              fontSize: 12,
              color: '#1B2A4A',
              background: '#F5A623',
              padding: '6px 13px',
              borderRadius: 100,
              whiteSpace: 'nowrap',
            }}
          >
            {programme.level}
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-montserrat), sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4.4vw, 3.2rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.8px',
              color: '#fff',
              margin: '16px 0 0',
              maxWidth: '18em',
            }}
          >
            {programme.title}
          </h1>
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.4vw, 1.2rem)',
              lineHeight: 1.6,
              color: '#C3CBDB',
              margin: '16px 0 0',
              maxWidth: '36em',
            }}
          >
            {programme.blurb}
          </p>
          <Link
            href="/contact"
            style={{
              display: 'inline-block',
              marginTop: 28,
              background: '#F5A623',
              color: '#1B2A4A',
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontWeight: 700,
              fontSize: 16,
              padding: '15px 28px',
              borderRadius: 11,
              textDecoration: 'none',
              boxShadow: '0 12px 28px rgba(245,166,35,0.4)',
            }}
          >
            Enquire about this programme
          </Link>
        </div>
      </section>

      {/* Key facts bar */}
      <section style={{ borderBottom: '1px solid #E6E9F0' }}>
        <div
          style={{
            width: 'min(1180px, 92%)',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: 1,
            background: '#E6E9F0',
          }}
        >
          {[
            { label: 'Duration', value: programme.duration },
            { label: 'Mode', value: programme.mode },
            { label: 'Awarding body', value: programme.awarding },
            { label: 'Indicative fee', value: feeUsd ? `${programme.fee} · ${feeUsd}` : programme.fee },
          ].map((fact) => (
            <div key={fact.label} style={{ background: '#fff', padding: '24px 20px' }}>
              <div
                style={{
                  fontSize: 12,
                  color: '#8A93A6',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontWeight: 600,
                }}
              >
                {fact.label}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-montserrat), sans-serif',
                  fontWeight: 700,
                  fontSize: '1.15rem',
                  color: '#1B2A4A',
                  marginTop: 6,
                }}
              >
                {fact.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main content + sidebar */}
      <section
        style={{
          width: 'min(1180px, 92%)',
          margin: '0 auto',
          padding: 'clamp(48px, 6vw, 84px) 0',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(36px, 5vw, 64px)',
          alignItems: 'start',
        }}
      >
        {/* Left — main content */}
        <div>
          <h2 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', color: '#1B2A4A', margin: 0 }}>
            Programme overview
          </h2>
          {programme.overview.map((para, i) => (
            <p key={i} style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#48536B', margin: '16px 0 0' }}>{para}</p>
          ))}

          <h2 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', color: '#1B2A4A', margin: '44px 0 0' }}>
            What you&apos;ll learn
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginTop: 20 }}>
            {programme.modules.map((m) => (
              <div key={m} style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#F2F4F7', borderRadius: 12, padding: '15px 16px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, borderRadius: 8, background: '#fff' }}>
                  <CheckIcon color="#D4891A" />
                </span>
                <span style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 600, fontSize: 14.5, color: '#1B2A4A' }}>{m}</span>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', color: '#1B2A4A', margin: '44px 0 0' }}>
            Entry requirements
          </h2>
          <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {programme.entry.map((e) => (
              <div key={e} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <span style={{ flexShrink: 0, marginTop: 3, width: 20, height: 20, borderRadius: '50%', background: '#EAF7EF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckIcon />
                </span>
                <span style={{ fontSize: '1.02rem', lineHeight: 1.55, color: '#48536B' }}>{e}</span>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', color: '#1B2A4A', margin: '44px 0 0' }}>
            Why choose {programme.awarding}
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#48536B', margin: '16px 0 0' }}>
            Your qualification is awarded by one of the UK&apos;s most established universities — a globally respected institution combining nearly two centuries of academic heritage with a sharp, modern focus on employability and career outcomes.
          </p>

          {/* Partner stats */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 24 }}>
            {[{ n: '#6', l: 'UK ranking · Business & Management' }, { n: '96%', l: 'Graduate employability' }, { n: '190', l: 'Years of heritage' }].map((s) => (
              <div key={s.n} style={{ flex: '1 1 130px', background: '#F2F4F7', borderRadius: 14, padding: '18px 20px' }}>
                <div style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 800, fontSize: '1.7rem', color: '#1B2A4A' }}>{s.n}</div>
                <div style={{ fontSize: 13, color: '#6B7689', marginTop: 2 }}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* Accreditation card */}
          <div style={{ marginTop: 20, background: '#F2F4F7', borderRadius: 18, padding: 'clamp(22px, 3vw, 30px)' }}>
            <div style={{ paddingBottom: 18, borderBottom: '1px solid #E6E9F0' }}>
              <div style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 600, fontSize: 12, letterSpacing: '0.5px', textTransform: 'uppercase', color: '#8A93A6' }}>Rankings &amp; accreditations</div>
              <div style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 700, fontSize: '1.15rem', color: '#1B2A4A', marginTop: 4 }}>{programme.awarding}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 18 }}>
              {partnerFacts.map((fact, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <span style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, borderRadius: '50%', background: '#FFF3DE' }}>
                    <StarIcon />
                  </span>
                  <span
                    style={{ fontSize: '1.02rem', lineHeight: 1.5, color: '#33405C' }}
                    dangerouslySetInnerHTML={{ __html: fact.text }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Study method */}
          <h2 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', color: '#1B2A4A', margin: '44px 0 0' }}>
            Study method
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 14, marginTop: 20 }}>
            {studyMethods.map((sm) => (
              <div key={sm.title} style={{ background: '#fff', border: '1px solid #E6E9F0', borderRadius: 16, padding: 22 }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: 11, background: 'linear-gradient(135deg, #FFF3DE, #FCE3B5)' }}>
                  {sm.icon}
                </span>
                <h3 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#1B2A4A', margin: '14px 0 0' }}>{sm.title}</h3>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.55, color: '#5A647A', margin: '6px 0 0' }}>{sm.desc}</p>
              </div>
            ))}
          </div>

          {/* Fee */}
          <h2 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', color: '#1B2A4A', margin: '44px 0 0' }}>
            Course fee
          </h2>
          <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, alignItems: 'start' }}>
            <div style={{ background: 'linear-gradient(140deg, #1B2A4A, #0F1D33)', borderRadius: 18, padding: 26, color: '#fff' }}>
              <div style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 600, fontSize: 12, letterSpacing: '0.5px', textTransform: 'uppercase', color: '#9AA6BE' }}>Total programme fee</div>
              <div style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 2.6rem)', color: '#F5A623', marginTop: 6 }}>{programme.fee}</div>
              {feeUsd && (
                <div style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 600, fontSize: 16, color: '#C3CBDB', marginTop: 3 }}>{feeUsd}</div>
              )}
              <div style={{ fontSize: 14, color: '#C3CBDB', marginTop: 4 }}>or flexible monthly instalments</div>
              <Link
                href="/contact"
                style={{
                  display: 'block',
                  width: '100%',
                  marginTop: 18,
                  background: '#F5A623',
                  color: '#1B2A4A',
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontWeight: 700,
                  fontSize: 15,
                  padding: 13,
                  borderRadius: 10,
                  textDecoration: 'none',
                  textAlign: 'center',
                }}
              >
                Ask about payment plans
              </Link>
            </div>
            <div style={{ background: '#fff', border: '1px solid #E6E9F0', borderRadius: 18, padding: 26 }}>
              <div style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#1B2A4A' }}>What&apos;s included</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginTop: 14 }}>
                {['Full tuition & learning materials', 'Personal tutor support', 'All assessment & marking', 'Official certification on completion'].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                    <span style={{ flexShrink: 0, width: 20, height: 20, borderRadius: '50%', background: '#EAF7EF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <CheckIcon />
                    </span>
                    <span style={{ fontSize: '0.98rem', color: '#48536B' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right — sticky sidebar */}
        <aside style={{ position: 'sticky', top: 96 }}>
          <div style={{ background: '#fff', border: '1px solid #E6E9F0', borderRadius: 20, padding: 28, boxShadow: '0 14px 40px rgba(15,29,51,0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
              <span style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 64, height: 48, borderRadius: 12, background: '#F4F6FA', border: '1px solid #E6E9F0', padding: '6px 10px' }}>
                <Image
                  src={programme.uniLogo}
                  alt={programme.uniName}
                  width={56}
                  height={36}
                  style={{ objectFit: 'contain', width: '100%', height: 36 }}
                />
              </span>
              <div>
                <div style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 700, fontSize: 15, color: '#1B2A4A' }}>Accredited award</div>
                <div style={{ fontSize: 13, color: '#6B7689' }}>{programme.awarding}</div>
              </div>
            </div>
            <p style={{ fontSize: '0.98rem', lineHeight: 1.6, color: '#5A647A', margin: '18px 0 0' }}>
              Speak to an advisor about start dates, payment plans and the fastest route to enrol.
            </p>
            <Link
              href="/contact"
              style={{
                display: 'block',
                width: '100%',
                marginTop: 20,
                background: '#F5A623',
                color: '#1B2A4A',
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontWeight: 700,
                fontSize: 16,
                padding: 15,
                borderRadius: 11,
                textDecoration: 'none',
                textAlign: 'center',
              }}
            >
              Enquire now
            </Link>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 9,
                width: '100%',
                marginTop: 11,
                background: '#25D366',
                color: '#fff',
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontWeight: 700,
                fontSize: 15,
                padding: 14,
                borderRadius: 11,
                textDecoration: 'none',
              }}
            >
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
          </div>

          {/* Testimonial */}
          <div style={{ background: '#1B2A4A', borderRadius: 20, padding: 26, marginTop: 18 }}>
            <div style={{ fontSize: 38, lineHeight: 0.6, color: '#F5A623', fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 800 }}>&ldquo;</div>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#E4E8F0', margin: '12px 0 0' }}>
              The credential opened the door — I moved into the role I&apos;d been aiming at for years.
            </p>
            <div style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 700, fontSize: 14, color: '#fff', marginTop: 16 }}>
              Daniel M. <span style={{ fontWeight: 400, color: '#9AA6BE', fontFamily: 'var(--font-open-sans), sans-serif' }}>· Graduate</span>
            </div>
          </div>
        </aside>
      </section>

      {/* Similar courses */}
      <section style={{ background: '#F2F4F7' }}>
        <div style={{ width: 'min(1180px, 92%)', margin: '0 auto', padding: 'clamp(48px, 6vw, 80px) 0' }}>
          <h2 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 800, fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', letterSpacing: '-0.4px', color: '#1B2A4A', margin: 0 }}>
            Similar courses
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginTop: 28 }}>
            {similar.map((p) => (
              <ProgrammeCard key={p.id} programme={p} compact />
            ))}
          </div>
        </div>
      </section>

      {/* Programme FAQs */}
      <section style={{ width: 'min(820px, 92%)', margin: '0 auto', padding: 'clamp(48px, 6vw, 84px) 0' }}>
        <h2 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 800, fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', color: '#1B2A4A', margin: '0 0 28px', textAlign: 'center' }}>
          Programme FAQs
        </h2>
        <FAQAccordion faqs={faqs} />
      </section>
    </>
  )
}
