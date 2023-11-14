import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import News from './News/News'
import Messages from './Message/Messages'
import MyNavLink from '../../components/MyNavLink/MyNavLink'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>我是Home组件的内容</div>
        <MyNavLink to="/home/news" >news</MyNavLink>
        <MyNavLink to="/home/messages" >messages</MyNavLink>
        <Switch>
          <Route path='/home/messages' component={Messages} />
          <Route path='/home/news' component={News} />
          <Redirect to='/home/messages' />
        </Switch>
      </div>
    )
  }
}
