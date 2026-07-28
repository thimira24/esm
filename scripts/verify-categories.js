import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: 'msq7ysrf',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

async function verify() {
  const programmes = await client.fetch('*[_type == "programme"] | order(cat asc, title asc) { title, cat, level }')
  const grouped = {}
  for (const p of programmes) {
    if (!grouped[p.cat]) grouped[p.cat] = []
    grouped[p.cat].push(`${p.title} (${p.level})`)
  }
  for (const [cat, titles] of Object.entries(grouped)) {
    console.log(`\n${cat.toUpperCase()} (${titles.length}):`)
    titles.forEach(t => console.log(`  - ${t}`))
  }
}

verify().catch(console.error)
