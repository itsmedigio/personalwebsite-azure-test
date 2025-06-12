import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Davide Di Giovanni',
  description: 'Portfolio website for Davide Di Giovanni',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
