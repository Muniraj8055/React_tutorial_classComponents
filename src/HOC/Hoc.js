import React from 'react'

const UpdatedComponent = (WrapComponent)=>{
    class HocComponent extends React.Component{

        constructor(props) {
          super(props)
        
          this.state = {
             name:"Muniraj"
          }
        }

        handleClick=()=>{
            this.setState({
                name:"Nags"
            })
        }

        render(){
            return(
                <WrapComponent name={this.state.name} handleClick={this.handleClick} />
            )
        }
    }
    return HocComponent
}

export default UpdatedComponent