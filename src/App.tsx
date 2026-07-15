import { useState } from 'react'
import './App.css'

import Board from './components/Board'
import Settings from './components/Settings'

type GridSettings = {
  rows: number;
  cols: number;
}

export default function App() {
  const [isGenerated, setIsGenerated] = useState(false)

  const [gridSettings, setGridSettings] = useState<GridSettings>({
    rows: 5,
    cols: 5
  })

  const generateBoardHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setIsGenerated(true)
  }

  const gridSettingsHandler = (value: GridSettings) => {
    setGridSettings(value)
  }

  return (
    <>
      {isGenerated ? (
        <Board />
      ) : (
        <Settings
          generateBoardHandler={generateBoardHandler}
        />
      )}
    </>
  )
}