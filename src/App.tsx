import { useState } from 'react'
import './App.css'

import Board from './components/Board'
import Settings from './components/Settings'

export default function App() {
  const [isGenerated, setIsGenerated] = useState(false)

  const generateBoardHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setIsGenerated(true)
  }

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
        <Settings
          generateBoardHandler={generateBoardHandler}
        />
      </>
    )
  }
}