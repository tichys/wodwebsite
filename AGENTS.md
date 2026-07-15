<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project Commands

- **Dev server:** `npm run dev`
- **Build:** `npm run build`
- **Lint:** `npm run lint`

Always run `npm run build` and `npm run lint` after making changes to verify correctness.

## Tech Stack

- Next.js 16 (App Router, Turbopack, React 19)
- Tailwind CSS v4 (configured via `@theme` in `src/app/globals.css`, not `tailwind.config.js`)
- TypeScript

## Key Notes

- Tailwind v4: No `tailwind.config.js`. Theme values defined in `@theme {}` block in `globals.css`.
- React 19: Global `JSX` namespace removed. Use `ReactNode` from `react` instead.
- React 19 lint rules: Do not call `setState` synchronously inside `useEffect`. Use event handlers instead.
- Fonts: Loaded via `next/font/google` in `src/app/layout.tsx` with CSS variables.
