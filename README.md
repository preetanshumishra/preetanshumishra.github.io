# Developer Portfolio

A personal portfolio website showcasing projects, skills, and experience. Built with React, TypeScript, and Vite for fast development and optimized production builds.

## Overview

This portfolio displays my work across multiple domains including financial management applications, cross-platform mobile apps, native iOS/Android development, and full-stack web applications. It serves as a comprehensive showcase of technical expertise and experience.

## Tech Stack

- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Language**: TypeScript 5.9.x
- **Styling**: CSS with CSS variables for theming
- **Deployment**: GitHub Pages

## Quick Start

### Prerequisites
- Node.js 20.x
- npm 10.x or higher

### Development

```bash
npm install              # Install dependencies
npm run dev              # Start Vite dev server (http://localhost:5173)
npm run build            # Build for production
npm run preview          # Preview production build
npm run lint             # Run ESLint
```

## Project Structure

```
src/
├── components/         # React components (feature-based)
├── pages/             # Page components
├── styles/            # CSS with theme variables
├── types/             # TypeScript interfaces
├── utils/             # Utility functions
└── App.tsx            # Root component
```

## Features

- Responsive design (mobile, tablet, desktop)
- Dark mode support via CSS variables
- Project showcase with links and descriptions
- Skills and experience section
- Contact information

## Deployment

This portfolio is deployed on GitHub Pages at: https://preetanshumishra.github.io

GitHub Pages serves the site from the `/docs` folder on the main branch.

### Deploy Command

```bash
npm run deploy          # Build and copy to docs/
git add docs
git commit -m "Update production build"
git push origin main
```

The `npm run deploy` command builds the project and copies the files to the `docs/` folder. Then commit and push to update the live site.

## License

MIT License - See LICENSE file for details

## Contact

For inquiries or opportunities, visit the portfolio or reach out directly.
