'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function HeroBackground() {
  const blobLeftRef = useRef<HTMLDivElement>(null)
  const blobRightRef = useRef<HTMLDivElement>(null)
  const blobCenterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: 'sine.inOut' } })

    // Left gold blob — drifts up/down and pulses scale
    tl.to(blobLeftRef.current, { y: -40, x: 20, scale: 1.15, opacity: 0.75, duration: 6 }, 0)
      .to(blobLeftRef.current, { y: 20, x: -10, scale: 0.9, opacity: 0.55, duration: 7 }, 6)

    // Right gold blob — independent rhythm
    gsap.to(blobRightRef.current, {
      y: -30,
      x: -15,
      scale: 1.2,
      opacity: 0.22,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    // Subtle center navy blob
    gsap.to(blobCenterRef.current, {
      scale: 1.3,
      opacity: 0.07,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 2,
    })
  }, [])

  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {/* Left gold blob */}
      <div
        ref={blobLeftRef}
        style={{
          position: 'absolute',
          left: '-8%',
          top: '10%',
          width: 520,
          height: 520,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,166,35,0.28) 0%, rgba(245,166,35,0.08) 55%, transparent 75%)',
          filter: 'blur(48px)',
          opacity: 0.6,
          willChange: 'transform, opacity',
        }}
      />

      {/* Right gold accent (behind image area) */}
      <div
        ref={blobRightRef}
        style={{
          position: 'absolute',
          right: '-5%',
          top: '-10%',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,166,35,0.22) 0%, rgba(245,166,35,0.06) 55%, transparent 75%)',
          filter: 'blur(56px)',
          opacity: 0.18,
          willChange: 'transform, opacity',
        }}
      />

      {/* Bottom-left navy tint */}
      <div
        ref={blobCenterRef}
        style={{
          position: 'absolute',
          left: '5%',
          bottom: '-15%',
          width: 480,
          height: 480,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(27,42,74,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          opacity: 0.05,
          willChange: 'transform, opacity',
        }}
      />
    </div>
  )
}
