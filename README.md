# CRM Dashboard

A modern, responsive CRM dashboard built with React, TypeScript, Vite, Tailwind CSS, and Shadcn UI components.

## Tech Stack

### Core Technologies

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite 7** - Fast build tool and development server
- **Tailwind CSS v4** - Utility-first CSS framework with Vite plugin
- **Shadcn UI** - High-quality component library built on Radix UI

### Key Libraries

- **ECharts** - Powerful charting library for data visualization
- **Lucide React** - Beautiful icon library
- **Radix UI** - Unstyled, accessible component primitives
- **class-variance-authority** - Component variant management
- **clsx & tailwind-merge** - Utility functions for conditional classes

## Code Architecture

### Project Structure

```
src/
├── components/          # React components
│   ├── ui/            # Shadcn UI components (Button, Card, Table, etc.)
│   ├── dashboard.tsx  # Main dashboard component
│   ├── side-bar.tsx   # Navigation sidebar
│   ├── welcome.tsx    # Welcome section
│   └── ...            # Other feature components
├── lib/               # Utility functions and helpers
│   ├── utils.ts       # Common utilities (cn function for class merging)
│   └── mock-data.ts   # Mock data for development
├── App.tsx            # Root application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind directives
```

### Architecture Patterns

1. **Component-Based Architecture**

   - Modular, reusable components
   - Separation of concerns between UI components and feature components
   - Shadcn UI components in `components/ui/` for consistent design system

2. **Path Aliases**

   - Configured TypeScript path aliases for cleaner imports
   - `@/components` → `src/components`
   - `@/lib` → `src/lib`
   - `@/hooks` → `src/hooks` (if needed)

3. **TypeScript Configuration**

   - Strict type checking enabled
   - Separate configs for app and build tools (`tsconfig.app.json`, `tsconfig.node.json`)
   - Path mapping configured for alias support

4. **Vite Configuration**

   - React plugin for JSX/TSX support
   - Tailwind CSS Vite plugin for optimized CSS processing
   - Path alias resolution configured

5. **Styling Approach**
   - Tailwind CSS v4 with utility classes
   - CSS variables for theming (Shadcn style)
   - Component variants using `class-variance-authority`
   - Responsive design with Tailwind breakpoints

## Installation

Install the required packages:

```bash
npm i
```

## Development

Start the development server:

```bash
npm run dev
```

The development server will start with hot module replacement (HMR) enabled for fast development.

## Production Build

Build for production:

```bash
npm run build
```

This command:

1. Type-checks the codebase (`tsc -b`)
2. Builds optimized production bundle with Vite

## Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Key Features

- ⚡ **Fast Development** - Vite provides instant server start and HMR
- 🎨 **Modern UI** - Shadcn UI components with Tailwind CSS styling
- 📊 **Data Visualization** - ECharts integration for charts and graphs
- 🔒 **Type Safety** - Full TypeScript support
- 📱 **Responsive Design** - Mobile-first approach with Tailwind
- ♿ **Accessible** - Built on Radix UI primitives for accessibility
