import React, { Component } from "react"
import { nanoid } from 'nanoid'
import Add from './components/Add/Add'
import List from './components/List/List'
import Total from './components/Total/Total'

export default class App extends Component {
  state = {
    todos: [],
    doneAlready: false
  }

  render() {
    const { todos, doneAlready } = this.state
    return (
      <div>
        <Add newTodo={this.newTodo} />
        <List todos={todos} deleteTodo={this.deleteTodo} changeDone={this.changeDone} doneWhether={this.doneWhether} />
        <Total todos={todos} changeToNot={this.changeToNot} doneAlready={doneAlready} deleteHaveDoneInApp={this.deleteHaveDoneInApp} />
      </div>
    )
  }

  // 根据Add组件中的值，添加新的对象到state的todos中
  newTodo = (name) => {
    const { todos } = this.state
    const next = { id: (nanoid()), name: name, done: false }
    this.setState({ todos: [next, ...todos] })
  }

  // 将删除的Item内容从state中的todos删除
  deleteTodo = (target) => {
    const { todos } = this.state
    const newTodos = todos.filter(element => element.id !== target)
    this.setState({ todos: newTodos })
  }

  // Item完成状态更改时，state中的todos的done也发生改变
  changeDone = (id) => {
    const { todos } = this.state
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) todos[i].done = !todos[i].done
    }
    this.setState({ todos: todos })
  }
  // 全选复选功能
  // 全选选中时，自动全选所有任务
  changeToNot = (target) => {
    const { todos } = this.state
    for (let i = 0; i < todos.length; i++) {
      todos[i].done = target
    }
    this.setState({ todos: todos })
  }

  // 反选功能，任意Item每次更改状态，判断是否完全完成
  doneWhether = () => {
    const { todos } = this.state
    let flag = true
    for (let i = 0; i < todos.length; i++) {
      if (!todos[i].done) flag = false
    }
    this.setState({ doneAlready: flag })
  }

  // 删除所有已经完成的任务
  deleteHaveDoneInApp = () => {
    const { todos } = this.state
    const newTodos = todos.filter(element => element.done === false)
    this.setState({ todos: newTodos })
  }
}