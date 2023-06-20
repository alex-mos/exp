import Main from "./components/Main"
import Navbar from "./components/Navbar"
import { useState } from "react"

export default function App() {
  const [theme, setTheme] = useState("dark")

  function toggleTheme(theme) {
    setTheme(theme)
  }

  const className = `page ${theme === "dark" ? "dark" : ""}${theme === "light" ? "light" : ""}`

  return (
    <div className={className}>
      <Navbar toggleTheme={toggleTheme} theme={theme}/>
      <Main />
    </div>
  )
}
