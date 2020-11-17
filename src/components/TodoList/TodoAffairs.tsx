import React, {ChangeEvent, useState} from 'react';
import classes from './TodoAffairs.module.scss';
import TodoInput from "./TodoInput/TodoInput";
import Affairs from "./Affairs/Affairs";
import TodoButtons from "./TodoButtons/TodoButtons";
import {AffairsPriorityType, DefaultTasksType} from "../../App";


export type TodoListType = {
    tasks: Array<DefaultTasksType>
    changeFilter: (newFilterValue: AffairsPriorityType, todoListID: string) => void
    deleteCallBack: (taskID: string, todoListID: string) => void
    addTask: (title: string, todoListID: string) => void
    changeTaskStatus : (taskID: string, isDone: boolean, todoListID: string) => void
    todoID: string
    title: string
    removeTodoList: (todoListID: string) => void
}

const TodoList: React.FC<TodoListType> = ({title, removeTodoList, todoID,tasks, changeTaskStatus,addTask, deleteCallBack, changeFilter }) => {

    const addItem = (title: string) => {addTask(title,todoID)}

    return <div className={classes.todoWrapper}>
        {title}
        <TodoInput       addItem={addItem}/>
        {tasks.map(t => <Affairs
            key={t.id}
            changeTaskStatus={changeTaskStatus}
            task={t}
            todoID={todoID}
            deleteCallBack={deleteCallBack}
        />)}
        <TodoButtons todoID={todoID} changeFilter={changeFilter}/>


    </div>
}

export default TodoList;