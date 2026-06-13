import { testimonials } from '@/data/site'
import SectionHeader from '@/components/shared/SectionHeader'
import TestimonialCard from '@/components/shared/TestimonialCard'

export default function Testimonials() {
  return (
    <section style={{ background: '#F2F4F7' }}>
      <div style={{ width: 'min(1180px, 92%)', margin: '0 auto', padding: 'clamp(64px, 8vw, 108px) 0' }}>
        <SectionHeader eyebrow="Student success" title="Careers, changed" center />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: 24,
            marginTop: 46,
          }}
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} quote={t.quote} name={t.name} role={t.role} img={t.img} />
          ))}
        </div>
      </div>
    </section>
  )
}
