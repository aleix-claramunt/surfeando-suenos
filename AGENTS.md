# Repository Guidelines

## Project Structure & Module Organization
- `app/` contains all Next.js route segments. Top-level marketing pages live at `app/page.tsx`, while campaign pages (such as `easy-flow`, `free-spirit`, and `soul-wave`) each expose their own `page.tsx`. Shared UI such as the navigation and footer reside in `app/components/`.
- `app/api/contact/route.ts` handles form submissions via Resend; inspect this module before touching mail flows.
- Styling lives in `app/globals.css` with utility classes provided by Tailwind. Static assets belong in `public/` and are referenced with the usual `/asset-name` paths.
- Root-level config files (`next.config.ts`, `tailwind.config.js`, `eslint.config.mjs`, `tsconfig.json`) define framework, styling, linting, and TypeScript behavior—update them in tandem when changing build tooling.

## Build, Test, and Development Commands
- `npm run dev` — start the local dev server with Turbopack on `http://localhost:3000`.
- `npm run build` — create an optimized production build; run before deployment to Vercel.
- `npm run start` — serve the build output for a production-like smoke test.
- `npm run lint` — execute `next lint`; resolve warnings before opening a PR.

## Coding Style & Naming Conventions
- Use TypeScript across the app, keep components and hooks in PascalCase files (`Navbar.tsx`), and prefer arrow functions for handlers.
- Maintain two-space indentation and single quotes, matching the existing files and Next.js lint defaults.
- Tailwind classes should remain semantic and grouped by layout ➜ spacing ➜ color to keep diffs tidy; avoid duplicating styles already covered by `globals.css`.

## Testing Guidelines
- Automated tests are not yet checked in; when adding them, colocate component tests beside the target file or create a `tests/` directory that mirrors `app/`.
- Treat `npm run lint` as a gate. For UI changes, manually verify forms (especially the contact flow) and confirm no Resend errors appear in the terminal.
- Add visual regression or Playwright coverage for landing pages once critical flows stabilize.

## Commit & Pull Request Guidelines
- Keep commit summaries short, imperative, and scoped (e.g., `Refine contact copy`, `Add easy-flow hero`). Combine related tweaks instead of scattering one-line commits.
- Every PR should explain the motivation, outline the main changes, and note any follow-up tasks or env var updates. Include screenshots or GIFs for UI work, and link issues when available.

