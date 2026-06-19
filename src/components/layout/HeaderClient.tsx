'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { nav } from '@/data/site'

type University = { name: string; logoPath: string }

export default function HeaderClient({ universities }: { universities: University[] }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileUniOpen, setMobileUniOpen] = useState(false)
  const [uniHover, setUniHover] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)


  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(255,255,255,0.88)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid #E6E9F0',
      }}
    >
      <style>{`
        .esm-nav-desktop { display: none; }
        .esm-burger { display: flex; }
        @media (min-width: 768px) {
          .esm-nav-desktop { display: flex; }
          .esm-burger { display: none; }
        }
        .esm-uni-item:hover { background: #F2F4F7 !important; }
        .esm-uni-item:hover span { color: #1B2A4A !important; }
        .esm-uni-drop { animation: esmDropIn 0.15s ease; }
        @keyframes esmDropIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div
        style={{
          width: 'min(1180px, 92%)',
          margin: '0 auto',
          height: 74,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 18,
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/esm-logo-navbar.png"
            alt="ESM Business School"
            style={{ height: 44, width: 'auto', display: 'block' }}
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className="esm-nav-desktop"
          style={{ alignItems: 'center', gap: 34 }}
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                position: 'relative',
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontWeight: 600,
                fontSize: 15,
                color: '#1B2A4A',
                padding: '6px 0',
                textDecoration: 'none',
              }}
            >
              {item.label}
              {isActive(item.href) && (
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: -2,
                    height: 2.5,
                    borderRadius: 2,
                    background: '#F5A623',
                  }}
                />
              )}
            </Link>
          ))}

          {/* Universities mega-dropdown trigger */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setUniHover(true)}
            onMouseLeave={() => setUniHover(false)}
          >
            {/* invisible bridge so the mouse doesn't leave the wrapper when crossing the gap */}
            <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, height: 16, zIndex: 101 }} />
            <button
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontWeight: 600,
                fontSize: 15,
                color: '#1B2A4A',
                padding: '6px 0',
              }}
            >
              Universities
              <svg
                width="11"
                height="7"
                viewBox="0 0 11 7"
                fill="none"
                style={{ transition: 'transform 0.15s', transform: uniHover ? 'rotate(180deg)' : 'none' }}
              >
                <path d="M1 1l4.5 4.5L10 1" stroke="#1B2A4A" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>

            {uniHover && universities.length > 0 && (
              <div
                className="esm-uni-drop"
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 12px)',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  minWidth: 340,
                  background: '#fff',
                  border: '1px solid #E6E9F0',
                  borderRadius: 18,
                  boxShadow: '0 20px 48px rgba(15,29,51,0.14)',
                  padding: '10px 8px',
                  zIndex: 100,
                }}
              >
                {/* arrow pointer */}
                <div
                  style={{
                    position: 'absolute',
                    top: -7,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 14,
                    height: 7,
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      background: '#fff',
                      border: '1px solid #E6E9F0',
                      transform: 'rotate(45deg)',
                      margin: '4px auto 0',
                    }}
                  />
                </div>

                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontWeight: 700,
                    fontSize: 11,
                    letterSpacing: '1.2px',
                    color: '#9AA5B8',
                    textTransform: 'uppercase',
                    padding: '6px 12px 8px',
                    margin: 0,
                  }}
                >
                  Browse by university
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {universities.map((uni) => (
                    <Link
                      key={uni.name}
                      href={`/programmes?uni=${encodeURIComponent(uni.name)}`}
                      onClick={() => setUniHover(false)}
                      className="esm-uni-item"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        padding: '10px 12px',
                        borderRadius: 11,
                        textDecoration: 'none',
                        background: 'transparent',
                        transition: 'background 0.12s',
                      }}
                    >
                      {uni.logoPath ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={uni.logoPath}
                          alt=""
                          style={{ width: 80, height: 36, objectFit: 'contain', objectPosition: 'left center', flexShrink: 0 }}
                        />
                      ) : (
                        <div style={{ width: 80, height: 36, borderRadius: 6, background: '#F2F4F7', flexShrink: 0 }} />
                      )}
                      <span
                        style={{
                          fontFamily: 'var(--font-dm-sans), sans-serif',
                          fontWeight: 600,
                          fontSize: 14,
                          color: '#33405C',
                          lineHeight: 1.3,
                        }}
                      >
                        {uni.name}
                      </span>
                    </Link>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid #F2F4F7', margin: '8px 0 0', padding: '8px 12px 4px' }}>
                  <Link
                    href="/programmes"
                    onClick={() => setUniHover(false)}
                    style={{
                      fontFamily: 'var(--font-dm-sans), sans-serif',
                      fontWeight: 600,
                      fontSize: 13,
                      color: '#D4891A',
                      textDecoration: 'none',
                    }}
                  >
                    View all programmes →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            style={{
              background: '#F5A623',
              color: '#1B2A4A',
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontWeight: 700,
              fontSize: 14.5,
              padding: '11px 22px',
              borderRadius: 9,
              boxShadow: '0 6px 18px rgba(245,166,35,0.35)',
              textDecoration: 'none',
            }}
          >
            Enquire Now
          </Link>
        </nav>

        {/* Burger — mobile only */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="esm-burger"
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 44,
            height: 44,
            borderRadius: 10,
            background: '#1B2A4A',
            border: 'none',
            cursor: 'pointer',
          }}
          aria-label="Toggle menu"
        >
          <span
            style={{
              display: 'block',
              width: 20,
              height: 2,
              background: '#fff',
              boxShadow: '0 6px 0 #fff, 0 -6px 0 #fff',
            }}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{ borderTop: '1px solid #E6E9F0', background: '#fff', padding: '14px 0 22px' }}>
          <div
            style={{
              width: 'min(1180px, 92%)',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  textAlign: 'left',
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontWeight: 600,
                  fontSize: 17,
                  color: '#1B2A4A',
                  padding: '13px 6px',
                  borderBottom: '1px solid #F2F4F7',
                  textDecoration: 'none',
                }}
              >
                {item.label}
              </Link>
            ))}

            {/* Universities accordion — mobile */}
            <div>
              <button
                onClick={() => setMobileUniOpen(!mobileUniOpen)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'none',
                  border: 'none',
                  borderBottom: '1px solid #F2F4F7',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontWeight: 600,
                  fontSize: 17,
                  color: '#1B2A4A',
                  padding: '13px 6px',
                  textAlign: 'left',
                }}
              >
                Universities
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  style={{ transition: 'transform 0.15s', transform: mobileUniOpen ? 'rotate(180deg)' : 'none', flexShrink: 0 }}
                >
                  <path d="M1 1l5 5 5-5" stroke="#1B2A4A" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>

              {mobileUniOpen && universities.length > 0 && (
                <div style={{ paddingLeft: 8, paddingBottom: 6, borderBottom: '1px solid #F2F4F7' }}>
                  {universities.map((uni) => (
                    <Link
                      key={uni.name}
                      href={`/programmes?uni=${encodeURIComponent(uni.name)}`}
                      onClick={() => { setMobileOpen(false); setMobileUniOpen(false) }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        padding: '10px 6px',
                        textDecoration: 'none',
                        borderBottom: '1px solid #F8F9FB',
                      }}
                    >
                      {uni.logoPath ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={uni.logoPath}
                          alt=""
                          style={{ width: 28, height: 28, objectFit: 'contain', flexShrink: 0, borderRadius: 5 }}
                        />
                      ) : (
                        <div style={{ width: 28, height: 28, borderRadius: 5, background: '#F2F4F7', flexShrink: 0 }} />
                      )}
                      <span
                        style={{
                          fontFamily: 'var(--font-dm-sans), sans-serif',
                          fontWeight: 500,
                          fontSize: 15,
                          color: '#33405C',
                        }}
                      >
                        {uni.name}
                      </span>
                    </Link>
                  ))}
                  <Link
                    href="/programmes"
                    onClick={() => { setMobileOpen(false); setMobileUniOpen(false) }}
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-dm-sans), sans-serif',
                      fontWeight: 600,
                      fontSize: 13.5,
                      color: '#D4891A',
                      textDecoration: 'none',
                      padding: '10px 6px 4px',
                    }}
                  >
                    View all programmes →
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              style={{
                marginTop: 12,
                background: '#F5A623',
                color: '#1B2A4A',
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontWeight: 700,
                fontSize: 16,
                padding: 14,
                borderRadius: 10,
                textAlign: 'center',
                textDecoration: 'none',
              }}
            >
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
