import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CheckIcon } from '@/components/shared/icons'
import { getSiteSettings } from '@/sanity/queries'
import HeroBackground from './HeroBackground'

const FALLBACK = {
  eyebrow: 'British Education · Based in the UAE',
  heading: 'Accredited British qualifications, built for ambitious professionals.',
  subtext: 'Internationally recognised diplomas in business, technology and health — delivered flexibly, online or blended, from our home in the UAE.',
  primaryCta: { label: 'Explore Programmes', href: '/programmes' },
  secondaryCta: { label: 'Enquire Now', href: '/contact' },
  imageUrl: null,
  badgeTitle: 'Regulated UK awards',
  badgeSubtitle: 'Recognised worldwide',
  chipLabel: 'FLEXIBLE STUDY',
  chipValue: '100% Online',
}

const FALLBACK_STATS = [
  { number: '4,200+', label: 'Graduates' },
  { number: '8', label: 'Partner bodies' },
  { number: '30+', label: 'Countries' },
]

export default async function HeroV1() {
  const settings = await getSiteSettings().catch(() => null)
  const h = { ...FALLBACK, ...settings?.hero }
  const heroStats = settings?.stats?.length ? settings.stats : FALLBACK_STATS

  const imgSrc = h.imageUrl ?? '/hero-graduate.png'

  return (
    <section style={{
        background: [
          'radial-gradient(ellipse 70% 90% at 100% 0%, rgba(245,166,35,0.18) 0%, transparent 55%)',
          'radial-gradient(ellipse 55% 70% at 0% 100%, rgba(27,42,74,0.08) 0%, transparent 50%)',
          'linear-gradient(135deg, #EDF0F7 0%, #F5F3EF 100%)',
        ].join(', '),
        overflow: 'hidden',
        position: 'relative',
      }}>
      <HeroBackground />
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: 'min(1180px, 92%)',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
          gap: 'clamp(40px, 5vw, 72px)',
          alignItems: 'center',
          padding: 'clamp(56px, 8vw, 104px) 0',
        }}
      >
        {/* Left — copy */}
        <div>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: '1.5px',
              color: '#D4891A',
              textTransform: 'uppercase',
            }}
          >
            <span style={{ width: 24, height: 2, background: '#F5A623', display: 'inline-block' }} />
            {h.eyebrow}
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-montserrat), sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2.3rem, 5.2vw, 4rem)',
              lineHeight: 1.04,
              letterSpacing: '-1px',
              color: '#1B2A4A',
              margin: '18px 0 0',
              textWrap: 'balance',
            } as React.CSSProperties}
          >
            {h.heading}
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.4vw, 1.2rem)',
              lineHeight: 1.65,
              color: '#48536B',
              margin: '22px 0 0',
              maxWidth: '30em',
            }}
          >
            {h.subtext}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 34 }}>
            <Link
              href={h.primaryCta?.href ?? '/programmes'}
              style={{
                background: '#F5A623',
                color: '#1B2A4A',
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontWeight: 700,
                fontSize: 16,
                padding: '15px 28px',
                borderRadius: 11,
                boxShadow: '0 10px 26px rgba(245,166,35,0.4)',
                textDecoration: 'none',
              }}
            >
              {h.primaryCta?.label ?? 'Explore Programmes'}
            </Link>
            <Link
              href={h.secondaryCta?.href ?? '/contact'}
              style={{
                background: '#fff',
                color: '#1B2A4A',
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontWeight: 700,
                fontSize: 16,
                padding: '15px 28px',
                borderRadius: 11,
                border: '1.5px solid #D5DBE6',
                textDecoration: 'none',
              }}
            >
              {h.secondaryCta?.label ?? 'Enquire Now'}
            </Link>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 26, marginTop: 38 }}>
            {heroStats.map((stat, i) => (
              <React.Fragment key={stat.number}>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-montserrat), sans-serif',
                      fontWeight: 800,
                      fontSize: '1.7rem',
                      color: '#1B2A4A',
                    }}
                  >
                    {stat.number}
                  </div>
                  <div style={{ fontSize: 13, color: '#6B7689' }}>{stat.label}</div>
                </div>
                {i < heroStats.length - 1 && (
                  <div style={{ width: 1, background: '#D5DBE6' }} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right — visual card */}
        <div style={{ position: 'relative', minHeight: 'clamp(340px, 42vw, 480px)' }}>
          <Image
            src={imgSrc}
            alt={h.heading ?? 'ESM graduate'}
            fill
            priority
            unoptimized={imgSrc.startsWith('https://cdn.sanity.io')}
            style={{ objectFit: 'cover', objectPosition: 'center top', borderRadius: 24 }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 24,
              background: 'linear-gradient(to top, rgba(15,29,51,0.55) 0%, rgba(15,29,51,0.08) 55%, transparent 100%)',
              boxShadow: '0 30px 70px rgba(15,29,51,0.32)',
            }}
          />

          {/* Floating badge */}
          <div
            className="animate-float"
            style={{
              position: 'absolute',
              right: -6,
              bottom: 36,
              background: '#fff',
              borderRadius: 16,
              padding: '18px 22px',
              boxShadow: '0 20px 45px rgba(15,29,51,0.22)',
              display: 'flex',
              alignItems: 'center',
              gap: 14,
            }}
          >
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 46,
                height: 46,
                borderRadius: 12,
                background: '#EAF7EF',
              }}
            >
              <CheckIcon size={22} color="#1F8A5B" strokeWidth={2.4} />
            </span>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-montserrat), sans-serif',
                  fontWeight: 700,
                  fontSize: 15,
                  color: '#1B2A4A',
                }}
              >
                {h.badgeTitle}
              </div>
              <div style={{ fontSize: 12.5, color: '#6B7689' }}>{h.badgeSubtitle}</div>
            </div>
          </div>

          {/* Top left chip */}
          <div
            style={{
              position: 'absolute',
              left: -6,
              top: 34,
              background: 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(8px)',
              borderRadius: 14,
              padding: '14px 18px',
              boxShadow: '0 16px 36px rgba(15,29,51,0.18)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontWeight: 600,
                fontSize: 12,
                color: '#6B7689',
                letterSpacing: '0.5px',
              }}
            >
              {h.chipLabel}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-montserrat), sans-serif',
                fontWeight: 800,
                fontSize: '1.35rem',
                color: '#1B2A4A',
              }}
            >
              {h.chipValue}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
