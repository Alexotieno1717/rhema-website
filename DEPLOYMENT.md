# Deployment & Maintenance Guide - Rhema Website

This document provides comprehensive guidance for deploying, monitoring, and maintaining the Rhema Website project.

## 📋 Table of Contents

- [Deployment Strategies](#deployment-strategies)
- [Environment Setup](#environment-setup)
- [Build Process](#build-process)
- [Monitoring & Analytics](#monitoring--analytics)
- [Performance Optimization](#performance-optimization)
- [Security Considerations](#security-considerations)
- [Backup & Recovery](#backup--recovery)
- [Maintenance Schedule](#maintenance-schedule)
- [Troubleshooting](#troubleshooting)

## 🚀 Deployment Strategies

### Platform Options

#### 1. Vercel (Recommended)
**Best for**: Next.js applications, automatic deployments, global CDN

**Setup**:
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

**Configuration** (`vercel.json`):
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "env": {
    "NEXT_PUBLIC_API_URL": "@api-url",
    "NEXT_PUBLIC_SITE_URL": "@site-url"
  }
}
```

**Features**:
- Automatic deployments from Git
- Preview deployments for PRs
- Global CDN
- Edge functions
- Analytics integration

#### 2. Netlify
**Best for**: Static sites, form handling, serverless functions

**Setup**:
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

**Configuration** (`netlify.toml`):
```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### 3. AWS Amplify
**Best for**: AWS ecosystem integration, CI/CD pipelines

**Setup**:
```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize
amplify init

# Deploy
amplify push
```

#### 4. Traditional Hosting
**Best for**: Custom server requirements, specific hosting providers

**Setup**:
```bash
# Build for production
npm run build

# Start production server
npm run start
```

### Environment Configuration

#### Environment Variables
Create `.env.local` for local development:
```env
# API Configuration
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_SITE_URL=https://rhema-website.com

# Database (if applicable)
DATABASE_URL=postgresql://user:password@localhost:5432/dbname

# Email Service
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FACEBOOK_PIXEL=XXXXXXXXXX

# Social Media
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/juliankyula
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/jkyula
NEXT_PUBLIC_YOUTUBE_URL=https://youtube.com/@ruachassemblies
```

#### Production Environment
```env
# Production-specific variables
NODE_ENV=production
NEXT_PUBLIC_ENVIRONMENT=production

# CDN Configuration
NEXT_PUBLIC_CDN_URL=https://cdn.example.com

# Monitoring
NEXT_PUBLIC_SENTRY_DSN=https://xxxxx@sentry.io/xxxxx
```

## 🏗 Build Process

### Pre-deployment Checklist

1. **Code Quality**:
   ```bash
   # Run linting
   npm run lint
   
   # Check TypeScript
   npx tsc --noEmit
   
   # Run tests (if available)
   npm test
   ```

2. **Dependencies**:
   ```bash
   # Update dependencies
   npm update
   
   # Check for security vulnerabilities
   npm audit
   
   # Fix vulnerabilities
   npm audit fix
   ```

3. **Build Testing**:
   ```bash
   # Clean build
   rm -rf .next
   npm run build
   
   # Test production build locally
   npm run start
   ```

### Build Optimization

#### Next.js Configuration (`next.config.ts`):
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    domains: ['cdn.example.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Compression
  compress: true,
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Redirects
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
```

#### Tailwind CSS Optimization:
```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D3A84B',
        secondary: '#FFEA8E',
      },
    },
  },
  plugins: [],
}
```

## 📊 Monitoring & Analytics

### Performance Monitoring

#### Core Web Vitals
```typescript
// pages/_app.tsx or app/layout.tsx
import { useEffect } from 'react';

export function reportWebVitals(metric: any) {
  // Send to analytics service
  console.log(metric);
  
  // Example: Send to Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }
}
```

#### Error Monitoring
```typescript
// Error boundary component
import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    
    // Send to error monitoring service
    // Sentry.captureException(error, { extra: errorInfo });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="error-page">
          <h1>Something went wrong</h1>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
```

### Analytics Integration

#### Google Analytics 4
```typescript
// components/Analytics.tsx
import Script from 'next/script';

export default function Analytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
    </>
  );
}
```

#### Custom Event Tracking
```typescript
// utils/analytics.ts
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Usage
trackEvent('button_click', {
  button_name: 'partner_with_us',
  page_location: '/home'
});
```

## ⚡ Performance Optimization

### Image Optimization
```typescript
// components/OptimizedImage.tsx
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
    />
  );
}
```

### Code Splitting
```typescript
// Dynamic imports for large components
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
  ssr: false
});

// Route-based code splitting
const LazyPage = dynamic(() => import('./pages/LazyPage'));
```

### Caching Strategy
```typescript
// next.config.ts
const nextConfig = {
  async headers() {
    return [
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ];
  },
};
```

## 🔒 Security Considerations

### Security Headers
```typescript
// next.config.ts
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;",
          },
        ],
      },
    ];
  },
};
```

### Input Validation
```typescript
// utils/validation.ts
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const sanitizeInput = (input: string): string => {
  return input.replace(/[<>]/g, '');
};
```

### API Security
```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Rate limiting
  const ip = request.ip ?? '127.0.0.1';
  
  // CORS headers
  const response = NextResponse.next();
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  return response;
}

export const config = {
  matcher: '/api/:path*',
};
```

## 💾 Backup & Recovery

### Database Backup (if applicable)
```bash
# PostgreSQL backup
pg_dump -h localhost -U username -d database_name > backup.sql

# MySQL backup
mysqldump -h localhost -u username -p database_name > backup.sql

# Automated backup script
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backups"
DB_NAME="rhema_website"

pg_dump -h localhost -U username -d $DB_NAME > $BACKUP_DIR/backup_$DATE.sql

# Keep only last 7 days of backups
find $BACKUP_DIR -name "backup_*.sql" -mtime +7 -delete
```

### File Backup
```bash
# Backup uploads and assets
tar -czf backup_$(date +%Y%m%d).tar.gz public/assets/

# Sync to cloud storage
aws s3 sync ./backups s3://your-bucket/backups/
```

### Recovery Procedures
```bash
# Database recovery
psql -h localhost -U username -d database_name < backup.sql

# File recovery
tar -xzf backup_20241201.tar.gz
```

## 📅 Maintenance Schedule

### Daily Tasks
- [ ] Monitor error logs
- [ ] Check website uptime
- [ ] Review analytics data
- [ ] Monitor performance metrics

### Weekly Tasks
- [ ] Update dependencies
- [ ] Review security alerts
- [ ] Backup verification
- [ ] Performance audit

### Monthly Tasks
- [ ] Full security audit
- [ ] Content updates
- [ ] SEO optimization review
- [ ] User feedback analysis

### Quarterly Tasks
- [ ] Major dependency updates
- [ ] Performance optimization
- [ ] Feature planning
- [ ] Infrastructure review

## 🐛 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build

# Check for TypeScript errors
npx tsc --noEmit

# Check for linting errors
npm run lint
```

#### Performance Issues
```bash
# Analyze bundle size
npm run build
npx @next/bundle-analyzer

# Check Core Web Vitals
npx lighthouse https://your-site.com
```

#### Deployment Issues
```bash
# Check environment variables
vercel env ls

# Redeploy with fresh cache
vercel --force

# Check deployment logs
vercel logs
```

### Monitoring Tools

#### Uptime Monitoring
```typescript
// health-check API route
// app/api/health/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Check database connection
    // Check external services
    
    return NextResponse.json({ 
      status: 'healthy', 
      timestamp: new Date().toISOString() 
    });
  } catch (error) {
    return NextResponse.json(
      { status: 'unhealthy', error: error.message },
      { status: 500 }
    );
  }
}
```

#### Error Logging
```typescript
// utils/logger.ts
export const logger = {
  info: (message: string, data?: any) => {
    console.log(`[INFO] ${message}`, data);
  },
  error: (message: string, error?: any) => {
    console.error(`[ERROR] ${message}`, error);
    // Send to error monitoring service
  },
  warn: (message: string, data?: any) => {
    console.warn(`[WARN] ${message}`, data);
  }
};
```

### Emergency Procedures

#### Rollback Strategy
```bash
# Vercel rollback
vercel rollback

# Git rollback
git revert HEAD
git push origin main

# Database rollback
psql -h localhost -U username -d database_name < backup.sql
```

#### Contact Information
- **Development Team**: dev@rhema-website.com
- **Hosting Provider**: support@vercel.com
- **Domain Provider**: support@domain-provider.com

---

**Last Updated**: December 2024
**Maintainer**: Development Team
