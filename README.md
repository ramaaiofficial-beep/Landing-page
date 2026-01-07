# RAMA-AI-LANDING-PAGE

A modern, responsive landing page for RAMA AI built with React, TypeScript, and Tailwind CSS.

## Technologies

This project is built with:

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **shadcn-ui** - Component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## Getting Started

### Prerequisites

- Node.js (v18 or higher) & npm installed

### Installation

```sh
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`.

## Building for Production

```sh
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

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

The website is fully responsive and optimized for all screen sizes:
- **Mobile devices** (320px - 767px)
- **Tablets** (768px - 1023px)
- **Laptops** (1024px - 1439px)
- **Desktop** (1440px+)

All components use fluid typography with `clamp()` for seamless scaling across all devices.

## Project Structure

```
src/
├── components/     # React components (Hero, Navbar, Sections, etc.)
├── pages/         # Page components
├── assets/        # Static assets (images, etc.)
├── lib/           # Utility functions and shared styles
├── hooks/         # Custom React hooks
└── index.css      # Global styles

public/            # Public assets
vercel.json        # Vercel deployment configuration
```

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Production-ready code with optimized builds
- ✅ SEO optimized
- ✅ Fast loading with Vite
- ✅ TypeScript for type safety
- ✅ Modern UI with Tailwind CSS
- ✅ Form handling with web3forms integration
- ✅ Consistent design system with shared styles
- ✅ No duplicate CSS or containers

## License

All rights reserved. © 2025 RAMA AI
