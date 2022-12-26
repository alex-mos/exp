import { useState } from "react"

interface withTogglerProps {
  defaultActive?: boolean
}

export function withToggler (Component) {
  return function (props: withTogglerProps) {
    const [state, setState] = useState({
      isActive: props.defaultActive || false
    })

    function toggle() {
      setState(prevState => {
        return {
          ...prevState,
          isActive: !prevState.isActive
        }
      })
    }

    return (
      <Component isActive={state.isActive} toggle={toggle} {...props} />
    )
  }
}
