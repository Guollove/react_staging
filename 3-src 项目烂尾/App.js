import React, {Component} from 'react'
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

export default class App extends Component() {
  
  constructor(props){
    super(props); 
    this.state = { 
      todos: [
        {id:'001',name:'吃饭',done:true},
        {id:'002',name:'睡觉',done:true},
        {id:'003',name:'打代码',done:false},
      ]};
  }
  //  state = {todos:[
  //   {id:'001',name:'吃饭',done:true},
  //   {id:'002',name:'睡觉',done:true},
  //   {id:'003',name:'打代码',done:false},
  // ]}
  
  addTodo = (todoObj)=>{
    const {todos} = this.state
    const newTodos = [todoObj,...todos]
    this.setState({todos:newTodos})
  }
  updateTodo = (id,done)=>{
    const {todos} = this.state
    const newTodos = todos.map((todoObj)=>{
      if(todoObj.id === id)return{...todoObj,done}
      else return todoObj
    })
    this.setState({todos:newTodos})
  }
  // const {todos} = this.state
  render(){
  return (
    <div className='todo-container'>
      <div className='todo-wrap'>
        <Header addTodo={this.addTodo}/>
        <List todos={this.state} updateTodo={this.updateTodo}/>
        <Footer/>
      </div>
    </div>
  )
}
}

