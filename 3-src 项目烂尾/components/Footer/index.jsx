import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
  render() {
    return (
      <div className='todo-footer'>
        <laber>
          <input type="checkbox" name="" id="" />
        </laber>
        <span>
          <samp>已完成0</samp> / 全部3
        </span>
        <button className='btn btn-danger'>清楚已完成任务</button>
      </div>
    )
  }
}
