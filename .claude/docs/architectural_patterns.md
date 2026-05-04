# Architectural Patterns

This document describes the architectural patterns, design decisions, and conventions used throughout the codebase.

## Route-Based Architecture

React Router 7 provides the routing foundation with a flat configuration pattern.

| Pattern | Location | Description |
|---------|----------|-------------|
| Flat route config | [routes.ts:3-8](app/routes.ts#L3-L8) | Routes defined as array with `index()` and `route()` helpers |
| Dynamic routes | [routes.ts:7](app/routes.ts#L7) | URL params via `:paramName` syntax |
| Client-side loaders | [portfolio.tsx:13-16](app/routes/portfolio.tsx#L13-L16) | `clientLoader` fetches data before render |
| SSR disabled | `react-router.config.ts` | Client-side only rendering |

**Convention**: Each route file exports `meta()` for SEO and optionally `clientLoader` for data fetching.

## Component Organization

Components follow a feature-based hierarchy with colocated styles.

```
components/
├── feature/
│   ├── index.tsx         # Main component
│   ├── index.scss        # Colocated styles
│   ├── types.ts          # TypeScript types (if needed)
│   └── components/       # Sub-components
│       └── child/
│           ├── index.tsx
│           └── index.scss
```

**Examples**:
- [portfolio/index.tsx](app/components/portfolio/index.tsx) - Main portfolio component
- [portfolio/types.ts](app/components/portfolio/types.ts) - Shared types for portfolio feature
- [portfolio/components/thumbs/index.tsx](app/components/portfolio/components/thumbs/index.tsx) - Child component

## Type System Patterns

### Enums for Domain Values
Enums define fixed sets of valid values with string representations for URLs.

```typescript
// portfolio/types.ts:6-9
export enum PortfolioType {
  GraphicDesign = "graphic-design",
  Retouching = "retouching",
}
```

### Props Interfaces
Every component defines explicit props via interface or type.

| Component | Props Definition |
|-----------|------------------|
| Portfolio | [portfolio/index.tsx:8-10](app/components/portfolio/index.tsx#L8-L10) |
| Thumbs | [portfolio/types.ts:13-17](app/components/portfolio/types.ts#L13-L17) |

### React Router Generated Types
Route types are auto-generated in `.react-router/types/` and imported for type-safe loaders and components.

```typescript
// portfolio.tsx:1
import { Route } from "../../.react-router/types/app/routes/+types/portfolio";
```

## Data Loading Pattern

Client-side data loading uses React Router's `clientLoader` function.

| Step | Implementation |
|------|----------------|
| Define loader | [portfolio.tsx:13-16](app/routes/portfolio.tsx#L13-L16) |
| Receive in component | [portfolio.tsx:38](app/routes/portfolio.tsx#L38) - `loaderData` prop |
| Use key for reset | [portfolio.tsx:39](app/routes/portfolio.tsx#L39) - `key={params.portfolioType}` |

**Pattern**: URL params determine which data to load; component receives pre-loaded data as props.

## State Management

Minimal local state using React's `useState` hook. No global state library.

| Pattern | Example |
|---------|---------|
| UI state | [portfolio/index.tsx:20](app/components/portfolio/index.tsx#L20) - Active image selection |
| Props drilling | [portfolio/index.tsx:26](app/components/portfolio/index.tsx#L26) - Parent passes callback to child |

**Convention**: State lives in the lowest common ancestor component that needs it.

## Error Handling

Centralized error boundary in root layout.

| Feature | Location |
|---------|----------|
| ErrorBoundary export | [root.tsx:42-66](app/root.tsx#L42-L66) |
| Route error detection | [root.tsx:47](app/root.tsx#L47) - `isRouteErrorResponse()` |
| Dev-only stack traces | [root.tsx:50-52](app/root.tsx#L50-L52) - `import.meta.env.DEV` check |

## SEO Meta Tags

Each route exports a `meta()` function returning an array of meta tag objects.

**Standard meta tags** (see [portfolio.tsx:25-35](app/routes/portfolio.tsx#L25-L35)):
- `title` - Page title
- `description` - Page description
- `og:*` - Open Graph tags for social sharing
- `twitter:*` - Twitter card tags

## Styling Patterns

### SCSS Architecture
- **Shared utilities**: [app/styles/](app/styles/) contains variables, colors, device mixins
- **Colocated styles**: Each component has adjacent `.scss` file
- **Module imports**: `@use "../styles/variables"` for shared utilities

### Responsive Design Mixins
Breakpoint mixins defined in [_devices.scss](app/styles/_devices.scss):

| Mixin | Breakpoint |
|-------|------------|
| `mobile` | max-width: 480px |
| `tablet` | 481px - 1079px |
| `desktop` | min-width: 1080px |
| `not-mobile` | min-width: 481px |
| `not-desktop` | max-width: 1079px |

**Usage**: `@include variables.mobile { ... }`

## Accessibility Patterns

Accessibility is built into the component structure.

| Pattern | Implementation |
|---------|----------------|
| Skip link | [root.tsx:24-26](app/root.tsx#L24-L26) - Bypass navigation |
| Semantic nav | [nav/index.tsx:7](app/components/nav/index.tsx#L7) - `aria-label="Main navigation"` |
| ARIA states | [thumbs/index.tsx:13-14](app/components/portfolio/components/thumbs/index.tsx#L13-L14) - `aria-pressed` |
| Keyboard support | [thumbs/index.tsx:17-20](app/components/portfolio/components/thumbs/index.tsx#L17-L20) - `tabIndex`, `onFocus` |
| Hidden headings | [portfolio/index.tsx:24](app/components/portfolio/index.tsx#L24) - `.visually-hidden` |

## Performance Patterns

| Pattern | Implementation | Purpose |
|---------|----------------|---------|
| Memoization | [thumbs/index.tsx:7](app/components/portfolio/components/thumbs/index.tsx#L7) | Prevent unnecessary re-renders |
| displayName | [thumbs/index.tsx:29](app/components/portfolio/components/thumbs/index.tsx#L29) | DevTools clarity |
| Lazy loading | [portfolio/index.tsx:29](app/components/portfolio/index.tsx#L29) | `loading="lazy"` on images |
| Route key | [portfolio.tsx:39](app/routes/portfolio.tsx#L39) | Reset state on route change |

## Conventions Summary

1. **File naming**: `index.tsx` for main component, `index.scss` for styles
2. **Exports**: Named exports for components (`export const Component`)
3. **Types**: Colocated `types.ts` for feature-specific types
4. **Imports**: Absolute paths via tsconfig paths (`./components/...`)
5. **Styling**: SCSS with mixin-based responsive design
6. **Accessibility**: ARIA attributes, semantic HTML, keyboard support
