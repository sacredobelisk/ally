# Ally's Site

Personal portfolio website for Allison Weinreb O'Brien, a graphic designer and retouch artist.

## Project Purpose

A responsive, accessible single-page application showcasing:

- Professional portfolios (Graphic Design & Retouching)
- Resume/professional experience
- Contact information
- About page

Live at: `allisonweinreb.com`

## Tech Stack

| Category  | Technology                      |
| --------- | ------------------------------- |
| Framework | React Router 7 (meta-framework) |
| Core      | React 19, TypeScript 6.0        |
| Build     | Vite 8                          |
| Styling   | Sass (SCSS)                     |
| Linting   | ESLint 9, Prettier 3            |

## Project Structure

```
app/
├── routes.ts                    # Route definitions
├── root.tsx                     # Root layout, error boundary
├── app.scss                     # Global styles
├── styles/                      # Shared SCSS utilities
│   ├── _variables.scss          # Forwards colors & devices
│   ├── _colors.scss             # Color palette
│   └── _devices.scss            # Responsive breakpoint mixins
├── routes/                      # Page components
│   ├── about.tsx                # Home/about page (index route)
│   ├── resume.tsx               # Resume page
│   ├── portfolio.tsx            # Portfolio with clientLoader
│   └── contact.tsx              # Contact page
└── components/                  # Reusable components
    ├── header/                  # Header with logo & nav
    ├── nav/                     # Navigation links
    ├── about/                   # About section
    ├── contact/                 # Contact links
    ├── portfolio/               # Portfolio display
    │   ├── types.ts             # Image, PortfolioType types
    │   ├── utils.ts             # Image data arrays
    │   └── components/thumbs/   # Thumbnail gallery
    └── resume/                  # Resume display
        └── components/          # Job, Education, Section
public/
├── images/                      # Portfolio images (by type/size)
├── favicon.ico
└── manifest.json
```

## Essential Commands

```bash
npm run dev          # Vite dev server
npm run build        # Production build to /build
npm run lint         # ESLint
npm run typecheck    # Type-gen + tsc
```

## Key Files

| File                                                    | Purpose                                         |
| ------------------------------------------------------- | ----------------------------------------------- |
| [routes.ts](app/routes.ts)                              | Route configuration (lines 3-8)                 |
| [root.tsx](app/root.tsx)                                | Layout wrapper, ErrorBoundary (lines 13-66)     |
| [portfolio.tsx](app/routes/portfolio.tsx)               | Portfolio route with clientLoader (lines 13-16) |
| [portfolio/types.ts](app/components/portfolio/types.ts) | PortfolioType enum, Image type                  |
| [\_devices.scss](app/styles/_devices.scss)              | Responsive breakpoint mixins                    |

## Route Structure

| Path                        | Route File                                | Description       |
| --------------------------- | ----------------------------------------- | ----------------- |
| `/`                         | [about.tsx](app/routes/about.tsx)         | Index/home page   |
| `/resume`                   | [resume.tsx](app/routes/resume.tsx)       | Resume page       |
| `/contact`                  | [contact.tsx](app/routes/contact.tsx)     | Contact page      |
| `/portfolio/:portfolioType` | [portfolio.tsx](app/routes/portfolio.tsx) | Dynamic portfolio |

Portfolio types: `graphic-design`, `retouching` (see [types.ts:6-9](app/components/portfolio/types.ts#L6-L9))

## Adding Portfolio Images

1. Add image file to `public/images/{portfolioType}/large/` and `.../thumbs/`
2. Add entry to image array in [portfolio/utils.ts](app/components/portfolio/utils.ts)

## Responsive Breakpoints

Defined in [\_devices.scss](app/styles/_devices.scss):

| Mixin     | Range             |
| --------- | ----------------- |
| `mobile`  | max-width: 480px  |
| `tablet`  | 481px - 1079px    |
| `desktop` | min-width: 1080px |

Usage: `@include variables.mobile { ... }`

## Additional Documentation

When working on related topics, check these files:

| Topic                                                | File                                                                             |
| ---------------------------------------------------- | -------------------------------------------------------------------------------- |
| Design patterns, component organization, conventions | [.claude/docs/architectural_patterns.md](.claude/docs/architectural_patterns.md) |

## Notes

- SSR is disabled (`react-router.config.ts`)
- React Router types are auto-generated in `.react-router/types/`
- No testing framework is currently configured
