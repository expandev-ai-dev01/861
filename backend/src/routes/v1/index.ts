/**
 * @summary
 * Version 1 API router configuration.
 * Separates external (public) and internal (authenticated) routes.
 *
 * @module routes/v1
 * @type router-configuration
 *
 * @routes
 * - /api/v1/external: Public endpoints
 * - /api/v1/internal: Authenticated endpoints
 */

import { Router } from 'express';
import externalRoutes from './externalRoutes';
import internalRoutes from './internalRoutes';

const router = Router();

// External (public) routes
router.use('/external', externalRoutes);

// Internal (authenticated) routes
router.use('/internal', internalRoutes);

export default router;
