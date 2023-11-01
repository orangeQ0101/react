import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import style from './Item.module.css'


export default class Item extends Component {
  state = { shouldRemove: false, checked: this.props.done }

  render() {
    const { id, name, done } = this.props

    if (this.state.shouldRemove) {
      return null; // 返回 null 表示组件将被移除
    }
    return (
      <div className={style.container} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <input className={style.check} type="checkbox" defaultChecked={this.state.checked} onChange={this.change} />
        <p className={style.content}>{name}</p>
        <button ref={c => this.disappear = c} className={style.delete} onClick={this.delete}>删除</button>
      </div>
    )
  }
  delete = () => {
    this.setState({ shouldRemove: true })
  }
  handleMouseEnter = () => {
    this.disappear.style.display = 'block'
  }
  handleMouseLeave = () => {
    this.disappear.style.display = 'none'
  }
  change = () => {
    const { checked } = this.state
    this.setState({ checked: !checked })
  }
}
