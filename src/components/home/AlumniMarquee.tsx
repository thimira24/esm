import { getSiteSettings } from '@/sanity/queries'
import SectionHeader from '@/components/shared/SectionHeader'

export const revalidate = 60

type Logo = { name?: string; logo?: string }

export default async function AlumniMarquee() {
  const settings = await getSiteSettings().catch(() => null)
  const data = settings?.alumniAtWork ?? {}
  const logos: Logo[] = (data.logos ?? []).filter((l: Logo) => l.logo)
  if (logos.length === 0) return null

  // Duplicate the set so the scroll loops seamlessly.
  const loop = [...logos, ...logos]

  return (
    <section style={{ background: '#fff', padding: 'clamp(48px, 6vw, 82px) 0', overflow: 'hidden' }}>
      <SectionHeader eyebrow={data.eyebrow || 'Alumni network'} title={data.title || 'Our alumni at work'} center />
      {data.subtitle && (
        <p style={{ fontSize: 'clamp(1.02rem, 1.3vw, 1.15rem)', lineHeight: 1.6, color: '#48536B', margin: '16px auto 0', maxWidth: '44em', textAlign: 'center' }}>
          {data.subtitle}
        </p>
      )}

      <div className="alu-marquee" style={{ marginTop: 44 }}>
        <div className="alu-track">
          {loop.map((l, i) => (
            <span key={i} className="alu-item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={l.logo} alt={l.name ?? ''} />
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .alu-marquee { position: relative; overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);
          mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent); }
        .alu-track { display: flex; align-items: center; gap: clamp(40px, 6vw, 72px); width: max-content;
          animation: aluScroll 36s linear infinite; }
        .alu-marquee:hover .alu-track { animation-play-state: paused; }
        .alu-item { flex: 0 0 auto; display: flex; align-items: center; }
        .alu-item img { height: clamp(30px, 4vw, 44px); width: auto; max-width: 180px; object-fit: contain;
          filter: grayscale(1); opacity: 0.62; transition: filter .25s, opacity .25s; }
        .alu-item img:hover { filter: grayscale(0); opacity: 1; }
        @keyframes aluScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .alu-track { animation: none; } }
      `}</style>
    </section>
  )
}
