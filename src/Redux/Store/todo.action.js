export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const REMOVE_TODO_ITEMS = 'REMOVE_TODO_ITEMS';

export function addTodoItem(libelle) {
    console.log("I'm in addTodoItem func !");
    return {
        type: ADD_TODO_ITEM,
        libelle
    }
};
export function removeTodoItem() {
    return {
        type: REMOVE_TODO_ITEMS
    }
};