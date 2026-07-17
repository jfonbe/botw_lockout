import { useState } from 'react'
import './App.css'

import Board from './components/Board'
import Settings from './components/Settings'

import type { GridSettings, DifficultySettings, TimerSettings, GameSettings } from "./types/settings"

export default function App() {
  const [isGenerated, setIsGenerated] = useState(false)

  const [gameSettings, setGameSettings] = useState<GameSettings>({
    grid: {
      rows: 5,
      cols: 5
    },
    difficulty: "medium",
    timer: "count_up"
  })

  const gridSettingsHandler = (value: GridSettings) => {
    let newSettings = {...gameSettings, grid: value}
    setGameSettings(newSettings)
  }

  const difficultySettingsHandler = (value: DifficultySettings) => {
    let newSettings = {...gameSettings, difficulty: value}
    setGameSettings(newSettings)
  }

  const timerSettingsHandler = (value: TimerSettings) => {
    let newSettings = {...gameSettings, timer: value}
    setGameSettings(newSettings)
  }

  const dropdownHandlers = {
    gridSettingsHandler,
    difficultySettingsHandler,
    timerSettingsHandler
  }

  const generateBoardHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setIsGenerated(true)
  }

  return (
    <>
      {isGenerated ? (
        <Board settings={gameSettings}/>
      ) : (
        <Settings
          generateBoardHandler={generateBoardHandler}
          dropdownHandlers={dropdownHandlers}
        />
      )}
    </>
  )
}