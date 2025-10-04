# Sistema de TO DO List - Backend API

## Description
Backend REST API for TO DO List system built with Node.js, Express, and TypeScript.

## Technology Stack
- **Runtime**: Node.js 20.x LTS
- **Framework**: Express 5.1.0
- **Language**: TypeScript 5.9.3
- **Validation**: Zod 4.1.11
- **Security**: Helmet 8.1.0, CORS 2.8.5

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
└── server.ts               # Application entry point
```

## Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm or yarn

### Installation
```bash
npm install
```

### Configuration
1. Copy `.env.example` to `.env`
2. Update environment variables:
   - Database connection settings
   - CORS origins (CRITICAL for production)
   - Security settings

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Production
```bash
npm start
```

## API Endpoints

### Health Check
- `GET /health` - Server health status

### API Versioning
All API endpoints are versioned:
- Base URL: `/api/v1`
- External (public): `/api/v1/external/...`
- Internal (authenticated): `/api/v1/internal/...`

## CORS Configuration

### Development
Default localhost ports are automatically allowed:
- http://localhost:3000
- http://localhost:3001
- http://localhost:5173

### Production
⚠️ **CRITICAL**: Set `CORS_ORIGINS` environment variable with your frontend URL:
```bash
CORS_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
```

### Azure Deployment
For Azure App Service deployments, configure in Application Settings:
```bash
CORS_ORIGINS=https://app-yourapp-web-dev.azurewebsites.net,https://app-yourapp-web-prod.azurewebsites.net
```

## Testing
```bash
# Run tests
npm test

# Watch mode
npm run test:watch

# Coverage
npm run test:coverage
```

## Features
Feature implementations will be added to this backend foundation:
- Task management (Create, List, Update, Delete)
- User authentication and authorization
- Data validation and error handling

## Security
- Helmet.js for security headers
- CORS configuration for cross-origin requests
- Input validation with Zod
- Multi-tenancy support with account isolation

## Error Handling
Standardized error responses:
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error description",
    "details": {}
  },
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Success Response Format
```json
{
  "success": true,
  "data": {},
  "metadata": {
    "timestamp": "2024-01-01T00:00:00.000Z"
  }
}
```

## Contributing
Follow the established coding standards and patterns defined in the architecture documentation.

## License
Private - All rights reserved