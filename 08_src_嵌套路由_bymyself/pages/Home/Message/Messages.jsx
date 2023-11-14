import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import Detail from './Detail/Detail'

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
              <li key={mesObj.id}><p className='message-item' onClick={this.pubMes(mesObj)} >{mesObj.title}</p></li>
            )
          })}
        </ul>
        <Detail />
      </div>
    )
  }
  pubMes = (mesObj) => {
    return () => {
      PubSub.publish('message', mesObj)
    }
  }
}

