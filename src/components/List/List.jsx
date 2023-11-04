import React, { Component } from 'react'
import style from './List.module.css'

export default class List extends Component {
  render() {
    return (
      <div className={style.row} >
        {this.props.users.map(userObj => {
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
