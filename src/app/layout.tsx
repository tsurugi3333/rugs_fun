import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RUGS.FUN - Trading Platform',
  description: 'Crypto trading platform with live charts and community features',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0B0E16] dynapuff-font text-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
}