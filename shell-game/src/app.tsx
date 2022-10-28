import { useState } from "react"
import { Button } from "./button/button.js"
import { add, multiply } from "./helpers/helpers.js"

export function App() {
  const [liked, setLiked] = useState(false)

  if (liked) {
    return (
      <div>
        You liked this!
      </div>
    )
  }

  return (
    <div className="container">
      <h1 className="mb-2 text-3xl font-bold underline text-main">
        Hello world!
        { add(3, 3) }
        { multiply(3, 3)}
      </h1>
      <img src="assets/shell.svg" className="max-w-[100px]" />
      <Button className="p-2 border border-solid rounded-md" onClick={() => {setLiked(true)}} />
    </div>
  )
}
