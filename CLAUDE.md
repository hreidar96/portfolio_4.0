# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Next.js)
npm run build      # Production build
npm run lint       # ESLint
npm run typecheck  # TypeScript type checking (tsc --noEmit)
```

No test framework is configured.

## Architecture

This is a **Next.js 16 App Router** portfolio site (single page, scroll-based navigation). All content lives in a single route (`app/page.tsx`) with section components.

### Key directories

- `app/` — Root layout and single page; layout wraps everything in context providers
- `components/` — All UI components, each marked `"use client"`
- `actions/sendEmail.ts` — Server Action for contact form (uses Resend API + React Email templates)
- `context/` — React Context for active section tracking and dark/light theme
- `lib/data.ts` — All portfolio content (projects, experience, skills, nav links); this is the source of truth for site content
- `lib/hooks.ts` — `useSectionInView()` custom hook (Intersection Observer + active section context)
- `lib/types.ts` — Shared types; `SectionName` is derived from `links` in data.ts
- `email/` — React Email template for contact form submissions

### State management

Two React Contexts wrap the app (in `app/layout.tsx`):
- **ActiveSectionContext** — Tracks which section is in view for header nav highlighting. Has a `timeOfLastClick` guard that disables observer-based updates for 1 second after manual nav clicks.
- **ThemeContext** — Dark/light mode toggle, persisted to localStorage, respects system preference on first visit. Applies `"dark"` class to `<html>`.

### Scroll tracking pattern

Components call `useSectionInView("SectionName")` which returns a `ref`. That ref is placed on the section's root element. The hook uses `react-intersection-observer` with a configurable threshold (default 0.75) and updates the active section context when visible.

### Styling

Tailwind CSS 4 with dark mode via `"class"` strategy. Custom styles in `app/globals.css`. Framer Motion handles entrance animations and scroll-triggered effects on project cards.

### Environment variables

- `RESEND_API_KEY` — Required for contact form email sending (server-side only)
