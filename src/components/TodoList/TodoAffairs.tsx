import React  from 'react';
import classes from './TodoAffairs.module.scss';
import TodoInput from "./TodoInput/TodoInput";
import Affairs from "./Affairs/Affairs";
import TodoButtons from "./TodoButtons/TodoButtons";
import {AffairsPriorityType, DefaultTasksType, TaskStateType, TodoListType} from '../../types/types'

import EditableSpan from "./Affairs/EditableSpan/EditableSpan";
import {IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";



export type TodoListPropsType = {
    tasks: Array<DefaultTasksType>
    changeFilter: (newFilterValue: AffairsPriorityType, todoListID: string) => void
    deleteCallBack: (taskID: string, todoListID: string) => void
    addTask: (title: string, todoListID: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean, todoListID: string) => void
    todoID: string
    title: string
    changeTaskTitle: (taskID: string, title: string, todoListID: string) => void
    todoLists:Array<TodoListType>
    filter: AffairsPriorityType
    changeTodoListTitle: (newTitle: string, todoListID: string) => void
    removeTodoList:(todoListID: string) => void

}

const TodoList: React.FC<TodoListPropsType> = ({removeTodoList, todoLists,changeTodoListTitle,  filter,
                                              changeTaskTitle, title,
                                             todoID, tasks,
                                              changeTaskStatus, addTask, deleteCallBack, changeFilter}) => {

    const addItem = (title: string) => {
        addTask(title, todoID)
    }
    // let activeTasks = tasks.filter(t => t.isDone === false);
    // let doneTasks = tasks.filter(t => t.isDone === true);

    const removeTodoCallback = () => {
        removeTodoList(todoID)
    }
    const changeTodoListTitleCallback = (title: string) => {
        changeTodoListTitle(title, todoID)
    }

    return <div className={classes.todoWrapper}>
        <div className={classes.title}>
           <div className={classes.span}>
               <EditableSpan
                    bold
                   changeValue={changeTodoListTitleCallback}
                   title={title}/>
           </div>
            <IconButton>
                <Delete onClick={removeTodoCallback}/>
            </IconButton>
        </div>

        <div className={classes.input}>
            <TodoInput addItem={addItem}>addTask</TodoInput>
        </div>

        <div className={classes.tasks}>
            {tasks.map(t => <Affairs
                changeTaskTitle={changeTaskTitle}
                key={t.id}
                taskID={t.id}
                changeTaskStatus={changeTaskStatus}
                task={t}
                todoID={todoID}
                deleteCallBack={deleteCallBack}
            />)}
        </div>
        <TodoButtons filter={filter} todoID={todoID} changeFilter={changeFilter}/>
        <div className={classes.infoBlock}>
            <span className={classes.info}>
            {/*tasks todo: {activeTasks.length}*/}
        </span>
            <span className={classes.info}>
            {/*done tasks: {doneTasks.length}*/}
        </span>
        </div>


    </div>
}

export default TodoList;