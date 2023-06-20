import Card from "./Card"
import cardsData from "./cardsData"

export default function Cards() {
  const cards = cardsData.map(card => {
    return <Card
      key={card.title}
      {...card}
    />
  })

  return (
    <div className="cards">
      {cards}
    </div>
  )
}
