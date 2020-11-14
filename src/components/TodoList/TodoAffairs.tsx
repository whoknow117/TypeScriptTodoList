import React, {ChangeEvent} from 'react';
import classes from './TodoAffairs.module.scss';
import TodoInput from "./TodoInput/TodoInput";
import Affairs from "./Affairs/Affairs";
import TodoButtons from "./TodoButtons/TodoButtons";
import {AffairsPriorityType, DefaultTasksType} from "../../App";



export type TodoListType = {
    data: Array<DefaultTasksType>
    setFilter: (filter: AffairsPriorityType) => void
    deleteCallBack: (taskID: string) => void
    addTask: (title: string) => void

}

const TodoList:React.FC<TodoListType> = ({addTask, deleteCallBack, setFilter, data}) => {

    return <div className={classes.todoWrapper}>
                <TodoInput addTask={addTask}/>
        {data.map( t => <Affairs
        key={t.id}

        task={t}
        deleteCallBack={deleteCallBack}
        />)}
                <TodoButtons setFilter={setFilter}/>

        </div>
}

export default TodoList;