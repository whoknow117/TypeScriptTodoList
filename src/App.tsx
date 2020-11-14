import React, {useState} from 'react';

import './App.css';
import TodoList from "./components/TodoList/TodoAffairs";
import {v1} from "uuid";


export type DefaultTasksType = {
    id: string
    name: string
    isDone: boolean
}
export type AffairsPriorityType = "all" | "complete" | "active"

const defaultTasks: Array<DefaultTasksType> = [
    {id: v1(), name: "React", isDone: false},
    {id: v1(), name: "Html", isDone: false},
    {id: v1(), name: "Css", isDone: false},
    {id: v1(), name: "Games", isDone: true},
]





function App() {

    const [tasks, setTasks] = useState<Array<DefaultTasksType>>(defaultTasks);
    const [filter, setFilter] = useState<AffairsPriorityType>("all");

    const filterTasks = (filter: AffairsPriorityType): Array<DefaultTasksType> => {
        if (filter === "all") return tasks;
        if (filter === "complete") return tasks.filter( t => t.isDone === true);
        if (filter === "active") return tasks.filter( t => t.isDone === false);
        return tasks;
    }
    const filteredTasks = filterTasks(filter);







    return (
        <div className="App">
            <TodoList
                data={filteredTasks}
                setFilter={setFilter}
            />
        </div>
    );
}

export default App;
