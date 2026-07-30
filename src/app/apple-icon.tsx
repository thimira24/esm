import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

// Apple touch icon: "ESM" on the brand navy with a gold accent.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1B2A4A',
          color: '#fff',
          fontSize: 62,
          fontWeight: 800,
          letterSpacing: -2,
          fontFamily: 'sans-serif',
        }}
      >
        <span style={{ color: '#D4891A' }}>E</span>SM
      </div>
    ),
    { ...size }
  )
}
