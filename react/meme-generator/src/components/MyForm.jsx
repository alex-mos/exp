import { useState } from "react"

export default function MyForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    isFriendly: true,
    employment: null,
    favoriteColor: "",
  })

  function handleChange(event) {
    console.log('event.target')
    console.log(event.target)
    const {name, type, value, checked} = event.target
    setFormData(prevFormData => {
      const result = {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
      console.log(result)
      return result
    })
  }

  return (
    <form>
      <input
        name="firstName"
        value={formData.firstName}
        type="text"
        placeholder="First Name"
        onChange={handleChange}
      />
      <input
        name="lastName"
        value={formData.lastName}
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
      />
      <input
        name="email"
        value={formData.email}
        type="text"
        placeholder="email"
        onChange={handleChange}
      />
      <textarea
        name="comments"
        value={formData.comments}
        placeholder="comments"
        onChange={handleChange}
      />

      <input
        name="isFriendly"
        type="checkbox"
        id="isFriendly"
        checked={formData.isFriendly}
        onChange={handleChange}
      />
      <label htmlFor="isFriendly">
        Is friendly?
      </label>
      <br/>
      <br/>

      <fieldset>
        <legend>Current employment status</legend>
        <input
          type="radio"
          id="unemployed"
          value="unemployed"
          name="employment"
          checked={formData.employment === "unemployed"}
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <input
          type="radio"
          id="part-time"
          value="part-time"
          name="employment"
          checked={formData.employment === "part-time"}
          onChange={handleChange}
        />
        <label htmlFor="part-time">Part-time</label>
        <input
          type="radio"
          id="full-time"
          value="full-time"
          name="employment"
          checked={formData.employment === "full-time"}
          onChange={handleChange}
        />
        <label htmlFor="full-time">Full-time</label>
      </fieldset>
      <br/>

      <label htmlFor="favoriteColor">
        What is your favorite color?
      </label><br/>
      <select
        name="favoriteColor"
        id="favoriteColor"
        value={formData.favoriteColor}
        onChange={handleChange}
      >
        <option value="">-- Choose --</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>
    </form>
  )
}
