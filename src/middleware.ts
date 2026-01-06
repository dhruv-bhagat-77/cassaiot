import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// List of paths that should be publicly accessible
const publicPaths = [
  '/_next',
  '/images',
  '/fonts',
  '/favicon.ico',
  '/api',
  '/coming-soon',
  '/contact',
  '/signin',
  '/signup',
  '/',
  '/about',
  '/solutions',
  '/blog'
];

// List of paths that should be directly accessible without any checks
const directAccessPaths = [
  '/coming-soon',
  '/contact',
  '/signin',
  '/signup'
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the current path should be excluded from rewriting
  const isPublicPath = publicPaths.some(publicPath => 
    pathname === publicPath || 
    pathname.startsWith(publicPath + '/')
  );

  // If it's a public path, allow access
  if (isPublicPath) {
    return NextResponse.next();
  }

  // For direct access paths, serve them directly
  if (directAccessPaths.some(path => pathname === path)) {
    return NextResponse.next();
  }

  // For all other paths, rewrite to coming-soon but keep the original URL
  return NextResponse.rewrite(new URL('/coming-soon', request.url));
}

export const config = {
  // Match all paths except the ones starting with _next, api, static, and image optimization
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api/).*)',
  ],
};
