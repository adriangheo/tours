import React, { useState } from 'react'
import Tours from './Tours'
import data from './data.js'


function App() {
  const [tours, setTours] = useState(data)

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => setTours(data)}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
