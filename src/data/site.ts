export const stats = [
  { n: '4,200+', l: 'Graduates worldwide' },
  { n: '25+', l: 'Accredited programmes' },
  { n: '8', l: 'University & awarding partners' },
  { n: '30+', l: 'Countries reached' },
]

export const values = [
  {
    title: 'Accredited Qualifications',
    desc: 'UK-recognised diplomas awarded by established British awarding bodies — credentials that hold their value globally.',
  },
  {
    title: 'Flexible Learning',
    desc: 'Study online or blended, around your job and your family. No fixed lecture halls, no rigid timetable.',
  },
  {
    title: 'Global Recognition',
    desc: 'Qualifications respected by employers across the UAE, the UK and worldwide — and a pathway to further degrees.',
  },
]

export const whyEsm = [
  { title: 'Accredited & recognised', desc: 'Every programme is awarded by a recognised UK body and sits on the regulated framework.' },
  { title: 'Flexible by design', desc: 'Built for working professionals — study online or blended, at your own pace.' },
  { title: 'UAE-rooted support', desc: 'Local advisors who understand the regional market and respond on WhatsApp, fast.' },
  { title: 'Outcomes that matter', desc: 'Programmes mapped to real career progression, promotion and further study.' },
]

export const testimonials = [
  {
    name: 'Aisha R.',
    role: 'Level 7 Strategic Management',
    quote: 'I was promoted to operations manager within six months of starting. Studying around a full-time job in Dubai was genuinely realistic.',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    gradient: 'linear-gradient(135deg,#F5A623,#D4891A)',
  },
  {
    name: 'Daniel M.',
    role: 'Level 5 Data Analytics',
    quote: 'The tutors knew the regional job market. I moved from admin into a data role at a logistics firm — the credential opened the door.',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    gradient: 'linear-gradient(135deg,#2A6FDB,#1B2A4A)',
  },
  {
    name: 'Fatima K.',
    role: 'Level 5 Health & Social Care',
    quote: 'Warm, responsive support from enquiry to graduation. It never felt like a faceless online course.',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    gradient: 'linear-gradient(135deg,#1F8A5B,#0F1D33)',
  },
]

export const faqs = [
  {
    q: 'Are ESM qualifications accredited and recognised?',
    a: 'Yes. Every programme is awarded by a recognised UK awarding body and sits on the regulated qualifications framework, so your diploma carries the same recognition whether you study from Dubai or anywhere in the world.',
  },
  {
    q: 'How does online and blended learning work?',
    a: 'You study through a guided online platform with structured units, live sessions and a personal tutor. Blended programmes add optional in-person workshops. There are no exam halls — assessment is coursework based and built around real, work-relevant scenarios.',
  },
  {
    q: 'What are the entry requirements?',
    a: 'Most programmes ask for a recognised secondary qualification or relevant work experience, plus English proficiency. Our advisors review every enquiry individually and will tell you the fastest route to enrol.',
  },
  {
    q: 'What do programmes cost and are payment plans available?',
    a: 'Fees vary by level and are shown on each programme page. Flexible monthly payment plans are available — speak to an advisor on WhatsApp and we will tailor a plan to your budget.',
  },
]

export const universities = [
  { name: 'Arden University',                          logo: '/logos/universities/arden.svg',            ext: 'svg'  },
  { name: 'University of Derby',                       logo: '/logos/universities/derby.svg',            ext: 'svg'  },
  { name: 'University of Lancashire',                  logo: '/logos/universities/lancashire.webp',      ext: 'webp' },
  { name: 'The University of Law',                     logo: '/logos/universities/law.svg',              ext: 'svg'  },
  { name: 'University of Leicester',                   logo: '/logos/universities/leicester.svg',        ext: 'svg'  },
  { name: 'University of Wolverhampton',               logo: '/logos/universities/wolverhampton.svg',    ext: 'svg'  },
  { name: 'Anglia Ruskin University',                  logo: '/logos/universities/anglia-ruskin.svg',    ext: 'svg'  },
  { name: 'UE — University of Europe for Applied Sciences', logo: '/logos/universities/ue-applied-sciences.png', ext: 'png' },
]

// Legacy short-form used by the About page accreditations grid
export const partners = universities.map((u) => ({ m: u.name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase(), l: u.name }))

export const awardingOrgs = [
  { name: 'Eduqual', logo: '/logos/awarding-orgs/eduqual.svg' },
  { name: 'Qualifi', logo: '/logos/awarding-orgs/qualifi.svg' },
]

export const profBodies = [
  { name: 'Malvern', logo: '/logos/prof-bodies/malvern.svg' },
  { name: 'Study Group', logo: '/logos/prof-bodies/studygroup.svg' },
]

export const deliveryPartners = [
  { name: 'Cerwise Education', logo: '/logos/delivery-partners/cerwise.webp' },
  { name: 'Edvoro', logo: '/logos/delivery-partners/edvoro.webp' },
  { name: 'ExeJapan Business School', logo: '/logos/delivery-partners/exejapan.webp' },
  { name: 'Kai Hui International Education', logo: '/logos/delivery-partners/kaihui.webp' },
  { name: 'TSCFM', logo: '/logos/delivery-partners/tscfm.webp' },
]

export const partnerGroups = [
  { title: 'University Partners', desc: 'Degree-awarding UK universities whose programmes we represent and deliver across the region.', count: 8 },
  { title: 'Awarding Organisations', desc: 'Regulated UK awarding bodies that certify and quality-assure our diplomas.', count: 2 },
  { title: 'Professional Bodies', desc: 'Industry institutes offering recognition, membership and chartered progression.', count: 2 },
  { title: 'Delivery & Employer Partners', desc: 'Delivery, employer and ecosystem partners that support our students and graduates.', count: 5 },
]

export const nav = [
  { label: 'Programmes', href: '/programmes' },
  { label: 'About', href: '/about' },
  { label: 'Partners', href: '/partners' },
]

export const contact = {
  address: 'UAE office address (to be supplied by client)',
  phone: '+971 XX XXX XXXX',
  email: 'enquiries@esmglobal.co',
  website: 'esmglobal.co',
  whatsapp: 'https://wa.me/971XXXXXXXXX',
  formspree: 'https://formspree.io/f/mnjyorwe',
}

export const aboutTimeline = [
  { year: '2016 · Founded', desc: 'ESM Business School launches under ESM Global, headquartered in the UAE.' },
  { year: '2019 · First UK diplomas', desc: 'Our first cohorts enrol on accredited British qualifications.' },
  { year: '2022 · Going digital', desc: 'A flexible online learning platform opens our programmes to the world.' },
  { year: '2026 · Today', desc: '4,200+ graduates across 30+ countries — and growing every term.', current: true },
]
