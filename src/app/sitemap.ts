import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'
import { getAllProgrammeTitles } from '@/sanity/queries'

// Rebuild the sitemap at most once an hour.
export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/programmes`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/partners`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]

  let programmeRoutes: MetadataRoute.Sitemap = []
  try {
    const programmes = await getAllProgrammeTitles()
    programmeRoutes = programmes.map((p) => ({
      url: `${SITE_URL}/programmes/${p.id}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    }))
  } catch {
    // If Sanity is unreachable at build time, ship the static routes only.
  }

  return [...staticRoutes, ...programmeRoutes]
}
