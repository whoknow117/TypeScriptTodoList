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
//
// const defaultTasks: Array<DefaultTasksType> = [
//     {id: v1(), name: "React", isDone: false},
//     {id: v1(), name: "Html", isDone: false},
//     {id: v1(), name: "Css", isDone: false},
//     {id: v1(), name: "Games", isDone: true},
// ]





function App() {



    const [error, setError] = useState<string>("");
    const [tasks, setTasks] = useState< >( );


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
