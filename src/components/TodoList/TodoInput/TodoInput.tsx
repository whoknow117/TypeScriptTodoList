import React, {ChangeEvent, useState} from 'react';
import classes from './TodoInput.module.scss';
import SupperInput from "../../common/SuperInput/SupperInput";
import SupperButton from "../../common/SuperButton/SupperButton";





export type TodoInputType = {
    addTask: (title: string, todoListID: string) => void
    setError: (error: string) => void
    error?: string
    todoID: string
    removeTodoList: (todoListID: string) => void
}

const TodoInput:React.FC<TodoInputType> = ({removeTodoList, todoID, error,setError ,addTask}) => {

    const [title, setTitle] = useState<string>("")

    const addAffair = () => {

        if (title.trim() !== ""){
            addTask(title.trim(),todoID)
            setTitle("")
        }

        else setError("error")

    }


    const removeTodoCallback = () => {removeTodoList(todoID)};
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setError("")
        setTitle(e.currentTarget.value)
    }

    return <div className={classes.todoWrapper}>

        {/*<input value={title} onChange={changeTitle } type="text"/>*/}
        <SupperInput error={error} value={title} onChange={changeTitle}/>
        {/*<button onClick={addAffair}>add</button>*/}
        <SupperButton onClick={addAffair}>add</SupperButton>
        <SupperButton red onClick={removeTodoCallback}>X</SupperButton>


    </div>
}

export default TodoInput;