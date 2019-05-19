import React, { useState } from 'react'
import KeyPad from './KeyPad'
import ReactFCCtest from 'react-fcctest'

const App = () => {
  const [display, setDisplay] = useState('')
  return (
    <div className="container" id="drum-machine">
      <header>
        <h1>Drum Machine</h1>
      </header>
      <main>
        <div className="display" id="display">
          {display}
        </div>
        <KeyPad displayDrum={[display, setDisplay]} />
      </main>
      <ReactFCCtest />
    </div>
  )
}

export default App
