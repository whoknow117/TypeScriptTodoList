import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import classes from './SupperCheckbox.module.scss';


type DefaultButtonPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


export type SupperCheckboxType = DefaultButtonPropsType & {
    onChangeChecked?: (checked: boolean) => void

}

const SupperCheckbox: React.FC<SupperCheckboxType> = ({
                                                          onChangeChecked,
                                                          type,
                                                          onChange,
                                                          children
                                                          , ...restProps
                                                      }) => {


    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange
        && onChange(e);
        onChangeChecked
        &&
        onChangeChecked(e.currentTarget.checked)
    }

    return <div className={classes.todoWrapper}>

        <label>
            <input
                type="checkbox"
                onChange={onChangeCallback}
                {...restProps}
            />
        </label>
    
    </div>
}

export default SupperCheckbox;