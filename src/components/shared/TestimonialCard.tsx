import Image from 'next/image'

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  img: string
}

export default function TestimonialCard({ quote, name, role, img }: TestimonialCardProps) {
  return (
    <div
      style={{
        background: '#fff',
        borderRadius: 18,
        padding: '32px 30px',
        boxShadow: '0 1px 2px rgba(15,29,51,0.05)',
      }}
    >
      <div
        style={{
          fontSize: 38,
          lineHeight: 0.6,
          color: '#F5A623',
          fontFamily: 'var(--font-montserrat), sans-serif',
          fontWeight: 800,
        }}
      >
        &ldquo;
      </div>
      <p style={{ fontSize: '1.05rem', lineHeight: 1.62, color: '#33405C', margin: '14px 0 0' }}>
        {quote}
      </p>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 13,
          marginTop: 24,
          paddingTop: 20,
          borderTop: '1px solid #F2F4F7',
        }}
      >
        <Image
          src={img}
          alt={name}
          width={46}
          height={46}
          style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
        />
        <span>
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-montserrat), sans-serif',
              fontWeight: 700,
              fontSize: 15,
              color: '#1B2A4A',
            }}
          >
            {name}
          </span>
          <span style={{ display: 'block', fontSize: 13, color: '#6B7689' }}>{role}</span>
        </span>
      </div>
    </div>
  )
}
