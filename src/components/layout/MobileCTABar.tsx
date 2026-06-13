import Link from 'next/link'

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
    <path d="M12 2a10 10 0 00-8.6 15l-1.3 4.6 4.7-1.2A10 10 0 1012 2z" />
  </svg>
)

export default function MobileCTABar({ whatsapp }: { whatsapp: string }) {
  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 55,
        background: '#fff',
        borderTop: '1px solid #E6E9F0',
        padding: '10px 14px',
        display: 'flex',
        gap: 10,
        boxShadow: '0 -6px 20px rgba(15,29,51,0.1)',
      }}
      className="sm:hidden"
    >
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          background: '#25D366',
          color: '#fff',
          fontFamily: 'var(--font-dm-sans), sans-serif',
          fontWeight: 700,
          fontSize: 15,
          padding: 13,
          borderRadius: 11,
          textDecoration: 'none',
        }}
      >
        <WhatsAppIcon /> WhatsApp
      </a>
      <Link
        href="/contact"
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#F5A623',
          color: '#1B2A4A',
          fontFamily: 'var(--font-dm-sans), sans-serif',
          fontWeight: 700,
          fontSize: 15,
          padding: 13,
          borderRadius: 11,
          textDecoration: 'none',
        }}
      >
        Enquire Now
      </Link>
    </div>
  )
}
