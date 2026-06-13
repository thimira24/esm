import Link from 'next/link'
import { WhatsAppIcon } from '@/components/shared/icons'

export default function MobileCTABar({ whatsapp }: { whatsapp: string }) {
  return (
    <>
      <style>{`
        .esm-mobile-cta { display: flex; }
        @media (min-width: 768px) {
          .esm-mobile-cta { display: none; }
        }
      `}</style>
      <div
        className="esm-mobile-cta"
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 55,
          background: '#fff',
          borderTop: '1px solid #E6E9F0',
          padding: '10px 14px',
          gap: 10,
          boxShadow: '0 -6px 20px rgba(15,29,51,0.1)',
        }}
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
    </>
  )
}
