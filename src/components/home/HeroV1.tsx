import React from 'react'
import Link from 'next/link'
import { getSiteSettings } from '@/sanity/queries'
import HeroBackground from './HeroBackground'
import HeroCarousel from './HeroCarousel'

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
  const heroSlides = settings?.heroSlides

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
      <style>{`
        .hero-grid { display: grid; grid-template-columns: 1fr 1fr; min-height: 85vh; max-height: 1000px; }
        .hero-content { padding: clamp(24px, 4vw, 48px); display: flex; flex-direction: column; justify-content: center; }
        .hero-image { position: relative; width: 100%; height: 100%; overflow: hidden; margin: 0; padding: 0; }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr; height: auto; }
          .hero-content { padding: 48px 24px 32px; }
          .hero-image { height: auto; aspect-ratio: 1 / 1; }
          .hero-slide-img { object-fit: cover !important; object-position: center top !important; }
        }
      `}</style>
      <div
        className="hero-grid"
        style={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Left — content (static) */}
        <div className="hero-content" style={{ paddingLeft: 'clamp(24px, 8vw, 120px)', paddingRight: 'clamp(24px, 4vw, 60px)' }}>
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
              fontSize: 'clamp(1.9rem, 4.2vw, 3.2rem)',
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

        {/* Right — image slider or single image */}
        {heroSlides && heroSlides.length > 0 ? (
          <div className="hero-image">
            <HeroCarousel slides={heroSlides} />
          </div>
        ) : (
          <div className="hero-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={h.imageUrl ?? '/hero-graduate.png'}
              alt={h.heading ?? 'ESM graduate'}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(15,29,51,0.55) 0%, rgba(15,29,51,0.08) 55%, transparent 100%)',
              }}
            />

            {/* Floating badge */}
            <div
              className="animate-float"
              style={{
                position: 'absolute',
                right: 32,
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/illustrations/grad-cap-diploma.png"
                alt="Graduation cap and diploma"
                style={{ width: 48, height: 48, objectFit: 'contain', flexShrink: 0 }}
              />
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
                left: 32,
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
        )}
      </div>
    </section>
  )
}
