# UFABC Next Campus Hub AI Assistant Instructions

This document provides essential context for AI assistants working in this codebase.

## Project Overview

UFABC Next Campus Hub is a React-based web platform for the Federal University of ABC (UFABC) community. The project uses:

- Vite + TypeScript + React for the frontend
- shadcn/ui components for UI elements
- Tailwind CSS for styling
- React Router for navigation

## Key Architectural Patterns

### Component Organization

- UI components are in `src/components/ui/`
- Page components are in `src/pages/`
- Reusable hooks are in `src/hooks/`
- Static assets (images) are in `public/members/`

### Component Patterns

- Use shadcn/ui components for consistent styling (see `components/ui/`)
- Pages follow a section-based structure (see `LandingPage.tsx` as example)
- Images are served from `/public` directory with paths like `/members/image.jpg`

### Data Flow

- Static content is defined at the top of page components (see `teamMembers` and `pillars` arrays in `LandingPage.tsx`)
- Navigation uses React Router with hash-based routing for sections

## Development Workflow

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Common Tasks

### Adding New UI Components

1. Import from shadcn/ui components in `src/components/ui/`
2. Follow existing component styling patterns using Tailwind classes
3. Maintain responsive design with provided breakpoint classes (md:, lg:)

### Working with Images

- Place images in `public/members/`
- Reference using absolute paths: `/members/image.jpg`

### Navigation

- Add new routes in the NavigationMenu component
- Use hash-based routing for page sections (#about, #projects, etc.)

## Project-Specific Conventions

### CSS Classes

- Use Tailwind utility classes
- Follow BEM-like naming for custom components
- Maintain dark/light mode compatibility

### Component Structure

- Use functional components with TypeScript
- Keep data/content definitions at top of files
- Group related sections within page components

### Naming Conventions

- PascalCase for component files and names
- camelCase for functions and variables
- Use descriptive section IDs for navigation

## Tips

- Check existing components in `src/components/ui/` before creating new ones
- Maintain responsive design across all screen sizes
- Follow established section patterns in landing page
