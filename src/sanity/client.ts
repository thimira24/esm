import { createClient } from 'next-sanity'

export const client = createClient({
  // Public Sanity values (safe to commit — NEXT_PUBLIC_* ships to the browser anyway).
  // Fallbacks let the build succeed even if the host's env vars aren't set.
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'msq7ysrf',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // Let Next.js ISR handle caching; Sanity CDN causes stale data after edits
})
