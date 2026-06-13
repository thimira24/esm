interface SectionHeaderProps {
  eyebrow: string
  title: string
  center?: boolean
  light?: boolean // true = white text (for dark backgrounds)
  className?: string
}

export default function SectionHeader({ eyebrow, title, center = false, light = false }: SectionHeaderProps) {
  return (
    <div style={center ? { textAlign: 'center', maxWidth: '40em', margin: '0 auto' } : {}}>
      <span
        style={{
          fontFamily: 'var(--font-dm-sans), sans-serif',
          fontWeight: 600,
          fontSize: 13,
          letterSpacing: '1.5px',
          color: light ? '#F5A623' : '#D4891A',
          textTransform: 'uppercase',
        }}
      >
        {eyebrow}
      </span>
      <h2
        style={{
          fontFamily: 'var(--font-montserrat), sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(1.9rem, 3.6vw, 2.7rem)',
          lineHeight: 1.12,
          letterSpacing: '-0.5px',
          color: light ? '#fff' : '#1B2A4A',
          margin: '14px 0 0',
        }}
      >
        {title}
      </h2>
    </div>
  )
}
