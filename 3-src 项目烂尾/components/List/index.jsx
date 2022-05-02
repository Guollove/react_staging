import React, { Component } from 'react'
import Item from '../Item'

import './index.css'
export default class List extends Component {
  render() {
    const {todos,updateTodo} = this.props;
    return (
      <ul className='ul'>
          {
            todos.map( todo =>{
              return <Item key={todo.id} {...todo} updateTodo={updateTodo}/>
            })
          }
      </ul>
    )
  }
}
