# Rhema Website - Julian Kyula Global Ministries

A modern, responsive website for Julian Kyula Global Ministries (JKGM) built with Next.js 15, TypeScript, and Tailwind CSS. This website serves as the digital platform for the ministry's global outreach, events, and partnership programs.

## 🚀 Project Overview

**Rhema Website** is a comprehensive web platform that showcases the ministry's mission, events, and partnership opportunities. The website features a modern design with interactive components, responsive layouts, and seamless user experience across all devices.

### Key Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI Components**: Built with Radix UI and custom styled components
- **Interactive Elements**: Countdown timers, sliders, and dynamic content
- **Multi-page Structure**: Home, About, Events, Partner, Contact, and Rhema Feast pages
- **Form Handling**: Contact forms with validation and API integration
- **SEO Optimized**: Next.js App Router with proper meta tags

## 📋 Table of Contents

- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Development Guidelines](#-development-guidelines)
- [Component Architecture](#-component-architecture)
- [Data Management](#-data-management)
- [Styling System](#-styling-system)
- [API Integration](#-api-integration)
- [Deployment](#-deployment)
- [Maintenance](#-maintenance)
- [Troubleshooting](#-troubleshooting)

## 🛠 Tech Stack

### Core Technologies
- **Next.js 15.3.2** - React framework with App Router
- **React 19.0.0** - UI library
- **TypeScript 5** - Type safety and development experience
- **Tailwind CSS 4** - Utility-first CSS framework

### UI Libraries & Components
- **Radix UI** - Accessible component primitives
  - `@radix-ui/react-checkbox`
  - `@radix-ui/react-label`
  - `@radix-ui/react-progress`
  - `@radix-ui/react-slot`
- **Lucide React** - Icon library
- **Swiper** - Touch slider component
- **React Fast Marquee** - Scrolling text component
- **Sonner** - Toast notifications

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Class Variance Authority** - Component variant management
- **Tailwind Merge** - Utility class merging

## 📁 Project Structure

```
rhema-website/
├── public/
│   └── assets/                 # Static images and media files
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── contactus/         # Contact page
│   │   ├── events/            # Events page
│   │   ├── member/            # Member page
│   │   ├── partner/           # Partner page
│   │   ├── rhemafest/         # Rhema Feast page
│   │   ├── api/               # API routes
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable components
│   │   ├── about/             # About page components
│   │   ├── event/             # Event components
│   │   ├── navigation/        # Navigation components
│   │   ├── rhema/             # Rhema Feast components
│   │   ├── sections/          # Page section components
│   │   └── ui/                # Base UI components
│   ├── constants/             # Application constants
│   ├── lib/                   # Utility functions
│   ├── mock/                  # Mock data and content
│   └── types/                 # TypeScript type definitions
├── package.json               # Dependencies and scripts
├── next.config.ts            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd rhema-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🏗 Development Guidelines

### Code Style
- Use TypeScript for all components and functions
- Follow ESLint configuration
- Use meaningful component and variable names
- Add JSDoc comments for complex functions

### Component Structure
```typescript
// Example component structure
interface ComponentProps {
  title: string;
  description?: string;
}

export default function Component({ title, description }: ComponentProps) {
  return (
    <div className="component-container">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
}
```

### File Naming Conventions
- Components: PascalCase (e.g., `HomeCards.tsx`)
- Pages: lowercase with hyphens (e.g., `page.tsx`)
- Utilities: camelCase (e.g., `utils.ts`)
- Types: PascalCase with `I` prefix for interfaces (e.g., `IHomeContent`)

## 🧩 Component Architecture

### Page Components
Each page follows a consistent structure:
- **Layout**: Main page wrapper with navigation
- **Hero Section**: Primary content area
- **Content Sections**: Modular content blocks
- **Footer**: Consistent footer across pages

### Reusable Components
- **Navigation**: `Navbar.tsx`, `Header.tsx`
- **Cards**: `HomeCards.tsx`, `EventCard.tsx`
- **Forms**: `ContactForm.tsx`, `ContactStepper.tsx`
- **UI Elements**: Buttons, inputs, progress bars

### Component Categories

#### Navigation Components
- `Navbar.tsx` - Main navigation bar
- `Header.tsx` - Page header component

#### Section Components
- `HomeCards.tsx` - Home page card grid
- `EventSection.tsx` - Events display section
- `ContactSection.tsx` - Contact form section
- `PartnerHeroSection.tsx` - Partner page hero

#### Rhema Feast Components
- `HeroSection.tsx` - Rhema Feast hero
- `CountdownWithVideo.tsx` - Event countdown
- `Speakers.tsx` - Speakers grid
- `DaysSection.tsx` - Event schedule

## 📊 Data Management

### Content Structure
The application uses a centralized content management system through the `src/mock/index.ts` file:

```typescript
// Content interfaces
interface IHomeContent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  img: string;
  data: Array<homeCardsContent>;
}
```

### Content Types
- **HomeContent**: Home page data
- **AboutPageContent**: About page content
- **PartnerContent**: Partnership information
- **EventsContent**: Events and schedules
- **ContactContent**: Contact information
- **RhemaFeastContent**: Rhema Feast specific content

### Adding New Content
1. Define the interface in `src/types/index.ts`
2. Add content data in `src/mock/index.ts`
3. Import and use in components

## 🎨 Styling System

### Tailwind CSS
The project uses Tailwind CSS 4 with custom configuration:
- Utility-first approach
- Responsive design classes
- Custom color palette
- Component variants

### Custom Components
- Styled components for complex UI elements
- CSS modules for component-specific styles
- Global styles in `src/app/globals.css`

### Design Tokens
```css
/* Color palette */
--primary: #D3A84B
--secondary: #FFEA8E
--accent: #000000
```

### Responsive Breakpoints
- Mobile: `sm:` (640px+)
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+)
- Large Desktop: `xl:` (1280px+)

## 🔌 API Integration

### API Routes
Located in `src/app/api/`:
- `enquiry/route.ts` - Contact form submissions
- `partners/route.ts` - Partnership form handling

### Form Handling
- Contact forms with validation
- File upload support
- Email notifications
- Database integration ready

### External APIs
- YouTube embed integration
- Social media links
- Payment gateway integration (future)

## 🚀 Deployment

### Production Build
```bash
npm run build
npm run start
```

### Environment Variables
Create `.env.local` for local development:
```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_SITE_URL=your_site_url
```

### Deployment Platforms
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Traditional hosting**

## 🔧 Maintenance

### Regular Tasks
1. **Dependency Updates**
   ```bash
   npm update
   npm audit fix
   ```

2. **Content Updates**
   - Update content in `src/mock/index.ts`
   - Replace images in `public/assets/`
   - Update event dates and information

3. **Performance Monitoring**
   - Lighthouse audits
   - Core Web Vitals
   - Bundle size analysis

### Content Management
- **Images**: Store in `public/assets/`
- **Text Content**: Update in `src/mock/index.ts`
- **Navigation**: Modify `src/constants/index.ts`

### SEO Maintenance
- Update meta tags in page components
- Optimize images and alt text
- Monitor search console performance

## 🐛 Troubleshooting

### Common Issues

#### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

#### TypeScript Errors
```bash
# Check type definitions
npx tsc --noEmit
```

#### Styling Issues
- Check Tailwind CSS classes
- Verify component imports
- Clear browser cache

### Performance Issues
- Optimize images with Next.js Image component
- Implement lazy loading for components
- Use dynamic imports for large components

### Browser Compatibility
- Test on multiple browsers
- Check mobile responsiveness
- Verify accessibility standards

## 📝 Future Updates

### Planned Features
- [ ] Content Management System (CMS)
- [ ] User authentication
- [ ] Event registration system
- [ ] Payment integration
- [ ] Blog/news section
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] PWA capabilities

### Technical Improvements
- [ ] Performance optimization
- [ ] SEO enhancements
- [ ] Accessibility improvements
- [ ] Testing implementation
- [ ] CI/CD pipeline

## 🤝 Contributing

### Development Workflow
1. Create feature branch
2. Make changes following guidelines
3. Test thoroughly
4. Submit pull request
5. Code review process

### Code Review Checklist
- [ ] TypeScript types defined
- [ ] Responsive design tested
- [ ] Accessibility standards met
- [ ] Performance impact assessed
- [ ] Documentation updated

## 📞 Support

For technical support or questions:
- Check existing documentation
- Review troubleshooting section
- Contact development team
- Create issue in repository

---

**Last Updated**: December 2024
**Version**: 0.1.0
**Maintainer**: Development Team
