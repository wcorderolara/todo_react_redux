import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Footer from  './components/stateless/Footer';
import AddTodo from './components/statefull/AddTodo';
import VisibleTodoList from './components/statefull/VisibleTodoList';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
      </div>
    );
  }
}

export default App;
