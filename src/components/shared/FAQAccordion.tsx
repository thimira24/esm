'use client'

import { useState } from 'react'

interface FAQ {
  q: string
  a: string
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {faqs.map((faq, i) => (
        <div
          key={i}
          style={{ background: '#fff', border: '1px solid #E6E9F0', borderRadius: 14, overflow: 'hidden' }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 16,
              padding: '20px 24px',
              fontFamily: 'var(--font-montserrat), sans-serif',
              fontWeight: 700,
              fontSize: '1.05rem',
              color: '#1B2A4A',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {faq.q}
            <span
              style={{
                flexShrink: 0,
                color: '#F5A623',
                fontSize: 22,
                fontFamily: 'var(--font-dm-sans), sans-serif',
                transition: 'transform 0.2s',
                transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
              }}
            >
              +
            </span>
          </button>
          {open === i && (
            <div style={{ padding: '0 24px 22px', fontSize: '1.02rem', lineHeight: 1.65, color: '#5A647A' }}>
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
