import React, {ChangeEvent, useState} from 'react';

import './App.css';
import TodoList from "./components/TodoList/TodoAffairs";
import {v1} from "uuid";
import TodoInput from "./components/TodoList/TodoInput/TodoInput";


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
        {id: todoListID1, title: "Обычный список задач", filter: "all"},

    ])

    const [tasks, setTasks] = useState<TaskStateType>({
        [todoListID1] : [
            {id: v1(), name: "React", isDone: false},
            {id: v1(), name: "Html", isDone: false},
            {id: v1(), name: "Css", isDone: false},
            {id: v1(), name: "Games", isDone: true},
        ],

    })


    const changeTaskStatus = (taskID: string, isDone: boolean, todoListID: string) => {
        const todoListTasks = tasks[todoListID]

        const task = todoListTasks.find( task => task.id === taskID)
        if(task) {
            task.isDone = isDone
            setTasks({...tasks})
        }

    }

    const changeTaskTitle = (taskID: string, title: string, todoListID: string) => {
        const todoListTasks = tasks[todoListID]

        const task = todoListTasks.find( task => task.id === taskID)
        if(task) {
            task.name = title
            setTasks({...tasks})
        }

    }

    const changeFilter = (newFilterValue: AffairsPriorityType, todoListID: string) => {
        const todoList = todoLists.find( tl => tl.id === todoListID)
        if(todoList) {
            todoList.filter = newFilterValue
        }
        setTodoLists([...todoLists])
    }

    const changeTodoListTitle = (newTitle: string, todoListID: string) => {
        const todoList = todoLists.find( tl => tl.id === todoListID)
        if(todoList) {
            todoList.title = newTitle
        }
        setTodoLists([...todoLists])
    }

    const deleteCallBack = (taskID: string, todoListID: string) => {
        const todoListTasks = tasks[todoListID];
        tasks[todoListID] = todoListTasks.filter( task => task.id !== taskID)
        setTasks({...tasks})

    }
    const removeTodoList = (todoListID: string) => {
        const filteredTodoList = todoLists.filter( tl => tl.id !== todoListID)
        setTodoLists(filteredTodoList)
        delete tasks[todoListID]
        setTasks({...tasks})
    }

    const addTask = (title: string,todoListID: string) => {

        const newTask: DefaultTasksType = {
            id: v1(),
            name: title,
            isDone: false
        }
        tasks[todoListID] = [ newTask,...tasks[todoListID]]
        setTasks({...tasks})
    }
    const addTodoList = (title: string) => {
        const newTodoListID: string = v1()
        const newTodoList: TodoListType = {
            id: newTodoListID,
            title: title,
            filter: "all"
        }
        setTodoLists(todoLists=>[  ...todoLists,newTodoList])
        setTasks(tasks => ({...tasks,[newTodoListID]:[]}))
    }
    

    return (

        <div className="App">
            <div className='createTodo'>
                <TodoInput addItem={addTodoList}>addTodo</TodoInput>
            </div>
            <div className="todoLists">
                {todoLists.map( tl => {

                    let todoListTasks = tasks[tl.id]
                    if (tl.filter === "complete") {
                        todoListTasks = tasks[tl.id].filter( task => task.isDone === true )
                    }
                    if (tl.filter === "active") {
                        todoListTasks =  tasks[tl.id].filter( task => task.isDone === false)
                    }


                    return (
                        <div>

                            <TodoList
                                todoID={tl.id}
                                key={tl.id}
                                title={tl.title}
                                filter={tl.filter}
                                tasks={todoListTasks}
                                changeFilter={changeFilter}
                                deleteCallBack={deleteCallBack}
                                addTask={addTask}
                                changeTaskStatus={changeTaskStatus}
                                removeTodoList={removeTodoList}

                                changeTaskTitle={changeTaskTitle}
                                changeTodoListTitle={changeTodoListTitle}
                            />
                        </div>
                    )
                })}
            </div>

        </div>
    );
}

export default App;
