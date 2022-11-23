import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
    constructor(){
        super()

        this.state = {
            parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(){
        alert(`Hello ${this.state.parentName}`)
    }

  render() {
    return (
      <div>
        <Child greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default Parent