/**
 * @summary
 * Task API routes configuration.
 * Defines routes for task management operations.
 *
 * @module routes/v1/taskRoutes
 * @type router-configuration
 *
 * @routes
 * - POST /task: Create new task
 */

import { Router } from 'express';
import { authMiddleware } from '@/middleware/authMiddleware';
import * as taskController from '@/api/v1/internal/task/controller';

const router = Router();

/**
 * @route POST /task
 * @description Create a new task
 * @access Authenticated users only
 */
router.post('/task', authMiddleware, taskController.postHandler);

export default router;
