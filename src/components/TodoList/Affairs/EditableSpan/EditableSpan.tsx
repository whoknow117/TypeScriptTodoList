import React, { ChangeEvent, useState } from "react";
import  classes from './EditablSpan.module.scss';

export type EditableSpanType = {
    title: string
    changeValue: (newValue: string) => void
    doneMode: boolean
}

const EditableSpan:React.FC<EditableSpanType>= ({doneMode,changeValue, title}) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [titleValue, setTitleValue] =useState<string>(title);

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

    return ( editMode ? <input onChange={changeTitle}
                               value={titleValue}
                               onBlur={deActivatedEditMode}
                               autoFocus={true} type="text"/> : <span className={`${classes.common} ${ doneMode ? classes.done : ""}`} onDoubleClick={activatedEditMode}>{title}</span>

    )
}

export default EditableSpan;