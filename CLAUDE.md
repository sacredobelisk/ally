# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Ally is a portfolio website for a graphic designer built with React 19, React Router 7, TypeScript 5.9, and Vite 7.3. It's a client-side rendered (CSR) single-page application with no backend.

## Commands

```bash
npm start              # Start development server (Vite)
npm run build          # Production build (outputs to /build/client)
npm run lint           # Run ESLint
npm run prettier-format # Format TypeScript/TSX files with Prettier
```

**Note:** No test framework is currently configured.

## Architecture

### Routing

- React Router 7 with route definitions in `/app/routes.ts`
- Routes use `index()` and `route()` functions
- Portfolio page uses `clientLoader` for data loading
- Routes:
  - `/` → About (index)
  - `/resume` → Resume
  - `/contact` → Contact
  - `/portfolio/:portfolioType` → Portfolio (graphic-design or retouching)

### Directory Structure

- `/app/components/` - Reusable React components, each with paired SCSS files
- `/app/routes/` - Page-level route components
- `/app/styles/` - Global SCSS variables and mixins (\_colors.scss, \_devices.scss)
- `/app/root.tsx` - Root layout with error boundary
- `/public/images/` - Portfolio images organized by type

### Portfolio System

- Two types defined in enum: `GraphicDesign` and `Retouching`
- Portfolio data stored as static arrays in `/app/components/portfolio/utils.ts`
- Types defined in `/app/components/portfolio/types.ts`

### Styling

- SCSS with mobile-first responsive design
- Breakpoint mixins in `/app/styles/_devices.scss`:
  - Mobile: max-width 480px
  - Tablet: 481px to 1079px
  - Desktop: 1080px+

## Code Style

- **Indent**: 2 spaces
- **Quotes**: Double quotes
- **Semicolons**: Required
- **Line width**: 120 characters
- **Line endings**: CRLF (Windows)
- **No explicit `any`**: TypeScript strict mode enabled with `noImplicitAny`
- **Alphabetize**: object key properties and html attributes where possible
