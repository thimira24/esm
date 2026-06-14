import type { PortableTextComponents } from '@portabletext/react'

export const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: '#3D4A60', margin: '0 0 18px' }}>{children}</p>
    ),
    h2: ({ children }) => (
      <h2
        style={{
          fontFamily: 'var(--font-montserrat), sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(1.35rem, 2.4vw, 1.7rem)',
          color: '#1B2A4A',
          margin: '44px 0 14px',
          lineHeight: 1.2,
        }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        style={{
          fontFamily: 'var(--font-montserrat), sans-serif',
          fontWeight: 700,
          fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)',
          color: '#1B2A4A',
          margin: '32px 0 10px',
          lineHeight: 1.3,
        }}
      >
        {children}
      </h3>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul style={{ margin: '0 0 18px', paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol style={{ margin: '0 0 18px', paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li style={{ fontSize: '1rem', lineHeight: 1.65, color: '#3D4A60' }}>{children}</li>
    ),
    number: ({ children }) => (
      <li style={{ fontSize: '1rem', lineHeight: 1.65, color: '#3D4A60' }}>{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => <strong style={{ fontWeight: 700, color: '#1B2A4A' }}>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    underline: ({ children }) => <span style={{ textDecoration: 'underline' }}>{children}</span>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.blank ? '_blank' : undefined}
        rel={value?.blank ? 'noopener noreferrer' : undefined}
        style={{ color: '#F5A623', textDecoration: 'underline' }}
      >
        {children}
      </a>
    ),
  },
}
