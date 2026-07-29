import { useDebugValue, useState } from 'react'
import './App.css'

import Board from './components/Board'
import Settings from './components/Settings'

import type { GridSettings, DifficultySettings, TimerSettings, GameSettings } from "./types/settings"

export default function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)

  const [gameSettings, setGameSettings] = useState<GameSettings>({
    grid: {
      rows: 5,
      cols: 5
    },
    difficulty: "medium",
    timer: {
      variant: "count_up",
      time: 0
    }
  })

  const updateSetting = <K extends keyof GameSettings>(
    key: K,
    value: GameSettings[K]
  ) => {
    setGameSettings(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const gridSettingsHandler = (value: GridSettings) => {
    updateSetting("grid", value)
  }

  const difficultySettingsHandler = (value: DifficultySettings) => {
    updateSetting("difficulty", value)
  }

  const timerSettingsHandler = (value: TimerSettings) => {
    updateSetting("timer", value)
  }

  const dropdownHandlers = {
    gridSettingsHandler,
    difficultySettingsHandler,
    timerSettingsHandler
  }

  const generateBoardHandler = () => {
    setIsGameStarted(true)
  }

  return (
    <>
      {isGameStarted ? (
        <Board settings={gameSettings}/>
      ) : (
        <Settings
          generateBoardHandler={generateBoardHandler}
          dropdownHandlers={dropdownHandlers}
          gameSettings={gameSettings}
        />
      )}
    </>
  )
}