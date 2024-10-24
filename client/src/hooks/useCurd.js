import React from 'react'
import { useTaskContext } from '../context/TaskContext'

const useCurd = () => {
    const [TaskList, setTaskList] = useTaskContext()
    const addTask = (task, type) => {
        setTaskList([...TaskList, {
            title: task,
            status: type,
            id: TaskList.length + 1
        }])
    }
    const deleteTask = (index) => {
        const newTaskList = [...TaskList]
        newTaskList.splice(index, 1)
        setTaskList(newTaskList);

    }
    const updateTasks = (taskToUpdate, index) => {

        // setTaskList([...TaskList, [index].title = taskToUpdate])
        console.log(taskToUpdate);
        console.log(index);
        TaskList[index].title = taskToUpdate;
        console.log(TaskList);
    }
    return { addTask, deleteTask, updateTasks }
}

export default useCurd
