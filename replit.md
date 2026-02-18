# Overview

SolveitByTech is a business portfolio and services website for a technology company. It showcases the company's services (web development, app development, SEO, video editing, drone photogrammetry, graphic design), displays featured projects, provides company information, and includes a contact form for inquiries. The site features a dark tech-themed UI with animated transitions, a floating WhatsApp chat button, and a PostgreSQL-backed contact form submission system.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript, built with Vite
- **Routing**: Wouter (lightweight client-side router) with pages for Home, About, Services, Projects, Contact, and 404
- **State Management**: TanStack React Query for server state (API calls)
- **Forms**: React Hook Form with Zod validation via `@hookform/resolvers`
- **UI Components**: shadcn/ui component library (new-york style) built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming (dark tech theme with deep blue/purple palette)
- **Fonts**: Outfit (display/headings) and Plus Jakarta Sans (body text) via Google Fonts
- **Animations**: Framer Motion for page transitions and scroll animations
- **Icons**: Lucide React icons
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`

## Backend Architecture
- **Runtime**: Node.js with TypeScript (tsx for development, esbuild for production)
- **Framework**: Express 5
- **API Design**: Single REST endpoint (`POST /api/inquiries`) for contact form submissions
- **Route Definitions**: Shared route definitions in `shared/routes.ts` using Zod schemas for input validation, consumed by both client and server
- **Static Serving**: In production, serves the built Vite output from `dist/public`; in development, uses Vite dev server middleware with HMR

## Data Storage
- **Database**: PostgreSQL via `DATABASE_URL` environment variable
- **ORM**: Drizzle ORM with `drizzle-zod` for schema-to-validation integration
- **Schema**: Single `inquiries` table with fields: id (serial), name, email, message, service (optional), createdAt
- **Migrations**: Drizzle Kit with `db:push` command for schema synchronization
- **Storage Pattern**: `IStorage` interface in `server/storage.ts` with `DatabaseStorage` implementation

## Shared Code
- `shared/schema.ts` — Database table definitions and Zod insert schemas, shared between client and server
- `shared/routes.ts` — API route definitions with paths, methods, input schemas, and response schemas

## Build System
- **Development**: `tsx server/index.ts` runs the Express server with Vite dev middleware
- **Production Build**: Custom `script/build.ts` that runs Vite build for client and esbuild for server, outputting to `dist/`
- **Server Bundle**: esbuild bundles server code to `dist/index.cjs`, with selective dependency bundling via an allowlist to optimize cold start times

# External Dependencies

- **PostgreSQL**: Required database, connected via `DATABASE_URL` environment variable. Must be provisioned before the app can start.
- **Google Fonts**: Outfit and Plus Jakarta Sans loaded via CDN in `index.css`
- **Unsplash**: Project images use Unsplash URLs as placeholders
- **WhatsApp API**: Floating button links to `wa.me` with a placeholder phone number (919876543210)
- **Replit Plugins** (dev only): `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner`