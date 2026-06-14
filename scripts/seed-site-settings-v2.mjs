import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  token: process.env.SANITY_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

console.log('Seeding hero + about fields into siteSettings…')

await client
  .patch('siteSettings')
  .setIfMissing({
    hero: {},
    about: {},
  })
  .set({
    hero: {
      eyebrow: 'British Education · Based in the UAE',
      heading: 'Accredited British qualifications, built for ambitious professionals.',
      subtext:
        'Internationally recognised diplomas in business, technology and health — delivered flexibly, online or blended, from our home in the UAE.',
      primaryCta: { label: 'Explore Programmes', href: '/programmes' },
      secondaryCta: { label: 'Enquire Now', href: '/contact' },
      badgeTitle: 'Regulated UK awards',
      badgeSubtitle: 'Recognised worldwide',
      chipLabel: 'FLEXIBLE STUDY',
      chipValue: '100% Online',
    },
    about: {
      heading: 'British education, rooted in the UAE',
      body1:
        'ESM Business School is the student-facing brand of ESM Global, an internationally operating education and business services company headquartered in the UAE. We bring recognised British qualifications to professionals across the region and around the world.',
      body2:
        'Our mission is simple: make accredited, career-changing education flexible, affordable and genuinely supported — wherever our students happen to be.',
      storyHeading: 'From a bold idea to a global classroom',
      storyBody1:
        'ESM Business School began with a simple frustration: too many capable professionals in the UAE were locked out of recognised British qualifications by rigid timetables, travel and cost.',
      storyBody2:
        'So we built the alternative — accredited diplomas delivered flexibly, supported by real people, and rooted locally. What started with a handful of learners is now a community of thousands across the region and beyond.',
      timeline: [
        { _key: 'tl1', year: '2016 · Founded', desc: 'ESM Business School launches under ESM Global, headquartered in the UAE.', current: false },
        { _key: 'tl2', year: '2019 · First UK diplomas', desc: 'Our first cohorts enrol on accredited British qualifications.', current: false },
        { _key: 'tl3', year: '2022 · Going digital', desc: 'A flexible online learning platform opens our programmes to the world.', current: false },
        { _key: 'tl4', year: '2026 · Today', desc: '4,200+ graduates across 30+ countries — and growing every term.', current: true },
      ],
      visionHeading: 'A world where a great career is never limited by where you happen to live.',
      visionSubtext:
        "We're building the most trusted route to recognised qualifications for ambitious people across the UAE and the wider region — flexible, affordable and genuinely human.",
      visionCards: [
        { _key: 'vc1', title: 'Access', desc: 'Removing the barriers of cost, location and rigid schedules.' },
        { _key: 'vc2', title: 'Excellence', desc: 'Only qualifications that are genuinely recognised and respected.' },
        { _key: 'vc3', title: 'Impact', desc: 'Real outcomes — promotions, new roles and life-changing progress.' },
      ],
    },
  })
  .commit()

console.log('Done ✓')
