/**
 * @summary
 * Internal (authenticated) API routes configuration.
 * Handles authenticated endpoints that require valid user session.
 *
 * @module routes/v1/internalRoutes
 * @type router-configuration
 * @version 1.0.0
 *
 * @security
 * All routes in this module require authentication middleware
 *
 * @routes
 * Feature-specific routes will be added here
 */

import { Router } from 'express';
import taskRoutes from './taskRoutes';

const router = Router();

// Task routes
router.use('/', taskRoutes);

export default router;
