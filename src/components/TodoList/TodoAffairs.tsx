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
    changeTaskStatus: (taskID: string, isDone: boolean, todoListID: string) => void
    todoID: string
    title: string
    changeTaskTitle: (taskID: string, title: string, todoListID: string) => void
    removeTodoList: (todoListID: string) => void
    filter:AffairsPriorityType
    changeTodoListTitle: (newTitle: string, todoListID: string) => void
}

const TodoList: React.FC<TodoListType> = ({filter,changeTaskTitle, title, removeTodoList, todoID, tasks, changeTaskStatus, addTask, deleteCallBack, changeFilter}) => {

    const addItem = (title: string) => {
        addTask(title, todoID)
    }
    let activeTasks = tasks.filter(t => t.isDone === false);
    let doneTasks = tasks.filter(t=> t.isDone === true);



    return <div className={classes.todoWrapper}>
        <h3 className={classes.title}>{title}</h3>

        <div className={classes.input}>
            <TodoInput addItem={addItem}>addTask</TodoInput>
        </div>

        <div className={classes.tasks}>
            {tasks.map(t => <Affairs
                changeTaskTitle={changeTaskTitle}
                key={t.id}
                taskID={t.id}
                changeTaskStatus={changeTaskStatus}
                task={t}
                todoID={todoID}
                deleteCallBack={deleteCallBack}
            />)}
        </div>
        <TodoButtons  filter={filter} todoID={todoID} changeFilter={changeFilter}/>
       <div className={classes.infoBlock}>
            <span className={classes.info}>
            tasks todo: {activeTasks.length}
        </span>
           <span className={classes.info}>
            done t  asks: {doneTasks.length}
        </span>
       </div>


    </div>
}

export default TodoList;