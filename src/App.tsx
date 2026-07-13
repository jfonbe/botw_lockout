import { useState } from 'react'
import './App.css'

import Board from './components/Board'
import Settings from './components/Settings'

function App() {
  const [isGenerated, setIsGenerated] = useState(false)

  if(isGenerated) {
    return (
      <>
        <Board />
      </>
    )
  }
  else {
    return (
      <>
        <Settings />
      </>
    )
  }

}

export default App
