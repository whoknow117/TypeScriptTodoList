import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import classes from './SupperButton.module.scss';


type DefaultButtonPropsType =  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>




export type SupperButtonType = DefaultButtonPropsType & {
     red?: boolean
}

const SupperButton:React.FC<SupperButtonType> = ({red, children,...restProps}) => {




    return <div className={classes.todoWrapper}>

        <button {...restProps}>{children}</button>

    </div>
}

export default SupperButton;