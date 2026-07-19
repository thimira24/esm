import HeroV1 from '@/components/home/HeroV1'
import TrustBar from '@/components/home/TrustBar'
import ValueProps from '@/components/home/ValueProps'
import StatsStrip from '@/components/home/StatsStrip'
import FeaturedProgrammes from '@/components/home/FeaturedProgrammes'
import AlumniMarquee from '@/components/home/AlumniMarquee'
import Testimonials from '@/components/home/Testimonials'
import FAQAccordion from '@/components/shared/FAQAccordion'
import EnquiryBlock from '@/components/shared/EnquiryBlock'
import { getFaqs } from '@/sanity/queries'

export const revalidate = 60

export default async function HomePage() {
  const faqData = await getFaqs()
  const faqs = (faqData ?? []).map((f: { question: string; answer: string }) => ({ q: f.question, a: f.answer }))
  return (
    <>
      <HeroV1 />
      <TrustBar />
      <ValueProps />
      <StatsStrip />
      <FeaturedProgrammes />
      <AlumniMarquee />
      <Testimonials />

      {/* FAQ */}
      <section
        style={{
          width: 'min(820px, 92%)',
          margin: '0 auto',
          padding: 'clamp(64px, 8vw, 104px) 0',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '40em', margin: '0 auto 38px' }}>
          <span
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: '1.5px',
              color: '#D4891A',
              textTransform: 'uppercase',
            }}
          >
            FAQs
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-montserrat), sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.9rem, 3.6vw, 2.7rem)',
              lineHeight: 1.12,
              letterSpacing: '-0.5px',
              color: '#1B2A4A',
              margin: '14px 0 0',
            }}
          >
            Questions, answered
          </h2>
        </div>
        <FAQAccordion faqs={faqs} />
      </section>

      <EnquiryBlock />
    </>
  )
}
