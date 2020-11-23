import React, {ChangeEvent, useState} from 'react';
import classes from './TodoAffairs.module.scss';
import TodoInput from "./TodoInput/TodoInput";
import Affairs from "./Affairs/Affairs";
import TodoButtons from "./TodoButtons/TodoButtons";
import {AffairsPriorityType, DefaultTasksType} from "../../App";
import SupperInput from "../common/SuperInput/SupperInput";
import SupperButton from "../common/SuperButton/SupperButton";
import EditableSpan from "./Affairs/EditableSpan/EditableSpan";


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
    filter: AffairsPriorityType
    changeTodoListTitle: (newTitle: string, todoListID: string) => void
    changetodoListTitle: (title: string, todoListID: string) => void
}

const TodoList: React.FC<TodoListType> = ({changetodoListTitle, filter, changeTaskTitle, title, removeTodoList, todoID, tasks, changeTaskStatus, addTask, deleteCallBack, changeFilter}) => {

    const addItem = (title: string) => {
        addTask(title, todoID)
    }
    let activeTasks = tasks.filter(t => t.isDone === false);
    let doneTasks = tasks.filter(t => t.isDone === true);

    const removeTodoCallback = () => {
        removeTodoList(todoID)
    }
    const changeTodoListTitleCallback = (title: string) => {
        changetodoListTitle(title, todoID)
    }

    return <div className={classes.todoWrapper}>
        <div className={classes.title}>
           <div className={classes.span}>
               <EditableSpan

                   changeValue={changeTodoListTitleCallback}
                   title={title}/>
           </div>
            <SupperButton onClick={removeTodoCallback}>X</SupperButton>
        </div>

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
        <TodoButtons filter={filter} todoID={todoID} changeFilter={changeFilter}/>
        <div className={classes.infoBlock}>
            <span className={classes.info}>
            tasks todo: {activeTasks.length}
        </span>
            <span className={classes.info}>
            done tasks: {doneTasks.length}
        </span>
        </div>


    </div>
}

export default TodoList;