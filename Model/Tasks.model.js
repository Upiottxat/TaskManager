
import { conn } from "../config/db.js";

export const GetTasks = async (userId) => {
    try {
        const [rows] = await (await conn).query('SELECT * FROM TASKS WHERE userId = ?', [userId]);
        return rows;
    } catch (error) {
        console.error("Error getting tasks by userId:", error);
        return { error: "Something went wrong while fetchiing tasks" }
    }
};

export const AddTask = async (userId, Title, Status) => {
    const query = 'INSERT INTO TASKS (userId, Title, Status) VALUES (?, ?, ?)';
    const [result] = await (await conn).query(query, [userId, Title, Status]);
    return { taskId: result.insertId, userId, Title, Status };
};

export const RemoveTask = async (taskId) => {
    try {
        const [result] = await (await conn).query('DELETE FROM TASKS WHERE TaskId = ?', [taskId]);
        return result.affectedRows > 0; // Returns true if a row was deleted
    } catch (error) {
        console.error("Error removing task:", error);
        return { error: "Something went wrong while deleting the  task" }
    }
};
export const EditTask = async (taskId, title, status) => {
    console.log("title", title, "status", status, "taskid", taskId);
    try {
        const [result] = await (await conn).query(
            'UPDATE TASKS SET Title = ?, Status = ?, updated_at = CURRENT_TIMESTAMP WHERE TaskId = ?',
            [title, status, taskId]
        );
        return result.affectedRows > 0; // Returns true if a row was updated
    } catch (error) {
        console.error("Error editing task:", error);
        return { error: "Something went wrong while Editing the  task" }
    }
};

export const ChangeTaskStatus = async (taskId, newStatus) => {
    try {
        const validStatuses = ['TODO', 'DOING', 'DONE'];
        if (!validStatuses.includes(newStatus)) {
            return { error: "Invalid status. Must be one of: TODO, DOING, DONE" };
        }
        const [result] = await (await conn).query(
            'UPDATE TASKS SET Status = ?, updated_at = CURRENT_TIMESTAMP WHERE TaskId = ?',
            [newStatus, taskId]
        );
        return result.affectedRows > 0; // Returns true if a row was updated
    } catch (error) {
        console.error("Error changing task status:", error);
        return { error: "Something went wrong while changeTaskStatus of the task" }
    }
};