import logo from "../images/react-logo.svg"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-wrapper">
        <img src={logo} className="logo-image" alt="logo"/>
        <div className="logo-title">
          ReactFacts
        </div>
      </div>

      <div className="navbar-title">
        React Course - Project 1
      </div>
    </nav>
  )
}
