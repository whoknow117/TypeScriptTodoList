import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import classes from './TodoInput.module.scss';
import SupperInput from "../../common/SuperInput/SupperInput";
import SupperButton from "../../common/SuperButton/SupperButton";
import {Button, IconButton} from "@material-ui/core";
import {TextField} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";


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
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError("")
        if(e.key === "Enter") {
            addItm()
        }
    }


    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setError("")
        setTitle(e.currentTarget.value)
    }

    return <div className={classes.todoWrapper}>


        <div className={classes.form}>
            <TextField variant={"outlined"}
                       onKeyPress={onKeyPressHandler}
                       value={title}
                       label="title"
                       helperText={error}
                       onChange={changeTitle}
            />
            <IconButton onClick={addItm}>
                <AddBox/>
            </IconButton>
                {/*<Button variant="contained" color={"primary"}  > </Button>*/}


        </div>
        <span className={`${classes.span} ${error && classes.errorSpan}`}>{error}</span>


    </div>
}

export default TodoInput;