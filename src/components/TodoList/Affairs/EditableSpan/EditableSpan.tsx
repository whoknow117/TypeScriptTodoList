import React, { ChangeEvent, useState } from "react";

export type EditableSpanType = {
    title: string
    changeValue: (newValue: string) => void
}

const EditableSpan:React.FC<EditableSpanType>= ({changeValue, title}) => {
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

    return ( editMode ? <input onChange={changeTitle} value={titleValue} onBlur={deActivatedEditMode} autoFocus={true} type="text"/> : <span onDoubleClick={activatedEditMode}>{title}</span>

    )
}

export default EditableSpan;