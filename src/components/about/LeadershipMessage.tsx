'use client'

import { useEffect, useRef, useState } from 'react'

const COLLAPSED = 150 // px — roughly 5 lines before "See more"

export default function LeadershipMessage({ paragraphs }: { paragraphs: string[] }) {
  const [open, setOpen] = useState(false)
  const [overflowing, setOverflowing] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (el) setOverflowing(el.scrollHeight > COLLAPSED + 8)
  }, [paragraphs])

  return (
    <div>
      <div
        ref={ref}
        style={{
          position: 'relative',
          maxHeight: open ? undefined : COLLAPSED,
          overflow: 'hidden',
          transition: 'max-height 0.25s ease',
        }}
      >
        {paragraphs.map((p, i) => (
          <p key={i} style={{ fontSize: '1.02rem', lineHeight: 1.7, color: '#48536B', margin: i === 0 ? 0 : '14px 0 0' }}>{p}</p>
        ))}
        {!open && overflowing && (
          <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 54, background: 'linear-gradient(rgba(255,255,255,0), #fff)', pointerEvents: 'none' }} />
        )}
      </div>
      {overflowing && (
        <button
          onClick={() => setOpen((o) => !o)}
          style={{
            marginTop: 12,
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontWeight: 700,
            fontSize: 14,
            color: '#D4891A',
          }}
        >
          {open ? 'See less' : 'See more'}
        </button>
      )}
    </div>
  )
}
