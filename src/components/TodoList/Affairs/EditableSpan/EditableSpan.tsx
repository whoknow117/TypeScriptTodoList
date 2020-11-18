import React, {KeyboardEvent, ChangeEvent, useState } from "react";
import  classes from './EditablSpan.module.scss';
import SupperButton from "../../../common/SuperButton/SupperButton";
import CreateIcon from "@material-ui/icons/Create";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {DefaultTasksType} from "../../../../App";

export type EditableSpanType = {
    title: string
    changeValue: (newValue: string) => void
    doneMode: boolean
    todoID: string
    deleteCallBack: (taskID:string, todoID: string) => void
    task: DefaultTasksType
}

const EditableSpan:React.FC<EditableSpanType>= ({task,deleteCallBack,todoID,doneMode,changeValue, title}) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [titleValue, setTitleValue] =useState<string>(title);
    const deleteTask = () => {deleteCallBack(task.id,todoID) }

    const activatedEditMode = () => {
        setEditMode(true)
    }
    const deActivatedEditMode = () => {
        setEditMode(false)
        changeValue(titleValue)
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {

        setTitleValue( e.currentTarget.value)
    }

    const deactivateEditM = (e: KeyboardEvent<HTMLInputElement>) => {


        if(e.key === "Enter"){
            deActivatedEditMode()
        }


    }

    return ( <div className={classes.wrapper}>

            { editMode ? <input onChange={changeTitle}
                                className={classes.input}
                                value={titleValue}
                                onKeyPress={deactivateEditM }
                                onBlur={deActivatedEditMode}
                                autoFocus={true} type="text"/> :
                <span className={`${classes.common} ${ doneMode ? classes.done : ""}`} onDoubleClick={activatedEditMode}>{title}</span>}
            <div className={classes.refactorButton}>
                <SupperButton onClick={activatedEditMode}/>
                <CreateIcon/>
            </div>
            <div className={classes.deleteButton}>
                <SupperButton onClick={deleteTask}/>
                <DeleteForeverIcon/>
            </div>
        </div>

    )
}

export default EditableSpan;


