import React, {ChangeEvent, useState} from 'react';
import classes from './TodoInput.module.scss';
import SupperInput from "../../common/SuperInput/SupperInput";
import SupperButton from "../../common/SuperButton/SupperButton";





export type TodoInputType = {
    addTask: (title: string, todoListID: string) => void
    setError: (error: string) => void
    todoID: string
    error: string
}

const  TodoInput:React.FC<TodoInputType> = ({todoID,error,setError ,addTask}) => {

    const [title, setTitle] = useState<string>("")

    const addAffair = () => {

        if (title.trim() !== ""){
            addTask(title.trim(), todoID)
            setTitle("")
        }

        else setError("error")

    }



    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setError("")
        setTitle(e.currentTarget.value)
    }

    return <div className={classes.todoWrapper}>

        {/*<input value={title} onChange={changeTitle } type="text"/>*/}
        <SupperInput   value={title} onChange={changeTitle}/>
        {/*<button onClick={addAffair}>add</button>*/}
        <SupperButton    onClick={addAffair}>add</SupperButton>


    </div>
}

export default TodoInput;