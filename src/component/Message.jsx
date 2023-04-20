import React, { Component } from 'react'

export class Message extends Component {
    constructor(){
        super();
        this.state={
            msg:"Welcome Visitors"
        }
    }
    ChangeMsg(){
        this.setState({
            msg:"By By"
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={()=> this.ChangeMsg()}>New Msg</button>
      </div>
    )
  }
}

export default Message
