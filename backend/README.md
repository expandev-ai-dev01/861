# TODO List Backend API

Backend REST API for the TODO List system built with Node.js, Express, and TypeScript.

## Features

- RESTful API architecture
- TypeScript for type safety
- Express.js framework
- Zod for runtime validation
- Multi-tenancy support
- API versioning
- Comprehensive error handling
- Security middleware (Helmet, CORS)
- Request compression
- Logging with Morgan

## Prerequisites

- Node.js 20.x or higher
- npm or yarn
- SQL Server database

## Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Configure your .env file with appropriate values
```

## Development

```bash
# Run in development mode with hot reload
npm run dev

# Build for production
npm run build

# Run production build
npm start
```

## Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## API Structure

The API follows a versioned structure:

```
/api/v1/external  - Public endpoints (authentication, public data)
/api/v1/internal  - Authenticated endpoints (business features)
```

## Project Structure

```
src/
├── api/              # API controllers
├── routes/           # Route definitions
├── middleware/       # Express middleware
├── services/         # Business logic
├── utils/            # Utility functions
├── constants/        # Application constants
├── instances/        # Service instances
├── types/            # TypeScript types
└── server.ts         # Application entry point
```

## Environment Variables

See `.env.example` for required environment variables.

## License

Private - All rights reserved