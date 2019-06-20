import React, { Component } from 'react';

import { TodoService } from "./data/services/TodoService";

import NewTodoItem from "./views/components/NewTodoItem";
import TodoList from "./views/components/TodoList";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        todoList: []
      }

      this.add = this.add.bind(this);
  }

  async componentDidMount() {
    const todoList = await TodoService.list();
    this.setState({todoList});
  }

  add(description) {
    TodoService.create({
      description,
      isChecked: false
    })
    .then(newItem => {
      const { todoList } = this.state;
      todoList.push(newItem);
      this.setState({
        todoList
      })
    })
  }

  render() {
    const { state } = this;
    return (
      <div className="App">
          <NewTodoItem onAdd={this.add}/>
          <hr />
          <TodoList items={state.todoList} />
      </div>
    );
  }
}

export default App;
