# Portfolio

A personal portfolio site with an introduction/hero section, a project showcase, a blog, a resume page, an affiliate recommendations section, and a contact form.

## Tech Stack

- [TanStack Start](https://tanstack.com/start) (React 19, file-based routing via TanStack Router)
- [Vite 7](https://vitejs.dev/) for building and dev server
- [Tailwind CSS 4](https://tailwindcss.com/) for styling
- [Radix UI](https://www.radix-ui.com/) primitives for accessible components
- [Content Collections](https://www.content-collections.dev/) for type-safe Markdown content (jobs, education, blog posts, projects, affiliates)
- [Netlify Forms](https://docs.netlify.com/forms/setup/) for the contact form
- Deployed on [Netlify](https://www.netlify.com/)

## Pages

- `/` — Introduction/hero, featured projects, and featured affiliate recommendations
- `/projects` — Full project showcase
- `/affiliates` — Full list of recommended tools and services
- `/resume` — Work experience and education
- `/blog` — Blog post index
- `/blog/$slug` — Individual blog post
- `/contact` — Contact form

## Content

Markdown content lives under `content/` and is validated against Zod schemas in `content-collections.ts`:

- `content/jobs` — work history
- `content/education` — education history
- `content/blog` — blog posts
- `content/projects` — portfolio projects
- `content/affiliates` — recommended tools/products with affiliate links

## Running Locally

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:3000` by default. To test with full Netlify feature emulation (including Netlify Forms), use the Netlify CLI:

```bash
netlify dev
```

## Build

```bash
npm run build
```
