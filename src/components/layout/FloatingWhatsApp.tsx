const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
    <path d="M12 2a10 10 0 00-8.6 15l-1.3 4.6 4.7-1.2A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-2.8.7.7-2.7-.2-.3A8 8 0 1112 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8 1-.3.2-.5.1a6.6 6.6 0 01-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.2 0-.4 0-.5l-.7-1.7c-.2-.5-.4-.4-.5-.4h-.5a1 1 0 00-.7.3 3 3 0 00-.9 2.2c0 1.3 1 2.6 1.1 2.8s1.9 2.9 4.6 4c1.7.7 2.3.8 3.1.7.5-.1 1.4-.6 1.6-1.1s.2-1 .1-1.1z" />
  </svg>
)

export default function FloatingWhatsApp({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        right: 22,
        bottom: 24,
        zIndex: 60,
        display: 'flex',
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
      className="hidden sm:flex"
    >
      <WhatsAppIcon />
      Enquire on WhatsApp
    </a>
  )
}
