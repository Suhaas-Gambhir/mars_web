/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: process.env.NODE_ENV === 'development'
              ? [
                  "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob:",
                  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:",
                  "style-src 'self' 'unsafe-inline' https:",
                  "img-src 'self' data: blob: https:",
                  "font-src 'self' data: https:",
                  "frame-src 'self' https:",
                  "connect-src 'self' https:",
                  "object-src 'none'",
                  "base-uri 'self'"
                ].join('; ')
              : [
                  "default-src 'self'",
                  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://docs.google.com https://www.google.com",
                  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://docs.google.com",
                  "img-src 'self' data: blob: https:",
                  "font-src 'self' data: https://fonts.gstatic.com https://fonts.googleapis.com",
                  "frame-src 'self' https://docs.google.com https://www.google.com",
                  "connect-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com https://docs.google.com",
                  "object-src 'none'",
                  "base-uri 'self'"
                ].join('; ')
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      }
    ];
  }
};

export default nextConfig;