import React, {ChangeEvent, useReducer, useState} from 'react';
import './App.css';
import TodoList from "./components/TodoList/TodoAffairs";
import {v1} from "uuid";
import TodoInput from "./components/TodoList/TodoInput/TodoInput";
import {
    addTodolistAC,
    changeTodoListFilterAC,
    changeTodoListTitleAC, removeTodolistAC,

} from "./state/todolists-reducer";
import {AddTaskAC, ChangeTaskStatusAC, ChangeTaskTitleAC, RemoveTaskAC, tasksReducer} from "./state/tasks-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {AffairsPriorityType, TaskStateType, TodoListType} from "./types/types";




function AppWithRedux() {


   const todoLists = useSelector<AppRootStateType, Array<TodoListType>>(state => state.todolists)
   const tasks = useSelector<AppRootStateType, TaskStateType>(state => state.tasks)

    const dispatch = useDispatch();

    const changeTaskStatus = (taskID: string, isDone: boolean, todoListID: string) => {

        dispatch(ChangeTaskStatusAC(taskID, isDone, todoListID));

    }
    const changeTaskTitle = (taskID: string, title: string, todoListID: string) => {

        dispatch(ChangeTaskTitleAC(taskID, title, todoListID));

    }
    const changeFilter = (newFilterValue: AffairsPriorityType, todoListID: string) => {

        dispatch(changeTodoListFilterAC(newFilterValue, todoListID));
    }
    const addTask = (title: string, todoListID: string) => {


        dispatch(AddTaskAC(title, todoListID));
    }
    const deleteCallBack = (taskID: string, todoListID: string) => {


        dispatch(RemoveTaskAC(taskID, todoListID));

    }

    const changeTodoListTitle = (newTitle: string, todoListID: string) => {

        dispatch(changeTodoListTitleAC(newTitle, todoListID));
    }
    const removeTodoList = (todoListID: string) => {
        const action = removeTodolistAC(todoListID);

        dispatch(action);

    }
    const addTodoList = (title: string) => {
        const action = addTodolistAC(title);
        dispatch(action);
    }


    return (

        <div className="App">
            <div className='createTodo'>
                <TodoInput addItem={addTodoList}>addTodo</TodoInput>
            </div>
            <div className="todoLists">
                {todoLists.map(tl => {

                    let tasksForTodo = tasks[tl.id]
                    if (tl.filter === "complete") {
                        tasksForTodo = tasks[tl.id].filter(task => task.isDone === true)
                    }
                    if (tl.filter === "active") {
                        tasksForTodo = tasks[tl.id].filter(task => task.isDone === false)
                    }
debugger

                    return (
                        <div>

                            <TodoList
                                todoLists={todoLists}
                                todoID={tl.id}
                                removeTodoList={removeTodoList}
                                key={tl.id}
                                title={tl.title}
                                filter={tl.filter}
                                tasks={tasksForTodo}
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

export default AppWithRedux;