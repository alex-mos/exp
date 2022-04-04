import {useState, useEffect} from "react"

export default function StarWars() {
  const [starWarsData, setStarWarsData] = useState({})
  const [count, setCount] = useState(1)

  console.log("Component rendered")

  useEffect(() => {
    console.log('Effect function ran')
    fetch(`https://swapi.dev/api/people/${count}`)
      .then(res => res.json())
      .then(data => setStarWarsData(data))
  }, [count])

  return (
    <div>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  )
}
