/**
 * Deletes the old 9 programmes and seeds 31 new ones from the client portfolio.
 * Run: NEXT_PUBLIC_SANITY_PROJECT_ID=msq7ysrf NEXT_PUBLIC_SANITY_DATASET=production SANITY_TOKEN=<token> node scripts/seed-new-programmes.mjs
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  token: process.env.SANITY_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

// ── Delete old programmes ──────────────────────────────────────────────────────
const oldIds = [
  'programme-biz-l4', 'programme-biz-l5', 'programme-biz-l7',
  'programme-tech-l4', 'programme-tech-l5', 'programme-tech-l5c',
  'programme-hsc-l3', 'programme-hsc-l5', 'programme-hsc-l7',
]
console.log('Deleting old programmes…')
for (const id of oldIds) {
  try { await client.delete(id) } catch {}
}

// ── Placeholder assets ─────────────────────────────────────────────────────────
const PH = '/logos/universities/placeholder.svg'
const logos = {
  arden:    '/logos/universities/arden.svg',
  anglia:   '/logos/universities/anglia-ruskin.svg',
  wolves:   '/logos/universities/wolverhampton.svg',
}

// ── Shared content blocks ──────────────────────────────────────────────────────
const entryMBA = [
  'A recognised bachelor\'s degree or professional qualification (or 3+ years of senior management experience)',
  'English language proficiency (IELTS 6.0 or equivalent)',
  'Access to a computer and a reliable internet connection',
]
const entryUG = [
  'Minimum 5 GCSEs or equivalent secondary qualification',
  'English language proficiency (IELTS 5.5 or equivalent)',
  'Access to a computer and a reliable internet connection',
]
const entryPG = entryMBA

const overviewMBA = [
  'This programme provides a comprehensive pathway to a globally recognised Master of Business Administration, combining advanced management theory with practical leadership application. Designed for ambitious professionals across the UAE and beyond, it prepares you for senior and executive roles in any sector.',
  'Delivered flexibly to fit around full-time work, the programme pairs an accredited Level 7 Postgraduate Diploma with direct advanced entry into a UK university MBA. Assessment is work-based and applied — no rigid exams, just learning you can put to use immediately.',
]
const overviewUG = [
  'This pathway combines a Level 5 Extended Diploma with direct entry into a UK university degree, giving you a fully accredited bachelor\'s qualification without traditional A-level entry routes. It is designed for working adults and ambitious school leavers ready to build a career-defining credential.',
  'Delivered online with tutor support and structured units, the programme fits around your lifestyle while maintaining the academic rigour of a UK university degree. No exams sat in a hall — assessment is practical and work-relevant throughout.',
]
const overviewPG = [
  'This advanced postgraduate programme provides specialist expertise and internationally recognised credentials for professionals seeking to move into leadership, research or specialist roles. It is built for those who want to stand out in a competitive market.',
  'Delivered flexibly to fit around your professional commitments, assessment is practical and work-relevant throughout — grounded in real scenarios rather than written examinations.',
]

const modulesMBA         = ['Strategic Leadership & Management', 'Business Finance & Accounting', 'Marketing Strategy', 'Operations & Supply Chain', 'Organisational Behaviour', 'Research Methods & Dissertation']
const modulesFinance     = ['Financial Strategy', 'Investment & Portfolio Analysis', 'Risk Management', 'Corporate Finance', 'Financial Reporting & Standards', 'Research Methods & Dissertation']
const modulesMarketing   = ['Brand & Communications Strategy', 'Digital Marketing & Analytics', 'Consumer Behaviour', 'Market Research Methods', 'Global Marketing', 'Research Methods & Dissertation']
const modulesHRM         = ['Strategic Human Resource Management', 'Talent Acquisition & Development', 'Employment Law & Ethics', 'Organisational Development', 'Performance & Reward', 'Research Methods & Dissertation']
const modulesOHS         = ['Occupational Health Law & Compliance', 'Risk Assessment & Control', 'Workplace Safety Systems', 'Health & Wellbeing Strategy', 'Environmental Management', 'Research Methods & Dissertation']
const modulesPM          = ['Project Planning & Control', 'Risk & Quality Management', 'Stakeholder & Communications Management', 'Agile & Waterfall Methodologies', 'Programme Management', 'Research Methods & Dissertation']
const modulesOrgPsych    = ['Organisational Behaviour & Culture', 'Leadership Psychology', 'Motivation, Engagement & Performance', 'Change Management', 'Coaching & Mentoring', 'Research Methods & Dissertation']
const modulesLogistics   = ['Global Supply Chain Strategy', 'Logistics & Transport Operations', 'Procurement & Sourcing', 'Warehouse & Distribution Management', 'International Trade & Compliance', 'Research Methods & Dissertation']
const modulesHealthcare  = ['Health Systems & Policy', 'Care Quality & Governance', 'Leading Healthcare Teams', 'Finance for Health Services', 'Service Innovation & Improvement', 'Research Methods & Dissertation']
const modulesTourism     = ['Tourism & Hospitality Strategy', 'Hospitality Operations Management', 'Revenue & Yield Management', 'Destination Marketing', 'Sustainable Tourism', 'Research Methods & Dissertation']
const modulesMscFin      = ['Financial Analysis & Modelling', 'Management Accounting', 'Corporate Governance', 'Investment Strategy', 'International Finance', 'Research Dissertation']
const modulesUGBiz       = ['Business Environment & Strategy', 'Marketing Principles', 'Financial Accounting', 'Management & Organisational Behaviour', 'Business Research Methods', 'Final Year Project']
const modulesUGTourism   = ['Tourism & Hospitality Foundations', 'Events & Operations Management', 'Marketing for Tourism', 'Revenue & Yield Management', 'Sustainable Tourism Practice', 'Dissertation']
const modulesUGAccounting= ['Financial Accounting', 'Management Accounting', 'Business Law & Ethics', 'Taxation', 'Auditing & Assurance', 'Final Year Project']
const modulesEducation   = ['Curriculum Design & Pedagogy', 'Educational Leadership & Management', 'Research in Education', 'Inclusive Practice', 'Assessment & Learning Theory', 'Dissertation']
const modulesAI          = ['Machine Learning Fundamentals', 'Deep Learning & Neural Networks', 'Natural Language Processing', 'Computer Vision', 'AI Ethics & Governance', 'Capstone Research Project']
const modulesDualStrategic = ['Strategic Management', 'Leadership & Change', 'Corporate Governance & Ethics', 'Business Environment Analysis', 'Strategic Planning in Practice', 'Certified Assessment Portfolio']
const modulesDualFinance   = ['Financial Strategy & Planning', 'Accounting Standards & Reporting', 'Investment & Risk Analysis', 'Corporate Finance', 'Tax & Regulatory Compliance', 'Certified Assessment Portfolio']
const modulesHealthL8    = ['Advanced Clinical Leadership', 'Research Methodology & Evidence', 'Healthcare Ethics & Law', 'Quality Improvement Science', 'Policy, Strategy & Governance', 'Doctoral Preparation']

// ── Programmes ─────────────────────────────────────────────────────────────────
const programmes = [

  // MBA GENERAL ─────────────────────────────────────────────────────────────────
  {
    _id: 'programme-mba-uclan',
    cat: 'mba', order: 1, featured: true,
    title: 'Master of Business Administration',
    level: 'Level 7 · PGD + MBA',
    duration: '18 months', mode: 'Online / Blended', fee: 'AED 18,500', tag: 'Popular',
    uniName: 'University of Central Lancashire', uniLogo: PH,
    blurb: 'Advance into senior leadership with a fully accredited UK MBA via advanced entry from a Level 7 PGD.',
    overview: overviewMBA, modules: modulesMBA, entry: entryMBA,
  },
  {
    _id: 'programme-mba-anglia',
    cat: 'mba', order: 2, featured: false,
    title: 'Master of Business Administration',
    level: 'Level 7 · PGD + MBA',
    duration: '18 months', mode: 'Online / Blended', fee: 'AED 18,500', tag: '',
    uniName: 'Anglia Ruskin University', uniLogo: logos.anglia,
    blurb: 'A globally respected MBA from one of the UK\'s most international universities, via Level 7 PGD advanced entry.',
    overview: overviewMBA, modules: modulesMBA, entry: entryMBA,
  },
  {
    _id: 'programme-mba-arden',
    cat: 'mba', order: 3, featured: false,
    title: 'Master of Business Administration',
    level: 'Level 7 · PGD + MBA',
    duration: '18 months', mode: 'Online', fee: 'AED 18,500', tag: '',
    uniName: 'Arden University', uniLogo: logos.arden,
    blurb: 'Earn a UK MBA through flexible online study — Arden\'s distance-learning expertise supports you every step.',
    overview: overviewMBA, modules: modulesMBA, entry: entryMBA,
  },
  {
    _id: 'programme-mba-bucks',
    cat: 'mba', order: 4, featured: true,
    title: 'International MBA',
    level: 'Level 7 · PGD + International MBA',
    duration: '18 months', mode: 'Online / Blended', fee: 'AED 19,500', tag: 'International',
    uniName: 'Buckinghamshire New University', uniLogo: PH,
    blurb: 'A globally focused International MBA pathway combining a Level 7 PGD with advanced entry to a UK degree.',
    overview: overviewMBA, modules: modulesMBA, entry: entryMBA,
  },
  {
    _id: 'programme-mba-ports',
    cat: 'mba', order: 5, featured: false,
    title: 'Master of Business Administration',
    level: 'Level 7 · PGD + MBA',
    duration: '18 months', mode: 'Online / Blended', fee: 'AED 18,500', tag: '',
    uniName: 'University of Portsmouth', uniLogo: PH,
    blurb: 'A research-led MBA from a top UK university, built for professionals ready to lead at the highest level.',
    overview: overviewMBA, modules: modulesMBA, entry: entryMBA,
  },
  {
    _id: 'programme-mba-wolves',
    cat: 'mba', order: 6, featured: false,
    title: 'Master of Business Administration',
    level: 'Level 7 · PGD + MBA',
    duration: '18 months', mode: 'Online', fee: 'AED 18,500', tag: '',
    uniName: 'University of Wolverhampton', uniLogo: logos.wolves,
    blurb: 'Gain an industry-respected MBA with a career-first approach and strong employer connections.',
    overview: overviewMBA, modules: modulesMBA, entry: entryMBA,
  },
  {
    _id: 'programme-mba-manc',
    cat: 'mba', order: 7, featured: false,
    title: 'Master of Business Administration',
    level: 'Level 7 · PGD + MBA',
    duration: '18 months', mode: 'Online / Blended', fee: 'AED 18,500', tag: '',
    uniName: 'University of Greater Manchester', uniLogo: PH,
    blurb: 'Study your MBA through one of the UK\'s most dynamic university cities, delivered fully online.',
    overview: overviewMBA, modules: modulesMBA, entry: entryMBA,
  },

  // MBA SPECIALISATION ───────────────────────────────────────────────────────────
  {
    _id: 'programme-mba-finance-wrex',
    cat: 'mba', order: 8, featured: true,
    title: 'MBA in Finance',
    level: 'Level 7 · PGD + MBA Finance',
    duration: '18 months', mode: 'Online / Blended', fee: 'AED 19,500', tag: 'Specialisation',
    uniName: 'Wrexham Glyndwr University', uniLogo: PH,
    blurb: 'Combine executive MBA credentials with deep expertise in corporate finance, investment and financial strategy.',
    overview: overviewMBA, modules: modulesFinance, entry: entryMBA,
  },
  {
    _id: 'programme-mba-marketing-wrex',
    cat: 'mba', order: 9, featured: false,
    title: 'MBA in Marketing',
    level: 'Level 7 · PGD + MBA Marketing',
    duration: '18 months', mode: 'Online / Blended', fee: 'AED 19,500', tag: 'Specialisation',
    uniName: 'Wrexham Glyndwr University', uniLogo: PH,
    blurb: 'Build strategic marketing leadership skills alongside a full MBA qualification from a UK university.',
    overview: overviewMBA, modules: modulesMarketing, entry: entryMBA,
  },
  {
    _id: 'programme-mba-hrm-wrex',
    cat: 'mba', order: 10, featured: false,
    title: 'MBA in Human Resource Management',
    level: 'Level 7 · PGD + MBA HRM',
    duration: '18 months', mode: 'Online / Blended', fee: 'AED 19,500', tag: 'Specialisation',
    uniName: 'Wrexham Glyndwr University', uniLogo: PH,
    blurb: 'Lead people strategy at the highest level with a specialised HRM MBA from a UK-accredited institution.',
    overview: overviewMBA, modules: modulesHRM, entry: entryMBA,
  },
  {
    _id: 'programme-msc-finance-uclan',
    cat: 'mba', order: 11, featured: false,
    title: 'MSc in Finance & Management',
    level: 'Level 7 · PGD + MSc',
    duration: '18 months', mode: 'Online', fee: 'AED 19,500', tag: 'Specialisation',
    uniName: 'University of Central Lancashire', uniLogo: PH,
    blurb: 'A rigorous postgraduate pathway blending financial expertise with strategic management skills.',
    overview: overviewMBA, modules: modulesMscFin, entry: entryMBA,
  },
  {
    _id: 'programme-mba-ohs-ports',
    cat: 'mba', order: 12, featured: false,
    title: 'MBA in Occupational Health and Safety',
    level: 'Level 7 · PGD + MBA',
    duration: '18 months', mode: 'Online / Blended', fee: 'AED 19,500', tag: 'Specialisation',
    uniName: 'University of Portsmouth', uniLogo: PH,
    blurb: 'Lead workplace safety strategy with a specialist MBA combining health, safety law and management.',
    overview: overviewMBA, modules: modulesOHS, entry: entryMBA,
  },
  {
    _id: 'programme-mba-pm-ports',
    cat: 'mba', order: 13, featured: false,
    title: 'MBA in Project Management',
    level: 'Level 7 · PGD + MBA',
    duration: '18 months', mode: 'Online / Blended', fee: 'AED 19,500', tag: 'In demand',
    uniName: 'University of Portsmouth', uniLogo: PH,
    blurb: 'Deliver complex projects at scale with an MBA specialising in project leadership, risk and quality management.',
    overview: overviewMBA, modules: modulesPM, entry: entryMBA,
  },
  {
    _id: 'programme-mba-orgpsych-ports',
    cat: 'mba', order: 14, featured: false,
    title: 'MBA in Organisational Psychology',
    level: 'Level 7 · PGD + MBA',
    duration: '18 months', mode: 'Online / Blended', fee: 'AED 19,500', tag: 'Specialisation',
    uniName: 'University of Portsmouth', uniLogo: PH,
    blurb: 'Understand what drives people and organisations with a psychology-informed MBA from a leading UK university.',
    overview: overviewMBA, modules: modulesOrgPsych, entry: entryMBA,
  },
  {
    _id: 'programme-mba-logistics-ports',
    cat: 'mba', order: 15, featured: false,
    title: 'MBA in Logistics and Supply Chain Management',
    level: 'Level 7 · PGD + MBA',
    duration: '18 months', mode: 'Online / Blended', fee: 'AED 19,500', tag: 'Specialisation',
    uniName: 'University of Portsmouth', uniLogo: PH,
    blurb: 'Master global supply chain strategy and logistics operations with a specialist UK MBA credential.',
    overview: overviewMBA, modules: modulesLogistics, entry: entryMBA,
  },
  {
    _id: 'programme-mba-hcare-ports',
    cat: 'mba', order: 16, featured: false,
    title: 'MBA in Social and Health Care Management',
    level: 'Level 7 · PGD + MBA',
    duration: '18 months', mode: 'Online / Blended', fee: 'AED 19,500', tag: 'Specialisation',
    uniName: 'University of Portsmouth', uniLogo: PH,
    blurb: 'Lead health and social care services with strategic management expertise and a UK MBA qualification.',
    overview: overviewMBA, modules: modulesHealthcare, entry: entryMBA,
  },
  {
    _id: 'programme-mba-tourism-ports',
    cat: 'mba', order: 17, featured: false,
    title: 'MBA in Tourism and Hospitality Management',
    level: 'Level 7 · PGD + MBA',
    duration: '18 months', mode: 'Online / Blended', fee: 'AED 19,500', tag: 'Specialisation',
    uniName: 'University of Portsmouth', uniLogo: PH,
    blurb: 'Drive growth across hospitality and tourism sectors with a specialised MBA from the University of Portsmouth.',
    overview: overviewMBA, modules: modulesTourism, entry: entryMBA,
  },

  // UNDERGRADUATE ────────────────────────────────────────────────────────────────
  {
    _id: 'programme-ba-biz-wrex',
    cat: 'undergraduate', order: 1, featured: true,
    title: 'BA (Hons) in Business Management',
    level: 'Level 5 · Extended Diploma + BA (Hons)',
    duration: '24 months', mode: 'Online / Blended', fee: 'AED 14,500', tag: 'Popular',
    uniName: 'Wrexham Glyndwr University', uniLogo: PH,
    blurb: 'Earn a full UK bachelor\'s degree in Business Management through a flexible online pathway with advanced entry.',
    overview: overviewUG, modules: modulesUGBiz, entry: entryUG,
  },
  {
    _id: 'programme-ba-tourism-wrex',
    cat: 'undergraduate', order: 2, featured: false,
    title: 'BA (Hons) in Tourism and Hospitality Management',
    level: 'Level 5 · Extended Diploma + BA (Hons)',
    duration: '24 months', mode: 'Online / Blended', fee: 'AED 14,500', tag: '',
    uniName: 'Wrexham Glyndwr University', uniLogo: PH,
    blurb: 'Build a career in the UAE\'s booming tourism and hospitality sector with a UK-accredited honours degree.',
    overview: overviewUG, modules: modulesUGTourism, entry: entryUG,
  },
  {
    _id: 'programme-ba-biz-bucks',
    cat: 'undergraduate', order: 3, featured: false,
    title: 'BA (Hons) in Business Management',
    level: 'Level 5 · Extended Diploma + BA (Hons)',
    duration: '24 months', mode: 'Online / Blended', fee: 'AED 14,500', tag: '',
    uniName: 'Buckinghamshire New University', uniLogo: PH,
    blurb: 'A practical, career-focused business degree from a UK university, delivered flexibly for working professionals.',
    overview: overviewUG, modules: modulesUGBiz, entry: entryUG,
  },
  {
    _id: 'programme-bsc-accounting-bucks',
    cat: 'undergraduate', order: 4, featured: false,
    title: 'BSc (Hons) in Accounting and Finance',
    level: 'Level 5 · Extended Diploma + BSc (Hons)',
    duration: '24 months', mode: 'Online', fee: 'AED 14,500', tag: 'In demand',
    uniName: 'Buckinghamshire New University', uniLogo: PH,
    blurb: 'A rigorous accounting and finance degree laying the foundations for a CPA, ACCA or CFA career path.',
    overview: overviewUG, modules: modulesUGAccounting, entry: entryUG,
  },

  // POSTGRADUATE ─────────────────────────────────────────────────────────────────
  {
    _id: 'programme-ma-edu-bucks',
    cat: 'postgraduate', order: 1, featured: true,
    title: 'MA in Education',
    level: 'Level 7 · PGD + MA',
    duration: '18 months', mode: 'Online', fee: 'AED 17,500', tag: 'New',
    uniName: 'Buckinghamshire New University', uniLogo: PH,
    blurb: 'Advance your teaching or education management career with a fully accredited UK master\'s in Education.',
    overview: overviewPG, modules: modulesEducation, entry: entryPG,
  },
  {
    _id: 'programme-msc-ai-woolf',
    cat: 'postgraduate', order: 2, featured: true,
    title: 'Master of Science in Artificial Intelligence',
    level: 'Level 7 · MSc',
    duration: '12 months', mode: 'Online', fee: 'AED 22,500', tag: 'In demand',
    uniName: 'Woolf — European Accredited University', uniLogo: PH,
    blurb: 'Step into the AI economy with a European-accredited MSc covering machine learning, deep learning and AI ethics.',
    overview: overviewPG, modules: modulesAI, entry: entryPG,
  },
  {
    _id: 'programme-mba-leadership-woolf',
    cat: 'postgraduate', order: 3, featured: false,
    title: 'MBA — Executive Leadership',
    level: 'Level 7 · MBA',
    duration: '12 months', mode: 'Online', fee: 'AED 21,500', tag: '',
    uniName: 'Woolf — European Accredited University', uniLogo: PH,
    blurb: 'A European-accredited MBA focused on executive leadership, strategic decision-making and organisational change.',
    overview: overviewPG, modules: modulesMBA, entry: entryPG,
  },
  {
    _id: 'programme-mba-analytics-woolf',
    cat: 'postgraduate', order: 4, featured: false,
    title: 'MBA — Business Analytics',
    level: 'Level 7 · MBA',
    duration: '12 months', mode: 'Online', fee: 'AED 21,500', tag: '',
    uniName: 'Woolf — European Accredited University', uniLogo: PH,
    blurb: 'Combine an MBA credential with data analytics skills to drive evidence-based decisions at boardroom level.',
    overview: overviewPG, modules: modulesAI.slice(0, 3).concat(modulesMBA.slice(3)), entry: entryPG,
  },
  {
    _id: 'programme-mba-finance-woolf',
    cat: 'postgraduate', order: 5, featured: false,
    title: 'MBA — Finance',
    level: 'Level 7 · MBA',
    duration: '12 months', mode: 'Online', fee: 'AED 21,500', tag: '',
    uniName: 'Woolf — European Accredited University', uniLogo: PH,
    blurb: 'A European-accredited MBA with a finance specialisation, built for professionals in banking, investment and CFO-track roles.',
    overview: overviewPG, modules: modulesFinance, entry: entryPG,
  },
  {
    _id: 'programme-mba-marketing-woolf',
    cat: 'postgraduate', order: 6, featured: false,
    title: 'MBA — Marketing',
    level: 'Level 7 · MBA',
    duration: '12 months', mode: 'Online', fee: 'AED 21,500', tag: '',
    uniName: 'Woolf — European Accredited University', uniLogo: PH,
    blurb: 'A European-accredited MBA for marketing leaders ready to shape brand strategy at a global level.',
    overview: overviewPG, modules: modulesMarketing, entry: entryPG,
  },
  {
    _id: 'programme-pgd-strategic-qualifi',
    cat: 'postgraduate', order: 7, featured: false,
    title: 'Level 7 PGD in Strategic Management + Certified Strategic Manager',
    level: 'Level 7 · Dual Certification',
    duration: '12 months', mode: 'Online', fee: 'AED 15,500', tag: 'Dual Award',
    uniName: 'Qualifi UK', uniLogo: PH,
    blurb: 'Earn a UK Level 7 qualification and an industry-recognised Certified Strategic Manager credential in one programme.',
    overview: overviewPG, modules: modulesDualStrategic, entry: entryPG,
  },
  {
    _id: 'programme-pgd-accounting-qualifi',
    cat: 'postgraduate', order: 8, featured: false,
    title: 'Level 7 PGD in Accounting and Finance + Certified Financial Specialist',
    level: 'Level 7 · Dual Certification',
    duration: '12 months', mode: 'Online', fee: 'AED 15,500', tag: 'Dual Award',
    uniName: 'Qualifi UK', uniLogo: PH,
    blurb: 'Combine a UK Level 7 accounting qualification with Certified Financial Specialist status in a single pathway.',
    overview: overviewPG, modules: modulesDualFinance, entry: entryPG,
  },
  {
    _id: 'programme-l8-health-qualifi',
    cat: 'postgraduate', order: 9, featured: false,
    title: 'Level 8 Diploma in Health & Social Care',
    level: 'Level 8 · NZQA',
    duration: '18 months', mode: 'Online', fee: 'AED 22,500', tag: 'Advanced',
    uniName: 'Qualifi UK', uniLogo: PH,
    blurb: 'The highest-level health and social care qualification, designed for senior leaders and doctoral preparation.',
    overview: overviewPG, modules: modulesHealthL8, entry: entryPG,
  },
]

// ── Seed ───────────────────────────────────────────────────────────────────────
console.log(`Seeding ${programmes.length} programmes into Sanity…`)
const tx = client.transaction()
programmes.forEach((p) => {
  tx.createOrReplace({
    _type: 'programme',
    _id: p._id,
    id: { _type: 'slug', current: p._id.replace('programme-', '') },
    title: p.title,
    cat: p.cat,
    level: p.level,
    duration: p.duration,
    mode: p.mode,
    fee: p.fee,
    tag: p.tag,
    blurb: p.blurb,
    uniName: p.uniName,
    uniLogo: p.uniLogo,
    overview: p.overview,
    modules: p.modules,
    entry: p.entry,
    featured: p.featured,
    order: p.order,
  })
})
await tx.commit()
console.log('Done ✓')
