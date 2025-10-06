/**
 * @summary
 * Main API router with version management.
 * Implements URL path versioning strategy for API evolution.
 *
 * @module routes
 * @type router-configuration
 *
 * @versioning
 * - v1: Current stable API version
 * - Future versions can be added without breaking existing clients
 */

import { Router } from 'express';
import v1Routes from './v1';

const router = Router();

// Version 1 (current stable)
router.use('/v1', v1Routes);

// Future versions can be added here
// router.use('/v2', v2Routes);

export default router;
