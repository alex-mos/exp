import { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  className?: string
  theme?: string
  onClick: () => void
}

function ButtonComponent (props: ButtonProps) {
  return (
    <button
      className={`p-2 border-black border-2 border-solid rounded-md ${props.className ? props.className : ""} ${props.theme}-theme`}
      onClick={() => props.onClick()}
    >
      { props.children }
    </button>
  )
}

export const Button = ButtonComponent
