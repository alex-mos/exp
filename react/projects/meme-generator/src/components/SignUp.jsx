import { useState } from "react"

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
    isSubscribedToNews: false
  })

  function handleChange(event) {
    const {type, name, value, checked} = event.target
    setFormData(prevFormData => {
      const result = {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
      console.log(result)
      return result
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (formData.password === formData.passwordConfirmation) {
      console.log("Successfully signed up")
    } else {
      console.log("passwords to not match")
    }
    if (formData.isSubscribedToNews) {
      console.log("Thanks for signing up for our newsletter!")
    }
  }

  return (
    <div className="sign-up">
      <form
        className="sign-up--form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="sign-up--form-input"
          name="email"
          id="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          className="sign-up--form-input"
          name="password"
          id="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="text"
          className="sign-up--form-input"
          name="passwordConfirmation"
          id="passwordConfirmation"
          placeholder="Confirm password"
          value={formData.passwordConfirmation}
          onChange={handleChange}
        />
        <input
          type="checkbox"
          className="sign-up--form-checkbox"
          name="isSubscribedToNews"
          id="isSubscribedToNews"
          checked={formData.isSubscribedToNews}
          onChange={handleChange}
        />
        <label htmlFor="isSubscribedToNews">
          I want to join the newsletter
        </label>
        <br/>
        <button
          className="sign-up--form-submit"
          type="submit"
        >
          Sign up
        </button>
      </form>
    </div>
  )
}
