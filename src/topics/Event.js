import React from 'react'

function Event() {

    function clickHandler(){
        console.log("Button clicked")
    }

  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default Event