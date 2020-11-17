import React, {ChangeEvent} from 'react';
import classes from './Affairs.module.scss';
import {DefaultTasksType} from "../../../App";
import SupperCheckbox from "../../common/SuperCheckbox/SupperCheckbox";
import SupperButton from "../../common/SuperButton/SupperButton";
import EditableSpan from "./EditableSpan/EditableSpan";



export type PropsType = {
    task: DefaultTasksType
    deleteCallBack: (taskID: string, todoListID: string) => void
    changeTaskStatus : (taskID: string, isDone: boolean, todoListID: string) => void
    todoID: string
    changeTaskTitle:(taskID: string, title: string, todoListID: string) => void
}

const Affairs:React.FC<PropsType> = ({changeTaskTitle,todoID, changeTaskStatus, deleteCallBack, task, ...restProps}) => {

    const deleteTask = () => {deleteCallBack(task.id,todoID) }
    const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {changeTaskStatus(task.id, e.currentTarget.checked,todoID)}
    const activeTask = `${task.isDone ? classes.active : ""}`

    const  changeTitle = (newValue:string) => {changeTaskTitle(task.id,newValue, todoID)}

    return <div className={classes.todoWrapper}>
        {/*<input checked={task.isDone} type="checkbox" onChange={changeStatus} />*/}
        <SupperCheckbox checked={task.isDone} onChange={changeStatus}/>
        <EditableSpan changeValue={changeTitle} title={task.name}/>
        <div className={classes.btn}>
            {/*<button onClick={deleteTask}>x</button>*/}
            <SupperButton red onClick={deleteTask}>X</SupperButton>
        </div>
    </div>
}

export default Affairs;