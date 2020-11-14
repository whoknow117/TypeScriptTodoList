import React from 'react';
import classes from './TodoInput.module.scss';



export type TodoInputType = {

}

const TodoInput:React.FC<TodoInputType> = () => {

    return <div className={classes.todoWrapper}>

        <input type="text"/>
        <button>add</button>


    </div>
}

export default TodoInput;