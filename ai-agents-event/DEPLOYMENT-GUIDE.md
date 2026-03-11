# Deployment Guide

This guide covers deploying your AI Agents Event website to popular hosting platforms.

## Prerequisites

Before deploying, ensure:
- ✅ All dependencies are installed (`npm install`)
- ✅ Build works locally (`npm run build`)
- ✅ No console errors in production build
- ✅ All routes work correctly

## Option 1: Vercel (Recommended)

Vercel offers the easiest deployment for React applications.

### Method A: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

3. **Automatic Deployments**
   - Every push to `main` triggers a new deployment
   - Preview deployments for pull requests

### Method B: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Configuration
The `vercel.json` file is already configured for SPA routing.

---

## Option 2: Netlify

### Method A: Drag & Drop

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [netlify.com/drop](https://app.netlify.com/drop)
   - Drag the `dist` folder
   - Your site is live!

### Method B: GitHub Integration

1. **Push to GitHub** (same as Vercel)

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy"

### Method C: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

### Configuration
The `netlify.toml` file is already configured.

---

## Option 3: GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add these scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Update vite.config.js**
   Add base URL:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/'
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages` → `/ (root)`
   - Save

---

## Option 4: Custom Server (VPS/Cloud)

### Using Nginx

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload dist folder** to your server

3. **Nginx configuration**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       root /path/to/dist;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

4. **Restart Nginx**
   ```bash
   sudo systemctl restart nginx
   ```

---

## Environment Variables

If you need environment variables:

1. **Create `.env` file** (local only)
   ```
   VITE_API_URL=https://api.example.com
   ```

2. **Access in code**
   ```javascript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

3. **Set in hosting platform**
   - **Vercel**: Project Settings → Environment Variables
   - **Netlify**: Site Settings → Environment Variables

---

## Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records

---

## Post-Deployment Checklist

After deployment, verify:

- ✅ All pages load correctly
- ✅ Navigation works (no 404 errors)
- ✅ Dark/Light theme toggle works
- ✅ Mobile responsive design
- ✅ Images and assets load
- ✅ No console errors
- ✅ Fast page load times

---

## Troubleshooting

### 404 on Page Refresh
**Problem**: Direct URL access or refresh gives 404

**Solution**: Ensure SPA routing is configured
- Vercel: `vercel.json` (already included)
- Netlify: `netlify.toml` (already included)
- GitHub Pages: Use hash router or configure redirects

### Build Fails
**Problem**: Build fails on hosting platform

**Solution**:
1. Check Node.js version (use 18+)
2. Clear cache and rebuild
3. Check build logs for errors
4. Test build locally first

### Blank Page After Deploy
**Problem**: Site deploys but shows blank page

**Solution**:
1. Check browser console for errors
2. Verify `base` URL in `vite.config.js`
3. Check if assets are loading correctly
4. Ensure `index.html` is in the root of `dist`

---

## Performance Optimization

After deployment, consider:

1. **Enable Compression** (Gzip/Brotli)
2. **Add CDN** (Cloudflare)
3. **Optimize Images** (WebP format)
4. **Enable Caching** (Browser cache headers)
5. **Monitor Performance** (Lighthouse, PageSpeed Insights)

---

## Continuous Deployment

For automatic deployments:

1. **Connect Git repository** to hosting platform
2. **Set up branch protection** (optional)
3. **Configure build settings**
4. **Every push triggers deployment**

### Recommended Workflow
```
main branch → Production (auto-deploy)
develop branch → Staging (preview deploy)
feature branches → Preview deploys
```

---

## Monitoring

After deployment, monitor:

- **Uptime**: Use UptimeRobot or Pingdom
- **Analytics**: Google Analytics or Plausible
- **Errors**: Sentry or LogRocket
- **Performance**: Vercel Analytics or Netlify Analytics

---

## Quick Deploy Commands

```bash
# Vercel
vercel --prod

# Netlify
netlify deploy --prod

# GitHub Pages
npm run deploy

# Build only
npm run build
```

---

## Support

If you encounter issues:
1. Check hosting platform documentation
2. Review build logs
3. Test locally with `npm run preview`
4. Check browser console for errors

---

## Estimated Deployment Time

- **Vercel**: 2-3 minutes
- **Netlify**: 2-3 minutes
- **GitHub Pages**: 5-10 minutes
- **Custom Server**: 10-30 minutes

---

Your AI Agents Event website is now ready for production deployment! 🚀
