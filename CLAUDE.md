# Claude Working Notes

This project is a faithful, modern rebuild of the Ecomall home page shown in the reference URL and screenshot. Treat the design as a sectioned ecommerce landing page with strong visual hierarchy, repeated product cards, promo banners, and a rich footer.

## Implementation Style

- Work step by step.
- Build one reusable component before reusing it elsewhere.
- Do not repeat JSX for similar cards, banners, or section headers.
- Keep the main page file as a composition layer only.
- Use typed data arrays for repeated content.
- Prefer readable component names over generic one-off markup.

## Preferred File Pattern

- `app/layout.tsx` for metadata, font setup, and app shell.
- `app/page.tsx` for composition of homepage sections.
- `app/components/*` for reusable sections and cards.
- `app/data/*` for static content, menus, categories, product lists, and footer links.
- `app/lib/*` for shared utilities like class helpers.

## Section Order To Follow

1. Top utility bar.
2. Main header with search and account actions.
3. Category navigation.
4. Hero promos.
5. Brands strip.
6. Deals of the day.
7. Best sellers and promo tile.
8. Sale banners.
9. Product grids.
10. Large promo banner.
11. Recently viewed row.
12. Shipping strip and service features.
13. Footer.

## Design Rules

- Use Tailwind CSS first.
- Keep the palette close to the reference: clean whites, soft neutrals, blue primary actions, red sale badges, and bold promo blocks.
- Use Framer Motion only for subtle movement such as fade-up reveals, hover lift, and staggered entrances.
- Keep all layouts fully responsive.
- Preserve spacing, alignment, and section balance from the source page.

## React And Next.js Rules

- Default to Server Components.
- Add `"use client"` only to interactive or animated components.
- Keep client components small and isolated.
- Use `next/image` for product and promo imagery.
- Use semantic elements and accessible labels for navigation and controls.
- Read the installed Next.js docs before using any new App Router pattern.

## Code Quality Rules

- No duplicated card logic.
- No copy-pasted section markup.
- No hard-coded repeated lists if they can be mapped from data.
- Use consistent prop naming.
- Keep imports tidy and grouped.
- Keep naming stable and descriptive so future agents can find the right file quickly.

## Verification Checklist

- Page matches the target layout on mobile, tablet, and desktop.
- All sections resize cleanly with no horizontal overflow.
- Lint passes.
- No unnecessary client bundles were introduced.
- No repeated code blocks remain where a component would do.

