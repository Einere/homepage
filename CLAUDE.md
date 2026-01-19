# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog/homepage built with Next.js 16 that uses Notion as a headless CMS. The site renders Notion pages as blog posts ("records") using a custom renderer package.

## Common Commands

```bash
# Development (uses Turbopack)
pnpm dev

# Build
pnpm build

# Start production server
pnpm start

# Lint
pnpm lint
```

## Architecture

### Monorepo Structure (pnpm workspaces)

- **Root app**: Next.js 16 application in `src/app/`
- **@homepage/notion-renderer**: Internal package at `packages/notion-renderer/` - renders Notion blocks to React components

### Path Aliases

- `@/*` → `./src/*`
- `@homepage/notion-renderer` → `./packages/notion-renderer/src`

### Key Files

- `src/app/lib/notionAPI.ts`: Notion API client wrapper with 30-min cache
- `src/app/utils/notionUtils.ts`: Utilities for extracting data from Notion page/block objects
- `packages/notion-renderer/src/NotionRenderer.tsx`: Main component that maps Notion blocks to React components

### Route Structure (App Router with Route Groups)

- `/` - Home page with recent records
- `/records` - Records list with tag filtering (route group: `(records)`)
- `/records/[slug]` - Individual record page (route group: `(record)`)
- `/about` - About page
- `/search` - Search page

The two route groups `(records)` and `(record)` have separate layouts for list vs detail views.

### API Routes

- `/api/records` - Paginated records list with optional tag filter
- `/api/notion-search` - Search endpoint
- `/api/notion-image` - Image proxy for Notion images (handles signed S3 URLs)

### Data Flow

1. Notion Data Source API → `notionAPI.ts` client
2. Page properties extracted via `notionUtils.ts` helpers
3. Block content rendered via `@homepage/notion-renderer` package

### Environment Variables Required

- `NEXT_NOTION_API_AUTH_TOKEN` - Notion API token
- `NEXT_NOTION_API_DATA_SOURCE_ID` - Notion database/datasource ID

### Styling

- Tailwind CSS v4 with custom theme (data-theme="pink")
- Custom fonts: Gowun Dodum, D2Coding, FZuan Su

### Key Patterns

- Static generation with 30-minute revalidation (`revalidate = 1800`)
- React Query for client-side data fetching (records list with infinite scroll)
- Giscus for comments