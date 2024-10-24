import { createContext, useContext, useState } from "react";

export const TaskContext = createContext()

export const useTaskContext = () => {
    return useContext(TaskContext)
}
export const TaskContextProvider = ({ children }) => {

    const [TaskList, setTaskList] = useState([
        {
            title: "Eat food",
            status: "TODO",
            id: 1
        }, {
            title: "Code",
            status: "DOING",
            id: 2
        }
    ]);

    return <TaskContext.Provider value={[TaskList, setTaskList]} >{children}</TaskContext.Provider>


}