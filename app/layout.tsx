import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Outfit, Tiro_Devanagari_Hindi } from 'next/font/google'
import { wedding } from '@/lib/wedding'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', weight: ['200', '300', '400', '500', '600'] })
const tiro = Tiro_Devanagari_Hindi({ subsets: ['devanagari', 'latin'], variable: '--font-tiro', weight: '400' })

export const metadata: Metadata = {
  title: `${wedding.groom} weds ${wedding.bride}`,
  description: `Join us to celebrate the wedding of ${wedding.groom} and ${wedding.bride} · ${wedding.dateLabel} · ${wedding.city}, ${wedding.region}`,
  generator: 'v0.app',
  openGraph: {
    title: `${wedding.groom} weds ${wedding.bride}`,
    description: `${wedding.dateLabel} · ${wedding.city}, ${wedding.region}`,
    images: ['/images/couple.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8f0e6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${tiro.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
