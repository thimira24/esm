import { getTestimonials } from '@/sanity/queries'
import SectionHeader from '@/components/shared/SectionHeader'
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel'

export const revalidate = 60

export default async function Testimonials() {
  const data = await getTestimonials()
  const testimonials = (data ?? []).map((t: { name: string; role: string; quote: string; imageUrl: string }) => ({
    name: t.name,
    role: t.role,
    quote: t.quote,
    img: t.imageUrl,
  }))

  return (
    <section style={{ background: '#F2F4F7' }}>
      <div style={{ width: 'min(1180px, 92%)', margin: '0 auto', padding: 'clamp(64px, 8vw, 108px) 0' }}>
        <SectionHeader eyebrow="Student success" title="Careers, changed" center />
        <TestimonialsCarousel items={testimonials} />
      </div>
    </section>
  )
}
