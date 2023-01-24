import { createRoot } from "react-dom/client"
import { App } from "./app"
import { ThemeContext } from "./themeContext"

const root = createRoot(document.getElementById("root"))
root.render(
  <ThemeContext.Provider value="dark">
    <App />
  </ThemeContext.Provider>
)
