import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

  //初始化状态
  state = { 
    users:[],//users数是指为数组
    isFirst:true,//是否为第一次打开页面
    isLoading:false,//标识是否处于加载状态
    err:'',//储存请求相关的错误信息
  }

  componentDidMount(){
    this.token = PubSub.subscribe('atguigu',(_,stateObj)=>{
      this.setState(stateObj)
    })
  }

  componentWillUnmount(){
    PubSub.unsubscribe(this.token)
  }

  render() {
    const {users,isFirst,isLoading,err} = this.state
    return (
      <div className='row'>
        <div className='card'>
            <a href="https://github.com/reactjs" target='_blank' rel="noreferrer">
                <img src="https://pic2.zhimg.com/80/v2-43f760dedfa4060f0eec1c87baf76882_720w.jpg?source=1940ef5c" alt='head_portrait' style={{width:'100px'}}/>
            </a>
            <p className='catd-text'>天空女孩</p>
        </div>
         {
            isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
            isLoading ? <h2>Loading.....</h2>:
            err ? <h2>{err}</h2>:
             users.map((userObj)=>{
                 return(
                    <div key={userObj.id} className='card'>
                    <a href={userObj.html_url} target='_blank' rel="noreferrer">
                        <img src={userObj.avatar_url} alt='head_portrait' style={{width:'100px'}}/>
                    </a>
                    <p className='card-text'>{userObj.login}</p>
                </div>
                 )
             })
         }
         
      </div>
    )
  }
}
