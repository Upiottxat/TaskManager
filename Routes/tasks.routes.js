import express from 'express';
import { getTasks, removeTask, editTask, changeTaskStatus, addtask } from '../Controller/tasks.controller.js';
import { verifyRoute } from '../middleware/verifyRoutes.middleware.js';

const router = express.Router();

// Define routes
router.get('/', verifyRoute, getTasks);//userID by req.user.userId|| Get all task by user 
router.post('/', verifyRoute, addtask); // For adding a new task ||  userID by req.user.userId
router.delete('/:taskId', verifyRoute, removeTask);
router.put('/:taskId', verifyRoute, editTask); // For editing the task
router.patch('/:taskId/status', verifyRoute, changeTaskStatus); // For changing the status

export default router;
