# TODO List App

A modern TODO list application built with React, TypeScript, and Tailwind CSS.

## Features

- ✅ Create tasks with title, description, due date, and priority
- 📋 List and manage all tasks
- 🎨 Modern UI with Tailwind CSS
- 🔒 Type-safe with TypeScript
- ⚡ Fast development with Vite
- 🎯 State management with TanStack Query

## Tech Stack

- **Frontend Framework**: React 19.2.0
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 7.1.9
- **Styling**: Tailwind CSS 4.1.14
- **Routing**: React Router DOM 7.9.3
- **State Management**: TanStack Query 5.90.2, Zustand 5.0.8
- **Form Handling**: React Hook Form 7.63.0
- **Validation**: Zod 4.1.11
- **HTTP Client**: Axios 1.12.2

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

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

The application will be available at `http://localhost:3001`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/                    # Application configuration
│   ├── main.tsx           # Entry point
│   ├── App.tsx            # Root component
│   ├── router.tsx         # Routing configuration
│   └── providers.tsx      # Global providers
├── core/                   # Shared core functionality
│   ├── components/        # Reusable UI components
│   ├── lib/              # Library configurations
│   ├── types/            # Global types
│   └── utils/            # Utility functions
├── domain/                # Business domains (features)
│   └── [feature]/        # Feature-specific code
├── pages/                 # Page components
│   ├── layouts/          # Layout components
│   └── [Page]/           # Individual pages
└── assets/               # Static assets
    └── styles/           # Global styles
```

## API Integration

The application connects to a backend API running on `http://localhost:3000` by default.

API endpoints follow this structure:
- Public endpoints: `/api/v1/external/*`
- Authenticated endpoints: `/api/v1/internal/*`

## Development Guidelines

### Component Structure

Each component follows this structure:
```
ComponentName/
├── main.tsx      # Component implementation
├── types.ts      # Type definitions
├── variants.ts   # Style variants (if needed)
└── index.ts      # Exports
```

### Naming Conventions

- **Components**: PascalCase (e.g., `TaskList`, `TaskForm`)
- **Files**: camelCase for utilities, PascalCase for components
- **Hooks**: camelCase with `use` prefix (e.g., `useTaskList`)
- **Types**: PascalCase with descriptive suffixes (e.g., `TaskListProps`)

### Code Style

- Use TypeScript for all files
- Follow ESLint rules
- Use Tailwind CSS for styling
- Document components with JSDoc comments
- Keep components small and focused

## Contributing

1. Create a feature branch
2. Make your changes
3. Ensure all tests pass
4. Submit a pull request

## License

MIT