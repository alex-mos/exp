import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import About from "./About"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  }
])

export {
  router
}
