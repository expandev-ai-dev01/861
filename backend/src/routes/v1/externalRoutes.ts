/**
 * @summary
 * External API routes configuration for public endpoints.
 * Handles authentication, registration, and public access routes.
 *
 * @module routes/v1/externalRoutes
 * @type router-configuration
 *
 * @routes
 * - /api/v1/external/security: Authentication endpoints
 * - /api/v1/external/public: Public access endpoints
 */

import { Router } from 'express';

const router = Router();

// Security routes (authentication, password recovery, etc.)
// Will be implemented when authentication feature is added
// router.use('/security', securityRoutes);

// Public routes (health checks, public data, etc.)
// router.use('/public', publicRoutes);

export default router;
