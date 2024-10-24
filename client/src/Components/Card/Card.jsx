import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';
import { useTaskContext } from '../../context/TaskContext';
import "./Card.css"
import useCurd from '../../hooks/useCurd';

const Card = (props) => {
    const [TaskList] = useTaskContext();
    const [task, setTask] = useState("");
    const [IntputType, SetIntputType] = useState("addTask");
    const { addTask, updateTasks } = useCurd()
    const [EditIndexValue, setEditIndexValue] = useState();
    const handleInputSubmit = (e) => {
        e.preventDefault();
        IntputType == "addTask" ? addTask(task, props.type) : updateTasks(task, EditIndexValue)
        console.log(EditIndexValue);
        setTask("")
        SetIntputType("addTask")
        setEditIndexValue(null)
    }
    const handleDragStart = (e, taskId) => {
        e.dataTransfer.setData('taskId', taskId); // Store the task ID in dataTransfer
    };

    return (
        <div className="card" style={{ minHeight: '70vh' }}>
            <div className="card-body">
                <h4 className="card-title">{props.Title}</h4>
                <form onSubmit={handleInputSubmit}>
                    <div className="input-group mb-2">

                        <input type="text" className="form-control shadow-sm " placeholder="Task" value={task} onChange={(e) => { setTask(e.target.value) }} />
                        <div className="input-group-text plus_icon" onClick={handleInputSubmit}>
                            <i className={IntputType == "addTask" ? "fa fa-plus " : 'fa fa-check'}></i>
                        </div>

                    </div>
                </form>
                <div className='Task card-body'>
                    {TaskList.map((task, i) => {
                        if (task.status === props.type) {
                            return (
                                <div
                                    className='singleItem'
                                    key={task.id}
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, task.id)} // Handle drag start
                                >
                                    <Item Title={task.title} index={i} inputValue={task} setInputValue={setTask} IntputType={IntputType} SetIntputType={SetIntputType} SetEditIndexValue={setEditIndexValue} />
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    Title: PropTypes.string,
    type: PropTypes.string,
};

export default Card;
