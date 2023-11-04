import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import style from './Item.module.css'


export default class Item extends Component {
  state = { shouldRemove: false, checked: false }

  static getDerivedStateFromProps(props) {
    const { done } = props
    return { checked: done }
  }

  render() {
    const { name } = this.props

    if (this.state.shouldRemove) {
      return null; // 返回 null 表示组件将被移除
    }
    return (
      <div className={style.container} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <input className={style.check} type="checkbox" checked={this.state.checked} onChange={this.change} />
        <p className={style.content}>{name}</p>
        <button ref={c => this.disappear = c} className={style.delete} onClick={this.delete}>删除</button>
      </div>
    )
  }
  // 删除指定Item功能
  delete = () => {
    const { id, deleteTodo } = this.props
    deleteTodo(id)
    this.setState({ shouldRemove: true })
  }

  // 鼠标移入Item高亮，删除按钮显示
  handleMouseEnter = () => {
    this.disappear.style.display = 'block'
  }
  // 鼠标移出Item正常，删除按钮消失
  handleMouseLeave = () => {
    this.disappear.style.display = 'none'
  }
  // 更改Item完成状态
  change = () => {
    const { id, changeDone, doneWhether } = this.props
    const { checked } = this.state
    changeDone(id)
    doneWhether()
    this.setState({ checked: !checked })
  }
}
