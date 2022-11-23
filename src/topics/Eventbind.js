//There are 4 ways to bind this
//1. Binding event in onclick method
//2. Binding event by using arrow function in onclick method
//3. Binding click function in constructor
//4. Using arrow function in click function

//3 and 4 methods are always recommendable

import React, { Component } from "react";

export class Eventbind extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  // clickHandler(){
  //     this.setState({
  //         message:"Goodbye"
  //     })

  //     console.log(this)
  // }

  clickHandler = () => {
    this.setState({
      message: "Goodbye",
    });

    console.log(this);
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default Eventbind;
