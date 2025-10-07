# Todo List App

A modern, responsive todo list application built with React, TypeScript, and Tailwind CSS.

## Features

- ✅ Create tasks with title, description, due date, and priority
- 📋 List and manage all tasks
- 🎨 Modern, responsive UI with Tailwind CSS
- 🔧 TypeScript for type safety
- ⚡ Fast development with Vite
- 🧩 Modular architecture with domain-driven design

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **State Management**: TanStack Query, Zustand
- **Forms**: React Hook Form with Zod validation
- **Routing**: React Router DOM
- **HTTP Client**: Axios

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd todo-list-app
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Update environment variables in `.env`:
```env
VITE_API_URL=http://localhost:3000
VITE_API_VERSION=v1
VITE_API_TIMEOUT=30000
```

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:3001](http://localhost:3001) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/                    # Application configuration
│   ├── App.tsx            # Root component
│   ├── providers.tsx      # Global providers
│   └── router.tsx         # Routing configuration
├── core/                  # Shared components and utilities
│   ├── components/        # Reusable UI components
│   ├── lib/              # Library configurations
│   ├── types/            # Global type definitions
│   └── utils/            # Utility functions
├── pages/                 # Page components
│   ├── layouts/          # Layout components
│   ├── Home/             # Home page
│   ├── Tasks/            # Tasks page
│   └── NotFound/         # 404 page
└── assets/               # Static assets
    └── styles/           # Global styles
```

## Architecture

This project follows a domain-driven architecture with:

- **Modular Structure**: Clear separation between core, domain, and page components
- **Type Safety**: Full TypeScript coverage with strict configuration
- **Component Composition**: Reusable components with proper prop interfaces
- **State Management**: TanStack Query for server state, local state for UI
- **Error Handling**: Error boundaries and proper error states
- **Performance**: Lazy loading, code splitting, and optimized builds

## API Integration

The app is configured to work with a REST API backend:

- **Public endpoints**: `/api/v1/external/*` (no authentication)
- **Protected endpoints**: `/api/v1/internal/*` (requires authentication)

API clients are pre-configured in `src/core/lib/api.ts`.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License.