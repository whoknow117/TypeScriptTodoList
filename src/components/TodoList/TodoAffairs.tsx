import React, {ChangeEvent} from 'react';
import classes from './TodoAffairs.module.scss';
import TodoInput from "./TodoInput/TodoInput";
import Affairs from "./Affairs/Affairs";
import TodoButtons from "./TodoButtons/TodoButtons";
import {AffairsPriorityType, DefaultTasksType} from "../../App";


export type TodoListType = {
    tasks: Array<DefaultTasksType>
    changeFilter: (newFilterValue: AffairsPriorityType, todoListID:string) => void
    deleteCallBack: (taskID: string, todoListID:string) => void
    addTask: (title: string, todoListID:string) => void
    setError: ( error: string) => void
    error: string
    changeTaskStatus : (taskID: string, isDone: boolean, todoListID:string) => void
    todoID: string
    removeTodoList:(todoListID: string) => void
}

const TodoList: React.FC<TodoListType> = ({removeTodoList, changeTaskStatus, error,setError ,addTask, deleteCallBack,  tasks,changeFilter,todoID }) => {

    return <div className={classes.todoWrapper}>
        <TodoInput removeTodoList={removeTodoList} todoID={todoID} setError={setError} error={error} addTask={addTask}/>
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