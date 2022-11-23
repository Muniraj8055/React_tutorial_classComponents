import React, { Component } from 'react'



class LifecycleA extends Component {
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

    componentDidMount(){
        console.log('LifecycleA componentDdMount')
    }


  render() {
    console.log('LifecycleA render')
    return (
      <div>LifecycleA</div>
    )
  }
}

export default LifecycleA