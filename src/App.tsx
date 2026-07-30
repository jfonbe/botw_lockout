import { useState } from 'react'
import './App.css'

import Board from './components/Board'
import Settings from './components/Settings'

import type { GridInput, DifficultyInput, TimerInput, Inputs } from "./types/settings"

export default function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)

  const [inputs, setInputs] = useState<Inputs>({
    grid: {
      rows: 5,
      cols: 5
    },
    difficulty: "medium",
    timer: {
      variant: "count_up"
    }
  })

  const updateInputs = <K extends keyof Inputs>(
    key: K,
    value: Inputs[K]
  ) => {
    setInputs(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const gridInputHandler = (value: GridInput) => {
    updateInputs("grid", value)
  }

  const difficultyInputHandler = (value: DifficultyInput) => {
    updateInputs("difficulty", value)
  }

  const timerInputHandler = (value: TimerInput) => {
    updateInputs("timer", value)
  }

  const dropdownHandlers = {
    gridInputHandler,
    difficultyInputHandler,
    timerInputHandler
  }

  const generateBoardHandler = () => {
    setIsGameStarted(true)
  }

  return (
    <>
      {isGameStarted ? (
        <Board gameSettings={gameSettings}/>
      ) : (
        <Settings
          generateBoardHandler={generateBoardHandler}
          dropdownHandlers={dropdownHandlers}
          inputs={inputs}
        />
      )}
    </>
  )
}