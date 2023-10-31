import react, { Component } from 'react'
import style from './Add.module.css'

export default class Add extends Component {
  render() {
    return (
      <div className={style.container}>
        <input className={style.input} type="text" placeholder='请输入你的任务名称，按回车键确认' />
      </div>
    )
  }
}