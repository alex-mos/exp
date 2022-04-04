import { useState } from "react"

export default function App() {
  const [counter, setCounter] = useState(0)

  function decrement() {
    setCounter(oldValue => oldValue - 1)
  }

  function increment() {
    setCounter(oldValue => oldValue + 1)
  }

  return (
    <div className="counter">
      <button className="counter--minus" onClick={decrement}>–</button>
      <div className="counter--count">
        <h1>{ counter }</h1>
      </div>
      <button className="counter--plus" onClick={increment}>+</button>
    </div>
  )
}
