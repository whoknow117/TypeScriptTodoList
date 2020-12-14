import {DefaultTasksType, TaskStateType} from "../App";
import {v1} from "uuid";
import {AddTodolistActionType, RemoveTodolistActionType} from "./todolists-reducer";


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
export type ChangeTaskStatusActionType = {
    type: "CHANGE-TASK-STATUS"
    taskID: string
    isDone: boolean
    todoListID: string


}
export type ChangeTaskTitleActionType = {
    type: "CHANGE-TASK-TITLE"
    taskID: string
    title: string
    todoListID: string
}

export type AddTodoListActionType = {
    type: "ADD-TODO-LIST"
    title: string
    todoListID: string
}


export type ActionsType =
    RemoveTaskActionType
    | AddTaskActionType
    | ChangeTaskStatusActionType
    | ChangeTaskTitleActionType
    | RemoveTodolistActionType
    | AddTodoListActionType
    | AddTodolistActionType


export const tasksReducer = (state: TaskStateType, action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            const copyState = {...state}

            copyState[action.todoListID] = copyState[action.todoListID].filter(task => task.id !== action.taskId)
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
            return {...state, [action.todoListID]: [newTask, ...state[action.todoListID]]}
        }
        case "CHANGE-TASK-STATUS" : {
            return {
                ...state, [action.todoListID]: state[action.todoListID].map
                (t => {
                    if (t.id !== action.taskID) return t
                    else return {...t, isDone: action.isDone}
                })
            }
        }
        case 'CHANGE-TASK-TITLE': {
            return {
                ...state, [action.todoListID]: state[action.todoListID].map
                (t => {
                    if (t.id !== action.taskID) return t
                    else return {...t, title: action.title}
                })
            }
        }

        case 'REMOVE-TODOLIST': {
            let copyState = {...state}
            delete copyState[action.id]
            return copyState


        }
        case 'ADD-TODOLIST': {

            return {...state,[action.todoListID]: []}


        }

        default:
            throw new Error("I don't understand this type")
    }
}


export const RemoveTaskAC = (taskId: string, todoListID: string): RemoveTaskActionType => (
    {type: "REMOVE-TASK", taskId, todoListID}
)

export const AddTaskAC = (title: string, todoListID: string): AddTaskActionType => (
    {type: "ADD-TASK", title, todoListID}
)

export const ChangeTaskStatusAC = (taskID: string, isDone: boolean, todoListID: string): ChangeTaskStatusActionType => (
    {type: 'CHANGE-TASK-STATUS', taskID, isDone, todoListID}
)


export const ChangeTaskTitleAC = (taskID: string, title: string, todoListID: string): ChangeTaskTitleActionType => ({
    type: 'CHANGE-TASK-TITLE', taskID, title, todoListID
})





