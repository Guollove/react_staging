import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    return (
      <div className='row'>
          <div className='card'>
              <a href="https://github.com/reactjs" target='_blank' rel="noreferrer">
                  <img src="https://pic2.zhimg.com/80/v2-43f760dedfa4060f0eec1c87baf76882_720w.jpg?source=1940ef5c" alt='head_portrait' style={{width:'100px'}}/>
              </a>
              <p className='catd-text'>天空女孩</p>
          </div>
         {
             this.props.users.map((userObj)=>{
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
