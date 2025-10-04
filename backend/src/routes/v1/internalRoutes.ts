import { Router } from 'express';

const router = Router();

// Internal routes will be added here by feature implementations
// Example structure:
// import { authMiddleware } from '@/middleware/auth';
// import * as taskController from '@/api/v1/internal/task/controller';
// router.get('/task', authMiddleware, taskController.listHandler);
// router.post('/task', authMiddleware, taskController.createHandler);

export default router;
