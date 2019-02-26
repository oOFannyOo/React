
import React from "react";
import TodoItem from "./TodoItem.js";

function TodoList() {

    const todoList = [];
    let i = 0;
    for(i=6; i<20; i++) {
        todoList.push({
            id: i,
            title : 'Send a mail' +i,
            name : 'sendEmail' +i,
            isDone: i%2===0
        });
    }

    const listItems = todoList.map((todoItem) =>
        <TodoItem title={todoItem.title} name={todoItem.name} mykey={todoItem.id.toString()} key={todoItem.id.toString()} isDone={todoItem.isDone} />
    );
    //
    // if (todoList.length === 0) {
    //     const nbEltInTodoList = "Il n'y a aucun item !" ;
    // }
    // else {
        const nbEltInTodoList = "Il y a " + todoList.length + " todos dans la liste" ;
    // }


    return (
        <div>
            <ul>{listItems}</ul>,
            <label> {nbEltInTodoList}</label>
        </div>
    );

}

export default TodoList;