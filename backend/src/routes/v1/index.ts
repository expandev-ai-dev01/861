/**
 * @summary
 * V1 API router configuration.
 * Separates external (public) and internal (authenticated) routes.
 *
 * @module routes/v1
 * @type router-configuration
 * @version 1.0.0
 *
 * @routes
 * - /external: Public endpoints (no authentication required)
 * - /internal: Authenticated endpoints (authentication required)
 */

import { Router } from 'express';
import externalRoutes from './externalRoutes';
import internalRoutes from './internalRoutes';

const router = Router();

// External (public) routes - /api/v1/external/...
router.use('/external', externalRoutes);

// Internal (authenticated) routes - /api/v1/internal/...
router.use('/internal', internalRoutes);

export default router;
