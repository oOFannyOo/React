import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList.js';
import TodoParentList from './TodoParentList.js';
import TodoForm from './TodoForm.js';
import {TodoListContext, contextTodoList} from './TodoContext.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.contextAddTodoItem = (itemLibelle) => {
      this.setState((prevState) => ({
        contextTodoList: [...prevState.contextTodoList, {
          id: prevState.contextTodoList.length + 1,
          title: itemLibelle,
          name: 'MyTodoList' + prevState.contextTodoList.length + 1,
          isDone: false
        }]
      }));
    }
    this.contextRemoveAllItems = () => {
      this.setState(() => ({
        contextTodoList: []
      }));
    }
    this.state = {
      contextTodoList: contextTodoList,
      contextAddTodoItem: this.contextAddTodoItem,
      contextRemoveAllItems: this.contextRemoveAllItems,
    }
  }

  render() {
    /* const myAppHtml = (<header>  <p> My app TODO :  </p>  <TodoForm/> <TodoList/>  </header>);
     const myAppHtmlWithParent = (<header>  <p> My app TODO :  </p> <TodoParentList/>  </header>);
     return myAppHtmlWithParent;*/
    return (
        <div className="App">
            <TodoListContext.Provider value={this.state}>
              <header className="App-header">
                <h1 className="App-title">Welcome to React</h1>
              </header>
              <TodoList></TodoList>
            </TodoListContext.Provider>
        </div>
    );
  }
}

export default App;
