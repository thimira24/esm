/**
 * Run once to push existing programme data into Sanity.
 * Usage: SANITY_TOKEN=<write-token> node scripts/seed-sanity.mjs
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  token: process.env.SANITY_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

const overviewByCat = {
  business: [
    'This programme develops the strategic and managerial capabilities employers expect from modern business leaders — blending globally recognised theory with practical application you can put to work the same week.',
    'Delivered flexibly for working professionals in the UAE and beyond, it combines guided online study, live sessions and assessed coursework. No exams sat in a hall — just applied, work-relevant assessment.',
  ],
  technology: [
    "Designed with industry input, this programme builds the technical and analytical skills the region's fast-growing digital economy is hiring for right now.",
    'You will learn through hands-on projects and real datasets, supported by tutors and a flexible schedule that fits around full-time work.',
  ],
  health: [
    'This programme prepares you for leadership and specialist roles across the health and social care sector — balancing compassionate, person-centred practice with the management skills services depend on.',
    'Study is flexible and fully supported, with assessment built around real workplace scenarios rather than written exams.',
  ],
}

const modulesByCat = {
  business: ['Leadership & Management', 'Strategic Planning', 'Marketing & Brand', 'Financial Decision-Making', 'Operations & Projects', 'Managing People & Teams'],
  technology: ['Programming Foundations', 'Data & Databases', 'Analytics & Visualisation', 'Systems & Networks', 'Cloud Fundamentals', 'Applied Industry Project'],
  health: ['Person-Centred Practice', 'Safeguarding & Wellbeing', 'Leading Care Teams', 'Health Promotion', 'Quality & Compliance', 'Service Improvement'],
}

const entry = [
  'A recognised secondary qualification, or equivalent work experience',
  'English language proficiency (IELTS 5.5 or equivalent)',
  'Access to a computer and a reliable internet connection',
]

const featuredIds = ['biz-l7', 'tech-l5', 'hsc-l5', 'biz-l5', 'tech-l5c', 'hsc-l7']

const programmes = [
  { id: 'biz-l4',  cat: 'business',   title: 'Level 4 Diploma in Business Management',               level: 'Level 4 · RQF',         duration: '9 months',  mode: 'Online',           uniName: 'Arden University',                          uniLogo: '/logos/universities/arden.svg',               fee: 'AED 9,500',  tag: 'Foundation', blurb: 'Build core management foundations across operations, marketing, finance and people.' },
  { id: 'biz-l5',  cat: 'business',   title: 'Level 5 Diploma in Business Management',               level: 'Level 5 · RQF',         duration: '9 months',  mode: 'Online / Blended', uniName: 'University of Derby',                       uniLogo: '/logos/universities/derby.svg',               fee: 'AED 11,500', tag: 'Popular',    blurb: 'Advance into strategy, project management and organisational behaviour.' },
  { id: 'biz-l7',  cat: 'business',   title: 'Level 7 Diploma in Strategic Management & Leadership', level: 'Level 7 · MBA Pathway', duration: '10 months', mode: 'Online',           uniName: 'University of Leicester',                   uniLogo: '/logos/universities/leicester.svg',           fee: 'AED 16,900', tag: 'MBA Top-Up', blurb: 'A postgraduate leadership credential with a direct top-up route to a UK MBA.' },
  { id: 'tech-l4', cat: 'technology', title: 'Level 4 Diploma in Computing',                         level: 'Level 4 · RQF',         duration: '9 months',  mode: 'Online',           uniName: 'Anglia Ruskin University',                  uniLogo: '/logos/universities/anglia-ruskin.svg',       fee: 'AED 9,900',  tag: 'Foundation', blurb: 'Programming, databases and systems analysis for a career in software.' },
  { id: 'tech-l5', cat: 'technology', title: 'Level 5 Diploma in Data Analytics',                    level: 'Level 5 · RQF',         duration: '9 months',  mode: 'Online',           uniName: 'University of Wolverhampton',               uniLogo: '/logos/universities/wolverhampton.svg',       fee: 'AED 12,500', tag: 'In demand',  blurb: 'Turn data into decisions with analytics, visualisation and the basics of machine learning.' },
  { id: 'tech-l5c',cat: 'technology', title: 'Level 5 Diploma in Cyber Security',                    level: 'Level 5 · RQF',         duration: '10 months', mode: 'Blended',          uniName: 'University of Europe for Applied Sciences', uniLogo: '/logos/universities/ue-applied-sciences.png', fee: 'AED 13,200', tag: 'New',        blurb: 'Defend systems and networks with practical, industry-aligned security skills.' },
  { id: 'hsc-l3',  cat: 'health',     title: 'Level 3 Diploma in Health & Social Care',              level: 'Level 3 · RQF',         duration: '6 months',  mode: 'Online',           uniName: 'University of Lancashire',                  uniLogo: '/logos/universities/lancashire.webp',         fee: 'AED 7,500',  tag: 'Entry',      blurb: 'Your first step into the care sector, covering safeguarding and person-centred care.' },
  { id: 'hsc-l5',  cat: 'health',     title: 'Level 5 Diploma in Health & Social Care Management',   level: 'Level 5 · RQF',         duration: '12 months', mode: 'Online / Blended', uniName: 'The University of Law',                     uniLogo: '/logos/universities/law.svg',                 fee: 'AED 13,900', tag: 'Popular',    blurb: 'Step into leadership across health and social care services.' },
  { id: 'hsc-l7',  cat: 'health',     title: 'Level 7 Diploma in Health & Social Care Management',   level: 'Level 7 · Postgraduate', duration: '12 months', mode: 'Online',           uniName: 'Arden University',                          uniLogo: '/logos/universities/arden.svg',               fee: 'AED 17,500', tag: 'Advanced',   blurb: 'Strategic leadership for senior and director-level roles across the care sector.' },
]

const docs = programmes.map((p, i) => ({
  _type: 'programme',
  _id: `programme-${p.id}`,
  id: { _type: 'slug', current: p.id },
  title: p.title,
  cat: p.cat,
  level: p.level,
  duration: p.duration,
  mode: p.mode,
  uniName: p.uniName,
  uniLogo: p.uniLogo,
  fee: p.fee,
  tag: p.tag,
  blurb: p.blurb,
  overview: overviewByCat[p.cat],
  modules: modulesByCat[p.cat],
  entry,
  featured: featuredIds.includes(p.id),
  order: i + 1,
}))

console.log(`Seeding ${docs.length} programmes into Sanity…`)

const tx = client.transaction()
docs.forEach((doc) => tx.createOrReplace(doc))
await tx.commit()

console.log('Done ✓')
