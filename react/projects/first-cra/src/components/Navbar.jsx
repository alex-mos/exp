import logo from "../images/react-logo.svg"

export default function Navbar(props) {
  function handleChangeTheme(event) {
    props.toggleTheme(event.target.value)
  }

  return (
    <nav className="navbar">
      <div className="logo-wrapper">
        <img src={logo} className="logo-image" alt="logo"/>
        <div className="logo-title">
          ReactFacts
        </div>
      </div>

      <div className="navbar-title">
        <label htmlFor="light">light</label>
        <input
          type="radio"
          value="light"
          id="light"
          checked={props.theme === "light"}
          onChange={handleChangeTheme}
        />
        <input
          type="radio"
          value="dark"
          id="dark"
          checked={props.theme === "dark"}
          onChange={handleChangeTheme}
        />
        <label htmlFor="dark">dark</label>
      </div>
    </nav>
  )
}
