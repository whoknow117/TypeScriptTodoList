import React, {ChangeEvent, useState} from 'react';
import classes from './TodoInput.module.scss';



export type TodoInputType = {
    addTask: (title: string) => void
    setError: (error: string) => void
    error: string

}

const TodoInput:React.FC<TodoInputType> = ({error,setError ,addTask}) => {

    const [title, setTitle] = useState<string>("")

    const addAffair = () => {

        if (title.trim() !== "") addTask(title.trim())
        else setError("erro")

    }



    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setError("")
        setTitle(e.currentTarget.value)
    }

    return <div className={classes.todoWrapper}>

        <input value={title} onChange={changeTitle } type="text"/>
        <button onClick={addAffair}>add</button>


    </div>
}

export default TodoInput;