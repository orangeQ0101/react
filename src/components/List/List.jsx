import React, { Component } from 'react'
import style from './List.module.css'
import Item from '../Item/Item'

export default class List extends Component {
  render() {
    return (
      <div className={style.container}>
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    )
  }
}
