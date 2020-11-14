import React from 'react';
import classes from './TodoButtons.module.scss';
import {AffairsPriorityType, DefaultTasksType} from "../../../App";



export type TodoButtonsType = {
    setFilter:(filter: AffairsPriorityType) => void
}

const TodoButtons:React.FC<TodoButtonsType> = ({setFilter}) => {



    const setAll = () => {setFilter("all")}
    const setComplete = () => {setFilter("complete")}
    const setActive = () => {setFilter("active")}

    return <div className={classes.todoWrapper}>
        <button onClick={setAll}>all</button>
        <button onClick={setComplete}>complete</button>
        <button onClick={setActive}>active</button>

    </div>
}

export default TodoButtons;