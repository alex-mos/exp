import starImage from "../images/star.svg"

export default function Card(props) {
  function getStatus() {
    if (props.openSpots === 0) {
      return "Sold out"
    }
    if (props.location === "online") {
      return "Online"
    }
    return false
  }

  return (
    <div className="card">
      <div className="card--image-wrapper">
        {getStatus() && <div className="card--tag">{getStatus()}</div>}
        <img src={props.img} className="card--image" alt="card" />
      </div>
      <div className="card--description">
        <div className="card--rating">
          <img src={starImage} className="card--star" alt="star" />
          {props.rating} <span className="card--muted">
          ({props.ratingCount}) · {props.country}
        </span>
        </div>
        <div className="card--title">
          {props.title}
        </div>
        <div className="card--price">
          <strong>From ${props.price}</strong> / person
        </div>
      </div>
    </div>
  )
}
