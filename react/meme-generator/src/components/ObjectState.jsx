import Star from "./Star"
import {useState} from "react"

export default function ObjectState() {
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
  })

  function toggleFavorite() {
    setContact(prevState => {
      return {
        ...prevState,
        isFavorite: !prevState.isFavorite
      }
    })
  }

  return (
    <main>
      <article className="card">
        <img src="./images/user.png" className="card--image" alt="user avatar" />
        <div className="card--info">
          <Star isFilled={contact.isFavorite} toggleFavorite={toggleFavorite} />
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  )
}
