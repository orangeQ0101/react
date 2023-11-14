import React, { Component } from 'react'

export default class Messages extends Component {
  state = {
    messageArr: [
      { id: '01', title: '消息1', content: "orange" },
      { id: '02', title: '消息2', content: "handsome" },
      { id: '03', title: '消息3', content: "man" }
    ]
  }
  render() {
    const { messageArr } = this.state
    return (
      <div>
        <ul>
          {messageArr.map(mesObj => {
            return (
              <li key={mesObj.id}><p className='message-item' >{mesObj.title}</p></li>
            )
          })}
        </ul>
      </div>
    )
  }
}

