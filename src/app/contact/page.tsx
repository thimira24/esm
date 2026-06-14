import EnquiryForm from '@/components/shared/EnquiryForm'
import FAQAccordion from '@/components/shared/FAQAccordion'
import ContactMap from '@/components/contact/ContactMap'
import { getAllProgrammeTitles, getSiteSettings, getFaqs } from '@/sanity/queries'

export const revalidate = 60

export default async function ContactPage() {
  const [programmes, settings, sanityFaqs] = await Promise.all([
    getAllProgrammeTitles(),
    getSiteSettings().catch(() => null),
    getFaqs().catch(() => []),
  ])
  const contact = settings?.contact ?? {}
  const faqs = (sanityFaqs ?? []).map((f: { question: string; answer: string }) => ({ q: f.question, a: f.answer }))

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#F2F4F7', borderBottom: '1px solid #E6E9F0' }}>
        <div style={{ width: 'min(1180px, 92%)', margin: '0 auto', padding: 'clamp(44px, 5vw, 72px) 0' }}>
          <span style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 600, fontSize: 13, letterSpacing: '1.5px', color: '#D4891A', textTransform: 'uppercase' }}>
            Contact
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
            Let&apos;s find your programme
          </h1>
          <p style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.18rem)', color: '#48536B', margin: '14px 0 0' }}>
            Send an enquiry and an advisor will respond — usually within 24 hours.
          </p>
        </div>
      </section>

      {/* Form + contact info */}
      <section
        style={{
          width: 'min(1180px, 92%)',
          margin: '0 auto',
          padding: 'clamp(48px, 6vw, 84px) 0',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(36px, 5vw, 56px)',
          alignItems: 'stretch',
        }}
      >
        {/* Form */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <EnquiryForm programmes={programmes} formspree={contact.formspree} />
        </div>

        {/* Right — address + map */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ background: '#fff', border: '1px solid #E6E9F0', borderRadius: 18, padding: 26, flexGrow: 1 }}>
            <h3 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#1B2A4A', margin: '0 0 14px' }}>
              Visit us
            </h3>
            <div style={{ fontSize: 15, lineHeight: 1.7, color: '#48536B' }}>
              ESM Business School<br />
              {contact.address}<br />
              <span style={{ color: '#A0A8B8' }}>(address to be supplied by client)</span><br />
              📞 {contact.phone}
            </div>
            <ContactMap />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ background: '#F2F4F7' }}>
        <div style={{ width: 'min(820px, 92%)', margin: '0 auto', padding: 'clamp(48px, 6vw, 84px) 0' }}>
          <h2 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 800, fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', color: '#1B2A4A', margin: '0 0 28px', textAlign: 'center' }}>
            Frequently asked questions
          </h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </>
  )
}
