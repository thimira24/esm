import { getSiteSettings } from '@/sanity/queries'
import SectionHeader from '@/components/shared/SectionHeader'

export const revalidate = 60

/** Extract the 11-char YouTube video id from any common URL form. */
function getYouTubeId(url?: string | null): string | null {
  if (!url) return null
  const patterns = [
    /(?:youtube\.com\/watch\?(?:.*&)?v=)([\w-]{11})/,
    /(?:youtu\.be\/)([\w-]{11})/,
    /(?:youtube\.com\/embed\/)([\w-]{11})/,
    /(?:youtube\.com\/shorts\/)([\w-]{11})/,
    /(?:youtube\.com\/live\/)([\w-]{11})/,
  ]
  for (const re of patterns) {
    const m = url.match(re)
    if (m) return m[1]
  }
  return null
}

export default async function VideoSection() {
  const settings = await getSiteSettings().catch(() => null)
  const section = settings?.videoSection ?? {}
  const videoId = getYouTubeId(section.youtubeUrl)

  // Hide the whole section if no valid video is set.
  if (!videoId) return null

  const hasHeader = section.eyebrow || section.title

  return (
    <section style={{ background: '#fff' }}>
      <div style={{ width: 'min(960px, 92%)', margin: '0 auto', padding: 'clamp(64px, 8vw, 108px) 0' }}>
        {hasHeader && (
          <SectionHeader
            eyebrow={section.eyebrow || 'Watch'}
            title={section.title || 'See ESM in action'}
            center
          />
        )}
        {section.subtitle && (
          <p
            style={{
              textAlign: 'center',
              maxWidth: '40em',
              margin: '16px auto 0',
              fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
              lineHeight: 1.65,
              color: '#48536B',
            }}
          >
            {section.subtitle}
          </p>
        )}
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16 / 9',
            marginTop: hasHeader || section.subtitle ? 'clamp(32px, 4vw, 48px)' : 0,
            borderRadius: 18,
            overflow: 'hidden',
            boxShadow: '0 24px 60px rgba(15,29,51,0.22)',
            background: '#0F1D33',
          }}
        >
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
            title={section.title || 'ESM Business School'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              border: 0,
            }}
          />
        </div>
      </div>
    </section>
  )
}
