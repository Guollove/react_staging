import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  hadleCheck = (id)=>{
    return (event)=>{
      this.props.updateTodo(id,event.target.checked)
    }
  }
  render() {
    const {name,done}=this.props
    return (
        <div className='li'>
          <li>
            <input type="checkbox" defaultChecked={done} onChange={this.hadleCheck(id)}/>
              <span>{name}</span>
              </li>
            <button className='button'>删除</button>
        </div>
    )
  }
}
