# TODO List Backend API

Backend REST API for the TODO List system built with Node.js, Express, and TypeScript.

## Features

- RESTful API architecture with versioning support
- TypeScript for type safety
- Express.js framework
- Zod for request validation
- Comprehensive error handling
- Security middleware (Helmet, CORS)
- Request compression
- Logging with Morgan
- Test setup with Jest

## Project Structure

```
src/
├── api/                    # API controllers
│   └── v1/                 # API Version 1
│       ├── external/       # Public endpoints
│       └── internal/       # Authenticated endpoints
├── routes/                 # Route definitions
│   └── v1/                 # Version 1 routes
├── middleware/             # Express middleware
├── services/               # Business logic services
├── utils/                  # Utility functions
├── constants/              # Application constants
├── instances/              # Service instances
├── tests/                  # Global test utilities
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

3. Copy `.env.example` to `.env` and configure your environment variables:

```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration

### Development

Run the development server with hot reload:

```bash
npm run dev
```

The API will be available at `http://localhost:3000`

### Building

Build the project for production:

```bash
npm run build
```

### Running in Production

Start the production server:

```bash
npm start
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

### Linting

Run ESLint:

```bash
npm run lint
```

Fix linting issues:

```bash
npm run lint:fix
```

## API Endpoints

### Health Check

- `GET /health` - Server health status

### API Versioning

All API endpoints are versioned:

- External (public) endpoints: `/api/v1/external/...`
- Internal (authenticated) endpoints: `/api/v1/internal/...`

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

## Architecture

### Multi-Tenancy

The system is designed with multi-tenancy support, ensuring data isolation between different accounts.

### Error Handling

Standardized error responses with appropriate HTTP status codes:

- 400: Bad Request (validation errors)
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

### Response Format

All API responses follow a consistent format:

**Success Response:**
```json
{
  "success": true,
  "data": {},
  "metadata": {
    "timestamp": "2024-01-01T00:00:00.000Z"
  }
}
```

**Error Response:**
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error message"
  },
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Contributing

Feature implementations should follow the established patterns:

1. Create API controllers in `src/api/v1/internal/[feature]/`
2. Define routes in `src/routes/v1/`
3. Implement business logic in `src/services/[feature]/`
4. Add validation schemas using Zod
5. Include comprehensive tests
6. Follow TypeScript and ESLint standards

## License

Private - All rights reserved