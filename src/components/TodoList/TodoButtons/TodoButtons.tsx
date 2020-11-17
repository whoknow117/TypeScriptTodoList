import React from 'react';
import classes from './TodoButtons.module.scss';
import {AffairsPriorityType, DefaultTasksType} from "../../../App";
import SupperButton from "../../common/SuperButton/SupperButton";



export type TodoButtonsType = {
    changeFilter: (newFilterValue: AffairsPriorityType, todoListID: string) => void
    todoID: string
}

const TodoButtons:React.FC<TodoButtonsType> = ({todoID, changeFilter}) => {



    const setAll = () => {changeFilter("all", todoID)}
    const setComplete = () => {changeFilter("complete", todoID)}
    const setActive = () => {changeFilter("active", todoID)}

    return <div className={classes.todoWrapper}>

        <SupperButton onClick={setAll}>all</SupperButton>
        <SupperButton onClick={setComplete}>complete</SupperButton>
        <SupperButton onClick={setActive}>active</SupperButton>


    </div>
}

export default TodoButtons;