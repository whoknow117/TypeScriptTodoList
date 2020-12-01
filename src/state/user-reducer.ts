//User:


export type StateType = {
    name: string
    age: number
    childrenCount: number
}

//Action:

export type ActionType = {
    type: string
    [key: string]: any
}

// согласно прописаному type в этом action (инструкции) я поменяю state
export const userReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'INCREMENT-AGE':
            // state.age = state.age + 1;

            const newState = {...state}
            newState.age = state.age + 1
            return newState;
        case 'INCREMENT-CHILDREN-COUNT':

            return {...state, childrenCount: state.childrenCount + 1}
        case 'CHANGE-NAME':
            return {...state, name: action.name}
        default:
            throw new Error("I don't understand this type")
    }
}