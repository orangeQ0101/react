import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Detail extends Component {
  state = {
    mes: {}
  }
  componentDidMount() {
    PubSub.subscribe('message', (mes, content) => {
      this.setState({ mes: content })
    })
  }
  render() {
    const { mes } = this.state
    return (
      <div>
        <ul>
          <li>id: {mes.id}</li>
          <li>title: {mes.title}</li>
          <li>content: {mes.content}</li>
        </ul>
      </div>
    )
  }
}
