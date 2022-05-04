import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

// export default class App extends Component {
//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }

export default class App extends Component {
  //状态在哪里  操作状态的方法就在哪里
  
  //初始化状态
  state = {todos:[
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '打代码', done: false },
      { id: '004', name: '逛街', done: true },
    ]}

  //addTodo用于添加一个todo  接收的是参数是todo对象
  addTodo = (todoObj) => {
    const { todos } = this.state

    const newTodos = [todoObj, ...todos]

    this.setState({ todos: newTodos })
  }
  //updateTodo用于更新一个todo对象
  updateTodo = (id,done)=>{
    //获取状态中的todos
    const {todos} = this.state
    //匹配处理数据
    const newTodos = todos.map((todoObj)=>{
      if(todoObj.id === id) return {...todoObj,done}
      else return todoObj
    })
    this.setState({todos:newTodos})
  }
  //deleteTodo用于删除一个todo对象
  deleteTodo = (id)=>{
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !== id
    })
    this.setState({todos:newTodos})
  }
//checkAllTodo用于全选todo对象
  checkAllTodo =(done)=>{
    const {todos}=this.state
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj,done}
    })
    this.setState({todos:newTodos})
  }
  //清除所有完成的todo对象
  clearAllDone=()=>{
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return !todoObj.done
    })
    this.setState({todos:newTodos})
  }
  render() {
    const { todos } = this.state
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    )
  }
}
