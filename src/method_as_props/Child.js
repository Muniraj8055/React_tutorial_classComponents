import React from 'react'

function Child(props) {
  return (
    <div>
        <button onClick={props.greetHandler}>GreetParent</button>
    </div>
  )
}

export default Child