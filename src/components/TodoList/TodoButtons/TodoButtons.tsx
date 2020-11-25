import React from 'react';
import classes from './TodoButtons.module.scss';
import {AffairsPriorityType, DefaultTasksType} from "../../../App";
import SupperButton from "../../common/SuperButton/SupperButton";
import {Button} from "@material-ui/core";



export type TodoButtonsType = {
    changeFilter:(filter: AffairsPriorityType, todoListID:string) => void
    todoID: string
    filter: AffairsPriorityType
}

const TodoButtons:React.FC<TodoButtonsType> = ({filter, todoID, changeFilter}) => {



    const setAll = () => {changeFilter("all", todoID)}
    const setComplete = () => {changeFilter("complete", todoID)}
    const setActive = () => {changeFilter("active", todoID)}

    return <div className={classes.todoWrapper}>

        <Button
            color={filter === 'all' ? "secondary" : "primary"}
            variant={"contained"}
            onClick={setAll}>all</Button>
        <Button
            color={filter === 'complete' ? "secondary" : "primary"}
            variant={"contained"}
            onClick={setComplete}>complete</Button>
        <Button
            color={filter === 'active' ? "secondary" : "primary"}
            variant={"contained"}
            onClick={setActive}>active</Button>


    </div>
}

export default TodoButtons;