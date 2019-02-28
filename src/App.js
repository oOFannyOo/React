import React, { Component } from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {createLogger} from 'redux-logger';
import {todoReducer} from './Redux/Store/todo.reducer.js';
import './App.css';
import TodoList from './TodoList.js';

import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import {Home} from './routes/Home';
import {About} from './routes/About';
import {Params} from './routes/Params';
import {Hierarchical} from './routes/Hierarchical';

// Assemblage des différents reducers d'une application
const reducers = combineReducers({
  todos: todoReducer,
});

const logger = createLogger({
  level: 'log',
});

// Création du store
const store = createStore(reducers, applyMiddleware(logger));


class App extends Component {

  render() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/:custom" component={Params}/>
                        <Route path="/hierarchical" component={Hierarchical}/>
                    </Switch>
                </div>
            </BrowserRouter>


            <Provider store={store}>
                <div className="App">
                    {/*<header className="App-header">*/}
                    <h1 className="App-title">Welcome to Todo-list App</h1>
                    {/*</header>*/}
                    <TodoList></TodoList>
                </div>
            </Provider>
        </div>
    );
  }
}

export default App;
