import React from 'react';
import classes from './TodoButtons.module.scss';
import {AffairsPriorityType, DefaultTasksType} from "../../../App";
import SupperButton from "../../common/SuperButton/SupperButton";



export type TodoButtonsType = {
    setFilter:(filter: AffairsPriorityType) => void
}

const TodoButtons:React.FC<TodoButtonsType> = ({setFilter}) => {



    const setAll = () => {setFilter("all")}
    const setComplete = () => {setFilter("complete")}
    const setActive = () => {setFilter("active")}

    return <div className={classes.todoWrapper}>

        <SupperButton onClick={setAll}>all</SupperButton>
        <SupperButton onClick={setComplete}>complete</SupperButton>
        <SupperButton onClick={setActive}>active</SupperButton>


    </div>
}

export default TodoButtons;