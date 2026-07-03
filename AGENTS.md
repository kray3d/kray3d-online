# AGENTS.md

This document provides an overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

A personal portfolio site built with TanStack Start, featuring an introductory hero section, a project showcase, a blog, a resume page, an affiliate recommendations section, and a contact form. Deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| UI Components | Radix UI + custom components |
| Content | Content Collections (type-safe markdown) |
| Forms | Netlify Forms |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── content
│   ├── affiliates          # Recommended tools/products (name, description, url, tags)
│   ├── blog                # Blog posts (title, date, summary, tags, author)
│   ├── education           # Education history
│   ├── jobs                # Work history
│   └── projects            # Portfolio projects (title, description, tags, github, liveUrl)
├── public
│   ├── contact.html         # Static HTML mirror of the contact form, required for Netlify Forms detection
│   ├── favicon.ico
│   └── headshot-on-white.jpg
├── src
│   ├── components
│   │   ├── ui               # Radix-based primitives: Card, Badge, Checkbox, Separator, HoverCard
│   │   └── Header.tsx        # Site-wide nav header, rendered in __root.tsx
│   ├── lib
│   │   └── utils.ts          # cn() class-merging helper
│   ├── routes
│   │   ├── blog
│   │   │   ├── index.tsx     # Blog post index (/blog)
│   │   │   └── $slug.tsx     # Blog post detail (/blog/$slug)
│   │   ├── __root.tsx        # Root layout: renders <Header /> and page content
│   │   ├── index.tsx         # Homepage: intro/hero, featured projects, featured affiliates
│   │   ├── projects.tsx      # Full project showcase
│   │   ├── affiliates.tsx    # Full affiliate/recommendation listing
│   │   ├── resume.tsx        # Work experience and education
│   │   └── contact.tsx       # Contact form (Netlify Forms)
│   ├── router.tsx            # TanStack Router setup
│   └── styles.css            # Tailwind imports + CSS custom properties (oklch colors)
├── content-collections.ts    # Zod schemas for jobs, education, blog, projects, affiliates
├── netlify.toml               # Build command, publish directory, dev server settings
├── package.json
├── tsconfig.json               # @/* path alias for src/*
└── vite.config.ts
```

## Key Concepts

### File-Based Routing (TanStack Router)

Routes are defined by files in `src/routes/`. `index.tsx` inside a folder maps to that folder's root path (e.g. `blog/index.tsx` → `/blog`).

### Content Collections

All markdown content under `content/` is typed and validated via the Zod schemas in `content-collections.ts`. Import typed content anywhere with `import { allProjects, allAffiliates, allBlogs, allJobs, allEducations } from 'content-collections'`.

To add a new project, blog post, or affiliate, add a markdown file with frontmatter matching the relevant schema — no code changes needed.

### Netlify Forms

The contact form (`src/routes/contact.tsx`) submits via `data-netlify="true"`. `public/contact.html` is a static duplicate of the form markup — Netlify's build-time form detection only scans static HTML, so this file must stay in sync with the form fields in `contact.tsx` if fields change.

## Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite plugins: TanStack Start, Netlify, Tailwind, Content Collections |
| `tsconfig.json` | TypeScript config with `@/*` path alias for `src/*` |
| `netlify.toml` | Build command, output directory, dev server settings |
| `content-collections.ts` | Zod schemas for content frontmatter |
| `styles.css` | Tailwind imports + CSS custom properties (oklch colors) |

## Development Commands

```bash
npm run dev      # Start dev server (port 3000)
npm run build    # Production build
```

## Conventions

### Naming
- Components: PascalCase
- Utilities/hooks: camelCase
- Routes: kebab-case files

### Styling
- Tailwind CSS utility classes
- `cn()` helper for conditional class merging
- CSS variables for theme tokens in `styles.css`

### TypeScript
- Strict mode enabled
- Import paths use `@/` alias
- Zod for runtime validation
- Type-only imports with `type` keyword
