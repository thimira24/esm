import { getSiteSettings } from '@/sanity/queries'
import SectionHeader from '@/components/shared/SectionHeader'

export const revalidate = 60

const CARD_ILLUSTRATIONS = [
  '/illustrations/shield-check.png',
  '/illustrations/calendar.png',
  '/illustrations/global-recognition.png',
]

export default async function ValueProps() {
  const settings = await getSiteSettings()
  const values: { title: string; desc: string }[] = settings?.values ?? []

  return (
    <section style={{ width: 'min(1180px, 92%)', margin: '0 auto', padding: 'clamp(64px, 8vw, 108px) 0' }}>
      <SectionHeader eyebrow="Why ESM" title="Recognised qualifications, on your terms" center />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: 24,
          marginTop: 50,
        }}
      >
        {values.map((v, i) => (
          <div
            key={v.title}
            style={{
              background: '#fff',
              border: '1px solid #E6E9F0',
              borderRadius: 18,
              padding: '34px 30px',
              boxShadow: '0 1px 2px rgba(15,29,51,0.04)',
            }}
          >
            {CARD_ILLUSTRATIONS[i] ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={CARD_ILLUSTRATIONS[i]}
                alt=""
                style={{ width: 90, height: 90, objectFit: 'contain' }}
              />
            ) : null}
            <h3
              style={{
                fontFamily: 'var(--font-montserrat), sans-serif',
                fontWeight: 700,
                fontSize: '1.3rem',
                color: '#1B2A4A',
                margin: '22px 0 0',
              }}
            >
              {v.title}
            </h3>
            <p style={{ fontSize: '1rem', lineHeight: 1.62, color: '#5A647A', margin: '12px 0 0' }}>{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
