import React, {ChangeEvent} from 'react';
import classes from './TodoAffairs.module.scss';
import TodoInput from "./TodoInput/TodoInput";
import Affairs from "./Affairs/Affairs";
import TodoButtons from "./TodoButtons/TodoButtons";
import {AffairsPriorityType, DefaultTasksType} from "../../App";


export type TodoListType = {
    tasks: Array<DefaultTasksType>
    changeFilter:(newFilterValue: AffairsPriorityType, todoLisID: string) => void
    deleteCallBack: (taskID: string, todoListID: string) => void
    addTask: (title: string, todoListID: string) => void
    setError: ( error: string) => void
    error: string
    id: string
    title: string
    filter: AffairsPriorityType
    changeTaskStatus : (taskID: string, isDone: boolean, todoListID: string) => void
    removeTodoList: (todoListID: string) => void
}

const TodoList: React.FC<TodoListType> = ({removeTodoList, tasks,title, filter, id,changeFilter, changeTaskStatus, error,setError ,addTask, deleteCallBack,}) => {

    return <div className={classes.todoWrapper}>
        <TodoInput removeTodoList={removeTodoList} todoID={id} setError={setError} error={error} addTask={addTask}/>
        {tasks.map(t => <Affairs
            key={t.id}
            changeTaskStatus={changeTaskStatus}
            task={t}
            todoListID={id}
            deleteCallBack={deleteCallBack}
        />)}
        <TodoButtons todoID={id} changeFilter={changeFilter}/>
        { error && <span>error</span>}

    </div>
}

export default TodoList;