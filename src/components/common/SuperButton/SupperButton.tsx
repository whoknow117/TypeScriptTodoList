import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import classes from './SupperButton.module.scss';
import {AffairsPriorityType} from "../../../AppWithReducers";


type DefaultButtonPropsType =  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>




export type SupperButtonType = DefaultButtonPropsType & {
     red?: boolean
     filter?: boolean
}

const SupperButton:React.FC<SupperButtonType> = ({filter,red, children,...restProps}) => {


    const buttonClassName =`${classes.common} ${filter ? classes.activeBtn: ""}${red ? classes.redBtn : ""}`

    return <div className={classes.todoWrapper}>

        <button className={buttonClassName} {...restProps}>{children}</button>

    </div>
}

export default SupperButton;