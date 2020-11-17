import React, {ChangeEvent, useState} from 'react';
import classes from './TodoInput.module.scss';
import SupperInput from "../../common/SuperInput/SupperInput";
import SupperButton from "../../common/SuperButton/SupperButton";




export type TodoInputType = {

    addItem: (title: string ) => void


}

const TodoInput: React.FC<TodoInputType> = ({   addItem}) => {

    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<string>("")

    const addItm = () => {

        if (title.trim() !== "") {
            addItem(title.trim() )
            setTitle("")
        } else setError("error")

    }



    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setError("")
        setTitle(e.currentTarget.value)
    }

    return <div className={classes.todoWrapper}>


        <SupperInput error={error} value={title} onChange={changeTitle}/>
        <SupperButton onClick={addItm}>add</SupperButton>
        <SupperButton red  >X</SupperButton>
        {error ? <span>error</span> : ""}


    </div>
}

export default TodoInput;