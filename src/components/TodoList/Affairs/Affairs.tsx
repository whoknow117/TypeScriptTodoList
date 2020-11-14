import React, {ChangeEvent} from 'react';
import classes from './Affairs.module.scss';
import {DefaultTasksType} from "../../../App";



export type PropsType = {
    task: DefaultTasksType
    deleteCallBack: (taskID: string) => void
    changeTaskStatus : (taskID: string, isDone: boolean) => void
}

const Affairs:React.FC<PropsType> = ({changeTaskStatus, deleteCallBack, task, ...restProps}) => {

    const deleteTask = () => {deleteCallBack(task.id)}
    const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {changeTaskStatus(task.id, e.currentTarget.checked)}

    return <div className={classes.todoWrapper}>
        <input checked={task.isDone} type="checkbox" onChange={changeStatus} />
        {task.name}
        <div className={classes.btn}>
            <button onClick={deleteTask}>x</button>
        </div>
    </div>
}

export default Affairs;