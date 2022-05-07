import React, { Component } from 'react'
import { Link,Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    messageArr:[
      {id:'01',title:'消息1'},
      {id:'02',title:'消息2'},
      {id:'03',title:'消息3'},
    ]
  }

  pushShow = (id,title)=>{
    //push跳转+携带params参数
    this.props.history.push(`/home/message/detail/${id}/${title}`)
  }
  replaceShow = (id,title)=>{
    //replace跳转+携带params参数
    this.props.history.replace(`/home/message/detail/${id}/${title}`)
  }
  render() {
    const {messageArr} = this.state
    return (
      <div>
          <ul>
              {
                messageArr.map((msgObj)=>{
                  return (
                    <li key={msgObj.id}>
                      <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                      &nbsp;<button onClick={() => this.pushShow(msgObj.id,msgObj.title)}>push查看</button>
                      &nbsp;<button onClick={() => this.replaceShow(msgObj.id,msgObj.title)}>push查看</button>
                    </li>
                  )
                })
              }
          </ul>
          <hr />
          <Route path="/home/message/detail/:id/:title" component={Detail}/>
      </div>
    )
  }
}
