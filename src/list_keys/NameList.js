import React from 'react'

function NameList() {
    const Persons = [
        {
            id:1,
            name:"Muniraj",
            Age:23   
        },
        {
            id:2,
            name:"Shreyas",
            Age:22
        },
        {
            id:3,
            name:"Dhanush",
            Age:24
        }
    ]
  return (
    <div>
       {
        Persons.map((person)=><h3 key={person.id}>Hello I am {person.name}. I am {person.Age} old.</h3>)
       }
    </div>
  )
}

export default NameList