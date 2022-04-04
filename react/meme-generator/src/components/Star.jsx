export default function Star(props) {
  const starIcon = props.isFilled ? "★" : "☆"

  return (
    <div
      className="card--favorite"
      onClick={props.toggleFavorite}
    >
      {starIcon}
    </div>
  )
}
