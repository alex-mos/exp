import { useEffect, useState } from "react"

export default function Generator() {
  const [allMemes, setAllMemes] = useState([])
  const [meme, setMeme] = useState({
    imageUrl: "http://i.imgflip.com/1bij.jpg",
    topText: "",
    bottomText: ""
  })

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(res => setAllMemes(res.data.memes))
  }, [])

  // Returns a random integer between min (inclusive) and max (inclusive).
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getMemeImageUrl() {
    const memeIndex = getRandomInt(0, allMemes.length - 1)
    return allMemes[memeIndex].url
  }

  function refreshMemeImage() {
    setMeme(prevValue => {
      return {
        ...prevValue,
        imageUrl: getMemeImageUrl()
      }
    })
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  return (
    <main className="generator--wrapper">
      <div className="generator">
        <div className="generator--inputs-wrapper">
          <input
            type="text"
            className="generator--input"
            name="topText"
            placeholder="Top text"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            className="generator--input"
            name="bottomText"
            placeholder="Bottom text"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        <button
          className="generator--button"
          onClick={refreshMemeImage}
        >
          Get a new meme image 🖼
        </button>
        <div className="generator--meme-wrapper">
          <img
            src={meme.imageUrl}
            className="generator--meme-image"
            alt="meme"
          />
          <div className="generator--meme-text generator--meme-text_top">
            {meme.topText}
          </div>
          <div className="generator--meme-text generator--meme-text_bottom">
            {meme.bottomText}
          </div>
        </div>
      </div>
    </main>
  )
}
