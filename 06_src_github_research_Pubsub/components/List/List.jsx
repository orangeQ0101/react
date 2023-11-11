import React, { Component } from 'react'
import style from './List.module.css'
import PubSub from 'pubsub-js'

export default class List extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: ''
  }

  componentDidMount() {
    this.token = PubSub.subscribe('users', (message, stateObj) => {
      this.setState(stateObj)
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  render() {
    if (this.state.isFirst) return (
      <div className={style.envelope} ><h3 className={style.standby} >please enter the name to search</h3></div>
    )
    else if (this.state.isLoading) return (
      <div className={style.envelope} ><h3 className={style.standby} >the data is loading</h3></div>
    )
    else if (this.state.err) return (<div className={style.envelope} >
      <h3 className={style.standby} style={{ color: 'red' }} >{this.props.err}</h3>
    </div>
    )
    else {
      return (
        <div className={style.row} >
          {this.state.users.map(userObj => {
            return (
              <div key={userObj.id} className={style.card} >
                <a href={userObj.html_url} target='_blank'>
                  <img src={userObj.avatar_url} alt="user home page" />
                </a>
                <p className={style.card_text} >{userObj.login}</p>
              </div>
            )
          })}
        </div>
      )
    }
  }
}
