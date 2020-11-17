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

// const defaultTasks: Array<DefaultTasksType> = [
//     {id: v1(), name: "React", isDone: false},
//     {id: v1(), name: "Html", isDone: false},
//     {id: v1(), name: "Css", isDone: false},
//     {id: v1(), name: "Games", isDone: true},
// ]


export type TodoListType = {
    id: string
    title: string
    filter: AffairsPriorityType

}

export type TaskStateType = {
    [key: string]: Array<DefaultTasksType>
}


function App() {


    // const [filter, setFilter] = useState<AffairsPriorityType>("all");

    const [error, setError] = useState<string>("");

    const todoListID1= v1();
    const todoListID2 = v1();


    const [todoLists, setTodolists] = useState<Array<TodoListType>>([
        {id: todoListID1, title: 'What to learn', filter: "all"},
        {id: todoListID2, title: 'What to eat', filter: "all"},
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
        ]
    })


    // const filterTasks = (filter: AffairsPriorityType): Array<DefaultTasksType> => {
    //     if (filter === "all") return tasks;
    //     if (filter === "complete") return tasks.filter( t => t.isDone === true);
    //     if (filter === "active") return tasks.filter( t => t.isDone === false);
    //     return tasks;
    // }
    // const filteredTasks = filterTasks(filter);

    const changeTaskStatus = (taskID: string, isDone: boolean, todoListID: string) => {
        const todoListTasks = tasks[todoListID]
        const task:DefaultTasksType | undefined = todoListTasks.find(task => task.id === taskID)
        if(task){
            task.isDone = isDone
            setTasks({...tasks})
        }

    }

    const changeFilter = (newFilterValue: AffairsPriorityType, todoListID: string) => {
        const todoList = todoLists.find(tl => tl.id !== todoListID)
        if(todoList) {
            todoList.filter = newFilterValue
            setTodolists([...todoLists])
        }
    }

    const deleteCallBack = (taskID: string,todoListID: string) => {
        const todoListTasks = tasks[todoListID]
        tasks[todoListID] = todoListTasks.filter(task => task.id !== taskID)
        setTasks({...tasks})
    }

    const addTask = (title: string,  todoListID: string) => {

        const newTask: DefaultTasksType = {
            id: v1(),
            name: title,
            isDone: false
        }
        const todoList = tasks[todoListID]
        tasks[todoListID] = [newTask, ...todoList]
        setTasks({...tasks})
    }

    function removeTodoList(todoListID: string) {
        setTodolists(todoLists.filter( tl => tl.id !== todoListID))
    }


    return (
        <div className="App">
            {todoLists.map( tl => {
                let taskForTodoList = tasks[tl.id]
                if (tl.filter === "active") {
                    taskForTodoList = tasks[tl.id].filter(task=>task.isDone === false)
                }
                if (tl.filter === "complete") {
                    taskForTodoList = tasks[tl.id].filter(task=>task.isDone === true )
                }
                return (
                    <TodoList
                        key={tl.id}
                        id={tl.id}
                        removeTodoList={removeTodoList}
                        tasks={taskForTodoList}
                        title={tl.title}
                        filter={tl.filter}
                        changeFilter={changeFilter}
                        deleteCallBack={deleteCallBack}
                        addTask={addTask}
                        error={error}
                        setError={setError}
                        changeTaskStatus={changeTaskStatus}
                    />
                )

            })}

        </div>
    );
}

export default App;
