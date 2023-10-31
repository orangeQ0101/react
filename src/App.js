import React, { Component } from "react"
import Add from './components/Add/Add'
import List from './components/List/List'
import Total from './components/Total/Total'

export default class App extends Component {
  render() {
    return (
      <div>
        <Add />
        <List />
        <Total />
      </div>
    )
  }
}