import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: 'msq7ysrf',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

// Map old categories to new categories based on programme level
function mapCategory(oldCat, level, title) {
  const levelNum = parseInt(level?.match(/Level\s+(\d+)/i)?.[1] || '0')
  const titleLower = (title || '').toLowerCase()

  // Teacher Education - check title for education/teaching related
  if (titleLower.includes('education') || titleLower.includes('teaching') || titleLower.includes('teacher')) {
    return 'teacher-education'
  }

  // Undergraduate - Level 3, Level 4, or BA/BSc/Hons degrees
  if (levelNum >= 3 && levelNum <= 4) {
    return 'undergraduate'
  }
  if (titleLower.includes('ba ') || titleLower.includes('bsc ') || titleLower.includes('(hons)') || titleLower.includes('undergraduate')) {
    return 'undergraduate'
  }

  // Level 5 = Postgraduate Diploma
  if (levelNum === 5) {
    return 'pgd'
  }

  // Level 7+ = Master Programs
  if (levelNum >= 7) {
    return 'masters'
  }
  if (titleLower.includes('mba') || titleLower.includes('master') || titleLower.includes('msc')) {
    return 'masters'
  }
  if (titleLower.startsWith('ma ') || titleLower.includes(' ma ')) {
    return 'masters'
  }

  // Fallback based on old category
  const fallback = {
    'mba': 'masters',
    'business': 'masters',
    'undergraduate': 'undergraduate',
    'postgraduate': 'pgd',
    'technology': 'pgd',
    'health': 'pgd',
  }

  return fallback[oldCat] || 'pgd'
}

async function migrate() {
  console.log('Fetching all programmes from Sanity...')

  const programmes = await client.fetch(
    '*[_type == "programme"] { _id, id, title, cat, level }'
  )

  console.log(`Found ${programmes.length} programmes\n`)

  let updated = 0
  let skipped = 0

  for (const p of programmes) {
    const newCat = mapCategory(p.cat, p.level, p.title)

    if (p.cat === newCat) {
      console.log(`✓ "${p.title}" — already "${p.cat}", skipping`)
      skipped++
      continue
    }

    console.log(`→ "${p.title}" — ${p.cat} → ${newCat}`)

    await client
      .patch(p._id)
      .set({ cat: newCat })
      .commit()

    updated++
  }

  console.log(`\nDone! Updated: ${updated}, Skipped: ${skipped}`)
}

migrate().catch((err) => {
  console.error('Migration failed:', err)
  process.exit(1)
})
