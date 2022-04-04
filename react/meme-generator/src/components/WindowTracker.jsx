import { useEffect, useState } from "react"

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", watchWidth)
    return () => {
      window.removeEventListener("resize", watchWidth)
    }
  }, [])

  return (
    <div>
      Window width: {windowWidth}
    </div>
  )
}
