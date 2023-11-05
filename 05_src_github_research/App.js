import React, { Component } from 'react'
import Search from './components/Search/Search'
import List from './components/List/List'

export default class App extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: ''
  }

  render() {
    return (
      <div>
        <Search updateState={this.updateState} />
        <List {...this.state} />
      </div>
    )
  }

  updateState = (obj) => {
    this.setState(obj)
  }
}
