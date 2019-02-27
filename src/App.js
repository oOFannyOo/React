import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList.js';
import TodoParentList from './TodoParentList.js';
import TodoForm from './TodoForm.js';

class App extends Component {
  render() {
    const myAppHtml = (<header>  <p> My app TODO :  </p>  <TodoForm/> <TodoList/>  </header>);
    const myAppHtmlWithParent = (<header>  <p> My app TODO :  </p> <TodoParentList/>  </header>);

    return myAppHtmlWithParent;
  }
}

export default App;
