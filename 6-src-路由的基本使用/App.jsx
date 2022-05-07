import React, { Component } from 'react'
import {Link,BrowserRouter,Route} from 'react-router-dom'
import './App.css'
import About from './components/About'
import Home from './components/Home'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-offset-2 col-md-8'>
            <div className='page-header'><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-2 col-md-offset-2'>
            <div className='list-group'>
                <Link className="list-group-item" to="/about">About</Link>
                <Link className="list-group-item" to="/home">Home</Link>
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
