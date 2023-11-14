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
            {/*1. 创建路由链接*/}
            {/* <Link className="list-group-item" to="/about" >About</Link>
            <Link className="list-group-item" to="/home" >Home</Link> */}
            {/*2. 选中目标标签背景变为高亮 */}
            {/* <NavLink className="list-group-item" to="/about">About</NavLink>
            <NavLink className="list-group-item" to="/home">Home</NavLink> */}
            {/* 若高亮属性的属性名不是active，则需要在上面基础上稍加修改 */}
            {/* <NavLink activeClassName="your-filed-name" ...>...</NavLink> */}
            {/* 3. 二次封装NavLink组件 */}
            {/* 由于NavLink在大多数情况下有较多的相同代码，因此可以尝试二次封装，在使用时只需编写特异化代码 */}
            {/* 将NavLink封装到自定义一般组件MyNavLink中 */}
            {/* 自定义属性均传入props中，标签体内容也会被children属性自动接收传入props */}
            <MyNavLink to="/about" >About</MyNavLink>
            <MyNavLink to="/home" >Home</MyNavLink>
          </div>
          <div className="show">
            {/* 4. Switch组件的应用 */}
            {/* 不加Switch时，react路由器在匹配到第一个路由后，一样会遍历全部路由，在路由数量较多时导致效率较低 */}
            {/* 在包裹上Switch后，react路由器只匹配到第一个对应路由 */}
            {/* <Switch>
              <Route path='/orange/about' component={About} />
              <Route path='/orange/home' component={Home} />
            </Switch> */}
            {/* 5. 模糊匹配与严格匹配 */}
            {/* 正常情况下，只要路由链接路径包含路由的路径内容的前缀，即可实现路由功能，即使路由链接路径还包含除路由路径外的后缀 */}
            {/* 但如果要实现两者内容完全相同才能匹配的效果，需要开启严格匹配 */}
            {/* 开启方法：<Route exact[={true}] path='' component={} /> */}
            {/* tip：非必要，不要使用严格匹配，可能会引发潜在的bug */}
            {/* 6. 重定向(默认界面) */}
            {/* 写在注册路由的最后，当所有路由都不匹配路劲时，显示重定向路径的界面或应展示的组件 */}
            {/* 写法： */}
            {/*注册路由*/}
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
