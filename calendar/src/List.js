import React from 'react'

const List = (props) => {
  console.log('props:', props)
  const { people } = props
  console.log('people:', people)
  return (
    <>
      {people.map((person) => {
        return (
          <article className='person' key={person.id}>
            <img src={person.image} alt={person.name}></img>
            <div>
              <h3>Name : {person.name}</h3>
              <h3>Age : {person.age}</h3>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default List
