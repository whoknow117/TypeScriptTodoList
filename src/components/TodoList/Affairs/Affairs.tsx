import React from 'react';
import classes from './Affairs.module.scss';
import {DefaultTasksType} from "../../../App";



export type PropsType = {
    task: DefaultTasksType
    deleteCallBack: (taskID: string) => void

}

const Affairs:React.FC<PropsType> = ({deleteCallBack, task, ...restProps}) => {

    const deleteTask = () => {deleteCallBack(task.id)}


    return <div className={classes.todoWrapper}>

        {task.name}
        <div className={classes.btn}>
            <button onClick={deleteTask}>x</button>
        </div>
    </div>
}

export default Affairs;