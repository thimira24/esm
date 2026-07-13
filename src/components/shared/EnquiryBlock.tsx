import EnquiryForm from '@/components/shared/EnquiryForm'
import SectionHeader from '@/components/shared/SectionHeader'
import { CheckIcon } from '@/components/shared/icons'
import { getAllProgrammeTitles, getSiteSettings } from '@/sanity/queries'

const DEFAULT_PERKS = [
  'Free, no-obligation programme advice',
  'Flexible monthly payment plans available',
  'We reply within 24 hours',
]

export default async function EnquiryBlock() {
  const [programmes, settings] = await Promise.all([getAllProgrammeTitles(), getSiteSettings().catch(() => null)])
  const contact = settings?.contact ?? {}
  const section = settings?.enquirySection ?? {}
  const perks: string[] = section.perks?.length ? section.perks : DEFAULT_PERKS

  return (
    <section style={{ background: '#F2F4F7', borderTop: '1px solid #E6E9F0' }}>
      <div
        style={{
          width: 'min(1180px, 92%)',
          margin: '0 auto',
          padding: 'clamp(56px, 7vw, 96px) 0',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(36px, 5vw, 60px)',
          alignItems: 'center',
        }}
      >
        {/* Left */}
        <div>
          <SectionHeader
            eyebrow={section.eyebrow || 'Enquire now'}
            title={section.title || 'Take the first step toward your qualification'}
          />
          <p
            style={{
              fontSize: 'clamp(1.02rem, 1.4vw, 1.15rem)',
              lineHeight: 1.6,
              color: '#48536B',
              margin: '16px 0 0',
              maxWidth: '32em',
            }}
          >
            {section.subtext || 'Share a few details and an advisor will recommend the right programme, start date and payment plan — usually within 24 hours.'}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 28 }}>
            {perks.map((perk) => (
              <div key={perk} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span
                  style={{
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 34,
                    height: 34,
                    borderRadius: 9,
                    background: '#EAF7EF',
                  }}
                >
                  <CheckIcon />
                </span>
                <span
                  style={{
                    fontSize: 15,
                    color: '#33405C',
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontWeight: 500,
                  }}
                >
                  {perk}
                </span>
              </div>
            ))}
          </div>


        </div>

        {/* Right — form */}
        <EnquiryForm programmes={programmes} formspree={contact.formspree} />
      </div>
    </section>
  )
}
