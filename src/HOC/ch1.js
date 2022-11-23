import React, { Component } from 'react'
import UpdatedComponent from './Hoc'

export class Ch1 extends Component {
  render() {

    const {name, handleClick} = this.props
    return (
      <div>
        <h2>{name}</h2>
        <button onClick={handleClick}>Change Name</button>
      </div>
    )
  }
}

export default UpdatedComponent(Ch1) 