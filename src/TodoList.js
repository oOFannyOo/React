
import React, { Component } from 'react';
import TodoItem from "./TodoItem.js";

class TodoList extends Component {
	
	/*constructor(props) {
		super(props);
		
		const todoList = [];
		let i = 0;
		for(i=78; i<79	; i++) {
			todoList.push({
				id: i,
				title : 'Send a mail' +i,
				name : 'sendEmail' +i,
				isDone: i%2===0
			});
		}
	
		this.state = {
		//	myTodoList: '',
			myTodoList: todoList,
		};
    }*/


	
	render() {
			
		//const listItems = this.state.myTodoList.map((todoItem) =>
		const listItems = this.props.list.map((todoItem) =>
		<TodoItem title={todoItem.title} name={todoItem.name} mykey={todoItem.id.toString()} key={todoItem.id.toString()} isDone={todoItem.isDone} />
		);
		console.log(this.props.list.length);
			//const nbEltInTodoList = "Il y a " + this.state.myTodoList.length + " todos dans la liste" ;
		let nbEltInTodoList = "Il y a " + this.props.list.length + " todos dans la liste" ;
		if (this.props.list.length == 0) {
			nbEltInTodoList = "Il n'y a aucun item !" ;
		}
		
        return (
			<div>
				<ul>{listItems}</ul>
				<label> {nbEltInTodoList}</label>
			</div>
        );
    }
}
	

/*
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
*/

export default TodoList;