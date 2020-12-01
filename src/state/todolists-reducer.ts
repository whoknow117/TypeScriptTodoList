import {AffairsPriorityType, TodoListType} from "../App";
import {v1} from "uuid";


export type RemoveTodolistActionType = {
    type: "REMOVE-TODOLIST",
    id: string
}
export type AddTodolistActionType = {
    type: "ADD-TODOLIST",
    title: string
}
export type ChangeTodolistTitleActionType = {
    type: "CHANGE-TODOLIST-TITLE",
    title: string
    id: string
}
export type ChangeTodolistFilterActionType = {
    type: "CHANGE-TODOLIST-FILTER",
    filter: AffairsPriorityType
    id: string
}


export type ActionType =
    RemoveTodolistActionType
    | ChangeTodolistFilterActionType
    | ChangeTodolistTitleActionType
    | AddTodolistActionType


export const todoListsReducer = (state: Array<TodoListType>, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':

            return state.filter((tl => tl.id !== action.id))

        case 'ADD-TODOLIST' :
            const newTodoListID: string = v1()
            const newTodoList: TodoListType = {
                id: newTodoListID,
                title: action.title,
                filter: "all"
            }
            return [...state, newTodoList]
        case 'CHANGE-TODOLIST-TITLE' :
            const todoList = state.find(tl => tl.id === action.id)
            if (todoList) {
                todoList.title = action.title
                return [...state]
            }
            return state;
        case 'CHANGE-TODOLIST-FILTER' :
            const todoList2 = state.find(tl => tl.id === action.id)
            if (todoList2) {
                todoList2.filter = action.filter
                return [...state]
            }
            return state;
        default:
            throw new Error("I don't understand this type")
    }
}


export const removeTodolistAC = (todoListID: string): RemoveTodolistActionType => (
    {type: "REMOVE-TODOLIST", id: todoListID}
)

export const addTodolistAC = (newTitle: string): AddTodolistActionType => (
    {type: "ADD-TODOLIST", title: newTitle}
)

export const changeTodoListTitleAC = (newTitle: string, todoListID: string): ChangeTodolistTitleActionType => (
    {type: "CHANGE-TODOLIST-TITLE", title: newTitle, id: todoListID}
)

export const changeTodoListFilterAC = (filter: AffairsPriorityType, id: string): ChangeTodolistFilterActionType => (
    {type: "CHANGE-TODOLIST-FILTER", filter: filter, id: id}
)