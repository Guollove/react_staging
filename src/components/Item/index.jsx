import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  render() {
    return (
        <div className='li'>
          <li>
            <input type="checkbox"/>
              <span>xxxxx</span>
              </li>
            <button className='button'>删除</button>
        </div>
    )
  }
}
