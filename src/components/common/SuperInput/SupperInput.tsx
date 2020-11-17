import React, {ButtonHTMLAttributes, ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import classes from './SupperInput.module.scss';


type DefaultButtonPropsType =  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export type SupperInputType = DefaultButtonPropsType & {
    onChangeText?: (value: string) => void
    error?: string

}

const SupperInput:React.FC<SupperInputType> = ({onChangeText
                                                   ,error,onChange,type

                                                   , ...restProps}) => {



    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange
        && onChange(e)
        onChangeText && onChangeText(e.currentTarget.value)
    }


    let inputClassName = `${error ? classes.errorInput : classes.common}`

    return <div className={classes.todoWrapper}>
        <input
            type={"text"}
            onChange={onChangeCallback}
            className={inputClassName}
            {...restProps}
        />
    </div>
}

export default SupperInput;