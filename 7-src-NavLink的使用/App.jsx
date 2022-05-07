import React, { Component } from 'react'
import {NavLink,Route} from 'react-router-dom'
import './App.css'
import About from './pages/About' //About 是路由组件
import Home from './pages/Home' //Home 是路由组件
import Header from './components/Header' //Header是一般组件

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-offset-2 col-md-8'>
            <Header/>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-2 col-md-offset-2'>
            <div className='list-group'>
                <NavLink className="list-group-item" to="/about">About</NavLink>
                <NavLink className="list-group-item" to="/home">Home</NavLink>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='panel'>
              <div className='panel-body'>
              <Route path='/about' component={About}/>
              <Route path='/home' component={Home}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
