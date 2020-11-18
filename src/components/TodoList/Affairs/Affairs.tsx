import React, {ChangeEvent} from 'react';
import classes from './Affairs.module.scss';
import {AffairsPriorityType, DefaultTasksType} from "../../../App";
import SupperCheckbox from "../../common/SuperCheckbox/SupperCheckbox";
import SupperButton from "../../common/SuperButton/SupperButton";
import EditableSpan from "./EditableSpan/EditableSpan";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CreateIcon from '@material-ui/icons/Create';


export type PropsType = {
    task: DefaultTasksType
    deleteCallBack: (taskID: string, todoListID: string) => void
    changeTaskStatus : (taskID: string, isDone: boolean, todoListID: string) => void
    todoID: string
    changeTaskTitle:(taskID: string, title: string, todoListID: string) => void

}

const Affairs:React.FC<PropsType> = ({ changeTaskTitle,todoID, changeTaskStatus, deleteCallBack, task, ...restProps}) => {

    const deleteTask = () => {deleteCallBack(task.id,todoID) }
    const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {changeTaskStatus(task.id, e.currentTarget.checked,todoID)}


    const  changeTitle = (newValue:string) => {changeTaskTitle(task.id,newValue, todoID)}

    return <div className={classes.todoWrapper}>

        <span className={classes.checkbox}>
            <SupperCheckbox checked={task.isDone} onChange={changeStatus}/>
        </span>
        <p className={classes.title}>
            <EditableSpan doneMode={task.isDone} changeValue={changeTitle} title={task.name}/>
        </p>
        <div className={classes.refactorButton}>
            <SupperButton red onClick={deleteTask}> </SupperButton>

            <CreateIcon/>
        </div>
        <div className={classes.deleteButton}>
            <SupperButton red onClick={deleteTask}> </SupperButton>

            <DeleteForeverIcon/>
        </div>
    </div>
}

export default Affairs;