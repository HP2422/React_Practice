import React, { Component } from 'react'

export class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Hello Harsh from Class Component {this.props.name}</h1>
      </div>
    )
  }
}

export default Welcome
