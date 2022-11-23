import React, { Component } from 'react'
import UpdatedComponent from './Hoc'

export class Ch2 extends Component {
  render() {
    const {name, handleClick} = this.props
    return (
      <div> 
         <h2 onMouseOver={handleClick}>My name is {name}</h2>
      </div>
    )
  }
}

export default UpdatedComponent(Ch2) 