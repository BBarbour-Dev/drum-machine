import React, { useEffect } from 'react'
import { DrumData } from '../DrumData'

const KeyPad = ({ displayDrum }) => {
  const [display, setDisplay] = displayDrum
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
  })
  const handleKeyPress = e => {
    const drum = e.key.toUpperCase()
    const audio = document.getElementById(drum)
    console.log(drum)
    if (audio) {
      audio.curentTime = 0
      audio.play()
      setDisplay(audio.attributes.drum.value)
      setTimeout(() => setDisplay(''), 500)
    }
  }
  const handleDrumClick = e => {
    const drum = e.target.attributes.press.nodeValue
    const audio = document.getElementById(drum)
    console.log(drum)
    if (audio) {
      audio.curentTime = 0
      audio.play()
      setDisplay(audio.attributes.drum.nodeValue)
      setTimeout(() => setDisplay(''), 500)
    }
  }
  const highlighted = drum => (drum === display ? 'highlighted' : '')
  return (
    <section className="wrapper">
      {DrumData.map((drum, index) => {
        return (
          <div
            key={index}
            className={`drum-pad ${highlighted(drum.name)}`}
            id={drum.name}
            press={drum.key}
            onClick={e => handleDrumClick(e)}
          >
            {drum.key}
            <audio
              src={drum.src}
              className="clip"
              id={drum.key}
              drum={drum.name}
            >
              {drum.key}
            </audio>
          </div>
        )
      })}
    </section>
  )
}

export default KeyPad
