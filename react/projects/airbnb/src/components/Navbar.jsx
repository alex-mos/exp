import logo from "../images/logo.svg"

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} className="navbar--logo" alt="logo" />
    </nav>
  )
}
