import { useState } from 'react'
import './App.css'

import Board from './components/Board'
import Settings from './components/Settings'

import type { GridInput, DifficultyInput, TimerInput, Inputs, GameSettings, TimerSetting } from "./types/settings"

export default function App() {
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false)

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

  const createGameSettings = (inputs: Inputs) => {
    let timerSetting: TimerSetting

    if(inputs.timer.variant === "count_down") {
      timerSetting = inputs.timer.time === undefined ?
        { variant: inputs.timer.variant, time: 1 } :
        { variant: inputs.timer.variant, time: inputs.timer.time }
    } else {
      timerSetting = inputs.timer
    }

    const newSettings: GameSettings = {
      grid: inputs.grid,
      difficulty: inputs.difficulty,
      timer: timerSetting
    }

    return newSettings
  }

  return (
    <>
      {isGameStarted ? (
        <Board gameSettings={createGameSettings(inputs)}/>
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