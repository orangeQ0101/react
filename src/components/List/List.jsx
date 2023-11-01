import React, { Component } from 'react'
import style from './List.module.css'
import Item from '../Item/Item'

export default class List extends Component {
  state = { checkedNum: 0, allNum: 0 }
  render() {
    const { todos } = this.props
    return (
      <div className={style.container}>
        {todos.map((element) => {
          return <Item key={element.id} {...element} />
        })}
      </div>
    )
  }
}
