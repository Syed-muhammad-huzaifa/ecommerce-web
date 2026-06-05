# Project Agent Rules

This repository is a Next.js 16 ecommerce rebuild of the Ecomall home page reference. The goal is to reproduce the layout, hierarchy, spacing, and interactions of the provided site as closely as possible while keeping the codebase clean, modular, and easy to extend.

## Required Reading

Before changing code, read the relevant Next.js docs in `node_modules/next/dist/docs/` and follow the current App Router conventions. Prioritize these topics:

- `01-app/01-getting-started/02-project-structure.md`
- `01-app/01-getting-started/03-layouts-and-pages.md`
- `01-app/01-getting-started/05-server-and-client-components.md`
- `01-app/01-getting-started/11-css.md`

## Stack And Baseline

- Use Next.js App Router only.
- Use TypeScript everywhere.
- Use Tailwind CSS for styling first.
- Use Framer Motion only for subtle, purposeful motion.
- Keep global CSS minimal and focused on resets, tokens, and theme variables.
- Prefer `next/font` for typography.
- Prefer `next/image` for raster assets and product imagery.

## Core Build Principles

- Build from reusable components, not one giant page file.
- Never copy and paste the same JSX for repeated UI. Extract a component or a typed data map.
- Keep `app/page.tsx` thin. It should compose sections, not contain all markup.
- Put shared UI in reusable component files and shared data in separate data modules.
- Use Server Components by default. Add `"use client"` only where interactivity, browser APIs, or Framer Motion require it.
- Keep client boundaries as small as possible to reduce bundle size.

## Reference Site Structure

The homepage to recreate is organized around these major sections:

- Utility top bar with language, currency, shipping message, and quick links.
- Main header with logo, category dropdown, search, account, wishlist, and cart.
- Category navigation and mega menu style category access.
- Two large hero promotion banners.
- Brand logo strip.
- Deals of the day section.
- Daily best sellers section with product cards and a center promo tile.
- Discount banner and latest phones promo.
- Three-column product sections for trending, new, and top rated products.
- Full-width promotional banner.
- Recently viewed products row.
- Free shipping notice bar.
- Service feature row.
- Multi-column footer with newsletter, tags, social links, and legal line.

Treat these sections as the canonical page map when building components and files.

## File And Folder Conventions

Use descriptive, stable, kebab-case file names. Group by feature, not by arbitrary UI type.

Recommended structure:

```txt
app/
  layout.tsx
  page.tsx
  globals.css
  components/
    top-bar.tsx
    site-header.tsx
    category-nav.tsx
    hero-promo.tsx
    brand-strip.tsx
    section-heading.tsx
    product-card.tsx
    product-grid.tsx
    promo-banner.tsx
    service-features.tsx
    site-footer.tsx
  data/
    home-content.ts
  lib/
    cn.ts
```

Rules:

- Keep repeated card layouts in one reusable card component.
- Keep text, links, product arrays, and footer links in typed data files.
- If a section only appears once but is still complex, split it into a section component plus small child components.
- Use route groups or private folders only if the app grows enough to justify them.

## Component Design Rules

- Use semantic HTML: `header`, `nav`, `main`, `section`, `article`, `footer`.
- Prefer small composable components over large dense files.
- Keep component props explicit and typed.
- Use data-driven rendering for product lists, brand lists, category lists, and footer columns.
- Keep presentation logic near the component, but keep content data outside the component.
- Use consistent naming for section props like `title`, `subtitle`, `items`, `badge`, `cta`.

## Styling Rules

- Tailwind classes should be the default styling mechanism.
- Use CSS variables for theme tokens such as background, foreground, muted text, accent, border, and sale colors.
- Match the reference design with crisp spacing, soft shadows, rounded cards, and strong section rhythm.
- Keep the UI light and airy unless a section specifically needs a dark promo treatment.
- Avoid generic template aesthetics. The result should feel intentional and close to the source reference.
- Keep hover states subtle and consistent.
- Avoid large amounts of custom CSS unless a Tailwind utility combination becomes unreadable.

## Motion Rules

- Use Framer Motion sparingly.
- Add motion only to entrances, card hover lift, and small section reveals.
- Motion should feel premium, not flashy.
- Prefer short durations, gentle easing, and staggered entrances over constant animation.
- Do not animate every element independently.

## Responsive Rules

- The site must be fully responsive from mobile to large desktop.
- Start with a mobile-safe layout, then enhance at `sm`, `md`, `lg`, `xl`, and `2xl`.
- Convert multi-column desktop layouts into stacked cards or swipeable rows on small screens.
- Avoid fixed widths for major sections unless they are paired with responsive overrides.
- Keep tap targets large enough for mobile.
- Header, nav, and footer should remain usable on narrow screens without horizontal scrolling.

## Accessibility Rules

- Use descriptive alt text for meaningful images.
- Mark decorative images as decorative when appropriate.
- Maintain visible focus states.
- Preserve keyboard navigation for menus, links, buttons, and search controls.
- Use proper heading order and do not skip heading levels for visual convenience.

## Data And Content Rules

- Use placeholder product data only where the real content is not yet available.
- Keep labels, badges, and prices in structured data objects.
- Reuse the same product model across all product sections.
- When a product card appears in multiple rows, render the same component with different data rather than creating a second card implementation.

## Working Method

- Start by defining the data model.
- Then build shared components.
- Then compose the page section by section.
- After each section, verify layout and responsiveness before moving on.
- Do not start a new section until the shared components for the previous section are in place.
- Keep changes small enough to review visually and debug quickly.

## Quality Gates

Before considering a task done:

- Run lint and fix the reported issues.
- Verify the page in the browser at mobile, tablet, and desktop sizes.
- Check for duplicate markup and unnecessary client components.
- Confirm the output visually matches the reference hierarchy and spacing.
- Ensure the final code is readable enough that another agent can extend it without rework.

## Non-Negotiables

- Do not duplicate the same code twice.
- Do not use outdated Next.js patterns without checking the installed docs.
- Do not mark an entire page as a client component unless it is truly necessary.
- Do not sacrifice responsiveness for visual similarity.
- Do not leave the root page as boilerplate after implementation begins.

