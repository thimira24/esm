import { client } from './client'
import type { Programme, ProgrammeCategory } from '@/data/programmes'

const PROGRAMME_FIELDS = `
  "id": id.current,
  title,
  "cat": cat,
  level,
  duration,
  mode,
  "awarding": university->name,
  "uniLogo": university->logoPath,
  "uniName": university->name,
  fee,
  tag,
  blurb,
  overview,
  modules,
  entry,
  featured,
  order
`

export async function getAllProgrammes(): Promise<Programme[]> {
  return client.fetch(
    `*[_type == "programme"] | order(order asc, cat asc, title asc) { ${PROGRAMME_FIELDS} }`
  )
}

export async function getProgrammeById(id: string): Promise<Programme | null> {
  return client.fetch(
    `*[_type == "programme" && id.current == $id][0] { ${PROGRAMME_FIELDS} }`,
    { id }
  )
}

export async function getFeaturedProgrammes(): Promise<Programme[]> {
  return client.fetch(
    `*[_type == "programme" && featured == true] | order(order asc) { ${PROGRAMME_FIELDS} }`
  )
}

export async function getProgrammesByCategory(cat: ProgrammeCategory): Promise<Programme[]> {
  return client.fetch(
    `*[_type == "programme" && cat == $cat] | order(order asc, title asc) { ${PROGRAMME_FIELDS} }`,
    { cat }
  )
}

export async function getAllProgrammeTitles(): Promise<{ id: string; title: string; uniName: string }[]> {
  return client.fetch(
    `*[_type == "programme"] | order(cat asc, order asc, title asc) { "id": id.current, title, uniName }`
  )
}

export async function getProgrammeCategories() {
  const programmes = await client.fetch(
    `*[_type == "programme"] | order(order asc) { "id": id.current, title, cat, level }`
  )
  // Group by category
  const map: Record<string, { titles: string[]; levels: string[] }> = {}
  for (const p of programmes) {
    if (!p.cat) continue
    if (!map[p.cat]) map[p.cat] = { titles: [], levels: [] }
    map[p.cat].titles.push(p.title)
    map[p.cat].levels.push(p.level)
  }
  return Object.entries(map).map(([cat, data]) => ({
    cat,
    count: data.titles.length,
    examples: data.titles.slice(0, 3),
  }))
}

export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]{
    stats,
    values,
    whyEsm,
    contact,
    social,
    hero {
      eyebrow,
      heading,
      subtext,
      primaryCta,
      secondaryCta,
      badgeTitle,
      badgeSubtitle,
      chipLabel,
      chipValue,
      "imageUrl": image.asset->url
    },
    about {
      heading,
      body1,
      body2,
      "imageUrl": image.asset->url,
      storyHeading,
      storyBody1,
      storyBody2,
      timeline,
      visionHeading,
      visionSubtext,
      visionCards
    }
  }`)
}

export async function getTestimonials() {
  return client.fetch(`*[_type == "testimonial"] | order(order asc) { name, role, quote, imageUrl }`)
}

export async function getFaqs() {
  return client.fetch(`*[_type == "faq"] | order(order asc) { question, answer }`)
}

export async function getLegalPage(slug: string) {
  return client.fetch(
    `*[_type == "legalPage" && slug.current == $slug][0] { title, lastUpdated, content }`,
    { slug }
  )
}

export async function getPartners() {
  return client.fetch(`*[_type == "partner"] | order(order asc) { name, type, logoPath }`)
}
