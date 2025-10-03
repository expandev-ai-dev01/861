# TODO List Backend API

## Description
Backend REST API for TODO List system built with Node.js, Express, TypeScript, and SQL Server.

## Technology Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: Microsoft SQL Server
- **Validation**: Zod
- **Security**: Helmet, CORS, Bcrypt

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
├── services/               # Business logic
├── utils/                  # Utility functions
├── constants/              # Application constants
├── instances/              # Service instances
├── config/                 # Configuration
└── server.ts               # Application entry point
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- SQL Server
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd todolist-backend
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start development server
```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

## API Documentation

### Base URL
- Development: `http://localhost:3000/api/v1`
- Production: `https://api.yourdomain.com/api/v1`

### Health Check
```
GET /health
```

### API Versioning
The API uses URL path versioning:
- `/api/v1/external/*` - Public endpoints
- `/api/v1/internal/*` - Authenticated endpoints

## Environment Variables

See `.env.example` for all available configuration options.

Key variables:
- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port (default: 3000)
- `DB_HOST` - Database host
- `DB_PORT` - Database port
- `DB_USER` - Database user
- `DB_PASSWORD` - Database password
- `DB_NAME` - Database name

## Security

- Helmet for security headers
- CORS configuration
- Request validation with Zod
- Multi-tenancy support
- Account-based data isolation

## Testing

Tests are colocated with source files:
- Unit tests: `*.test.ts`
- Integration tests: `*Integration.ts`

Shared test utilities are in `src/tests/`

## Contributing

1. Follow the established code structure
2. Use TypeScript strict mode
3. Write tests for new features
4. Follow ESLint rules
5. Document with TSDoc comments

## License

ISC