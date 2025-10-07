/**
 * @summary
 * Task routes configuration for internal API endpoints.
 * Defines routes for task management operations.
 *
 * @module routes/v1/taskRoutes
 * @type router-configuration
 * @version 1.0.0
 *
 * @routes
 * - POST /task: Create new task
 */

import { Router } from 'express';
import * as taskController from '@/api/v1/internal/task/controller';

const router = Router();

/**
 * @route POST /task
 * @description Create a new task
 * @access Internal (authenticated)
 */
router.post('/task', taskController.postHandler);

export default router;
