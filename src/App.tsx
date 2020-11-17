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

    const changeTaskStatus = (taskID: string, isDone: boolean, todoListID: string) => {
        const tasksForTodoList = tasks[todoListID]
        const task: DefaultTasksType | undefined = tasksForTodoList.find( task => task.id === taskID)
        if(task) {
            task.isDone = isDone;
            setTasks({...tasks})
        }


    }
    const changeFilter = (newFilterValue: AffairsPriorityType, todoListID: string) => {
        const todoList = todoLists.find( tl => tl.id !== todoListID);
        if(todoList) {
            todoList.filter = newFilterValue;
            setTodoLists([...todoLists])
        }

    }

    const deleteCallBack = (taskID: string, todoListID: string) => {
        const tasksForTodoList = tasks[todoListID]
        tasks[todoListID] = tasksForTodoList.filter( task => task.id !== taskID)
        setTasks({...tasks})
    }

    const addTask = (title: string, todoListID:string) => {

        const task: DefaultTasksType = {
            id: v1(),
            name: title,
            isDone: false
        }
        const tasksForTodoList = tasks[todoListID];
        tasks[todoListID] = [task,...tasks[todoListID]]
        setTasks({...tasks})
    }

    return (
        <div className="App">
            {todoLists.map( tl => {

                const tasksForTodoList = tasks[tl.id]

                return (
                    <TodoList
                        tasks={tasksForTodoList}
                        changeFilter={changeFilter}
                        deleteCallBack={deleteCallBack}
                        addTask={addTask}
                        todoID={tl.id}
                        key={tl.id}
                        changeTaskStatus={changeTaskStatus}
                    />
                )
            })}
        </div>
    );
}

export default App;
