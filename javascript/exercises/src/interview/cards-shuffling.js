const suits = ["spades", "clubs", "hearts", "diamonds"]

const values = ["6", "7", "8", "9", "10", "vallet", "dame", "king", "ace"]

function getCards() {
  const cards = []
  suits.forEach((suit) => {
    values.forEach((value) => {
      cards.push(`${value} of ${suit}`)
    })
  })
  return cards
}

function shuffle(cards) {}

const cards = getCards()

console.log(shuffle(cards))
