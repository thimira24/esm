'use client'

import { useState } from 'react'
import Link from 'next/link'
import { programmes } from '@/data/programmes'
import ProgrammeCard from '@/components/programmes/ProgrammeCard'
import EnquiryBlock from '@/components/shared/EnquiryBlock'

type Filter = 'all' | 'business' | 'technology' | 'health'

const categories: { label: string; value: Filter }[] = [
  { label: 'All Programmes', value: 'all' },
  { label: 'Business & Management', value: 'business' },
  { label: 'Technology', value: 'technology' },
  { label: 'Health & Social Care', value: 'health' },
]

export default function ProgrammesPage() {
  const [filter, setFilter] = useState<Filter>('all')

  const filtered = filter === 'all' ? programmes : programmes.filter((p) => p.cat === filter)

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#F2F4F7', borderBottom: '1px solid #E6E9F0' }}>
        <div style={{ width: 'min(1180px, 92%)', margin: '0 auto', padding: 'clamp(48px, 6vw, 80px) 0' }}>
          <span
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: '1.5px',
              color: '#D4891A',
              textTransform: 'uppercase',
            }}
          >
            Programmes
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-montserrat), sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2.1rem, 4.5vw, 3.4rem)',
              lineHeight: 1.08,
              letterSpacing: '-1px',
              color: '#1B2A4A',
              margin: '14px 0 0',
            }}
          >
            Accredited diplomas across business, tech &amp; care
          </h1>
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.4vw, 1.18rem)',
              lineHeight: 1.6,
              color: '#48536B',
              margin: '16px 0 0',
              maxWidth: '40em',
            }}
          >
            Every programme is awarded by a recognised UK body and delivered flexibly online or blended. Filter by field to find your route.
          </p>
        </div>
      </section>

      {/* Programmes grid */}
      <section style={{ width: 'min(1180px, 92%)', margin: '0 auto', padding: 'clamp(40px, 5vw, 64px) 0' }}>
        {/* Category tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 38 }}>
          {categories.map((cat) => {
            const active = filter === cat.value
            return (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontWeight: 600,
                  fontSize: 14.5,
                  padding: '11px 20px',
                  borderRadius: 100,
                  cursor: 'pointer',
                  border: active ? '1.5px solid #1B2A4A' : '1.5px solid #D5DBE6',
                  background: active ? '#1B2A4A' : '#fff',
                  color: active ? '#fff' : '#48536B',
                  boxShadow: active ? '0 8px 20px rgba(27,42,74,0.25)' : 'none',
                  transition: 'all 0.15s',
                }}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 24,
          }}
        >
          {filtered.map((p) => (
            <ProgrammeCard key={p.id} programme={p} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: 46,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 20,
            background: '#F2F4F7',
            borderRadius: 20,
            padding: 'clamp(28px, 4vw, 42px)',
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-montserrat), sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(1.3rem, 2.4vw, 1.7rem)',
                color: '#1B2A4A',
                margin: 0,
              }}
            >
              Not sure which programme fits?
            </h3>
            <p style={{ fontSize: '1.02rem', color: '#5A647A', margin: '8px 0 0' }}>
              Tell us your goals and we&apos;ll point you to the right route.
            </p>
          </div>
          <Link
            href="/contact"
            style={{
              background: '#F5A623',
              color: '#1B2A4A',
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontWeight: 700,
              fontSize: 16,
              padding: '15px 28px',
              borderRadius: 11,
              textDecoration: 'none',
              boxShadow: '0 10px 24px rgba(245,166,35,0.38)',
            }}
          >
            Get free advice
          </Link>
        </div>
      </section>

      <EnquiryBlock />
    </>
  )
}
