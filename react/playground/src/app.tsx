import { Button } from "./components/Button"
import { Favorite } from "./components/Favorite"
import { Menu } from "./components/Menu"
import { MovieInfo } from "./components/MovieInfo"
import {useState} from "react"
import { ThemeContext } from "./themeContext"


export function App() {
  // const [theme,setTheme] = useState("light")

  // function toggleTheme() {
  //   setTheme(theme === "light" ? "dark" : "light")
  // }

  return (
    <ThemeContext.Consumer>
      {(theme: string) => (
        <div className={`container py-20 ${theme}-theme`}>
          <div className="mb-8">{theme} theme</div>

          <Button theme={theme} onClick={() => {}}>change theme</Button>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}
