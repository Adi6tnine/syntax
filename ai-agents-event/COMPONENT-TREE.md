# Component Tree Structure

## Application Hierarchy

```
App.jsx (Router + Theme Provider)
│
├── ThemeToggle (Fixed Position)
│
├── Navbar (Sticky Navigation)
│   ├── Logo (Link to Home)
│   ├── Navigation Links
│   │   ├── Home (/)
│   │   ├── Event (/event)
│   │   ├── Phases (/phases)
│   │   ├── Technologies (/technologies)
│   │   ├── Organizer (/organizer)
│   │   └── FAQ (/faq)
│   └── Register Button (/register)
│
├── Routes (React Router)
│   │
│   ├── Home Page (/)
│   │   ├── Hero Section
│   │   │   ├── Badge (Engineering Community)
│   │   │   ├── Title
│   │   │   ├── Description
│   │   │   └── CTA Buttons
│   │   └── Section (Core Idea)
│   │       ├── SectionHeader
│   │       └── Feature Cards (4x)
│   │
│   ├── Event Details Page (/event)
│   │   ├── Section (The Problem)
│   │   │   ├── SectionHeader
│   │   │   ├── Description
│   │   │   └── Benefits Card
│   │   └── Section (Expected Impact)
│   │       ├── SectionHeader
│   │       └── Impact Cards (4x)
│   │
│   ├── Phases Page (/phases)
│   │   └── Section
│   │       ├── SectionHeader
│   │       └── Phase Cards (3x)
│   │           ├── Phase 01: Workshop
│   │           ├── Phase 02: Filtering Challenge
│   │           └── Phase 03: AI Product Build
│   │
│   ├── Technologies Page (/technologies)
│   │   └── Section
│   │       ├── SectionHeader
│   │       └── Technology Cards (4x)
│   │           ├── AI Coding Assistants
│   │           ├── AI Development Agents
│   │           ├── Rapid Prototyping
│   │           └── API Integration
│   │
│   ├── Organizer Page (/organizer)
│   │   └── Section
│   │       ├── SectionHeader
│   │       ├── Profile Card
│   │       │   ├── Avatar
│   │       │   ├── Name & Title
│   │       │   ├── Bio
│   │       │   └── Action Buttons
│   │       └── Details Section
│   │           ├── Areas of Interest
│   │           └── Goal Card
│   │
│   ├── FAQ Page (/faq)
│   │   └── Section
│   │       ├── SectionHeader
│   │       └── FAQItem (5x)
│   │           ├── Question Button
│   │           └── Answer (Expandable)
│   │
│   └── Register Page (/register)
│       └── Section
│           ├── SectionHeader
│           ├── Feature Cards (3x)
│           └── Registration Card
│               ├── Benefits List
│               ├── Info Box
│               └── Register Button
│
└── Footer (Consistent Across All Pages)
    ├── Event Branding
    └── Organization Info
```

## Component Relationships

### Parent Components
- **App.jsx**: Root component managing theme and routing
- **Section**: Wrapper for page content sections
- **Navbar**: Navigation across all pages

### Child Components
- **SectionHeader**: Used within Section components
- **FAQItem**: Used within FAQ page
- **ThemeToggle**: Independent, fixed position

### Shared Components
These components are used across multiple pages:
- Section
- SectionHeader
- Navbar
- Footer
- ThemeToggle

## Data Flow

```
App (Theme State)
 ↓
ThemeToggle (Updates Theme)
 ↓
All Components (Consume Theme via CSS classes)
```

```
Navbar (Location State from React Router)
 ↓
Active Route Highlighting
```

```
FAQItem (Internal State)
 ↓
isOpen (Controls Accordion)
```

## Component Props

### Section
- `id`: string (optional)
- `className`: string (optional)
- `bg`: string (background color classes)
- `children`: ReactNode

### SectionHeader
- `title`: string (required)
- `badge`: string (optional)

### FAQItem
- `question`: string (required)
- `answer`: string (required)

### ThemeToggle
- `isDark`: boolean (required)
- `setIsDark`: function (required)

## Styling Strategy

All components use:
- **Tailwind CSS** for styling
- **Dark mode classes** (dark:)
- **Responsive classes** (md:, lg:)
- **Transition classes** for smooth animations

## State Management

- **Theme State**: Managed in App.jsx, passed to ThemeToggle
- **Navigation State**: Managed by React Router
- **Local State**: FAQItem accordion state
- **No Global State Library**: Kept simple with React hooks
