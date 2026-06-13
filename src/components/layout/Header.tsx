'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { nav } from '@/data/site'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
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
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none' }}>
          <span style={{ textAlign: 'left', lineHeight: 1 }}>
            <span
              style={{
                display: 'block',
                fontFamily: 'var(--font-montserrat), sans-serif',
                fontWeight: 800,
                fontSize: 18,
                color: '#1B2A4A',
                letterSpacing: '0.4px',
              }}
            >
              ESM
            </span>
            <span
              style={{
                display: 'block',
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontWeight: 500,
                fontSize: 9.5,
                color: '#6B7689',
                letterSpacing: '2.4px',
                marginTop: 3,
              }}
            >
              BUSINESS SCHOOL
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          style={{ display: 'flex', alignItems: 'center', gap: 34 }}
          className="esm-nav-desktop hidden md:flex"
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

        {/* Burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
          style={{
            display: 'flex',
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
