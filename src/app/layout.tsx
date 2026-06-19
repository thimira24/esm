import type { Metadata } from 'next'
import { Montserrat, Open_Sans, DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp'
import MobileCTABar from '@/components/layout/MobileCTABar'
import { getSiteSettings } from '@/sanity/queries'

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

export const metadata: Metadata = {
  title: 'ESM Business School — Accredited British Qualifications',
  description:
    'Internationally recognised diplomas in business, technology and health — delivered flexibly, online or blended, from our home in the UAE.',
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
