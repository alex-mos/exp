import "./Die.css"

export default function Die(props) {
  return (
    <div
      className={`die ${props.isHeld ? "die_held" : ""}`}
      onClick={() => props.holdDie(props.id)}
    >
      {props.value}
    </div>
  )
}
