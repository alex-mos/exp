import WindowTracker from "./WindowTracker"
import { useState } from "react"

export default function WindowTrackerWrapper() {
  const [show, setShow] = useState(true)

  function toggle() {
    setShow(prevState => !prevState)
  }

  return (
    <div>
      <button onClick={toggle}>
        Toggle WindowTracker
      </button>
      {show && <WindowTracker />}
    </div>
  )
}
