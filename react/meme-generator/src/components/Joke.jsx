import { useState } from "react"

export default function Joke(props) {
  const [isShown, setIsShown] = useState(false)

  function toggle() {
    setIsShown(prevState => !prevState)
  }

  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      <button onClick={toggle}>{isShown ? "Hide" : "Show"} punchline</button>
      {isShown && <p>{props.punchline}</p>}
      <hr/>
    </div>
  )
}
