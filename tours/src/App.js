import './App.css'
import Tours from './Tours'
import Loading from './Loading'
import React, { useEffect } from 'react'
import Error from './Error'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [isLoading, SetIsLoading] = React.useState(true)
  const [tours, setTours] = React.useState([])
  const [isError, setIsError] = React.useState(false)

  const removeTour = (id) => {
    const updatedList = tours.filter((tour) => {
      return tour.id !== id ? true : false
    })
    setTours(updatedList)
  }

  const fetchTours = async () => {
    try {
      const response = await fetch(url)
      const tours = await response.json()
      SetIsLoading(false)
      setTours(tours)
    } catch (error) {
      console.log(error)
      setIsError(true)
    }
  }

  useEffect(() => {
    setTimeout(() => fetchTours(), 500)
  }, [])

  if (isLoading) {
    return (
      <>
        <main>
          <Loading />
        </main>
      </>
    )
  }
  if (isError) {
    return (
      <>
        <Error />
      </>
    )
  }
  if (tours.length === 0) {
    return (
      <>
        <main>
          <section>
            <header>
              <h3> Our Tours </h3>
              <div className='underline'></div>
            </header>
          </section>
          <section>
            <h3>No Tours Available</h3>
            <button
              className='btn'
              onClick={() => {
                fetchTours()
              }}
            >
              Refresh
            </button>
          </section>
        </main>
      </>
    )
  }
  return (
    <>
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    </>
  )
}

export default App
