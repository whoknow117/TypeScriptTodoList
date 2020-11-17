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
    [key: string] : Array<DefaultTasksType>

}






function App() {



    const [error, setError] = useState<string>("");

    const todoListID1 = v1();
    const todoListID2 = v1();

    const [todoLists, setTodoLists] = useState([
        {id: todoListID1, title: "What to learn", filter: "all"},
        {id: todoListID2, title: "What to eat", filter: "all"},
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
    });


    const changeTaskStatus = (taskID: string, isDone: boolean, todoListID: string) => {
        const todoListTasks = tasks[todoListID]
        const task: DefaultTasksType | undefined = todoListTasks.find( task => task.id === taskID)
        if(task) {
            task.isDone = isDone
        }
        setTasks({...tasks});


    }

    const changeFilter = (newFilterValue: AffairsPriorityType, todoListID: string) => {
            const todoList = todoLists.find( tl => tl.id === todoListID)
            if(todoList) {
                todoList.filter = newFilterValue
            }
            setTodoLists([...todoLists])

    }


    const deleteCallBack = (taskID: string, todoListID:string) => {
        const todoListTasks = tasks[todoListID];
        tasks[todoListID] = todoListTasks.filter( t=> t.id !== taskID)
        setTasks({...tasks})
    }

    const addTask = (title: string, todoListID: string) => {

        const task: DefaultTasksType = {
            id: v1(),
            name: title,
            isDone: false
        }

        const todoListTask = tasks[todoListID]
        tasks[todoListID] = [task,...todoListTask]

        setTasks({...tasks})
    }

    const removeTodoList = (todoListID: string) => {
        setTodoLists(todoLists.filter( tl => tl.id !== todoListID))
    }

    return (
        <div className="App">
            {todoLists.map( tl => {
                let todoListTasks = tasks[tl.id]
                return (

                    <TodoList
                        todoID={tl.id}
                        key={tl.id}
                        tasks={todoListTasks}
                        changeFilter={changeFilter}
                        deleteCallBack={deleteCallBack}
                        addTask={addTask}
                        error={error}
                        setError={setError}
                        changeTaskStatus={changeTaskStatus}
                        removeTodoList={removeTodoList}
                    />
                )
            })}

        </div>
    );
}

export default App;
