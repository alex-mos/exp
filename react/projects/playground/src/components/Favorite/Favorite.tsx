import { Toggler } from "../Toggler/index"

interface FavoriteProps {
  isActive: boolean
  toggle: () => void
}

export function Favorite () {
  console.log('favorite')

  return (
    <Toggler
      render={function (isActive, toggle) {
        return (
          <div>
            Click heart to favorite
            <br/>
            <span onClick={toggle} className="cursor-pointer select-none">
              {isActive ? "❤️" : "🤍"}
            </span>
          </div>
        )
      }}
    />
  )
}
