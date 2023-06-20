import hero from "../images/hero.png"

export default function Hero() {
  return (
    <section className="hero">
      <img src={hero} className="hero--img" alt="hero" />
      <h1 className="hero--title">Online Experiences</h1>
      <p className="hero--description">
        Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
      </p>
    </section>
  )
}
