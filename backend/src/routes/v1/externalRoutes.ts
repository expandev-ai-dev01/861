/**
 * @summary
 * External (public) API routes configuration.
 * Handles public endpoints that do not require authentication.
 *
 * @module routes/v1/externalRoutes
 * @type router-configuration
 * @version 1.0.0
 *
 * @routes
 * - /public: General public endpoints
 * - /security: Authentication and security endpoints (future)
 */

import { Router } from 'express';

const router = Router();

// Public endpoints will be added here
// Example: router.use('/public', publicRoutes);

// Security endpoints (login, register, etc.) will be added here
// Example: router.use('/security', securityRoutes);

export default router;
