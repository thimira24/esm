'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

// Add Sanity CDN sizing params (no-op for local placeholder SVGs).
const sized = (src: string, params: string) =>
  src.includes('cdn.sanity.io') ? `${src}?${params}` : src

export default function GraduationGallery({ images }: { images: string[] }) {
  const [open, setOpen] = useState<number | null>(null)
  const count = images.length

  const close = () => setOpen(null)
  const step = (dir: number) => setOpen((o) => (o === null ? o : (o + dir + count) % count))

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null)
      else if (e.key === 'ArrowRight') setOpen((o) => (o === null ? o : (o + 1 + count) % count))
      else if (e.key === 'ArrowLeft') setOpen((o) => (o === null ? o : (o - 1 + count) % count))
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, count])

  const arrowBtn: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: 46,
    height: 46,
    borderRadius: '50%',
    border: 'none',
    background: 'rgba(255,255,255,0.14)',
    color: '#fff',
    fontSize: 26,
    lineHeight: 1,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {images.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={sized(src, 'w=500&h=375&fit=crop&auto=format')}
            alt="ESM graduation"
            onClick={() => setOpen(i)}
            style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', borderRadius: 12, display: 'block', cursor: 'zoom-in' }}
          />
        ))}
      </div>

      {open !== null && typeof document !== 'undefined' && createPortal(
        <div
          onClick={close}
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(9,15,28,0.92)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
          }}
        >
          <button onClick={close} aria-label="Close" style={{ position: 'absolute', top: 18, right: 20, width: 44, height: 44, borderRadius: '50%', border: 'none', background: 'rgba(255,255,255,0.14)', color: '#fff', fontSize: 22, cursor: 'pointer' }}>
            ✕
          </button>

          {count > 1 && (
            <button onClick={(e) => { e.stopPropagation(); step(-1) }} aria-label="Previous" style={{ ...arrowBtn, left: 18 }}>
              ‹
            </button>
          )}

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={sized(images[open], 'w=1600&fit=max&auto=format')}
            alt="ESM graduation"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '92vw', maxHeight: '86vh', objectFit: 'contain', borderRadius: 12, boxShadow: '0 24px 70px rgba(0,0,0,0.55)' }}
          />

          {count > 1 && (
            <button onClick={(e) => { e.stopPropagation(); step(1) }} aria-label="Next" style={{ ...arrowBtn, right: 18 }}>
              ›
            </button>
          )}
        </div>,
        document.body
      )}
    </>
  )
}
