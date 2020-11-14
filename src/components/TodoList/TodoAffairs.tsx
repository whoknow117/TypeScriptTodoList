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
    setError: ( error: string) => void
    error: string
    changeTaskStatus : (taskID: string, isDone: boolean) => void
}

const TodoList: React.FC<TodoListType> = ({changeTaskStatus, error,setError ,addTask, deleteCallBack, setFilter, data}) => {

    return <div className={classes.todoWrapper}>
        <TodoInput setError={setError} error={error} addTask={addTask}/>
        {data.map(t => <Affairs
            key={t.id}
            changeTaskStatus={changeTaskStatus}
            task={t}
            deleteCallBack={deleteCallBack}
        />)}
        <TodoButtons setFilter={setFilter}/>
        { error && <span>error</span>}

    </div>
}

export default TodoList;