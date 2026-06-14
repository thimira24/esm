import { client } from './client'
import type { Programme, ProgrammeCategory } from '@/data/programmes'

const PROGRAMME_FIELDS = `
  "id": id.current,
  title,
  "cat": cat,
  level,
  duration,
  mode,
  "awarding": uniName,
  uniLogo,
  uniName,
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
