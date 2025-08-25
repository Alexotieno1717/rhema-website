# Development Guide - Rhema Website

This document provides detailed development guidelines, coding standards, and best practices for the Rhema Website project.

## 📋 Table of Contents

- [Coding Standards](#coding-standards)
- [Component Patterns](#component-patterns)
- [State Management](#state-management)
- [Performance Guidelines](#performance-guidelines)
- [Testing Strategy](#testing-strategy)
- [Git Workflow](#git-workflow)
- [Debugging Guide](#debugging-guide)

## 🎯 Coding Standards

### TypeScript Guidelines

#### Type Definitions
```typescript
// Always define interfaces for component props
interface ComponentProps {
  title: string;
  description?: string; // Optional props with ?
  children: React.ReactNode;
  onClick: () => void;
}

// Use type aliases for simple types
type ButtonVariant = 'primary' | 'secondary' | 'outline';
type Size = 'sm' | 'md' | 'lg';

// Export types from types/index.ts
export interface IHomeContent {
  id: string;
  title: string;
  // ... other properties
}
```

#### Component Structure
```typescript
import React from 'react';
import { cn } from '@/lib/utils';

interface ComponentProps {
  className?: string;
  children: React.ReactNode;
}

export default function Component({ className, children }: ComponentProps) {
  return (
    <div className={cn('base-classes', className)}>
      {children}
    </div>
  );
}
```

### Naming Conventions

#### Files and Directories
- **Components**: PascalCase (`HomeCards.tsx`)
- **Pages**: lowercase (`page.tsx`)
- **Utilities**: camelCase (`utils.ts`)
- **Constants**: PascalCase (`index.ts`)
- **Types**: PascalCase with `I` prefix for interfaces (`IHomeContent`)

#### Variables and Functions
```typescript
// Variables: camelCase
const userName = 'John';
const isActive = true;

// Functions: camelCase
const handleClick = () => {};
const formatDate = (date: Date) => {};

// Constants: UPPER_SNAKE_CASE
const API_BASE_URL = 'https://api.example.com';
const MAX_RETRY_ATTEMPTS = 3;
```

### Import Organization
```typescript
// 1. React and Next.js imports
import React from 'react';
import Link from 'next/link';

// 2. Third-party libraries
import { cn } from 'clsx';
import { Button } from '@/components/ui/button';

// 3. Local imports (absolute paths)
import { IHomeContent } from '@/types';
import { HomeContent } from '@/mock';

// 4. Relative imports
import './Component.module.css';
```

## 🧩 Component Patterns

### Functional Components
```typescript
// Preferred: Function declaration
export default function HomePage() {
  return <div>Home Page Content</div>;
}

// Alternative: Arrow function
const HomePage = () => {
  return <div>Home Page Content</div>;
};
```

### Props Interface Pattern
```typescript
interface CardProps {
  title: string;
  description?: string;
  image?: string;
  onClick?: () => void;
  variant?: 'default' | 'featured';
  className?: string;
}

export default function Card({
  title,
  description,
  image,
  onClick,
  variant = 'default',
  className
}: CardProps) {
  return (
    <div 
      className={cn(
        'card-base',
        variant === 'featured' && 'card-featured',
        className
      )}
      onClick={onClick}
    >
      {image && <img src={image} alt={title} />}
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  );
}
```

### Conditional Rendering
```typescript
// Preferred: Early return
export default function ConditionalComponent({ data }: Props) {
  if (!data) {
    return <div>Loading...</div>;
  }

  if (data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

// Alternative: Conditional rendering with &&
{isVisible && <Component />}

// Multiple conditions
{isVisible && isAuthenticated && <ProtectedComponent />}
```

### List Rendering
```typescript
// Always use key prop for list items
{items.map(item => (
  <ListItem key={item.id} item={item} />
))}

// For complex keys, use unique identifiers
{events.map(event => (
  <EventCard 
    key={`${event.id}-${event.date}`} 
    event={event} 
  />
))}
```

## 🔄 State Management

### Local State
```typescript
import { useState } from 'react';

export default function FormComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <form>
      <input
        value={formData.name}
        onChange={(e) => handleChange('name', e.target.value)}
      />
    </form>
  );
}
```

### Form State Management
```typescript
// For complex forms, use controlled components
const [formState, setFormState] = useState({
  values: initialValues,
  errors: {},
  touched: {},
  isSubmitting: false
});

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setFormState(prev => ({ ...prev, isSubmitting: true }));
  
  try {
    // Submit logic
  } catch (error) {
    // Error handling
  } finally {
    setFormState(prev => ({ ...prev, isSubmitting: false }));
  }
};
```

## ⚡ Performance Guidelines

### Image Optimization
```typescript
// Use Next.js Image component
import Image from 'next/image';

<Image
  src="/assets/hero.jpg"
  alt="Hero image"
  width={1200}
  height={600}
  priority // For above-the-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### Lazy Loading
```typescript
// Dynamic imports for large components
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
  ssr: false // If component doesn't need SSR
});
```

### Memoization
```typescript
import { memo, useMemo, useCallback } from 'react';

// Memoize expensive calculations
const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);

// Memoize callback functions
const handleClick = useCallback(() => {
  // Click handler logic
}, [dependency]);

// Memoize components
const MemoizedComponent = memo(Component);
```

### Bundle Optimization
```typescript
// Tree shaking friendly imports
import { Button } from '@/components/ui/button';
// Instead of
import * as UI from '@/components/ui';

// Use dynamic imports for code splitting
const LazyPage = dynamic(() => import('./LazyPage'));
```

## 🧪 Testing Strategy

### Component Testing
```typescript
// Example test structure
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders hero section', () => {
    render(<HomePage />);
    expect(screen.getByText('Empowering Communities')).toBeInTheDocument();
  });

  it('displays navigation links', () => {
    render(<HomePage />);
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Events')).toBeInTheDocument();
  });
});
```

### API Testing
```typescript
// Test API routes
import { createMocks } from 'node-mocks-http';
import handler from '@/app/api/enquiry/route';

describe('/api/enquiry', () => {
  it('handles POST request', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        name: 'John Doe',
        email: 'john@example.com'
      }
    });

    await handler(req, res);
    expect(res._getStatusCode()).toBe(200);
  });
});
```

## 🔄 Git Workflow

### Branch Naming
```
feature/add-contact-form
bugfix/fix-navigation-mobile
hotfix/security-patch
refactor/component-structure
```

### Commit Messages
```
feat: add contact form validation
fix: resolve mobile navigation issue
docs: update README with new features
refactor: simplify component structure
test: add unit tests for form components
```

### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No console errors
```

## 🐛 Debugging Guide

### Common Issues

#### TypeScript Errors
```bash
# Check for type errors
npx tsc --noEmit

# Fix specific file
npx tsc --noEmit src/components/Component.tsx
```

#### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build

# Check for dependency issues
npm ls
```

#### Runtime Errors
```typescript
// Add error boundaries
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div>
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
    </div>
  );
}

<ErrorBoundary FallbackComponent={ErrorFallback}>
  <Component />
</ErrorBoundary>
```

### Debugging Tools
```typescript
// Use React DevTools
// Install browser extension for React DevTools

// Use console logging strategically
console.log('Component rendered with props:', props);
console.warn('Deprecated feature used');
console.error('Error occurred:', error);

// Use debugger statement
debugger; // Browser will pause execution here
```

### Performance Debugging
```typescript
// Use React Profiler
import { Profiler } from 'react';

function onRenderCallback(
  id: string,
  phase: string,
  actualDuration: number
) {
  console.log(`Component ${id} took ${actualDuration}ms to render`);
}

<Profiler id="HomePage" onRender={onRenderCallback}>
  <HomePage />
</Profiler>
```

## 📚 Additional Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### Tools
- [ESLint Configuration](https://eslint.org/docs/user-guide/configuring)
- [Prettier Configuration](https://prettier.io/docs/en/configuration.html)
- [React DevTools](https://react.dev/learn/react-developer-tools)

### Best Practices
- [React Best Practices](https://react.dev/learn)
- [Next.js Best Practices](https://nextjs.org/docs/app/building-your-application)
- [TypeScript Best Practices](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)

---

**Last Updated**: December 2024
**Maintainer**: Development Team
