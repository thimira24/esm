import EnquiryForm from '@/components/shared/EnquiryForm'
import { contact } from '@/data/site'

const CheckIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1F8A5B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
    <path d="M12 2a10 10 0 00-8.6 15l-1.3 4.6 4.7-1.2A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-2.8.7.7-2.7-.2-.3A8 8 0 1112 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8 1-.3.2-.5.1a6.6 6.6 0 01-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.2 0-.4 0-.5l-.7-1.7c-.2-.5-.4-.4-.5-.4h-.5a1 1 0 00-.7.3 3 3 0 00-.9 2.2c0 1.3 1 2.6 1.1 2.8s1.9 2.9 4.6 4c1.7.7 2.3.8 3.1.7.5-.1 1.4-.6 1.6-1.1s.2-1 .1-1.1z" />
  </svg>
)

const perks = [
  'Free, no-obligation programme advice',
  'Flexible monthly payment plans available',
  'We reply within 24 hours',
]

export default function EnquiryBlock() {
  return (
    <section style={{ background: '#F2F4F7', borderTop: '1px solid #E6E9F0' }}>
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
          <span
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: '1.5px',
              color: '#D4891A',
              textTransform: 'uppercase',
            }}
          >
            Enquire now
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-montserrat), sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.9rem, 3.6vw, 2.7rem)',
              lineHeight: 1.12,
              letterSpacing: '-0.5px',
              color: '#1B2A4A',
              margin: '14px 0 0',
              textWrap: 'balance',
            } as React.CSSProperties}
          >
            Take the first step toward your qualification
          </h2>
          <p
            style={{
              fontSize: 'clamp(1.02rem, 1.4vw, 1.15rem)',
              lineHeight: 1.6,
              color: '#48536B',
              margin: '16px 0 0',
              maxWidth: '32em',
            }}
          >
            Share a few details and an advisor will recommend the right programme, start date and payment plan — usually within 24 hours.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 28 }}>
            {perks.map((perk) => (
              <div key={perk} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
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
                    fontSize: 15,
                    color: '#33405C',
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontWeight: 500,
                  }}
                >
                  {perk}
                </span>
              </div>
            ))}
          </div>

          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 9,
              marginTop: 28,
              background: '#25D366',
              color: '#fff',
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontWeight: 700,
              fontSize: 15,
              padding: '13px 22px',
              borderRadius: 11,
              textDecoration: 'none',
              boxShadow: '0 10px 24px rgba(37,211,102,0.3)',
            }}
          >
            <WhatsAppIcon /> Prefer WhatsApp? Chat now
          </a>
        </div>

        {/* Right — form */}
        <EnquiryForm />
      </div>
    </section>
  )
}
