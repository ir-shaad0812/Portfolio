import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Irshad Portfolio',
  description: 'Professional portfolio showcasing my skills, projects and experiences',
  generator: 'Irshad Portfolio',
  keywords: ['portfolio', 'web development', 'design', 'projects'],
  authors: [{ name: 'Irshad' }],
  metadataBase: new URL('https://yourwebsite.com'),
  openGraph: {
    title: 'Irshad Portfolio',
    description: 'Professional portfolio showcasing my skills, projects and experiences',
    type: 'website',
  },
}

// Optimize viewport settings
export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/placeholder-logo.svg" as="image" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  )
}
