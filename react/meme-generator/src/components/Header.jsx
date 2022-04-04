import logo from "../images/logo.png"

export default function Header() {
  return (
    <header className="header--wrapper">
      <div className="header container">
        <div className="header--logo-wrapper">
          <img src={logo} className="header--logo" alt="logo"/>
          <h1 className="header--title">Meme Generator</h1>
        </div>
        <h2 className="header--subtitle">React Course – Project 3</h2>
      </div>
    </header>
  )
}
