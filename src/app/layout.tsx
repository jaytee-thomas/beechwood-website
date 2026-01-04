import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Beechwood.ai - Innovation at Every Scale',
  description: 'From consumer apps to enterprise AI, we build technology that works in the real world. Discover Beacon, i65sports, Visual Counter, Clock Work, and Beechwood OS.',
  keywords: 'Beechwood, Beechwood.ai, innovation, apps, AI, enterprise software, emergency response, sports social platform, people counting, workforce scheduling',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
