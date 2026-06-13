'use client'

import { useState } from 'react'
import { contact } from '@/data/site'

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '13px 15px',
  border: '1.5px solid #D5DBE6',
  borderRadius: 10,
  fontSize: 15,
  color: '#1B2A4A',
  background: '#fff',
  fontFamily: 'var(--font-open-sans), sans-serif',
  outline: 'none',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-dm-sans), sans-serif',
  fontWeight: 600,
  fontSize: 13,
  color: '#48536B',
  marginBottom: 7,
}

export default function EnquiryForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(contact.formspree, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid #E6E9F0',
        borderRadius: 22,
        padding: 'clamp(26px, 3.5vw, 38px)',
        boxShadow: '0 20px 50px rgba(15,29,51,0.1)',
      }}
    >
      {status === 'success' ? (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>✅</div>
          <h3
            style={{
              fontFamily: 'var(--font-montserrat), sans-serif',
              fontWeight: 800,
              fontSize: '1.4rem',
              color: '#1B2A4A',
              margin: 0,
            }}
          >
            Enquiry sent!
          </h3>
          <p style={{ color: '#5A647A', marginTop: 10 }}>
            We&apos;ll get back to you within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 16,
            }}
          >
            <label style={{ display: 'block' }}>
              <span style={labelStyle}>Full name</span>
              <input type="text" name="name" placeholder="Your name" required style={inputStyle} />
            </label>
            <label style={{ display: 'block' }}>
              <span style={labelStyle}>Email</span>
              <input type="email" name="email" placeholder="you@email.com" required style={inputStyle} />
            </label>
            <label style={{ display: 'block' }}>
              <span style={labelStyle}>Phone / WhatsApp</span>
              <input type="tel" name="phone" placeholder="+971 ..." style={inputStyle} />
            </label>
            <label style={{ display: 'block' }}>
              <span style={labelStyle}>Programme of interest</span>
              <select name="programme" style={inputStyle}>
                <option>Business &amp; Management</option>
                <option>Technology</option>
                <option>Health &amp; Social Care</option>
                <option>Not sure yet</option>
              </select>
            </label>
          </div>
          <label style={{ display: 'block', marginTop: 16 }}>
            <span style={labelStyle}>Message</span>
            <textarea
              name="message"
              rows={3}
              placeholder="Tell us about your goals..."
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </label>
          <button
            type="submit"
            disabled={status === 'sending'}
            style={{
              width: '100%',
              marginTop: 20,
              background: status === 'sending' ? '#d4a843' : '#F5A623',
              color: '#1B2A4A',
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontWeight: 700,
              fontSize: 16,
              padding: 16,
              borderRadius: 11,
              border: 'none',
              boxShadow: '0 10px 24px rgba(245,166,35,0.35)',
              cursor: status === 'sending' ? 'not-allowed' : 'pointer',
            }}
          >
            {status === 'sending' ? 'Sending…' : 'Send enquiry'}
          </button>
          {status === 'error' && (
            <p style={{ textAlign: 'center', fontSize: 13, color: '#c0392b', marginTop: 10 }}>
              Something went wrong. Please try again or WhatsApp us directly.
            </p>
          )}
          <p style={{ textAlign: 'center', fontSize: 13, color: '#8A93A6', margin: '13px 0 0' }}>
            🔒 Your details are kept private. No spam, ever.
          </p>
        </form>
      )}
    </div>
  )
}
