export type RemoveTodolistActionType = {
    type: "REMOVE-TODOLIST",
    id: string
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

    | ChangeTodolistTitleActionType
    | ChangeTodolistFilterActionType


export type AffairsPriorityType = "all" | "complete" | "active"

export type TaskStateType = {
    [key: string]: Array<DefaultTasksType>
}

export type TodoListType = {
    id: string
    title: string
    filter: AffairsPriorityType
}


export type DefaultTasksType = {
    id: string
    title: string
    isDone: boolean
}
