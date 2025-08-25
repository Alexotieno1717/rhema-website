# Component Documentation - Rhema Website

This document provides detailed information about all components in the Rhema Website project, including their props, usage examples, and relationships.

## 📋 Table of Contents

- [Navigation Components](#navigation-components)
- [Page Components](#page-components)
- [Section Components](#section-components)
- [UI Components](#ui-components)
- [Rhema Feast Components](#rhema-feast-components)
- [About Components](#about-components)
- [Event Components](#event-components)

## 🧭 Navigation Components

### Navbar.tsx
**Location**: `src/components/navigation/Navbar.tsx`

**Purpose**: Main navigation bar component that appears on all pages.

**Props**:
```typescript
interface NavbarProps {
  className?: string;
}
```

**Usage**:
```typescript
import Navbar from '@/components/navigation/Navbar';

export default function Layout() {
  return (
    <div>
      <Navbar />
      {/* Page content */}
    </div>
  );
}
```

**Features**:
- Responsive mobile menu
- Navigation links from constants
- Logo display
- Mobile hamburger menu

**Dependencies**:
- `@/constants/index.ts` - Navigation links
- `@/components/ui/button.tsx` - Button component

---

### Header.tsx
**Location**: `src/components/navigation/Header.tsx`

**Purpose**: Page header component for specific pages.

**Props**:
```typescript
interface HeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
}
```

**Usage**:
```typescript
import Header from '@/components/navigation/Header';

<Header 
  title="About JKM Global"
  subtitle="Empowering Communities"
  backgroundImage="/assets/hero-bg.jpg"
/>
```

## 📄 Page Components

### Home Page (`src/app/page.tsx`)
**Purpose**: Main landing page of the website.

**Structure**:
- Hero section with Rev. Julian Kyula image
- Mission statement
- Home cards section
- Gradient background

**Key Features**:
- Responsive layout
- Call-to-action buttons
- Dynamic content from mock data

**Dependencies**:
- `HomeCards` component
- `Navbar` component
- `HomeContent` from mock data

---

### About Page (`src/app/about/page.tsx`)
**Purpose**: About page showcasing ministry information.

**Components Used**:
- `AboutBanner`
- `AboutMission`
- `AboutImpact`
- `Journey`

---

### Partner Page (`src/app/partner/page.tsx`)
**Purpose**: Partnership opportunities and levels.

**Components Used**:
- `PartnerHeroSection`
- `PartnerImpact`
- `PartnerLevels`
- `PartnerQuote`

---

### Events Page (`src/app/events/page.tsx`)
**Purpose**: Display upcoming and past events.

**Components Used**:
- `EventSection`
- `EventCard`

---

### Contact Page (`src/app/contactus/page.tsx`)
**Purpose**: Contact form and information.

**Components Used**:
- `ContactSection`
- `ContactForm`
- `ContactInfo`

---

### Rhema Feast Page (`src/app/rhemafest/page.tsx`)
**Purpose**: Dedicated page for Rhema Feast event.

**Components Used**:
- `RhemaBannerSection`
- `CountdownWithVideo`
- `Speakers`
- `DaysSection`
- `LatestNews`

## 🧩 Section Components

### HomeCards.tsx
**Location**: `src/components/sections/HomeCards.tsx`

**Purpose**: Displays cards for different ministry programs on the home page.

**Props**:
```typescript
interface HomeCardsProps {
  items: homeCardsContent[];
  className?: string;
}
```

**Usage**:
```typescript
import HomeCards from '@/components/sections/HomeCards';
import { HomeContent } from '@/mock';

<HomeCards items={HomeContent.data} />
```

**Features**:
- Grid layout
- Hover effects
- Responsive design
- Logo and image display

---

### EventSection.tsx
**Location**: `src/components/sections/EventSection.tsx`

**Purpose**: Displays events in a grid layout.

**Props**:
```typescript
interface EventSectionProps {
  events: eventCards[];
  title?: string;
  className?: string;
}
```

**Usage**:
```typescript
import EventSection from '@/components/sections/EventSection';
import { EventsContent } from '@/mock';

<EventSection events={EventsContent.events} title="Upcoming Events" />
```

---

### ContactSection.tsx
**Location**: `src/components/sections/ContactSection.tsx`

**Purpose**: Contact form section with stepper functionality.

**Props**:
```typescript
interface ContactSectionProps {
  className?: string;
}
```

**Features**:
- Multi-step form
- Form validation
- Progress indicator
- Social media links

**Dependencies**:
- `ContactStepper`
- `ContactForm`
- `ContactInfo`

---

### PartnerBriefSlider.tsx
**Location**: `src/components/sections/PartnerBriefSlider.tsx`

**Purpose**: Slider component for partner testimonials.

**Props**:
```typescript
interface PartnerBriefSliderProps {
  data: PartnersBrief[];
  className?: string;
}
```

**Usage**:
```typescript
import PartnerBriefSlider from '@/components/sections/PartnerBriefSlider';
import { PartnersSliderContent } from '@/mock';

<PartnerBriefSlider data={PartnersSliderContent.data} />
```

**Features**:
- Swiper integration
- Auto-play functionality
- Responsive design
- Testimonial cards

---

### CountDown.tsx
**Location**: `src/components/sections/CountDown.tsx`

**Purpose**: Countdown timer component for events.

**Props**:
```typescript
interface CountDownProps {
  targetDate: Date;
  title?: string;
  className?: string;
}
```

**Usage**:
```typescript
import CountDown from '@/components/sections/CountDown';

<CountDown 
  targetDate={new Date('2025-09-01')}
  title="Countdown to Rhema Feast 2025"
/>
```

**Features**:
- Real-time countdown
- Days, hours, minutes, seconds display
- Responsive design
- Auto-update functionality

---

### Swipper.tsx
**Location**: `src/components/sections/Swipper.tsx`

**Purpose**: Image carousel/slider component.

**Props**:
```typescript
interface SwipperProps {
  images: string[];
  autoplay?: boolean;
  className?: string;
}
```

**Usage**:
```typescript
import Swipper from '@/components/sections/Swipper';

<Swipper 
  images={['/assets/slide1.jpg', '/assets/slide2.jpg']}
  autoplay={true}
/>
```

## 🎨 UI Components

### Button.tsx
**Location**: `src/components/ui/button.tsx`

**Purpose**: Reusable button component with variants.

**Props**:
```typescript
interface ButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}
```

**Usage**:
```typescript
import { Button } from '@/components/ui/button';

<Button variant="default" size="lg" onClick={handleClick}>
  Click Me
</Button>
```

---

### Card.tsx
**Location**: `src/components/ui/card.tsx`

**Purpose**: Card container component.

**Props**:
```typescript
interface CardProps {
  children: React.ReactNode;
  className?: string;
}
```

**Usage**:
```typescript
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

<Card>
  <CardHeader>Title</CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

---

### Input.tsx
**Location**: `src/components/ui/input.tsx`

**Purpose**: Input field component.

**Props**:
```typescript
interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  required?: boolean;
}
```

**Usage**:
```typescript
import { Input } from '@/components/ui/input';

<Input 
  type="email" 
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

---

### Progress.tsx
**Location**: `src/components/ui/progress.tsx`

**Purpose**: Progress bar component.

**Props**:
```typescript
interface ProgressProps {
  value: number;
  max?: number;
  className?: string;
}
```

**Usage**:
```typescript
import { Progress } from '@/components/ui/progress';

<Progress value={75} max={100} />
```

---

### Footer.tsx
**Location**: `src/components/ui/Footer.tsx`

**Purpose**: Site footer component.

**Features**:
- Social media links
- Contact information
- Copyright notice
- Logo display

---

### Sonner.tsx
**Location**: `src/components/ui/sonner.tsx`

**Purpose**: Toast notification component.

**Usage**:
```typescript
import { Toaster } from '@/components/ui/sonner';

// In layout
<Toaster position="top-center" richColors />

// In components
import { toast } from 'sonner';

toast.success('Success message');
toast.error('Error message');
```

## 🎪 Rhema Feast Components

### RhemaBannerSection.tsx
**Location**: `src/components/rhema/RhemaBannerSection.tsx`

**Purpose**: Hero banner for Rhema Feast page.

**Props**:
```typescript
interface RhemaBannerSectionProps {
  banner: {
    image: string;
    countdown: {
      title: string;
      buttonText: string;
      countdown: Array<countdownCard>;
    };
  };
}
```

---

### CountdownWithVideo.tsx
**Location**: `src/components/rhema/CountdownWithVideo.tsx`

**Purpose**: Countdown timer with embedded video.

**Props**:
```typescript
interface CountdownWithVideoProps {
  countdown: Array<countdownCard>;
  videoUrl: string;
  title: string;
  buttonText: string;
}
```

---

### Speakers.tsx
**Location**: `src/components/rhema/Speakers.tsx`

**Purpose**: Displays speaker grid for Rhema Feast.

**Props**:
```typescript
interface SpeakersProps {
  speakers: {
    title: string;
    description: string;
    data: Array<speakers>;
  };
}
```

---

### DaysSection.tsx
**Location**: `src/components/rhema/DaysSection.tsx`

**Purpose**: Event schedule and day-by-day breakdown.

**Props**:
```typescript
interface DaysSectionProps {
  days: {
    title: string;
    days: string[];
    description: string;
    image: string;
    schedule: Array<scheduleCards>;
  };
}
```

---

### LatestNews.tsx
**Location**: `src/components/rhema/LatestNews.tsx`

**Purpose**: News and announcements section.

**Props**:
```typescript
interface LatestNewsProps {
  news: ILatestNews;
}
```

---

### VideoPlayer.tsx
**Location**: `src/components/rhema/VideoPlayer.tsx`

**Purpose**: YouTube video player component.

**Props**:
```typescript
interface VideoPlayerProps {
  videoId: string;
  title?: string;
  className?: string;
}
```

---

### RhemaInfo.tsx
**Location**: `src/components/rhema/RhemaInfo.tsx`

**Purpose**: Information section about Rhema Feast.

**Props**:
```typescript
interface RhemaInfoProps {
  rhema: {
    title: string;
    description: string;
    data: Array<rhemaImpact>;
  };
}
```

## 📖 About Components

### AboutBanner.tsx
**Location**: `src/components/about/AboutBanner.tsx`

**Purpose**: Hero banner for About page.

**Props**:
```typescript
interface AboutBannerProps {
  title: string;
  backgroundImage: string;
  description: string;
}
```

---

### AboutMission.tsx
**Location**: `src/components/about/AboutMission.tsx`

**Purpose**: Mission and vision section.

**Props**:
```typescript
interface AboutMissionProps {
  vision: {
    title: string;
    description: string;
    icon?: string;
  };
  mission: {
    title: string;
    description: string;
    icon?: string;
  };
  coreGoals: {
    title: string;
    goals: string[];
    icon?: string;
  };
}
```

---

### AboutImpact.tsx
**Location**: `src/components/about/AboutImpact.tsx`

**Purpose**: Impact and achievements section.

**Props**:
```typescript
interface AboutImpactProps {
  title: string;
  description: string;
  image: string;
}
```

---

### Journey.tsx
**Location**: `src/components/about/Journey.tsx`

**Purpose**: Timeline/journey section.

**Props**:
```typescript
interface JourneyProps {
  journey: Array<JourneyCard>;
}
```

## 🎫 Event Components

### EventCard.tsx
**Location**: `src/components/event/EventCard.tsx`

**Purpose**: Individual event card component.

**Props**:
```typescript
interface EventCardProps {
  event: {
    id: string;
    title: string;
    date: string;
    image: string;
  };
  className?: string;
}
```

**Usage**:
```typescript
import EventCard from '@/components/event/EventCard';

<EventCard event={eventData} />
```

## 🔗 Component Relationships

### Navigation Flow
```
Layout
├── Navbar (Global)
├── Header (Page-specific)
└── Footer (Global)
```

### Page Structure
```
Page Component
├── Hero Section
├── Content Sections
│   ├── Cards
│   ├── Forms
│   └── Lists
└── Footer
```

### Form Components
```
ContactSection
├── ContactStepper
│   ├── ContactInfoStep
│   ├── SpouseInfoStep
│   └── ReviewStep
├── ContactForm
└── ContactInfo
```

## 📝 Component Guidelines

### Creating New Components

1. **File Structure**:
   ```
   src/components/
   ├── category/
   │   └── ComponentName.tsx
   ```

2. **Component Template**:
   ```typescript
   import React from 'react';
   import { cn } from '@/lib/utils';

   interface ComponentNameProps {
     // Define props
     className?: string;
   }

   export default function ComponentName({ className }: ComponentNameProps) {
     return (
       <div className={cn('base-classes', className)}>
         {/* Component content */}
       </div>
     );
   }
   ```

3. **Export Pattern**:
   ```typescript
   // Named export for reusability
   export { ComponentName };
   
   // Default export for pages
   export default ComponentName;
   ```

### Component Best Practices

1. **Props Interface**: Always define TypeScript interfaces for props
2. **Default Props**: Use destructuring with default values
3. **Conditional Rendering**: Use early returns for complex conditions
4. **Key Props**: Always provide unique keys for list items
5. **Accessibility**: Include proper ARIA labels and semantic HTML
6. **Responsive Design**: Use Tailwind responsive classes
7. **Performance**: Use React.memo for expensive components

### Testing Components

```typescript
import { render, screen } from '@testing-library/react';
import ComponentName from './ComponentName';

describe('ComponentName', () => {
  it('renders correctly', () => {
    render(<ComponentName />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });

  it('handles props correctly', () => {
    render(<ComponentName title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });
});
```

---

**Last Updated**: December 2024
**Maintainer**: Development Team
