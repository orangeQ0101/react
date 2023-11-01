import React, { Component } from "react"
import Add from './components/Add/Add'
import List from './components/List/List'
import Total from './components/Total/Total'

export default class App extends Component {
  state = {
    todos: []
  }

  render() {
    const { todos } = this.state
    return (
      <div>
        <Add newTodo={this.newTodo} />
        <List todos={todos} />
        <Total />
      </div>
    )
  }

  newTodo = (name) => {
    const { todos } = this.state
    const next = { id: (todos.length + 1), name: name, done: false }
    this.setState({ todos: [next, ...todos] })
  }
}