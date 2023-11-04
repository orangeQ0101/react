import react, { Component } from 'react'
import style from './Add.module.css'

export default class Add extends Component {
  render() {
    return (
      <div className={style.container}>
        <input className={style.input} type="text" onKeyUp={this.handleKeyUP} placeholder='请输入你的任务名称，按回车键确认' />
      </div>
    )
  }

  // 增加Item功能
  handleKeyUP = (event) => {
    const { target, keyCode } = event
    const { newTodo } = this.props
    if (keyCode !== 13) return
    if (target.value.trim() === '') {
      target.value = ''
      return alert('输出不能为空')
    }
    newTodo(target.value)
    target.value = ''
  }
}