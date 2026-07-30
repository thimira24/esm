import type { Metadata } from 'next'
import { Montserrat, Open_Sans, DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp'
import MobileCTABar from '@/components/layout/MobileCTABar'
import { getSiteSettings } from '@/sanity/queries'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/seo'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-open-sans',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const revalidate = 60 // re-fetch site settings (WhatsApp, etc.) at most once per minute

const DEFAULT_TITLE = 'ESM Business School | Accredited British Qualifications'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: '%s | ESM Business School',
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  keywords: [
    'ESM Business School',
    'accredited British qualifications',
    'UK diplomas UAE',
    'online MBA',
    'business management diploma',
    'RQF diploma',
    'health and social care diploma',
    'online degrees UAE',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSiteSettings().catch(() => null)
  const whatsapp = settings?.contact?.whatsapp ?? ''

  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable} ${dmSans.variable}`}
    >
      <body style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}>
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp href={whatsapp} />
        <MobileCTABar whatsapp={whatsapp} />
      </body>
    </html>
  )
}
