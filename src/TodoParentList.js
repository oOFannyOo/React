
import React, { Component } from 'react';
import TodoList from "./TodoList.js";
import TodoForm from "./TodoForm.js";

class TodoParentList extends Component {
	
	constructor(props) {
		super(props);
		
		const todoList = [];
		let i = 0;
		for(i=1; i<15; i++) {
			todoList.push({
				id: i,
				title : 'Send a mail' +i,
				name : 'sendEmail' +i,
				isDone: i%2===0
			});
		}
	
	console.log(todoList);
		this.state = {
			myTodoList: [],
		//	myTodoList: todoList,
		};
		
    }
	
	addTodo(title) {
		console.log('addTodo('+title+')');
		let todoList = this.state.myTodoList;
	
		const lastID = todoList.length;
		todoList.push({
			id: lastID+1,
			title : title,
			name : 'doSomething' +(lastID+1),
			isDone: false
		});
	
		this.setState({myTodoList: todoList});
    }
	
	resetTodo() {
		this.setState({myTodoList: []});
    }

	render() {		
		const updateMyTodoList = (value) => {
			this.addTodo(value);
		};
		const resetMyTodoList = () => {
			this.resetTodo();
		};
        return (
			<div>
				<TodoForm updateMyTodoList={updateMyTodoList.bind(this)} resetMyTodoList={resetMyTodoList.bind(this)}/> <TodoList list={this.state.myTodoList}/>
			</div>
        );
    }
}

export default TodoParentList;