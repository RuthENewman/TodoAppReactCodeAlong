import React, { Component } from 'react';
import Todos from './Todos'
import AddForm from './AddForm'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy groceries'},
      {id: 2, content: 'make salad for lunch'},
      {id: 3, content: 'laundry and ironing'},
      {id: 4, content: 'pay rent'},
      {id: 5, content: 'buy train tickets'},
      {id: 6, content: 'finish book'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.floor(Math.random() * 100)
    let todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center green-text">To Do</h1>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
          <AddForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
