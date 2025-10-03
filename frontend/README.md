# TODO List Application

A modern task management application built with React, TypeScript, and TailwindCSS.

## Features

- ✅ Create tasks with title, description, due date, and priority
- 📋 List and manage all tasks
- 🎨 Modern and responsive UI
- 🔒 Type-safe with TypeScript
- ⚡ Fast development with Vite

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Build Tool**: Vite
- **State Management**: TanStack Query + Zustand
- **Routing**: React Router DOM
- **Form Handling**: React Hook Form + Zod
- **HTTP Client**: Axios

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Backend API running on http://localhost:3000

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

4. Start the development server:

```bash
npm run dev
```

The application will be available at http://localhost:3001

## Project Structure

```
src/
├── app/              # Application configuration and setup
├── pages/            # Page components for routing
├── domain/           # Business domain modules
├── core/             # Shared components and utilities
│   ├── components/   # Reusable UI components
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Library configurations
│   ├── types/        # Global TypeScript types
│   ├── utils/        # Utility functions
│   └── constants/    # Application constants
└── assets/           # Static assets and styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Architecture

This project follows a domain-driven architecture with clear separation of concerns:

- **Pages**: Route entry points that orchestrate domain components
- **Domain**: Business logic organized by functional domains
- **Core**: Shared, reusable components and utilities
- **App**: Application-level configuration and providers

## API Integration

The frontend integrates with a REST API backend:

- **Base URL**: Configured via `VITE_API_URL` environment variable
- **Public endpoints**: `/api/v1/external/*` (no authentication)
- **Authenticated endpoints**: `/api/v1/internal/*` (requires token)

## Contributing

Please follow the established patterns and conventions when contributing:

1. Use TypeScript for all new code
2. Follow the naming conventions (camelCase for files, PascalCase for components)
3. Add JSDoc comments for all public functions and components
4. Write tests for new features
5. Ensure code passes linting before committing

## License

MIT