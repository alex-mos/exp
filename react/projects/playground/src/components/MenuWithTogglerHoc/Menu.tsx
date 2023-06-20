import { Button } from "../Button"
import { withToggler } from "../../hocs/withToggler"

interface MenuProps {
  isActive: boolean
  toggle: () => void
}

function MenuComponent (props: MenuProps) {
  return (
    <div>
      <Button onClick={props.toggle}>{props.isActive ? "Hide" : "Show"} Menu</Button>
      <nav style={{display: props.isActive ? "block" : "none"}}>
        <h6>Signed in as Coder123</h6>
        <a>Your Profile</a>
        <a>Your Repositories</a>
        <a>Your Stars</a>
        <a>Your Gists</a>
      </nav>
    </div>
  )
}

export const Menu = withToggler(MenuComponent)
