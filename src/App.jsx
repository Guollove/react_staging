import React, { Component } from 'react'
import { Button } from 'antd';
import 'antd/dist/antd.min.css'

export default class App extends Component {
  render() {
    return (
      <div>App
        <button>点我</button>&nbsp;&nbsp;
        <Button type="primary">Primary Button</Button>&nbsp;&nbsp;
        <Button>Primary Button</Button>&nbsp;&nbsp;
      </div>
    )
  }
}
