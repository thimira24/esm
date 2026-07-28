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

async function fixMBAs() {
  const programmes = await client.fetch(
    '*[_type == "programme"] { _id, title, cat, level }'
  )

  let fixed = 0
  for (const p of programmes) {
    const titleLower = (p.title || '').toLowerCase()
    if (titleLower.includes('mba') && p.cat !== 'masters') {
      console.log(`Fixing: "${p.title}" — ${p.cat} → masters`)
      await client.patch(p._id).set({ cat: 'masters' }).commit()
      fixed++
    }
  }
  console.log(`Fixed ${fixed} MBA programmes`)
}

fixMBAs().catch(console.error)
