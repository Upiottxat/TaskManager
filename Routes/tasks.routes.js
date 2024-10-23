import express from 'express';
import { getTasks, removeTask, editTask, changeTaskStatus, addtask } from '../Controller/tasks.controller.js';

const router = express.Router();

// Define routes
router.get('/:userId', getTasks);
router.post('/:userId', addtask); // For adding a new task
router.delete('/:taskId', removeTask);
router.put('/:taskId', editTask); // For editing the task
router.patch('/:taskId/status', changeTaskStatus); // For changing the status

export default router;
