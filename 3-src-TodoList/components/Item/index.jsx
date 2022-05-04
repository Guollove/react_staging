import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  //勾选，取消勾选某个todo的回调
  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id,event.target.checked)
    }
  }

  //删除一个todo的回调
  handleDelete = (id)=>{
    if (window.confirm('你确定要删除吗？')) {
      this.props.deleteTodo(id)
    }
  }
  render() {
    const {id, name, done } = this.props
    return (
      <div className='li'>
        <li>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </li>
        <button onClick={()=>this.handleDelete(id)} className='button'>删除</button>
      </div>
    )
  }
}
