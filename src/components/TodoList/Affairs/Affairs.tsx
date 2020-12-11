import React, {ChangeEvent} from 'react';
import classes from './Affairs.module.scss';
import {AffairsPriorityType, DefaultTasksType} from "../../../App";
import SupperCheckbox from "../../common/SuperCheckbox/SupperCheckbox";
import SupperButton from "../../common/SuperButton/SupperButton";
import EditableSpan from "./EditableSpan/EditableSpan";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CreateIcon from '@material-ui/icons/Create';
import {CheckBox, Delete} from '@material-ui/icons';
import {IconButton, Checkbox} from "@material-ui/core";


export type PropsType = {
    task: DefaultTasksType
    deleteCallBack: (taskID: string, todoListID: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean, todoListID: string) => void
    todoID: string
    changeTaskTitle: (taskID: string, title: string, todoListID: string) => void
    taskID: string
}

const
    Affairs: React.FC<PropsType> = ({taskID, changeTaskTitle, todoID, changeTaskStatus, deleteCallBack, task, ...restProps}) => {


        const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
            changeTaskStatus(task.id, e.currentTarget.checked, todoID)
        }

        const deleteTask = () => {
            deleteCallBack(task.id, todoID)
        }
        const changeTaskTitleCallback = (newValue: string) => {
            changeTaskTitle(task.id, newValue, todoID)
        }

        return <div className={classes.todoWrapper}>

        <span className={classes.checkbox}>
         <Checkbox checked={task.isDone} onChange={changeStatus}/>
        </span>
            <p className={`${classes.title} ${task.isDone ? classes.done : ""}`}>
                <EditableSpan
                    modeOn
                    changeValue={changeTaskTitleCallback}
                    title={task.title}/>

            </p>
            {/*<div className={classes.refactorButton}>*/}
            {/*    <SupperButton red onClick={deleteTask}> </SupperButton>*/}

            {/*    <CreateIcon/>*/}
            {/*</div>*/}
            <IconButton   onClick={deleteTask}>
                <Delete/>
            </IconButton>
        </div>
    }

export default Affairs;