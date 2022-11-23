//When to use index a key?

//1. The item in ur list do not have unique id
//2. The list is a static list and will not change
//3. The list will never be ordered or filtered

import React from 'react'

function Index_key() {

  const names = ['Muni','dee','deeksha']
  return (
    <div>
      {
        names.map((name,index)=><h3 key={index}>{index} {name}</h3>)
      }
    </div>
  )
}

export default Index_key