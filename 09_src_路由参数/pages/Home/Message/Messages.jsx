import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail/Detail'

export default class Messages extends Component {
  state = {
    messageArr: [
      { id: '01', title: '消息1', content: "orange" },
      { id: '02', title: '消息2', content: "handsome" },
      { id: '03', title: '消息3', content: "man" }
    ]
  }
  pushShow = (id, title, content) => {
    // 1. push查看+params参数
    // this.props.history.push(`/home/messages/detail/${id}/${title}/${content}`)
    // 2. push查看+search参数
    // this.props.history.push(`/home/messages/detail?id=${id}&title=${title}&content=${content}`)
    // 3. push查看+state参数
    this.props.history.push('/home/messages/detail', { id: id, title: title, content: content })
  }
  replaceShow = (id, title, content) => {
    // 1. push查看+params参数
    // this.props.history.replace(`/home/messages/detail/${id}/${title}/${content}`)
    // 2. replace查看+search参数
    // this.props.history.replace(`/home/messages/detail?id=${id}&title=${title}&content=${content}`)
    // 3. replace查看+state参数
    this.props.history.replace('/home/messages/detail', { id: id, title: title, content: content })
  }
  render() {
    const { messageArr } = this.state
    return (
      <div>
        <ul>
          {messageArr.map(mesObj => {
            return (
              <li key={mesObj.id}>
                {/* 1. 传递params参数 */}
                <Link className='message-item' to={`/home/messages/detail/${mesObj.id}/${mesObj.title}/${mesObj.content}`} >{mesObj.title}</Link>
                {/* 2. 传递search参数 */}
                {/* <Link className='message-item' to={`/home/messages/detail?id=${mesObj.id}&title=${mesObj.title}&content=${mesObj.content}`} >{mesObj.title}</Link> */}
                {/* 3. 传递state参数 */}
                {/* <Link replace={true} className='message-item' to={{ pathname: '/home/messages/detail', state: { id: mesObj.id, title: mesObj.title, content: mesObj.content } }} >{mesObj.title}</Link> */}
                &nbsp;<button onClick={() => this.pushShow(mesObj.id, mesObj.title, mesObj.content)}>push查看</button>
                &nbsp;<button onClick={() => this.replaceShow(mesObj.id, mesObj.title, mesObj.content)}>replace查看</button>
              </li>
            )
          })}
        </ul>
        <hr />
        {/* 1. params接收参数 */}
        {/* <Route path="/home/messages/detail/:id/:title/:content" component={Detail} /> */}
        {/* 2. search参数无需解释，正常声明即可 */}
        {/* <Route path="/home/messages/detail" component={Detail} /> */}
        {/* 3. state参数无需解释，正常声明即可 */}
        <Route path="/home/messages/detail" component={Detail} />
        <button onClick={() => { this.props.history.goBack() }}>后退</button>
        &nbsp;<button onClick={() => { this.props.history.goForward() }}>前进</button>
      </div>
    )
  }
}

