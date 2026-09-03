import { useState } from 'react'

import SetupScreen from './components/SetupScreen/SetupScreen'
import GameScreen from './components/GameScreen/GameScreen'

import type { Inputs } from './types/settings'

import './App.css'


export default function App() {
  const [boardSettings, setBoardSettings] = useState<Inputs>()

  return (
    <>
      {boardSettings !== undefined ? (
        <GameScreen
          boardSettings={boardSettings}
        />
      ) : (
        <SetupScreen
          onGameStart={setBoardSettings}
        />
      )}
    </>
  )
}