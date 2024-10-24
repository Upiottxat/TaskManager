import { GetTasks, RemoveTask, EditTask, ChangeTaskStatus, AddTask } from '../Model/Tasks.model.js';

// Get all tasks for a specific user
export const getTasks = async (req, res) => {
    const { userId } = req.user.userId;
    try {
        const tasks = await GetTasks(userId);

        return res.status(200).json(tasks);
    } catch (error) {
        console.error("Error getting tasks:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
export const addtask = async (req, res) => {
    const { userId } = req.user.userId;
    const { Title, Status } = req.body; // Title and Status passed in request body

    if (!Title || !Status) {
        return res.status(400).json({ error: "Title and Status are required" });
    }

    try {
        const newTask = await AddTask(userId, Title, Status);
        return res.status(201).json(newTask);
    } catch (error) {
        console.error("Error adding task:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

// Remove a task by ID
export const removeTask = async (req, res) => {
    const { taskId } = req.params;
    if (!taskId) return res.status(404).json({ error: "task id is required" });
    try {
        const result = await RemoveTask(taskId);
        if (result === true) {
            return res.status(200).json({ message: "Task removed successfully" });
        } else {
            return res.status(404).json(result);
        }
    } catch (error) {
        console.error("Error removing task:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

// Edit a task
export const editTask = async (req, res) => {
    const taskId = req.params.taskId;

    const { Title, Status } = req.body;

    try {
        const updatedTask = await EditTask(taskId, Title, Status);
        return res.status(200).json(updatedTask);
    } catch (error) {
        console.error("Error editing task:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

// Change the status of a task
export const changeTaskStatus = async (req, res) => {
    const { taskId } = req.params;
    const { Status } = req.body;

    if (!["TODO", "DOING", "DONE"].includes(Status)) {
        return res.status(400).json({ error: "Invalid status" });
    }

    try {
        const result = await ChangeTaskStatus(taskId, Status);

        if (result === true) {
            return res.status(200).json({ message: "Task updated  successfully" });
        } else {
            return res.status(404).json(result);
        }
    } catch (error) {
        console.error("Error changing task status:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
