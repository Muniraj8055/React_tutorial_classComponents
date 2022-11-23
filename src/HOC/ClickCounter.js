import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

export class ClickCounter extends Component {


  render() {
    const {count,incrementCount} = this.props
    return (
      <div>
        <h2>{count}</h2>
        <button onClick={incrementCount}>Clicked {count} times</button>
      </div>
    )
  }
}

export default UpdatedComponent( ClickCounter)