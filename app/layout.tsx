
import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://davidedigiovanni.it'),
  title: {
    default: 'Davide Di Giovanni | DevOps Engineer & Cloud Architect',
    template: '%s | Davide Di Giovanni',
  },
  description:
    'Davide Di Giovanni is a DevOps Engineer and Cloud Architect specializing in automation, infrastructure as code, Kubernetes, Azure, AWS, and CI/CD.',
  keywords: [
    'Davide Di Giovanni',
    'DevOps Engineer',
    'Cloud Architect',
    'Azure',
    'AWS',
    'Kubernetes',
    'Terraform',
    'Ansible',
  ],
  alternates: {
    canonical: 'https://davidedigiovanni.it',
  },
  openGraph: {
    title: 'Davide Di Giovanni | DevOps Engineer & Cloud Architect',
    description:
      'Automation-focused DevOps engineer building resilient cloud infrastructure and delivery pipelines.',
    url: 'https://davidedigiovanni.it',
    siteName: 'Davide Di Giovanni',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Davide Di Giovanni | DevOps Engineer & Cloud Architect',
    description:
      'Automation-focused DevOps engineer building resilient cloud infrastructure and delivery pipelines.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
        <script data-goatcounter="https://davidedigiovanni.goatcounter.com/count" async src="//gc.zgo.at/count.js" />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Davide Di Giovanni',
              jobTitle: 'DevOps Engineer & Cloud Architect',
              url: 'https://davidedigiovanni.it',
              sameAs: [
                'https://github.com/itsmedigio',
                'https://linkedin.com/in/itsmedigio',
              ],
              description:
                'Automation-focused DevOps engineer building resilient cloud infrastructure and delivery pipelines.',
            }),
          }}
        />
      </body>
    </html>
  )
}
