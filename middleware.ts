import { NextResponse, type NextRequest } from 'next/server'

// This middleware adds performance headers to all responses
export function middleware(request: NextRequest) {
  // Get the incoming response
  const response = NextResponse.next()
  
  // Add security headers
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')
  
  // Add performance headers for static assets
  const url = request.nextUrl.pathname
  if (
    url.includes('.jpg') || 
    url.includes('.jpeg') || 
    url.includes('.png') || 
    url.includes('.svg') || 
    url.includes('.css') || 
    url.includes('.js')
  ) {
    // Cache static assets for 1 year
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  }
  
  // For HTML pages use a shorter cache time to ensure fresh content
  else {
    response.headers.set('Cache-Control', 'public, max-age=3600, must-revalidate')
  }
  
  return response
}

// Apply to all routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
