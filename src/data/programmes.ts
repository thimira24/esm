export type ProgrammeCategory = string

export interface Programme {
  id: string
  cat: ProgrammeCategory
  title: string
  level: string
  duration: string
  mode: string
  credits?: string
  awarding: string
  uniLogo: string
  uniName: string
  whyChoose?: string
  highlightStats?: { number: string; label: string }[]
  accreditationFacts?: string[]
  included?: string[]
  studyMethods?: { title: string; desc: string }[]
  fee: string
  tag: string
  blurb: string
  overview: string[]
  modules: string[]
  entry: string[]
}

const overviewByCat: Record<ProgrammeCategory, string[]> = {
  business: [
    'This programme develops the strategic and managerial capabilities employers expect from modern business leaders — blending globally recognised theory with practical application you can put to work the same week.',
    'Delivered flexibly for working professionals in the UAE and beyond, it combines guided online study, live sessions and assessed coursework. No exams sat in a hall — just applied, work-relevant assessment.',
  ],
  technology: [
    'Designed with industry input, this programme builds the technical and analytical skills the region\'s fast-growing digital economy is hiring for right now.',
    'You will learn through hands-on projects and real datasets, supported by tutors and a flexible schedule that fits around full-time work.',
  ],
  health: [
    'This programme prepares you for leadership and specialist roles across the health and social care sector — balancing compassionate, person-centred practice with the management skills services depend on.',
    'Study is flexible and fully supported, with assessment built around real workplace scenarios rather than written exams.',
  ],
}

const modulesByCat: Record<ProgrammeCategory, string[]> = {
  business: ['Leadership & Management', 'Strategic Planning', 'Marketing & Brand', 'Financial Decision-Making', 'Operations & Projects', 'Managing People & Teams'],
  technology: ['Programming Foundations', 'Data & Databases', 'Analytics & Visualisation', 'Systems & Networks', 'Cloud Fundamentals', 'Applied Industry Project'],
  health: ['Person-Centred Practice', 'Safeguarding & Wellbeing', 'Leading Care Teams', 'Health Promotion', 'Quality & Compliance', 'Service Improvement'],
}

const entry = [
  'A recognised secondary qualification, or equivalent work experience',
  'English language proficiency (IELTS 5.5 or equivalent)',
  'Access to a computer and a reliable internet connection',
]

const raw = [
  { id: 'biz-l4',  cat: 'business',   title: 'Level 4 Diploma in Business Management',                      level: 'Level 4 · RQF',         duration: '9 months',  mode: 'Online',            awarding: 'Arden University',             uniLogo: '/logos/universities/arden.svg',              uniName: 'Arden University',                          fee: 'AED 9,500',  tag: 'Foundation', blurb: 'Build core management foundations across operations, marketing, finance and people.' },
  { id: 'biz-l5',  cat: 'business',   title: 'Level 5 Diploma in Business Management',                      level: 'Level 5 · RQF',         duration: '9 months',  mode: 'Online / Blended',  awarding: 'University of Derby',          uniLogo: '/logos/universities/derby.svg',              uniName: 'University of Derby',                       fee: 'AED 11,500', tag: 'Popular',    blurb: 'Advance into strategy, project management and organisational behaviour.' },
  { id: 'biz-l7',  cat: 'business',   title: 'Level 7 Diploma in Strategic Management & Leadership',        level: 'Level 7 · MBA Pathway', duration: '10 months', mode: 'Online',            awarding: 'University of Leicester',      uniLogo: '/logos/universities/leicester.svg',          uniName: 'University of Leicester',                   fee: 'AED 16,900', tag: 'MBA Top-Up', blurb: 'A postgraduate leadership credential with a direct top-up route to a UK MBA.' },
  { id: 'tech-l4', cat: 'technology', title: 'Level 4 Diploma in Computing',                                level: 'Level 4 · RQF',         duration: '9 months',  mode: 'Online',            awarding: 'Anglia Ruskin University',     uniLogo: '/logos/universities/anglia-ruskin.svg',      uniName: 'Anglia Ruskin University',                  fee: 'AED 9,900',  tag: 'Foundation', blurb: 'Programming, databases and systems analysis for a career in software.' },
  { id: 'tech-l5', cat: 'technology', title: 'Level 5 Diploma in Data Analytics',                           level: 'Level 5 · RQF',         duration: '9 months',  mode: 'Online',            awarding: 'University of Wolverhampton',  uniLogo: '/logos/universities/wolverhampton.svg',      uniName: 'University of Wolverhampton',               fee: 'AED 12,500', tag: 'In demand',  blurb: 'Turn data into decisions with analytics, visualisation and the basics of machine learning.' },
  { id: 'tech-l5c',cat: 'technology', title: 'Level 5 Diploma in Cyber Security',                           level: 'Level 5 · RQF',         duration: '10 months', mode: 'Blended',           awarding: 'UE — University of Europe',    uniLogo: '/logos/universities/ue-applied-sciences.png',uniName: 'University of Europe for Applied Sciences', fee: 'AED 13,200', tag: 'New',        blurb: 'Defend systems and networks with practical, industry-aligned security skills.' },
  { id: 'hsc-l3',  cat: 'health',     title: 'Level 3 Diploma in Health & Social Care',                     level: 'Level 3 · RQF',         duration: '6 months',  mode: 'Online',            awarding: 'University of Lancashire',     uniLogo: '/logos/universities/lancashire.webp',        uniName: 'University of Lancashire',                  fee: 'AED 7,500',  tag: 'Entry',      blurb: 'Your first step into the care sector, covering safeguarding and person-centred care.' },
  { id: 'hsc-l5',  cat: 'health',     title: 'Level 5 Diploma in Health & Social Care Management',          level: 'Level 5 · RQF',         duration: '12 months', mode: 'Online / Blended',  awarding: 'The University of Law',        uniLogo: '/logos/universities/law.svg',                uniName: 'The University of Law',                     fee: 'AED 13,900', tag: 'Popular',    blurb: 'Step into leadership across health and social care services.' },
  { id: 'hsc-l7',  cat: 'health',     title: 'Level 7 Diploma in Health & Social Care Management',          level: 'Level 7 · Postgraduate', duration: '12 months', mode: 'Online',            awarding: 'Arden University',             uniLogo: '/logos/universities/arden.svg',              uniName: 'Arden University',                          fee: 'AED 17,500', tag: 'Advanced',   blurb: 'Strategic leadership for senior and director-level roles across the care sector.' },
] as const

export const programmes: Programme[] = raw.map((p) => ({
  ...p,
  cat: p.cat as ProgrammeCategory,
  overview: overviewByCat[p.cat as ProgrammeCategory],
  modules: modulesByCat[p.cat as ProgrammeCategory],
  entry,
  uniLogo: p.uniLogo,
  uniName: p.uniName,
}))

export const featuredIds = ['biz-l7', 'tech-l5', 'hsc-l5', 'biz-l5', 'tech-l5c', 'hsc-l7']
export const featured = programmes.filter((p) => featuredIds.includes(p.id))
