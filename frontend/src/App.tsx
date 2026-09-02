import { useState } from 'react'

import SetupScreen from './components/SetupScreen/SetupScreen'
import GameScreen from './components/GameScreen/GameScreen'

import type { Inputs } from './types/settings'

import './App.css'


export default function App() {
  const [boardSettings, setBoardSettings] = useState<Inputs>()

  const handleGameStart = (inputs: Inputs) => {
    const newBoardSettings: Inputs = {
      ...inputs
    }
    setBoardSettings(newBoardSettings)
  }

  return (
    <>
      {boardSettings !== undefined ? (
        <GameScreen
          boardSettings={boardSettings}
        />
      ) : (
        <SetupScreen
          onGameStart={handleGameStart}
        />
      )}
    </>
  )
}