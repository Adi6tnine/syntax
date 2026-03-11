# AI Agents & Vibe Coding Challenge

A professional multi-page React website for the AI Agents & Vibe Coding Challenge event organized by Engineering Community – Chandigarh University.

## Features

- ✅ Multi-page React application with React Router
- ✅ Responsive design with Tailwind CSS
- ✅ Dark/Light theme toggle
- ✅ Clean component architecture
- ✅ Reusable UI components
- ✅ Mobile-first responsive design
- ✅ Production-ready build

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation bar with routing
│   ├── Footer.jsx      # Footer component
│   ├── Section.jsx     # Section wrapper
│   ├── SectionHeader.jsx
│   ├── FAQItem.jsx     # FAQ accordion item
│   └── ThemeToggle.jsx # Dark/Light mode toggle
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── EventDetails.jsx # Event information
│   ├── Phases.jsx      # Event phases
│   ├── Technologies.jsx # Tools & tech stack
│   ├── Organizer.jsx   # About organizer
│   ├── FAQ.jsx         # FAQ page
│   └── Register.jsx    # Registration page
├── App.jsx             # Main app with routing
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## Pages

1. **Home** (`/`) - Hero section with event overview
2. **Event Details** (`/event`) - Why this initiative matters
3. **Phases** (`/phases`) - Three-phase event structure
4. **Technologies** (`/technologies`) - AI tools and tech stack
5. **Organizer** (`/organizer`) - About Adarsh Kumar
6. **FAQ** (`/faq`) - Frequently asked questions
7. **Register** (`/register`) - Registration call-to-action

## Installation

```bash
cd ai-agents-event
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
```

The build output will be in the `dist/` folder.

## Preview Production Build

```bash
npm run preview
```

## Deployment

This project is ready to deploy on:

- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use `gh-pages` package for deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Then drag the dist folder to netlify.com/drop
```

## Technologies Used

- React 19
- React Router DOM 7
- Tailwind CSS 3
- Vite 7
- Lucide React (icons)

## Design System

- **Colors**: Blue/Cyan accent with Zinc grayscale
- **Typography**: System fonts with bold headings
- **Spacing**: Consistent padding and margins
- **Components**: Modular and reusable
- **Theme**: Dark mode by default with toggle

## License

MIT
