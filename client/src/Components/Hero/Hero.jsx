import React from 'react';
import Card from '../Card/Card';
import { useTaskContext } from '../../context/TaskContext';

const Hero = () => {
    const [TaskList, setTaskList] = useTaskContext();

    const handleDrop = (e, newStatus) => {
        e.preventDefault();
        const taskId = e.dataTransfer.getData('taskId');
        console.log(taskId);
        const updatedTasks = TaskList.map((task) => {
            if (task.id === Number(taskId)) {

                return { ...task, status: newStatus }; // Update the status of the dragged task.
            } else {
                console.log("Task.id is ", task.id);
                console.log("taskId is ", taskId);
            }
            console.log(task);
            return task;
        });
        setTaskList(updatedTasks); // Update the task list in context
    };

    const handleDragOver = (e) => {
        e.preventDefault(); // Prevent default to allow drop
    };

    return (
        <div className='Hero bg-light m-5 p-3 rounded container'>
            <div className="row">
                <div className="col-4" onDrop={(e) => handleDrop(e, "TODO")} onDragOver={handleDragOver}>
                    <Card Title={"Todo"} type={"TODO"} TaskList={TaskList} setTaskList={setTaskList} />
                </div>
                <div className="col-4" onDrop={(e) => handleDrop(e, "DOING")} onDragOver={handleDragOver}>
                    <Card Title={"Doing"} type={"DOING"} TaskList={TaskList} setTaskList={setTaskList} />
                </div>
                <div className="col-4" onDrop={(e) => handleDrop(e, "DONE")} onDragOver={handleDragOver}>
                    <Card Title={"Completed"} type={"DONE"} TaskList={TaskList} setTaskList={setTaskList} />
                </div>
            </div>
        </div>
    );
};

export default Hero;
