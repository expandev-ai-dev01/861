import { Router } from 'express';
import * as taskController from '@/api/v1/internal/task/controller';

const router = Router();

/**
 * @api {post} /internal/task Create Task
 * @apiName CreateTask
 * @apiGroup Task
 * @apiVersion 1.0.0
 *
 * @apiDescription Creates a new task with the specified parameters
 *
 * @apiParam {String} title Task title (required, max 255 characters)
 * @apiParam {String} [description] Task description (optional, max 1000 characters)
 *
 * @apiSuccess {String} id Task identifier (UUID)
 * @apiSuccess {String} title Task title
 * @apiSuccess {String} description Task description
 * @apiSuccess {String} status Task status (Pendente)
 * @apiSuccess {Date} creationDate Creation timestamp
 *
 * @apiError {String} ValidationError Invalid parameters provided
 * @apiError {String} UnauthorizedError User lacks permission
 * @apiError {String} ServerError Internal server error
 */
router.post('/task', taskController.postHandler);

export default router;
