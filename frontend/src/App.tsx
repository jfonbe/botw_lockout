import { useEffect, useState } from 'react'
import './App.css'

import Board from './components/Board'
import Settings from './components/Settings'

import type { GridInput, DifficultyInput, TimerInput, Inputs, GameSettings, TimerSetting } from "./types/settings"
import type { Task } from "../../shared/types/tasks"

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

  const [tasks, setTasks] = useState<Task[]>([])

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

  useEffect(() => {
    const getTasks = async () => {
      const response = await fetch("http://localhost:1234/")
      const data = await response.json()

      setTasks(data)
      console.log(data)
    }
    getTasks()
  } , [])

  return (
    <>
      {isGameStarted ? (
        <Board
          gameSettings={createGameSettings(inputs)}
          tasks={tasks}
        />
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