# RAMA-AI-LANDING-PAGE

A modern, responsive landing page built with React, TypeScript, and Tailwind CSS.

## Technologies

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- React Router

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Step 1: Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Step 2: Install the necessary dependencies
npm install

# Step 3: Start the development server
npm run dev
```

The application will be available at `http://localhost:8080` (or another port if 8080 is in use).

## Building for Production

```sh
npm run build
```

The built files will be in the `dist` directory.

## Deployment to Vercel

This project is configured for easy deployment to Vercel:

1. **Connect your repository to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your Git repository
   - Vercel will automatically detect the Vite configuration

2. **Automatic Deployment:**
   - Every push to your main branch will trigger a new deployment
   - The `vercel.json` file is already configured with the correct settings

3. **Manual Deployment:**
   ```sh
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   ```

## Responsive Design

The website is fully responsive and optimized for:
- **Mobile devices** (320px - 767px)
- **Tablets** (768px - 1023px)
- **Laptops** (1024px - 1439px)
- **Desktop** (1440px+)

All components use responsive breakpoints:
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

## Project Structure

- `src/components/` - React components
- `src/pages/` - Page components
- `src/assets/` - Static assets (images, etc.)
- `src/lib/` - Utility functions
- `public/` - Public assets
- `vercel.json` - Vercel deployment configuration

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Production-ready code
- ✅ SEO optimized
- ✅ Fast loading with Vite
- ✅ TypeScript for type safety
- ✅ Modern UI with Tailwind CSS
- ✅ Form handling with web3forms integration

## License

All rights reserved.
