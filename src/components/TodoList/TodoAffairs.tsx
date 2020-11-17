import React, {ChangeEvent, useState} from 'react';
import classes from './TodoAffairs.module.scss';
import TodoInput from "./TodoInput/TodoInput";
import Affairs from "./Affairs/Affairs";
import TodoButtons from "./TodoButtons/TodoButtons";
import {AffairsPriorityType, DefaultTasksType} from "../../App";


export type TodoListType = {
    tasks: Array<DefaultTasksType>
    changeFilter: (filter: AffairsPriorityType, todoListID: string) => void
    deleteCallBack: (taskID: string, todoListID: string) => void
    addTask: (title: string,todoListID:string) => void
    todoID: string

    changeTaskStatus : (taskID: string, isDone: boolean, todoListID: string) => void
}

const TodoList: React.FC<TodoListType> = ({todoID,changeTaskStatus,  addTask, deleteCallBack, changeFilter, tasks}) => {

    const [error,setError] = useState<string>("");

    return <div className={classes.todoWrapper}>
        <TodoInput todoID={todoID} error={error} setError={setError}  addTask={addTask}/>
        {tasks.map(t => <Affairs
            key={t.id}
            changeTaskStatus={changeTaskStatus}
            task={t}
            todoID={todoID}
            deleteCallBack={deleteCallBack}
        />)}
        <TodoButtons todoID={todoID} changeFilter={changeFilter}/>
        { error && <span>error</span>}

    </div>
}

export default TodoList;