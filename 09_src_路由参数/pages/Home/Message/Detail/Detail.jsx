import React, { Component } from 'react'
// import qs from 'qs'

// qs库中常用的两个方法：stringify()和parse()
// 1. stringify()可以将对象转换为`key=value&key=value`的形式
// const p = { id: '01', name: 'orange', age: 18 }
// console.log(qs.stringify(p));
// 2. parse()反之，可以将urlencoded编码格式转换为对象编码格式
// const url = 'id=01&name=orange&age=18'
// console.log(qs.parse(url));

export default class Detail extends Component {
  render() {
    // 1. params接收信息
    // const { id, title, content } = this.props.match.params
    // 2. search接收信息
    // const { search } = this.props.location
    // const { id, title, content } = qs.parse(search.slice(1))
    // 3. state接收消息
    const { id, title, content } = this.props.location.state || {}
    return (
      <div>
        <ul>
          <li>id: {id} </li>
          <li>title: {title}</li>
          <li>content: {content}</li>
        </ul>
      </div>
    )
  }
}
