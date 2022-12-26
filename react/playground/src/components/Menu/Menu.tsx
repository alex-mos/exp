import { Button } from "../Button"
import { Toggler } from "../Toggler/Toggler"

export function Menu () {
  return (
    <Toggler
      defaultActiveValue={true}
      render={
        function(isActive, toggle) {
          return (
            <div>
              <Button onClick={toggle}>{isActive ? "Hide" : "Show"} Menu</Button>
              <nav style={{display: isActive ? "block" : "none"}}>
                <h6>Signed in as Coder123</h6>
                <a>Your Profile</a>
                <a>Your Repositories</a>
                <a>Your Stars</a>
                <a>Your Gists</a>
              </nav>
            </div>
          )
        }
      }
    />
  )
}
