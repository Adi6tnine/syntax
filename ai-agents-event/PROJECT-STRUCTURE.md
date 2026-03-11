# AI Agents Event - Project Structure

## Overview

This is a professional multi-page React application built with modern web technologies. The project has been refactored from a single-page application into a scalable, production-ready multi-page website.

## Technology Stack

- **React 19** - UI library
- **React Router DOM 7** - Client-side routing
- **Tailwind CSS 3** - Utility-first CSS framework
- **Vite 7** - Fast build tool and dev server
- **Lucide React** - Beautiful icon library

## File Structure

```
ai-agents-event/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.jsx     # Sticky navigation with routing
│   │   ├── Footer.jsx     # Consistent footer across pages
│   │   ├── Section.jsx    # Section wrapper component
│   │   ├── SectionHeader.jsx  # Section title with badge
│   │   ├── FAQItem.jsx    # Accordion FAQ component
│   │   └── ThemeToggle.jsx    # Dark/Light mode switcher
│   │
│   ├── pages/             # Page components (routes)
│   │   ├── Home.jsx       # Landing page with hero
│   │   ├── EventDetails.jsx   # Event information & impact
│   │   ├── Phases.jsx     # Three-phase event structure
│   │   ├── Technologies.jsx   # AI tools showcase
│   │   ├── Organizer.jsx  # About Adarsh Kumar
│   │   ├── FAQ.jsx        # Frequently asked questions
│   │   └── Register.jsx   # Registration CTA page
│   │
│   ├── App.jsx            # Main app with router setup
│   ├── main.jsx           # React entry point
│   └── index.css          # Global Tailwind styles
│
├── index.html             # HTML template
├── package.json           # Dependencies & scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
├── vercel.json            # Vercel deployment config
├── netlify.toml           # Netlify deployment config
└── README.md              # Project documentation
```

## Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Hero section with event overview |
| `/event` | EventDetails | Why this initiative matters |
| `/phases` | Phases | Workshop, Challenge, Build Event |
| `/technologies` | Technologies | AI tools and tech stack |
| `/organizer` | Organizer | About Adarsh Kumar |
| `/faq` | FAQ | Frequently asked questions |
| `/register` | Register | Registration call-to-action |

## Component Architecture

### Layout Components
- **Navbar**: Responsive navigation with active route highlighting
- **Footer**: Consistent footer with event branding
- **ThemeToggle**: Fixed position dark/light mode toggle

### Reusable Components
- **Section**: Wrapper for page sections with consistent spacing
- **SectionHeader**: Title with optional badge
- **FAQItem**: Expandable accordion item

### Page Components
Each page is a standalone component that can be easily modified or extended.

## Design System

### Colors
- **Primary**: Blue (light) / Cyan (dark)
- **Background**: Zinc-50 (light) / Zinc-950 (dark)
- **Text**: Zinc-900 (light) / Zinc-50 (dark)
- **Borders**: Zinc-200 (light) / Zinc-800 (dark)

### Typography
- **Headings**: Bold, tight tracking
- **Body**: Regular weight, relaxed leading
- **Mono**: For badges and technical text

### Spacing
- **Sections**: py-24 (96px vertical padding)
- **Content**: max-w-6xl centered container
- **Cards**: p-6 to p-8 padding

## Key Features

✅ **Multi-page Navigation**: React Router with smooth transitions
✅ **Responsive Design**: Mobile-first approach
✅ **Dark Mode**: Toggle between light and dark themes
✅ **Modular Components**: Easy to maintain and extend
✅ **SEO Ready**: Proper semantic HTML structure
✅ **Production Ready**: Optimized build configuration
✅ **Deployment Ready**: Vercel and Netlify configs included

## Development Workflow

1. **Development**: `npm run dev` - Hot reload at localhost:5173
2. **Build**: `npm run build` - Production build in `dist/`
3. **Preview**: `npm run preview` - Test production build locally
4. **Deploy**: Push to GitHub and connect to Vercel/Netlify

## Customization Guide

### Adding a New Page
1. Create component in `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/Navbar.jsx`

### Modifying Styles
- Global styles: `src/index.css`
- Tailwind config: `tailwind.config.js`
- Component styles: Inline Tailwind classes

### Changing Theme Colors
Edit the color classes in components:
- Blue → Your color (light mode)
- Cyan → Your color (dark mode)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lazy loading ready
- Code splitting via React Router
- Optimized production build
- Fast page transitions

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Deploy `dist/` folder
3. Or connect via Git for auto-deploy

## Maintenance

- All components are modular and independent
- Easy to update content without breaking layout
- Consistent design system across all pages
- Well-documented code structure
