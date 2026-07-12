'use client'

import { useRef } from 'react'
import TestimonialCard from '@/components/shared/TestimonialCard'

type Item = { name: string; role: string; quote: string; img: string }

export default function TestimonialsCarousel({ items }: { items: Item[] }) {
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: number) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: el.clientWidth * 0.85 * dir, behavior: 'smooth' })
  }

  const arrow: React.CSSProperties = {
    width: 46,
    height: 46,
    borderRadius: '50%',
    border: '1px solid #E6E9F0',
    background: '#fff',
    color: '#1B2A4A',
    fontSize: 24,
    lineHeight: 1,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 6px 18px rgba(15,29,51,0.08)',
  }

  return (
    <div style={{ marginTop: 46 }}>
      <div
        ref={trackRef}
        className="tcar-track"
        style={{
          display: 'flex',
          gap: 24,
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
          paddingBottom: 6,
        }}
      >
        {items.map((t, i) => (
          <div key={i} style={{ flex: '0 0 auto', width: 'min(360px, 84%)', scrollSnapAlign: 'start' }}>
            <TestimonialCard quote={t.quote} name={t.name} role={t.role} img={t.img} />
          </div>
        ))}
      </div>

      {items.length > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 26 }}>
          <button onClick={() => scroll(-1)} aria-label="Previous testimonials" style={arrow}>‹</button>
          <button onClick={() => scroll(1)} aria-label="Next testimonials" style={arrow}>›</button>
        </div>
      )}

      <style>{`.tcar-track::-webkit-scrollbar{display:none} .tcar-track{scrollbar-width:none;-ms-overflow-style:none}`}</style>
    </div>
  )
}
