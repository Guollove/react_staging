import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  //全选checkbox的回调
  handleCheckAll= (event)=>{
    this.props.checkAllTodo(event.target.checked)
  }
  //清楚已完成任务的回调
  handleCheckAllDone=()=>{
    this.props.clearAllDone()
  }
  render() {
    const {todos} = this.props
    //已完成的个数
    const doneCount = todos.reduce((pre,todo)=>{return pre +(todo.done ? 1 : 0)},0)
    //总数
    const total = todos.length
    return (
      <div className='todo-footer'>
          <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total &&total !==0 ? true : false}/>
        <span>
          <samp>已完成{doneCount}</samp> / 全部{total}
        </span>
        <button onClick={this.handleCheckAllDone} className='btn btn-danger'>清楚已完成任务</button>
      </div>
    )
  }
}
