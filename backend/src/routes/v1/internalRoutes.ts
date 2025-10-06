/**
 * @summary
 * Internal API routes configuration for authenticated endpoints.
 * All routes require valid authentication.
 *
 * @module routes/v1/internalRoutes
 * @type router-configuration
 *
 * @security
 * All routes require authentication middleware
 *
 * @routes
 * Feature-specific routes will be added here
 */

import { Router } from 'express';

const router = Router();

// Feature routes will be added here
// Example: router.use('/task', taskRoutes);

export default router;
