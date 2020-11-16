import React, {ChangeEvent, useState} from 'react';

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
    const [error, setError] = useState<string>("");

    const todoListID1= v1();
    const todoListID2 = v1();


    const [todoLists, setTodolists] = useState([
        {id: todoListID1, name: 'What to learn', filter: "all"},
        {id: todoListID2, name: 'What to eat', filter: "all"},
    ])


    const filterTasks = (filter: AffairsPriorityType): Array<DefaultTasksType> => {
        if (filter === "all") return tasks;
        if (filter === "complete") return tasks.filter( t => t.isDone === true);
        if (filter === "active") return tasks.filter( t => t.isDone === false);
        return tasks;
    }
    const filteredTasks = filterTasks(filter);

    const changeTaskStatus = (taskID: string, isDone: boolean) => {

        setTasks(tasks.map( t => {
            if(t.id === taskID) {
                return {...t, isDone: isDone}
            }
            return t;
        }))

    }


    const deleteCallBack = (taskID: string) => {
        setTasks(tasks.filter( t => t.id !== taskID))
    }

    const addTask = (title: string) => {

        const task: DefaultTasksType = {
            id: v1(),
            name: title,
            isDone: false
        }
        setTasks([task, ...tasks])
    }

    return (
        <div className="App">
            <TodoList
                data={filteredTasks}
                setFilter={setFilter}
                deleteCallBack={deleteCallBack}
                addTask={addTask}
                error={error}
                setError={setError}
                changeTaskStatus={changeTaskStatus}
            />
        </div>
    );
}

export default App;
