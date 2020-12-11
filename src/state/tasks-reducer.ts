import {DefaultTasksType, TaskStateType, TodoListType} from "../App";
import {v1} from "uuid";
import {act} from "react-dom/test-utils";


export type RemoveTaskActionType = {
    type: "REMOVE-TASK"
    taskId: string
    todoListID: string

}
export type AddTaskActionType = {
    type: "ADD-TASK"
    title: string
    todoListID: string

}


export type ActionsType =
    RemoveTaskActionType
    | AddTaskActionType


export const tasksReducer = (state: TaskStateType, action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            const copyState = {...state}

            copyState[action.todoListID] =  copyState[action.todoListID].filter(task => task.id !== action.taskId)
            return copyState
            // return {...state, [action.todoListID]: state[action.todoListID].filter(task => task.id !== action.taskId)}
        }

        case 'ADD-TASK': {

            const copyState = {...state}
            const newTask: DefaultTasksType = {
                id: v1(),
                title: action.title,
                isDone: false
            }
            // copyState[action.todoListID] =[newTask, ...copyState[action.todoListID]]
            //
            // return copyState
            return { ...state, [action.todoListID]: [newTask, ... copyState[action.todoListID]]}
        }




        default:
            throw new Error("I don't understand this type")
    }
}


export const RemoveTaskAC = (taskId: string, todoListID: string): RemoveTaskActionType => (
    {type: "REMOVE-TASK", taskId, todoListID}
)

export const AddTaskAC = (title: string, todoListID: string): AddTaskActionType => (
    {type: "ADD-TASK",title, todoListID}
)

