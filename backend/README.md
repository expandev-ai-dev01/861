# TODO List Backend API

Backend REST API for the TODO List system built with Node.js, Express, and TypeScript.

## Features

- RESTful API architecture with versioning support
- TypeScript for type safety
- Express.js framework
- Zod for request validation
- Security middleware (Helmet, CORS)
- Comprehensive error handling
- Modular architecture

## Project Structure

```
src/
├── api/                    # API controllers
│   └── v1/                 # API version 1
│       ├── external/       # Public endpoints
│       └── internal/       # Authenticated endpoints
├── routes/                 # Route definitions
│   └── v1/                 # Version 1 routes
├── middleware/             # Express middleware
├── services/               # Business logic
├── utils/                  # Utility functions
├── constants/              # Application constants
├── instances/              # Service instances
└── server.ts               # Application entry point
```

## Getting Started

### Prerequisites

- Node.js 20.x LTS or higher
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy `.env.example` to `.env` and configure:
   ```bash
   cp .env.example .env
   ```

4. Update environment variables in `.env`

### Development

Run the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3000/api/v1`

### Building

Build for production:
```bash
npm run build
```

### Testing

Run tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

Generate coverage report:
```bash
npm run test:coverage
```

## API Endpoints

### Health Check
- `GET /health` - Server health status

### API Version 1

Base URL: `/api/v1`

#### External (Public)
- Public endpoints will be added as features are implemented

#### Internal (Authenticated)
- Authenticated endpoints will be added as features are implemented

## Environment Variables

| Variable | Description | Default |
|----------|-------------|----------|
| NODE_ENV | Environment mode | development |
| PORT | Server port | 3000 |
| API_VERSION | API version | v1 |
| DB_HOST | Database host | localhost |
| DB_PORT | Database port | 1433 |
| DB_USER | Database user | sa |
| DB_PASSWORD | Database password | - |
| DB_NAME | Database name | todolist |
| CORS_ORIGINS | Allowed CORS origins | - |

## Architecture Patterns

### Multi-Tenancy
All functional operations include account-based data isolation through `idAccount` filtering.

### Error Handling
Standardized error responses with proper HTTP status codes and error messages.

### Validation
Zod schemas for type-safe request validation with descriptive error messages.

### Security
- Helmet for security headers
- CORS configuration
- Request size limits
- Input validation

## Contributing

Follow the established coding standards and patterns documented in the architecture guidelines.

## License

Private - All rights reserved
