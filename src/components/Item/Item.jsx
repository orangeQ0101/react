import React, { Component } from 'react'
import style from './Item.module.css'


export default class Item extends Component {
  render() {
    return (
      <div className={style.container}><input className={style.check} type="checkbox" /> <p className={style.content}>睡觉</p> <button className={style.delete}>删除</button></div>
    )
  }
}
