/**
 * Seeds siteSettings, testimonials, faqs, and partners into Sanity.
 * Run: NEXT_PUBLIC_SANITY_PROJECT_ID=msq7ysrf NEXT_PUBLIC_SANITY_DATASET=production SANITY_TOKEN=<token> node scripts/seed-site-content.mjs
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  token: process.env.SANITY_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

const tx = client.transaction()

// --- Site Settings (singleton) ---
tx.createOrReplace({
  _type: 'siteSettings',
  _id: 'siteSettings',
  stats: [
    { _key: 's1', number: '4,200+', label: 'Graduates worldwide' },
    { _key: 's2', number: '25+',    label: 'Accredited programmes' },
    { _key: 's3', number: '8',      label: 'University & awarding partners' },
    { _key: 's4', number: '30+',    label: 'Countries reached' },
  ],
  values: [
    { _key: 'v1', title: 'Accredited Qualifications', desc: 'UK-recognised diplomas awarded by established British awarding bodies — credentials that hold their value globally.' },
    { _key: 'v2', title: 'Flexible Learning',         desc: 'Study online or blended, around your job and your family. No fixed lecture halls, no rigid timetable.' },
    { _key: 'v3', title: 'Global Recognition',        desc: 'Qualifications respected by employers across the UAE, the UK and worldwide — and a pathway to further degrees.' },
  ],
  whyEsm: [
    { _key: 'w1', title: 'Accredited & recognised', desc: 'Every programme is awarded by a recognised UK body and sits on the regulated framework.' },
    { _key: 'w2', title: 'Flexible by design',       desc: 'Built for working professionals — study online or blended, at your own pace.' },
    { _key: 'w3', title: 'UAE-rooted support',       desc: 'Local advisors who understand the regional market and respond on WhatsApp, fast.' },
    { _key: 'w4', title: 'Outcomes that matter',     desc: 'Programmes mapped to real career progression, promotion and further study.' },
  ],
  contact: {
    address:   'UAE office address (to be supplied by client)',
    phone:     '+971 XX XXX XXXX',
    email:     'enquiries@esmglobal.co',
    website:   'esmglobal.co',
    whatsapp:  'https://wa.me/447537152855',
    formspree: 'https://formspree.io/f/mnjyorwe',
  },
})

// --- Testimonials ---
const testimonials = [
  { id: 't1', name: 'Aisha R.',   role: 'Level 7 Strategic Management', quote: 'I was promoted to operations manager within six months of starting. Studying around a full-time job in Dubai was genuinely realistic.',             imageUrl: 'https://randomuser.me/api/portraits/women/68.jpg', order: 1 },
  { id: 't2', name: 'Daniel M.',  role: 'Level 5 Data Analytics',       quote: 'The tutors knew the regional job market. I moved from admin into a data role at a logistics firm — the credential opened the door.',                   imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',   order: 2 },
  { id: 't3', name: 'Fatima K.',  role: 'Level 5 Health & Social Care', quote: 'Warm, responsive support from enquiry to graduation. It never felt like a faceless online course.',                                                      imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg', order: 3 },
]
testimonials.forEach(t =>
  tx.createOrReplace({ _type: 'testimonial', _id: `testimonial-${t.id}`, name: t.name, role: t.role, quote: t.quote, imageUrl: t.imageUrl, order: t.order })
)

// --- FAQs ---
const faqs = [
  { id: 'f1', question: 'Are ESM qualifications accredited and recognised?',       answer: 'Yes. Every programme is awarded by a recognised UK awarding body and sits on the regulated qualifications framework, so your diploma carries the same recognition whether you study from Dubai or anywhere in the world.', order: 1 },
  { id: 'f2', question: 'How does online and blended learning work?',              answer: 'You study through a guided online platform with structured units, live sessions and a personal tutor. Blended programmes add optional in-person workshops. There are no exam halls — assessment is coursework based and built around real, work-relevant scenarios.', order: 2 },
  { id: 'f3', question: 'What are the entry requirements?',                        answer: 'Most programmes ask for a recognised secondary qualification or relevant work experience, plus English proficiency. Our advisors review every enquiry individually and will tell you the fastest route to enrol.', order: 3 },
  { id: 'f4', question: 'What do programmes cost and are payment plans available?', answer: 'Fees vary by level and are shown on each programme page. Flexible monthly payment plans are available — speak to an advisor on WhatsApp and we will tailor a plan to your budget.', order: 4 },
]
faqs.forEach(f =>
  tx.createOrReplace({ _type: 'faq', _id: `faq-${f.id}`, question: f.question, answer: f.answer, order: f.order })
)

// --- Partners ---
const partners = [
  { id: 'p-arden',     name: 'Arden University',                               type: 'university',   logoPath: '/logos/universities/arden.svg',               order: 1 },
  { id: 'p-derby',     name: 'University of Derby',                             type: 'university',   logoPath: '/logos/universities/derby.svg',               order: 2 },
  { id: 'p-lancs',     name: 'University of Lancashire',                        type: 'university',   logoPath: '/logos/universities/lancashire.webp',         order: 3 },
  { id: 'p-law',       name: 'The University of Law',                           type: 'university',   logoPath: '/logos/universities/law.svg',                 order: 4 },
  { id: 'p-leic',      name: 'University of Leicester',                         type: 'university',   logoPath: '/logos/universities/leicester.svg',           order: 5 },
  { id: 'p-wolves',    name: 'University of Wolverhampton',                     type: 'university',   logoPath: '/logos/universities/wolverhampton.svg',       order: 6 },
  { id: 'p-anglia',    name: 'Anglia Ruskin University',                        type: 'university',   logoPath: '/logos/universities/anglia-ruskin.svg',       order: 7 },
  { id: 'p-ue',        name: 'UE — University of Europe for Applied Sciences',  type: 'university',   logoPath: '/logos/universities/ue-applied-sciences.png', order: 8 },
  { id: 'p-eduqual',   name: 'Eduqual',                                         type: 'awarding',     logoPath: '/logos/awarding-orgs/eduqual.svg',            order: 1 },
  { id: 'p-qualifi',   name: 'Qualifi',                                         type: 'awarding',     logoPath: '/logos/awarding-orgs/qualifi.svg',            order: 2 },
  { id: 'p-malvern',   name: 'Malvern',                                         type: 'professional', logoPath: '/logos/prof-bodies/malvern.svg',              order: 1 },
  { id: 'p-studygrp',  name: 'Study Group',                                     type: 'professional', logoPath: '/logos/prof-bodies/studygroup.svg',           order: 2 },
  { id: 'p-cerwise',   name: 'Cerwise Education',                               type: 'delivery',     logoPath: '/logos/delivery-partners/cerwise.webp',       order: 1 },
  { id: 'p-edvoro',    name: 'Edvoro',                                          type: 'delivery',     logoPath: '/logos/delivery-partners/edvoro.webp',        order: 2 },
  { id: 'p-exejapan',  name: 'ExeJapan Business School',                        type: 'delivery',     logoPath: '/logos/delivery-partners/exejapan.webp',      order: 3 },
  { id: 'p-kaihui',    name: 'Kai Hui International Education',                 type: 'delivery',     logoPath: '/logos/delivery-partners/kaihui.webp',        order: 4 },
  { id: 'p-tscfm',     name: 'TSCFM',                                           type: 'delivery',     logoPath: '/logos/delivery-partners/tscfm.webp',         order: 5 },
]
partners.forEach(p =>
  tx.createOrReplace({ _type: 'partner', _id: `partner-${p.id}`, name: p.name, type: p.type, logoPath: p.logoPath, order: p.order })
)

console.log('Seeding site content into Sanity…')
await tx.commit()
console.log('Done ✓')
