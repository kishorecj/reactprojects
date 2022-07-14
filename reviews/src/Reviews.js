import React, { useState } from 'react'
import data from './data'

function Reviews() {
  const people = data
  const [index, setIndex] = useState(0)

  function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  return (
    <div className='reviewContainer'>
      {console.log('index', index)}
      <div className='imgContainer'>
        <img
          className='personImage'
          src={people[index].image}
          alt={people[index].name}
        />
      </div>

      <div>
        <h3>{people[index].name}</h3>
        <p>{people[index].designation}</p>
      </div>
      <div>
        <button
          className='btnArrow'
          onClick={() =>
            index === 0 ? setIndex(people.length - 1) : setIndex(index - 1)
          }
        >
          &lt;
        </button>

        <button
          className='btnArrow'
          onClick={() =>
            index === people.length - 1 ? setIndex(0) : setIndex(index + 1)
          }
        >
          &gt;
        </button>
      </div>
      <div>
        <button
          className='btnRandom'
          onClick={() => setIndex(getRandomInt(0, people.length - 1))}
        >
          Surprise Me
        </button>
      </div>
    </div>
  )
}

export default Reviews
