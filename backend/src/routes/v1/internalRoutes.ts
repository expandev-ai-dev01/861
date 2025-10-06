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
 * - /task: Task management routes
 */

import { Router } from 'express';
import taskRoutes from './taskRoutes';

const router = Router();

// Task routes
router.use('/', taskRoutes);

export default router;
