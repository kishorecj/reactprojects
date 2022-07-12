import React from 'react'
import Tour from './Tour'
function Tours(props) {
  const { tours, removeTour } = props
  console.log('Tours', tours)
  console.log('removeTour', removeTour)
  return (
    <>
      <section>
        <div>
          <h3 style={{ textAlign: 'center' }}> Our Tours </h3>
          <div className='underline'></div>
        </div>
        <div>
          {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} removeTour={removeTour} />
          })}
        </div>
      </section>
    </>
  )
}

export default Tours
