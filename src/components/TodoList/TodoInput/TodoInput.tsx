import React, {ChangeEvent, useState} from 'react';
import classes from './TodoInput.module.scss';



export type TodoInputType = {
    addTask: (title: string) => void

}

const TodoInput:React.FC<TodoInputType> = ({addTask}) => {

    const [title, setTitle] = useState<string>("")

    const addAffair = () => {

        if (title.trim() !== "") addTask(title.trim())

    }



    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return <div className={classes.todoWrapper}>

        <input value={title} onChange={changeTitle } type="text"/>
        <button onClick={addAffair}>add</button>


    </div>
}

export default TodoInput;