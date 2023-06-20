import jokesData from "../jokesData"
import Joke from "./Joke"

export default function Jokes() {
  const jokesElements = jokesData.map(joke => {
    return (
      <Joke
        key={joke.id}
        setup={joke.setup}
        punchline={joke.punchline}
      />
    )
  })

  return (
    <div>
      {jokesElements}
    </div>
  )
}
