# Quick Reference Card

## 🚀 Getting Started

```bash
cd ai-agents-event
npm install
npm run dev
```

Open: http://localhost:5173

---

## 📁 Project Structure

```
src/
├── components/    # Reusable UI components
├── pages/         # Page components (routes)
├── App.jsx        # Router setup
├── main.jsx       # Entry point
└── index.css      # Global styles
```

---

## 🗺️ Routes

| URL | Component | Description |
|-----|-----------|-------------|
| `/` | Home | Landing page |
| `/event` | EventDetails | Event info |
| `/phases` | Phases | Event structure |
| `/technologies` | Technologies | Tech stack |
| `/organizer` | Organizer | About host |
| `/faq` | FAQ | Questions |
| `/register` | Register | Sign up |

---

## 🧩 Components

### Layout
- `Navbar` - Navigation with routing
- `Footer` - Page footer
- `ThemeToggle` - Dark/Light mode

### Reusable
- `Section` - Content wrapper
- `SectionHeader` - Section title
- `FAQItem` - Accordion item

---

## 🎨 Styling

### Colors
- Primary: `blue-600` / `cyan-400`
- Background: `zinc-50` / `zinc-950`
- Text: `zinc-900` / `zinc-50`

### Dark Mode
```jsx
className="bg-white dark:bg-zinc-900"
```

---

## 📝 Common Tasks

### Add New Page
1. Create `src/pages/NewPage.jsx`
2. Add route in `App.jsx`
3. Add link in `Navbar.jsx`

### Add New Component
1. Create `src/components/NewComponent.jsx`
2. Export default
3. Import where needed

### Modify Styles
- Edit Tailwind classes inline
- Update `tailwind.config.js` for theme
- Edit `index.css` for globals

---

## 🔧 Commands

```bash
# Development
npm run dev

# Build
npm run build

# Preview build
npm run preview

# Lint
npm run lint
```

---

## 🚢 Deploy

### Vercel
```bash
vercel --prod
```

### Netlify
```bash
netlify deploy --prod
```

### Build Only
```bash
npm run build
# Upload dist/ folder
```

---

## 📦 Dependencies

- `react` - UI library
- `react-dom` - React renderer
- `react-router-dom` - Routing
- `lucide-react` - Icons
- `tailwindcss` - Styling
- `vite` - Build tool

---

## 🎯 Key Features

✅ Multi-page routing
✅ Dark/Light theme
✅ Responsive design
✅ Modular components
✅ Production ready
✅ SEO friendly

---

## 🐛 Troubleshooting

### Build fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 on refresh
- Check `vercel.json` / `netlify.toml`
- Ensure SPA routing configured

### Blank page
- Check browser console
- Verify build output
- Test with `npm run preview`

---

## 📚 Documentation

- `README.md` - Overview
- `SETUP.md` - Setup guide
- `PROJECT-STRUCTURE.md` - Architecture
- `DEPLOYMENT-GUIDE.md` - Deploy help
- `BEFORE-AFTER.md` - Comparison

---

## 🔗 Important Files

```
package.json         # Dependencies
vite.config.js       # Build config
tailwind.config.js   # Style config
vercel.json          # Vercel deploy
netlify.toml         # Netlify deploy
```

---

## 💡 Tips

- Use `Section` for consistent spacing
- Use `SectionHeader` for titles
- Keep components small and focused
- Test on mobile devices
- Check dark mode appearance
- Optimize images before adding

---

## 🎨 Design System

### Spacing
- Sections: `py-24`
- Cards: `p-6` to `p-8`
- Gaps: `gap-4` to `gap-6`

### Typography
- Headings: `font-bold`
- Body: `font-medium` or default
- Mono: `font-mono`

### Borders
- Light: `border-zinc-200`
- Dark: `dark:border-zinc-800`

---

## 🔄 Workflow

1. **Develop**: `npm run dev`
2. **Test**: Check all routes
3. **Build**: `npm run build`
4. **Preview**: `npm run preview`
5. **Deploy**: Push to hosting

---

## ⚡ Performance

- Vite for fast builds
- Code splitting ready
- Optimized production build
- Lazy loading capable

---

## 📱 Responsive

- Mobile-first design
- Breakpoints: `sm:`, `md:`, `lg:`
- Mobile menu in Navbar
- Tested on all devices

---

## 🎯 Next Steps

1. ✅ Install dependencies
2. ✅ Run dev server
3. ✅ Customize content
4. ✅ Test all pages
5. ✅ Build for production
6. ✅ Deploy to hosting

---

## 📞 Support

Check documentation files:
- Setup issues → `SETUP.md`
- Structure questions → `PROJECT-STRUCTURE.md`
- Deploy help → `DEPLOYMENT-GUIDE.md`

---

**Quick Start**: `cd ai-agents-event && npm install && npm run dev`

🎉 Happy coding!
