import React, { Component } from 'react'
import style from './Search.module.css'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class extends Component {
  lookForUsers = () => {
    // 获取用户输入(连续解构赋值+重命名)
    const { value: KeyWord } = this.KeyWordDOM
    this.KeyWordDOM.value = ''
    // 发送请求前通知List更改状态
    PubSub.publish('users', { isFirst: false, isLoading: true })
    // 发送网络请求
    axios.get(`https://api.github.com/search/users?q=${KeyWord}`).then(
      response => {
        PubSub.publish('users', { isLoading: false, users: response.data.items })
      },
      error => {
        PubSub.publish('users', { isLoading: false, err: error.message })
      }
    )
  }

  render() {
    return (
      <div className={style.container} >
        <h3 className={style.title} >Search For Github Users</h3>
        <div className={style.content}>
          <input ref={c => this.KeyWordDOM = c} className={style.search} type="text" placeholder='enter the name you want to search' />
          <button onClick={this.lookForUsers} >Search</button>
        </div>
      </div>
    )
  }
}
