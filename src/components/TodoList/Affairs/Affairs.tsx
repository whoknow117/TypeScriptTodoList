import React, {ChangeEvent} from 'react';
import classes from './Affairs.module.scss';
import {DefaultTasksType} from "../../../App";
import SupperCheckbox from "../../common/SuperCheckbox/SupperCheckbox";
import SupperButton from "../../common/SuperButton/SupperButton";



export type PropsType = {
    task: DefaultTasksType
    deleteCallBack: (taskID: string, todoListID: string) => void
    changeTaskStatus : (taskID: string, isDone: boolean, todoListID: string) => void
    todoID: string
}

const Affairs:React.FC<PropsType> = ({todoID, changeTaskStatus, deleteCallBack, task, ...restProps}) => {

    const deleteTask = () => {deleteCallBack(task.id,todoID) }
    const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {changeTaskStatus(task.id, e.currentTarget.checked,todoID)}
    const activeTask = `${task.isDone ? classes.active : ""}`
    return <div className={classes.todoWrapper}>
        {/*<input checked={task.isDone} type="checkbox" onChange={changeStatus} />*/}
        <SupperCheckbox checked={task.isDone} onChange={changeStatus}/>
        <div className={activeTask}>{task.name}</div>
        <div className={classes.btn}>
            {/*<button onClick={deleteTask}>x</button>*/}
            <SupperButton red onClick={deleteTask}>X</SupperButton>
        </div>
    </div>
}

export default Affairs;