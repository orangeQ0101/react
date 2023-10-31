import React, { Component } from 'react'
import style from './Total.module.css'

export default class extends Component {
  render() {
    return (
      <div className={style.container}>
        <input className={style.all} type="checkbox" />
        <p>已完成0 / 全部4</p>
      </div>
    )
  }
}
