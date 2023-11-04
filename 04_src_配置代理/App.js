import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  render() {
    return (
      <div>
        <button onClick={this.getStudentsData}>获取学生信息</button>
        <button onClick={this.getCarsData}>获取汽车信息</button>
      </div>
    )
  }

  getStudentsData = () => {
    axios.get('http://localhost:3000/api1/students').then(
      response => { console.log('成功了', response.data) },
      error => { console.log('失败了', error); }
    )
  }

  getCarsData = () => {
    axios.get('http://localhost:3000/api2/cars').then(
      response => { console.log('成功了', response.data) },
      error => { console.log('失败了', error); }
    )
  }
}
