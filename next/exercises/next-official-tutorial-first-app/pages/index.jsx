import { useState } from "react"

function Hello (props) {
  return (
    <h1>Hello {props.name}</h1>
  )
}

export default function Index() {
  const [likes, setLikes] = useState(0)

  const addLike = () => {
    setLikes(likes + 1)
  }

  return (
    <>
      <Hello name="Sasha" />
      <div>likes: {likes}</div>
      <button onClick={addLike}>like</button>
    </>
  )
}
