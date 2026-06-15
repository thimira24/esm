'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import type { Programme } from '@/data/programmes'
import ProgrammeCard from './ProgrammeCard'

export default function ProgrammesGrid({ programmes, universities: universitiesProp = [] }: { programmes: Programme[], universities?: string[] }) {
  const searchParams = useSearchParams()
  const catParam = searchParams.get('cat')
  const uniParam = searchParams.get('uni')

  const [catFilter, setCatFilter] = useState(catParam ?? 'all')
  const [uniFilter, setUniFilter] = useState(uniParam ?? 'all')

  useEffect(() => {
    setCatFilter(catParam ?? 'all')
    setUniFilter(uniParam ?? 'all')
  }, [catParam, uniParam])

  const categories = [
    'all',
    ...Array.from(new Set(programmes.map((p) => p.cat).filter(Boolean))),
  ]

  const universities = universitiesProp

  const filtered = programmes.filter((p) => {
    const catMatch = catFilter === 'all' || p.cat === catFilter
    const uniMatch = uniFilter === 'all' || p.uniName === uniFilter
    return catMatch && uniMatch
  })

  return (
    <section style={{ width: 'min(1180px, 92%)', margin: '0 auto', padding: 'clamp(40px, 5vw, 64px) 0' }}>
      {/* Filter bar: category chips (left) + university dropdown (right) */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          marginBottom: 38,
        }}
      >
        {/* Category pill buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {categories.map((cat) => {
            const active = catFilter === cat
            const label = cat === 'all' ? 'All Programmes' : cat
            return (
              <button
                key={cat}
                onClick={() => setCatFilter(cat)}
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
                {label}
              </button>
            )
          })}
        </div>

        {/* University dropdown — right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <label
            htmlFor="uni-filter"
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontWeight: 600,
              fontSize: 13.5,
              color: '#5A647A',
              whiteSpace: 'nowrap',
            }}
          >
            University
          </label>
          <select
            id="uni-filter"
            value={uniFilter}
            onChange={(e) => setUniFilter(e.target.value)}
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontWeight: 500,
              fontSize: 14,
              color: uniFilter === 'all' ? '#48536B' : '#1B2A4A',
              background: '#fff',
              border: uniFilter === 'all' ? '1.5px solid #D5DBE6' : '1.5px solid #1B2A4A',
              borderRadius: 10,
              padding: '10px 36px 10px 14px',
              cursor: 'pointer',
              outline: 'none',
              appearance: 'none',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%235A647A' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 12px center',
              minWidth: 200,
            }}
          >
            <option value="all">All Universities</option>
            {universities.map((uni) => (
              <option key={uni} value={uni}>{uni}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
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
          <h3 style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 800, fontSize: 'clamp(1.3rem, 2.4vw, 1.7rem)', color: '#1B2A4A', margin: 0 }}>
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
  )
}
