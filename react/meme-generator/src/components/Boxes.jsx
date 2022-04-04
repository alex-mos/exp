import { useState } from "react"
import boxesData from "../boxesData"
import Box from "./Box"

export default function Boxes() {
  const [boxes, setBoxes] = useState(boxesData)

  function toggle(id) {
    setBoxes(prevState => {
      return prevState.map(box => {
        return box.id === id ? {...box, on: !box.on} : box
      })
    })
  }

  const boxesElements = boxes.map(box => {
    return (
      <Box
        key={box.id}
        id={box.id}
        on={box.on}
        toggle={toggle}
      />
    )
  })

  return (
    <div>
      {boxesElements}
    </div>
  )
}
