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

async function fix() {
  const programmes = await client.fetch('*[_type == "programme"] { _id, title, cat }')

  let fixed = 0
  for (const p of programmes) {
    if (p.title.includes('Level 7 PGD') && p.cat !== 'pgd') {
      console.log(`Fixing: "${p.title}" — ${p.cat} → pgd`)
      await client.patch(p._id).set({ cat: 'pgd' }).commit()
      fixed++
    }
  }
  console.log(`Fixed ${fixed} programmes`)
}

fix().catch(console.error)
