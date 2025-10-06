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

// Version 1 routes
router.use('/v1', v1Routes);

export default router;
