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

export type TaskStateType = {
    [key: string]: Array<DefaultTasksType>
}

export type TodoListType = {
    id: string
    title: string
    filter: AffairsPriorityType
}


function App() {



    const todoListID1 = v1();
    const todoListID2 = v1();

    const [todoLists, setTodoLists] = useState<Array<TodoListType>>([
        {id:todoListID1, title: "What to learn", filter: "all"},
        {id:todoListID2, title: "What to eat", filter: "all"},
    ])
    const [tasks, setTasks] = useState<TaskStateType>({
        [todoListID1]: [
            {id: v1(), name: "React", isDone: false},
            {id: v1(), name: "Html", isDone: false},
            {id: v1(), name: "Css", isDone: false},
            {id: v1(), name: "Games", isDone: true},
        ],
        [todoListID2]: [
            {id: v1(), name: "React", isDone: false},
            {id: v1(), name: "Html", isDone: false},
            {id: v1(), name: "Css", isDone: false},
            {id: v1(), name: "Games", isDone: true},
        ],

    })

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

                changeTaskStatus={changeTaskStatus}
            />
        </div>
    );
}

export default App;
