import React from 'react';
import classes from './TodoButtons.module.scss';
import {AffairsPriorityType, DefaultTasksType} from "../../../App";
import SupperButton from "../../common/SuperButton/SupperButton";



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

        <SupperButton filter={filter === 'all'} onClick={setAll}>all</SupperButton>
        <SupperButton filter={filter === 'complete'} onClick={setComplete}>complete</SupperButton>
        <SupperButton filter={filter === 'active'} onClick={setActive}>active</SupperButton>


    </div>
}

export default TodoButtons;