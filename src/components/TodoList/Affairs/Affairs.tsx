import React, {ChangeEvent} from 'react';
import classes from './Affairs.module.scss';
import {DefaultTasksType} from "../../../App";
import SupperCheckbox from "../../common/SuperCheckbox/SupperCheckbox";


export type PropsType = {
    task: DefaultTasksType
    deleteCallBack: (taskID: string, todoListID: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean, todoListID: string) => void
    todoListID: string

}

const Affairs: React.FC<PropsType> = ({todoListID, changeTaskStatus, deleteCallBack, task, ...restProps}) => {

    const deleteTask = () => {
        deleteCallBack(task.id, todoListID)
    }
    const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        changeTaskStatus(task.id, e.currentTarget.checked, todoListID)
    }
    debugger
    return <div className={classes.todoWrapper}>
        {/*<input checked={task.isDone} type="checkbox" onChange={changeStatus} />*/}
        <SupperCheckbox checked={task.isDone} onChange={changeStatus}/>
        <div className={classes.name}>{task.name}</div>
        <div className={classes.btn}>
            <button onClick={deleteTask}>x</button>
        </div>
    </div>
}

export default Affairs;