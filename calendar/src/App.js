import React from 'react'
import data from './data'
import List from './List'
const App = () => {
  const [people, setPeople] = React.useState(data)
  return (
    <>
      <main>
        <section className='container'>
          <h4>
            <span>{people.length}</span> Birthday days
          </h4>
          <List people={people} />
          <button
            className='btn'
            onClick={() => {
              setPeople([])
            }}
          >
            ClearAll
          </button>
        </section>
      </main>
    </>
  )
}

export default App
