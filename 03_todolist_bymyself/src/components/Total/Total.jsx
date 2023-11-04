import React, { Component } from 'react'
import style from './Total.module.css'

export default class extends Component {
  state = { doneAll: false }

  // static getDerivedStateFromProps(props) {
  //   const { doneAlready } = props
  //   return { doneAll: doneAlready }
  // }

  render() {
    const { todos } = this.props
    const done = this.haveDone()
    return (
      <div className={style.container}>
        <input className={style.all} type="checkbox" checked={this.state.doneAll} onChange={this.change} />
        <p>已完成{done} / 全部{todos.length}</p>
        <button ref={c => this.btn = c} className={style.delete} onClick={this.deleteHaveDone}>删除已完成任务</button>
      </div>
    )
  }

  // 存在完成任务时显示删除按钮，不存在时按钮消失
  componentDidUpdate() {
    const done = this.haveDone()
    if (done >= 1) {
      this.btn.style.display = 'block'
    } else {
      this.btn.style.display = 'none'
    }
  }

  // 计算所有已完成任务数量
  haveDone = () => {
    const { todos } = this.props
    let count = 0
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].done) count++
    }
    return count
  }

  // 全选复选功能
  change = () => {
    const { doneAll } = this.state
    const { changeToNot } = this.props
    this.setState({ doneAll: !doneAll })
    changeToNot(!doneAll)
  }

  // 删除已完成任务
  deleteHaveDone = () => {
    const { deleteHaveDoneInApp } = this.props
    deleteHaveDoneInApp()
  }
}
