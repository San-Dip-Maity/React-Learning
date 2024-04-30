import { useState } from 'react'

import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  // let counter = 15
  const addValue = () => {
    setCounter(counter + 1)
  }
  const subtractValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value: {counter}</h2>

      <button style={{ marginLeft: '10px' }} onClick={addValue}>Increase Value</button>
      <button style={{ marginLeft: '10px' }} onClick={subtractValue}>Decrease Value</button>
    </>
  )
}

export default App
