# TODO List App

A modern TODO list application built with React, TypeScript, and TailwindCSS.

## Features

- User authentication (login/register)
- Task management (create, list, update, delete)
- Responsive design
- Type-safe development with TypeScript

## Tech Stack

- **Frontend Framework**: React 19.2.0
- **Language**: TypeScript 5.9.3
- **Styling**: TailwindCSS 4.1.14
- **Routing**: React Router DOM 7.9.3
- **State Management**: TanStack Query 5.90.2, Zustand 5.0.8
- **Forms**: React Hook Form 7.63.0 + Zod 4.1.11
- **Build Tool**: Vite 7.1.9

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
├── app/                    # Application configuration
│   ├── App.tsx            # Root component
│   ├── main.tsx           # Entry point
│   ├── providers.tsx      # Global providers
│   └── router.tsx         # Routing configuration
├── core/                   # Shared components and utilities
│   ├── components/        # Reusable UI components
│   ├── contexts/          # Global contexts
│   ├── lib/              # Library configurations
│   └── utils/            # Utility functions
├── domain/                # Business domain modules
├── pages/                 # Page components
│   └── layouts/          # Layout components
└── assets/               # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Integration

The application connects to a REST API backend with the following structure:

- **Public endpoints**: `/api/v1/external/*` (no authentication)
- **Protected endpoints**: `/api/v1/internal/*` (requires authentication)

API configuration is located in `src/core/lib/api.ts`.

## Contributing

Feature implementations should follow the established architecture:

1. Create domain module in `src/domain/[domainName]`
2. Implement services in `services/` directory
3. Create hooks in `hooks/` directory
4. Add components in `components/` directory
5. Create pages in `src/pages/` directory
6. Update routing in `src/app/router.tsx`

## License

MIT