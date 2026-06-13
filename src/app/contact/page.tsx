import EnquiryForm from '@/components/shared/EnquiryForm'
import FAQAccordion from '@/components/shared/FAQAccordion'
import { faqs, contact } from '@/data/site'
import ContactMap from '@/components/contact/ContactMap'

const WhatsAppIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff">
    <path d="M12 2a10 10 0 00-8.6 15l-1.3 4.6 4.7-1.2A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-2.8.7.7-2.7-.2-.3A8 8 0 1112 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8 1-.3.2-.5.1a6.6 6.6 0 01-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.2 0-.4 0-.5l-.7-1.7c-.2-.5-.4-.4-.5-.4h-.5a1 1 0 00-.7.3 3 3 0 00-.9 2.2c0 1.3 1 2.6 1.1 2.8s1.9 2.9 4.6 4c1.7.7 2.3.8 3.1.7.5-.1 1.4-.6 1.6-1.1s.2-1 .1-1.1z" />
  </svg>
)

export default function ContactPage() {
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
          alignItems: 'start',
        }}
      >
        {/* Form */}
        <div>
          <h2
            style={{
              fontFamily: 'var(--font-montserrat), sans-serif',
              fontWeight: 800,
              fontSize: '1.5rem',
              color: '#1B2A4A',
              margin: '0 0 24px',
            }}
          >
            Enquiry form
          </h2>
          <EnquiryForm />
        </div>

        {/* Right — WhatsApp + address + map */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {/* WhatsApp CTA */}
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 15,
              background: '#25D366',
              borderRadius: 18,
              padding: '24px 26px',
              textDecoration: 'none',
              boxShadow: '0 12px 30px rgba(37,211,102,0.32)',
            }}
          >
            <span
              style={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 50,
                height: 50,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.2)',
              }}
            >
              <WhatsAppIcon />
            </span>
            <span>
              <span style={{ display: 'block', fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#fff' }}>
                Chat on WhatsApp
              </span>
              <span style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.9)' }}>
                Fastest way to reach an advisor
              </span>
            </span>
          </a>

          {/* Address + map */}
          <div style={{ background: '#fff', border: '1px solid #E6E9F0', borderRadius: 18, padding: 26 }}>
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
