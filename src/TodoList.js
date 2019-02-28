
import React, { Component } from 'react';
import {connect} from 'react-redux';
import TodoItem from "./TodoItem.js";
import PropTypes from 'prop-types'
import {addTodoItem} from './Redux/Store/todo.action.js';

class TodoList extends Component {

	render () {
		return (
			<div>
				TodoList :
				{
					this.props.todoList.map((item) => <TodoItem title={item.title} name={item.name} mykey={item.id.toString()} key={item.id.toString()} isDone={item.isDone}></TodoItem>)
				}
				<div>
					<button onClick={() => this.props.addTodoItem('Todo ajouté via Redux')}> Add todoItem</button>
				</div>
			</div>
		)
	}


// 	render() {
//
// 		/*ANCIENNE VERSION*/
// /*		//const listItems = this.state.myTodoList.map((todoItem) =>
// 		const listItems = this.props.list.map((todoItem) =>
// 		<TodoItem title={todoItem.title} name={todoItem.name} mykey={todoItem.id.toString()} key={todoItem.id.toString()} isDone={todoItem.isDone} />
// 		);
// 		console.log(this.props.list.length);
// 			//const nbEltInTodoList = "Il y a " + this.state.myTodoList.length + " todos dans la liste" ;
// 		let nbEltInTodoList = "Il y a " + this.props.list.length + " todos dans la liste" ;
// 		if (this.props.list.length == 0) {
// 			nbEltInTodoList = "Il n'y a aucun item !" ;
// 		}
//
//         return (
// 			<div>
// 				<ul>{listItems}</ul>
// 				<label> {nbEltInTodoList}</label>
// 			</div>
//         );*/
//
// 		return (
// 			<TodoListContext.Consumer>
// 				{
// 					({contextTodoList, contextAddTodoItem, contextRemoveAllItems}) => {
// 						return (
// 							<div>
// 								TodoList :
// 								{
// 									contextTodoList.map((item) => <TodoItem title={item.title} name={item.name} mykey={item.id.toString()} key={item.id.toString()} isDone={item.isDone}></TodoItem>)
// 								}
// 								<div>
// 									<button onClick={() => contextAddTodoItem('Ajout Item via le contexte')}> Add todoItem</button>
// 									<button onClick={() => contextRemoveAllItems()}> Remove all items</button>
// 								</div>
// 							</div>
// 						)
// 					}
// 				}
// 			</TodoListContext.Consumer>
// 			)
//     }

}

TodoList.propTypes = {
}

const mapStateToProps = state => {
	console.log('STATE', state)
	return {
		todoList: state.todos.todoList,
	}
};
const mapDispatchToProps = dispatch => ({

	addTodoItem: libelle => dispatch(addTodoItem(libelle))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList)