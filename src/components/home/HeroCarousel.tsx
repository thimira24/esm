'use client'

import { useState, useEffect, useCallback } from 'react'

type Slide = {
  imageUrl: string | null
  alt?: string
}

type Props = {
  slides: Slide[]
}

export default function HeroCarousel({ slides }: Props) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [fading, setFading] = useState(false)

  const goTo = useCallback((index: number) => {
    setFading(true)
    setTimeout(() => {
      setActive(index)
      setFading(false)
    }, 300)
  }, [])

  const next = useCallback(() => {
    goTo((active + 1) % slides.length)
  }, [active, slides.length, goTo])

  useEffect(() => {
    if (paused || slides.length <= 1) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [paused, next, slides.length])

  const s = slides[active]

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="hero-carousel"
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .hero-carousel { min-height: 100vh; }
        @media (max-width: 768px) {
          .hero-carousel { min-height: 50vh; }
        }
      `}</style>
      {/* Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={s.imageUrl ?? '/hero-graduate.png'}
        alt={s.alt ?? ''}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center top',
          opacity: fading ? 0 : 1,
          transition: 'opacity 0.3s ease',
        }}
      />
      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 0,
          background: 'linear-gradient(to top, rgba(15,29,51,0.55) 0%, rgba(15,29,51,0.08) 55%, transparent 100%)',
          zIndex: 1,
        }}
      />

      {/* Dots */}
      {slides.length > 1 && (
        <div
          style={{
            position: 'absolute',
            bottom: 32,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 8,
            zIndex: 2,
          }}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === active ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: i === active ? '#F5A623' : 'rgba(255,255,255,0.5)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
                padding: 0,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
