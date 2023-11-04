import React, { Component } from 'react'
import Search from './components/Search/Search'
import List from './components/List/List'

export default class App extends Component {
  state = { users: [] }

  render() {
    return (
      <div>
        <Search saveUsers={this.saveUsers} />
        <List users={this.state.users} />
      </div>
    )
  }

  saveUsers = (items) => {
    this.setState({ users: items })
  }
}
