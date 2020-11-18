import React, {KeyboardEvent,ButtonHTMLAttributes, ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import classes from './SupperInput.module.scss';


type DefaultButtonPropsType =  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export type SupperInputType = DefaultButtonPropsType & {
    onChangeText?: (value: string) => void
    error?: string
    onEnter?: () => void

}

const SupperInput:React.FC<SupperInputType> = ({onEnter,onKeyPress, onChangeText
                                                   ,error,onChange,type

                                                   , ...restProps}) => {



    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange
        && onChange(e)
        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e:KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);

        e.key === "Enter"
        && onEnter
        && onEnter()
    }

    let inputClassName = `${classes.common} ${error && classes.errorInput}`

    return <div className={classes.todoWrapper}>
        <input
            type={"text"}
            onChange={onChangeCallback}
            className={inputClassName}
            {...restProps}
            onKeyPress={onKeyPressCallback}
        />
    </div>
}

export default SupperInput;