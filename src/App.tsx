import { useState } from 'react'
import './App.css'

import Board from './components/Board'
import Settings from './components/Settings'

import type { GridSettings, DifficultySettings, TimerSettings } from "./types/settings"

export default function App() {
  const [isGenerated, setIsGenerated] = useState(false)

  const [gridSettings, setGridSettings] = useState<GridSettings>({
    rows: 5,
    cols: 5
  })
  const [difficultySettings, setDifficultySettings] = useState<DifficultySettings>("mittel")
  const [timerSettings, setTimerSettings] = useState<TimerSettings>("count_up")

  const settings = {
    gridSettings,
    difficultySettings,
    timerSettings
  }

  const gridSettingsHandler = (value: GridSettings) => {
    setGridSettings(value)
  }

  const difficultySettingsHandler = (value: DifficultySettings) => {
    setDifficultySettings(value)
  }

  const timerSettingsHandler = (value: TimerSettings) => {
    setTimerSettings(value)
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
        <Board settings={settings}/>
      ) : (
        <Settings
          generateBoardHandler={generateBoardHandler}
          dropdownHandlers={dropdownHandlers}
        />
      )}
    </>
  )
}