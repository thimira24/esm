import { getLegalPage } from '@/sanity/queries'
import { PortableText } from '@portabletext/react'
import { portableTextComponents } from '@/components/shared/PortableTextComponents'

export const revalidate = 60

export default async function TermsPage() {
  const page = await getLegalPage('terms')

  return (
    <>
      <section style={{ background: '#F2F4F7', borderBottom: '1px solid #E6E9F0' }}>
        <div style={{ width: 'min(820px, 92%)', margin: '0 auto', padding: 'clamp(40px, 5vw, 64px) 0' }}>
          <h1
            style={{
              fontFamily: 'var(--font-montserrat), sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.9rem, 4vw, 2.8rem)',
              color: '#1B2A4A',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            {page?.title ?? 'Terms & Conditions'}
          </h1>
          {page?.lastUpdated && (
            <p style={{ fontSize: 14, color: '#9AA6BE', margin: '12px 0 0' }}>
              Last updated:{' '}
              {new Date(page.lastUpdated).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          )}
        </div>
      </section>

      <section style={{ width: 'min(820px, 92%)', margin: '0 auto', padding: 'clamp(48px, 6vw, 80px) 0' }}>
        {page?.content ? (
          <PortableText value={page.content} components={portableTextComponents} />
        ) : (
          <p style={{ color: '#9AA6BE' }}>Content coming soon.</p>
        )}
      </section>
    </>
  )
}
