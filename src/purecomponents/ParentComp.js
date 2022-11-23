import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

export class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:"Muniraj"
      }
    }


    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Muni'
            })
        },2000)
    }

  render() {
    console.log('************Parent Comp render*****************')
    return (
      <div>
        ParentComp
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp