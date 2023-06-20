import { useState } from "react"

export default function ArrayState() {
  const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"])

  async function addItem() {
    setThingsArray(prevArray => {
      return prevArray.concat(`Thing ${prevArray.length + 1}`)
    })
  }

  const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  )
}
