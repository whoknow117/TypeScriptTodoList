import React from 'react';
import classes from './Affairs.module.scss';
import {DefaultTasksType} from "../../../App";



export type PropsType = {
    task: DefaultTasksType
}

const Affairs:React.FC<PropsType> = ({task}) => {

    return <div className={classes.todoWrapper}>

        {task.name}
    </div>
}

export default Affairs;