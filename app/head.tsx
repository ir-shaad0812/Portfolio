// This file contains additional meta tags for performance optimization
// These tags will be added to the <head> of the HTML document

import Script from 'next/script'

export default function Head() {
  return (
    <>
      {/* DNS prefetching for critical external resources */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      
      {/* Add Cache Control headers */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />
      
      {/* Add preload hints for important assets */}
      <link 
        rel="preload" 
        href="/public/placeholder-logo.svg" 
        as="image" 
        type="image/svg+xml"
      />
      
      {/* Core Web Vitals & performance optimization */}
      <meta name="theme-color" content="#ffffff" />
      <meta name="color-scheme" content="light dark" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      
      {/* Add structured data for SEO */}
      <Script 
        id="schema-portfolio" 
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "name": "Irshad Portfolio",
            "description": "Professional portfolio showcasing skills and projects",
            "author": {
              "@type": "Person",
              "name": "Irshad"
            }
          })
        }}
      />
    </>
  )
}
