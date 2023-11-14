import React, { Component } from 'react'
import { Link, Route, Redirect, Switch } from 'react-router-dom'
import './App.css'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import MyNavLink from './components/MyNavLink/MyNavLink'

export default class App extends Component {
  render() {
    return (
      <div className="container" >
        <h1 className='title'> React Router Demo</h1>
        <div className="content">
          <div className="nav">
            <MyNavLink to="/about" >About</MyNavLink>
            <MyNavLink to="/home" >Home</MyNavLink>
          </div>
          <div className="show">
            <Switch>
              <Route path='/about' component={About} />
              <Route path='/home' component={Home} />
              <Redirect to="/about" />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
