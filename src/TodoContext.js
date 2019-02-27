import React from 'react';

export const contextTodoList = [{
    id: 1,
    title: 'My First Todo Item',
    name: 'MyFirstTodoList',
    isDone: false
}, {
    id: 2,
    title: 'My Second Todo Item',
    name: 'My2TodoList',
    isDone: true
}, {
    id: 3,
    title: 'My 3 Todo Item',
    name: 'My3TodoList',
    isDone: true
}, {
    id: 4,
    title: 'My 4 Todo Item',
    name: 'My4TodoList',
    isDone: false
}];

export const TodoListContext = React.createContext({
    contextTodoList,
    contextAddTodoItem : () => {},
    contextRemoveAllItems : () => {},
});