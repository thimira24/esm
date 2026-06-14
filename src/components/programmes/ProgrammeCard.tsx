'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ClockIcon, MonitorIcon, ArrowRightIcon } from '@/components/shared/icons'
import type { Programme } from '@/data/programmes'

interface ProgrammeCardProps {
  programme: Programme
  compact?: boolean
}

export default function ProgrammeCard({ programme: p, compact = false }: ProgrammeCardProps) {
  return (
    <Link
      href={`/programmes/${p.id}`}
      style={{
        textAlign: 'left',
        background: '#fff',
        border: '1px solid #E6E9F0',
        borderRadius: 18,
        padding: compact ? 24 : 26,
        boxShadow: '0 1px 2px rgba(15,29,51,0.04)',
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        transition: 'box-shadow 0.2s, transform 0.2s, border-color 0.2s',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.boxShadow = '0 18px 42px rgba(15,29,51,0.13)'
        el.style.transform = 'translateY(-4px)'
        el.style.borderColor = '#F5A623'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.boxShadow = '0 1px 2px rgba(15,29,51,0.04)'
        el.style.transform = 'translateY(0)'
        el.style.borderColor = '#E6E9F0'
      }}
    >
      {/* Top row: icon + tag + arrow */}
      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 11, minWidth: 0 }}>
          <span
            style={{
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 80,
              height: 36,
              borderRadius: 8,
              background: '#F4F6FA',
              border: '1px solid #E6E9F0',
              padding: '4px 8px',
            }}
          >
            <Image
              src={p.uniLogo}
              alt={p.uniName}
              width={72}
              height={28}
              style={{ objectFit: 'contain', width: '100%', height: 28 }}
            />
          </span>
          <span
            style={{
              flexShrink: 0,
              whiteSpace: 'nowrap',
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: '0.6px',
              textTransform: 'uppercase',
              color: '#D4891A',
              background: '#FFF3DE',
              padding: '6px 12px',
              borderRadius: 100,
            }}
          >
            {p.tag}
          </span>
        </span>
        <span
          style={{
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 34,
            height: 34,
            borderRadius: '50%',
            background: '#F2F4F7',
            color: '#1B2A4A',
          }}
        >
          <ArrowRightIcon />
        </span>
      </span>

      {/* Level */}
      <span
        style={{
          display: 'block',
          fontFamily: 'var(--font-dm-sans), sans-serif',
          fontWeight: 600,
          fontSize: 12.5,
          color: '#8A93A6',
          letterSpacing: '0.4px',
          marginTop: 22,
        }}
      >
        {p.level}
      </span>

      {/* Title */}
      <span
        style={{
          display: 'block',
          fontFamily: 'var(--font-montserrat), sans-serif',
          fontWeight: 700,
          fontSize: compact ? '1.1rem' : '1.2rem',
          lineHeight: 1.26,
          color: '#1B2A4A',
          marginTop: 7,
        }}
      >
        {p.title}
      </span>

      {/* Blurb */}
      {!compact && (
        <span
          style={{
            display: 'block',
            fontSize: '0.95rem',
            lineHeight: 1.55,
            color: '#5A647A',
            marginTop: 11,
          }}
        >
          {p.blurb}
        </span>
      )}

      {/* Footer meta */}
      <span
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 18,
          marginTop: 'auto',
          paddingTop: 18,
          borderTop: '1px solid #EEF1F6',
        }}
      >
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 7,
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontWeight: 500,
            fontSize: 13,
            color: '#5A647A',
          }}
        >
          <ClockIcon />
          {p.duration}
        </span>
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 7,
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontWeight: 500,
            fontSize: 13,
            color: '#5A647A',
          }}
        >
          <MonitorIcon />
          {p.mode}
        </span>
      </span>
    </Link>
  )
}
