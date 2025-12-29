import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// List of paths that should be publicly accessible
const publicPaths = [
  '/_next',
  '/images',
  '/fonts',
  '/favicon.ico',
  '/api',
  '/coming-soon', // This is now handled by the rewrite
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the current path should be excluded from rewriting
  const isExcludedPath = publicPaths.some(publicPath => 
    pathname.startsWith(publicPath) || 
    pathname === '/contact'
  );

  // If it's the root path or a public path, continue
  if (isExcludedPath) {
    // If it's the coming-soon page, serve it directly
    if (pathname === '/coming-soon') {
      return NextResponse.next();
    }
    // For all other public paths, continue normally
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
