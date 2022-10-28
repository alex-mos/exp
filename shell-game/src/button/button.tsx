interface IButton {
  className: string
  onClick: () => void
}

export function Button(props: IButton) {
  return (
    <button
     className={props.className}
     onClick={() => props.onClick()}
    >
      I'm a regular button
    </button>
  )
}
