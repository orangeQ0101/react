import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    return (
      // 定义children属性后，其属性值会自动显示在标签体中。即children属性值始终与标签体内容相同
      <NavLink className="list-group-item" {...this.props}></NavLink>
    )
  }
}
