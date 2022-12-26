import { withToggler } from "../../hocs/withToggler"

interface FavoriteProps {
  isActive: boolean
  toggle: () => void
}

function FavoriteComponent (props: FavoriteProps) {
  return (
    <div>
      Click heart to favorite
      <br/>
      <span onClick={props.toggle} className="cursor-pointer select-none">
        {props.isActive ? "❤️" : "🤍"}
      </span>
    </div>
  )
}

export const Favorite = withToggler(FavoriteComponent)
