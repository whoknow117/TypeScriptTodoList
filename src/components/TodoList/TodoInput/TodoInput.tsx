import React, {ChangeEvent, useState} from 'react';
import classes from './TodoInput.module.scss';
import SupperInput from "../../common/SuperInput/SupperInput";
import SupperButton from "../../common/SuperButton/SupperButton";


export type TodoInputType = {

    addItem: (title: string) => void


}

const TodoInput: React.FC<TodoInputType> = ({children, addItem}) => {

    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<string>("")

    const addItm = () => {

        if (title.trim() !== "") {
            addItem(title.trim())
            setTitle("")
        } else setError("Enter something")

    }


    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setError("")
        setTitle(e.currentTarget.value)
    }

    return <div className={classes.todoWrapper}>


        <div className={classes.form}>
            <SupperInput onEnter={addItm} error={error} value={title} onChange={changeTitle}/>
            <div className={classes.btn}>
                <SupperButton onClick={addItm}>{children}</SupperButton>
            </div>

        </div>
        <span className={`${classes.span} ${error && classes.errorSpan}`}>{error}</span>


    </div>
}

export default TodoInput;