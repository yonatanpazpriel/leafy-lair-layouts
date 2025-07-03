# Deploying to Vercel v0

This guide will help you deploy your Leafy Lair Layouts project to Vercel v0.

## Prerequisites

1. A GitHub account
2. A Vercel account (you can sign up at https://vercel.com)
3. Your project pushed to a GitHub repository

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Vite project

3. **Configure Build Settings**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
   - Root Directory: `./` (leave empty if project is in root)

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your project automatically

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow the prompts**
   - Link to existing project or create new one
   - Confirm build settings
   - Deploy

### Option 3: Deploy to v0 (Vercel's AI Platform)

1. **Visit v0.dev**
   - Go to [v0.dev](https://v0.dev)
   - Sign in with your Vercel account

2. **Create New Project**
   - Click "New Project"
   - Choose "Import from GitHub"
   - Select your repository

3. **Configure AI Settings**
   - Set your project description
   - Configure any AI-specific settings
   - Deploy

## Environment Variables

If your project uses environment variables, add them in the Vercel dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add any required variables

## Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Configure DNS settings as instructed

## Troubleshooting

### Build Errors
- Check that all dependencies are in `package.json`
- Ensure `npm run build` works locally
- Check Vercel build logs for specific errors

### Routing Issues
- The `vercel.json` file includes SPA routing configuration
- All routes will redirect to `index.html` for client-side routing

### Performance
- Vercel automatically optimizes your build
- Images in `public/` folder are served statically
- Consider using Vercel's Image Optimization for better performance

## Post-Deployment

After successful deployment:
1. Your app will be available at `https://your-project-name.vercel.app`
2. Set up automatic deployments from your main branch
3. Configure preview deployments for pull requests

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [v0 Documentation](https://v0.dev/docs) 