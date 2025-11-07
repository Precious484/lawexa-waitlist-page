# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Lawexa Waitlist Landing Page** - a legal research platform marketing site built with React, TypeScript, and Vite. The project was created and is managed through Lovable (lovable.dev), which automatically commits visual edits to this repository.

## Development Commands

```bash
# Start development server (runs on port 8080, not default 5173)
npm run dev

# Build for production
npm run build

# Build for development environment
npm run build:dev

# Run ESLint
npm run lint

# Preview production build
npm run preview
```

## Tech Stack

- **Build Tool**: Vite 5 with React SWC plugin
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom animations and shadcn/ui components
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Backend**: Supabase (configured but no database tables currently defined)
- **State Management**: TanStack Query (React Query)
- **Forms**: React Hook Form with Zod validation
- **Routing**: React Router v6

## Project Architecture

### Directory Structure

- **`/src/pages/`** - Top-level page components (Index, Products, Login, Signup, etc.)
- **`/src/components/`** - Page section components (HeroSection, VideoSection, PricingSection, etc.)
- **`/src/components/ui/`** - shadcn/ui component library (Button, Input, Dialog, etc.)
- **`/src/integrations/supabase/`** - Supabase client configuration and TypeScript types
- **`/src/hooks/`** - Custom React hooks (useScrollAnimation, use-toast, use-mobile)
- **`/src/lib/`** - Utility functions (utils.ts contains cn() for className merging)
- **`/src/assets/`** - Images, logos, and interface screenshots
- **`/supabase/`** - Supabase project configuration and functions

### Path Aliases

The project uses `@/` as an alias for the `src/` directory, configured in both `vite.config.ts` and `tsconfig.json`:

```typescript
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
```

### Key Architectural Patterns

1. **Single Page Application**: Uses React Router with the main landing page at `/` (Index component)

2. **Section-based Components**: The landing page is composed of self-contained section components (HeroSection, VideoSection, etc.) that are imported into page components

3. **Scroll Animations**: Custom `useScrollAnimation` hook and Intersection Observer pattern used throughout for fade-in animations on scroll

4. **Supabase Integration**: Supabase client is configured in `/src/integrations/supabase/client.ts` with environment variables from `.env`. Currently, no database tables are defined in the types.

5. **Custom Tailwind Animations**: Extended animations defined in `tailwind.config.ts` including:
   - fade-in, slide-in, glow-pulse, bounce-gentle, typewriter, flip
   - Custom box shadows (soft, medium, large, gold)
   - HSL-based color system with CSS variables

6. **Component Library**: Uses shadcn/ui components configured via `components.json` with the "default" style and slate base color

## Important Development Notes

- **Port Configuration**: Dev server runs on port 8080 (configured in vite.config.ts), not Vite's default 5173
- **Lovable Integration**: This project uses `lovable-tagger` plugin in development mode for visual editing integration
- **Environment Variables**: Supabase credentials are stored in `.env` file (VITE_SUPABASE_URL, VITE_SUPABASE_PUBLISHABLE_KEY, VITE_SUPABASE_PROJECT_ID)
- **No Tests**: Currently no test suite is configured
- **ESLint Config**: Uses TypeScript ESLint with React Hooks and React Refresh plugins. Note: `@typescript-eslint/no-unused-vars` is disabled

## Adding New Components

When adding shadcn/ui components, use the standard approach:

```bash
npx shadcn-ui@latest add [component-name]
```

Components are configured to be added to `src/components/ui/` with the `@/` alias.

## Supabase Usage

The Supabase client is available at `@/integrations/supabase/client`. Import and use like this:

```typescript
import { supabase } from '@/integrations/supabase/client';

// Example usage
const { data, error } = await supabase.from('table_name').select('*');
```

Note: Currently no database schema is defined. When adding tables, update `/src/integrations/supabase/types.ts`.

## Git Workflow

- Main development branch varies by feature
- This project integrates with Lovable, which commits changes automatically
- Standard git workflow: create feature branches, commit with descriptive messages, push to remote
