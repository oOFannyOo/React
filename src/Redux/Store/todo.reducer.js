import {ADD_TODO_ITEM} from './todo.action.js';
import {REMOVE_TODO_ITEMS} from './todo.action.js';

export const reduxTodoList = [{
    id: 1,
    title: 'My First Todo Item - Redux',
    name: 'MyFirstTodoList',
    isDone: false
}, {
    id: 2,
    title: 'My Second Todo Item - Redux',
    name: 'My2TodoList',
    isDone: true
}, {
    id: 3,
    title: 'My 3 Todo Item - Redux',
    name: 'My3TodoList',
    isDone: true
}, {
    id: 4,
    title: 'My 4 Todo Item - Redux',
    name: 'My4TodoList',
    isDone: false
}];

export const initialState = {
    todoList : reduxTodoList,
};
export function todoReducer (state = initialState, action) {

    console.log(state);
    console.log(action);



    switch (action.type) {
        case ADD_TODO_ITEM:

            return {
                ...state,
                todoList: [...state.todoList, {
                    id: state.todoList.length + 1,
                    title: action.libelle,
               //     name: action.libelle,
                    isDone: false
                }],
            }

        // case REMOVE_TODO_ITEMS:
        //     return {
        //         ...state,
        //         list: [...state.todoList, thisTodoList],
        //     }

        default :
            return state;
    }
}