import React, { Component } from 'react'

class Updating extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Muniraj'
      }
      console.log('LifeCycle A constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('Lifecycle A getDerivedStateFromProps')
        return null
    }


    shouldComponentUpdate(){
        console.log('LifeCycle A shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('LifeCycle A  getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }

    clickHandler=()=>{
        this.setState({
            name:"Muni"
        })
    }

  render() {
    console.log('LifecycleA render')
    return (
      <div>
        <h3>LifecycleA</h3>
        <h4>{this.state.name}</h4>
        <button onClick={this.clickHandler}>Change State</button>
      </div>

    )
  }
}

export default Updating