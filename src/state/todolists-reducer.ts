import {AffairsPriorityType, TodoListType} from "../types/types";
import {v1} from "uuid";
import {
    ActionsType,
    AddTodoListActionType, ChangeTodolistFilterActionType,
    ChangeTodolistTitleActionType,
    RemoveTodolistActionType
} from "../types/types";






const InitialState: Array<TodoListType> = [

]


export const todoListsReducer = (state = InitialState, action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':

            return state.filter((tl => tl.id !== action.id))

        case 'ADD-TODO-LIST' :

            const newTodoList: TodoListType = {
                id: action.todoListID,
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
            return state;
    }
}


export const removeTodolistAC = (todoListID: string): RemoveTodolistActionType => (
    {type: "REMOVE-TODOLIST", id: todoListID}
)

export const addTodolistAC = (newTitle: string): AddTodoListActionType => (
    {type: "ADD-TODO-LIST", title: newTitle, todoListID: v1()}
)

export const changeTodoListTitleAC = (newTitle: string, todoListID: string): ChangeTodolistTitleActionType => (
    {type: "CHANGE-TODOLIST-TITLE", title: newTitle, id: todoListID}
)

export const changeTodoListFilterAC = (filter: AffairsPriorityType, id: string): ChangeTodolistFilterActionType => (
    {type: "CHANGE-TODOLIST-FILTER", filter: filter, id: id}
)