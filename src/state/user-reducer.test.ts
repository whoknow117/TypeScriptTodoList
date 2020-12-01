import {ActionType, StateType, userReducer} from "./user-reducer";

beforeEach(() => {

})

test('user reducer should increment only age', () => {
    const startState:StateType = {
        name: "Dimich",
        age: 20,
        childrenCount: 2,
    };
    const action: ActionType = { type: 'INCREMENT-AGE' }
    const endState = userReducer(startState, action)

    expect(endState.age).toBe(21);
    expect(endState.childrenCount).toBe(2);
});

test('user reducer should increment only childrenCount', () => {
    const startState = {name: 'Dimych' ,
        age: 20,
        childrenCount: 2,  };
    const action = "INCREMENT-CHILDREN-COUNT"



});


test('user reducer should change name of user', () => {
    const startState:StateType = {
        name: "Dimich",
        age: 20,
        childrenCount: 2,
    };
    const action: ActionType = {
        type: 'CHANGE-NAME',
        name: 'Dmitriy'

    }
    const endState = userReducer(startState, action)

    expect(endState.age).toBe(20);
    expect(endState.childrenCount).toBe(2);
    expect(endState.name).toBe('Dmitriy');
});