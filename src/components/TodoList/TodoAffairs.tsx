import React from 'react';
import classes from './TodoAffairs.module.scss';
import TodoInput from "./TodoInput/TodoInput";
import Affairs from "./Affairs/Affairs";
import TodoButtons from "./TodoButtons/TodoButtons";
import {AffairsPriorityType, DefaultTasksType} from "../../App";



export type TodoListType = {
    data: Array<DefaultTasksType>
    setFilter: (filter: AffairsPriorityType) => void
}

const TodoList:React.FC<TodoListType> = ({setFilter, data}) => {

    return <div className={classes.todoWrapper}>
                <TodoInput/>
        {data.map( t => <Affairs
        key={t.id}
        task={t}

        />)}
                <TodoButtons setFilter={setFilter}/>

        </div>
}

export default TodoList;