import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })

  const { pathname } = request.nextUrl

  // Define public routes that don't require authentication
  const publicRoutes = [
    '/',
    '/auth/signin',
    '/auth/signup',
    '/contact',
    '/sponsor',
    '/competitions',
    '/partners',
    '/recruitment',
    '/rovers',
    '/team'
  ]

  // Check if the pathname is a public route
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next()
  }

  // Redirect unauthenticated users to login page
  if (!token && pathname !== '/auth/signin') {
    const loginUrl = new URL('/auth/signin', request.url)
    loginUrl.searchParams.set('callbackUrl', encodeURI(pathname))
    return NextResponse.redirect(loginUrl)
  }

  // Allow authenticated users to access protected routes
  return NextResponse.next()
}

// Specify which routes this middleware should run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}

