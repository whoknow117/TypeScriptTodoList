import React, {ChangeEvent, useReducer, useState} from 'react';
import './App.css';
import TodoList from "./components/TodoList/TodoAffairs";
import {v1} from "uuid";
import TodoInput from "./components/TodoList/TodoInput/TodoInput";
import {
    addTodolistAC,
    changeTodoListFilterAC,
    changeTodoListTitleAC, removeTodolistAC,
    todoListsReducer
} from "./state/todolists-reducer";
import {AddTaskAC, ChangeTaskStatusAC, ChangeTaskTitleAC, RemoveTaskAC, tasksReducer} from "./state/tasks-reducer";


export type DefaultTasksType = {
    id: string
    title: string
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


function AppWithReducers() {


    const todoListID1 = v1();
    const todoListID2 = v1();

    const [todoLists, dispatchToTodoLists] = useReducer(todoListsReducer, [
        {id: todoListID1, title: "Обычный список задач", filter: "all"},

    ])
    const [tasks, dispatchToTasks] = useReducer(tasksReducer, {
        [todoListID1]: [
            {id: v1(), title: "React", isDone: false},
            {id: v1(), title: "Html", isDone: false},
            {id: v1(), title: "Css", isDone: false},
            {id: v1(), title: "Games", isDone: true},
        ],

    })


    const changeTaskStatus = (taskID: string, isDone: boolean, todoListID: string) => {

        dispatchToTasks(ChangeTaskStatusAC(taskID, isDone, todoListID));

    }
    const changeTaskTitle = (taskID: string, title: string, todoListID: string) => {

        dispatchToTasks(ChangeTaskTitleAC(taskID, title, todoListID));

    }
    const changeFilter = (newFilterValue: AffairsPriorityType, todoListID: string) => {

        dispatchToTodoLists(changeTodoListFilterAC(newFilterValue, todoListID));
    }
    const addTask = (title: string, todoListID: string) => {


        dispatchToTasks(AddTaskAC(title, todoListID));
    }
    const deleteCallBack = (taskID: string, todoListID: string) => {


        dispatchToTasks(RemoveTaskAC(taskID, todoListID));

    }

    const changeTodoListTitle = (newTitle: string, todoListID: string) => {

        dispatchToTodoLists(changeTodoListTitleAC(newTitle, todoListID));
    }
    const removeTodoList = (todoListID: string) => {
        const action = removeTodolistAC(todoListID);
        dispatchToTodoLists(action);
        dispatchToTasks(action);

    }
    const addTodoList = (title: string) => {
        const action = addTodolistAC(title);
        dispatchToTasks(action);
        dispatchToTodoLists(action);
    }


    return (

        <div className="App">
            <div className='createTodo'>
                <TodoInput addItem={addTodoList}>addTodo</TodoInput>
            </div>
            <div className="todoLists">
                {todoLists.map(tl => {

                    let todoListTasks = tasks[tl.id]
                    if (tl.filter === "complete") {
                        todoListTasks = tasks[tl.id].filter(task => task.isDone === true)
                    }
                    if (tl.filter === "active") {
                        todoListTasks = tasks[tl.id].filter(task => task.isDone === false)
                    }


                    return (
                        <div>

                            <TodoList
                                todoLists={todoLists}
                                todoID={tl.id}
                                removeTodoList={removeTodoList}
                                key={tl.id}
                                title={tl.title}
                                filter={tl.filter}
                                tasks={todoListTasks}
                                changeFilter={changeFilter}
                                deleteCallBack={deleteCallBack}
                                addTask={addTask}
                                changeTaskStatus={changeTaskStatus}
                               changeTaskTitle={changeTaskTitle} changeTodoListTitle={changeTodoListTitle}/>


                        </div>
                    )
                })}
            </div>

        </div>
    );
}

export default AppWithReducers;