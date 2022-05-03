import Die from "./components/Die"
import Confetti from "react-confetti"
import { useEffect, useState } from "react"

function App() {
  const [dice, setDice] = useState(() => allNewDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    if (isWin(dice)) {
      setTenzies(true)
      console.log('You won!')
    }
  },[dice])

  // win condition is all dice values are equal and all dice are held
  function isWin(dice) {
    const firstValue = dice[0].value
    return dice.every(die => die.isHeld && die.value === firstValue)
  }

  const diceElements = dice.map(die => {
    return <Die
      key={die.id}
      id={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDie={holdDie}
    />
  })

  function startNewGame() {
    setTenzies(false)
    setDice(allNewDice())
  }

  function allNewDice() {
    const result = []
    for (let index = 1; index <= 10; index++) {
      result.push({
        id: index,
        value: getRandomNumberInRange(1, 6),
        isHeld: false
      })
    }
    return result
  }

  function holdDie(id) {
    setDice(prevState => {
      return prevState.map(die => {
        if (die.id === id) {
          return {
            ...die,
            isHeld: !die.isHeld
          }
        } else {
          return die
        }
      })
    })
  }

  function rollDice() {
    setDice(prevState => {
      return prevState.map(die => {
        if (die.isHeld) {
          return die
        } else {
          return {
            id: die.id,
            value: getRandomNumberInRange(1, 6),
            isHeld: false
          }
        }
      })
    })
  }

  console.log('render')

  function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="app">
      {tenzies && <Confetti
        gravity={0.01}
        confettiSource={{x: 180, y: 50, w: 1, h: 300}}
        colors={["red"]}
      />}

      <main>
        <h1 className="title">Tenzies</h1>
        <div className="description">
          Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
        </div>
        <div className="dice-wrapper">
          { diceElements }
        </div>
        <div className="button-wrapper">
          {
            tenzies ? (
              <button className="primary-button" onClick={startNewGame}>New Game</button>
            ) : (
              <button className="primary-button" onClick={rollDice}>Roll</button>
            )
          }
        </div>
      </main>
    </div>
  );
}

export default App;
