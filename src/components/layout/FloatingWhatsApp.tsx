import { WhatsAppIcon } from '@/components/shared/icons'

export default function FloatingWhatsApp({ href }: { href: string }) {
  return (
    <>
      <style>{`
        .esm-floating-wa { display: none; }
        @media (min-width: 768px) {
          .esm-floating-wa { display: flex; }
        }
      `}</style>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="esm-floating-wa"
        style={{
          position: 'fixed',
          right: 22,
          bottom: 24,
          zIndex: 60,
          alignItems: 'center',
          gap: 10,
          background: '#25D366',
          color: '#fff',
          padding: '13px 18px 13px 14px',
          borderRadius: 100,
          textDecoration: 'none',
          boxShadow: '0 12px 30px rgba(37,211,102,0.45)',
          fontFamily: 'var(--font-dm-sans), sans-serif',
          fontWeight: 700,
          fontSize: 14.5,
        }}
      >
        <WhatsAppIcon size={24} />
        Enquire on WhatsApp
      </a>
    </>
  )
}
