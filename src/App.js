import React, { Component } from 'react';

import { TodoService } from "./data/services/TodoService";

import TodoList from "./views/components/TodoList";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        todoList: []
      }
  }

  async componentDidMount() {
    const todoList = await TodoService.list();
    this.setState({todoList});
  }

  render() {
    const { state } = this;
    return (
      <div className="App">
          <TodoList items={state.todoList} />
      </div>
    );
  }
}

export default App;
