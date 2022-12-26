import { useState, ReactNode } from "react"

interface TogglerProps {
  defaultActiveValue: boolean
  render: (isActive: boolean, toggle: () => void) => ReactNode
}

function Toggler (props: TogglerProps) {
  const [state, setState] = useState({
    isActive: props.defaultActiveValue
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
    <div>
      {props.render(state.isActive, toggle)}
    </div>
  )
}

Toggler.defaultProps = {
  defaultActiveValue: false
}

export { Toggler }
