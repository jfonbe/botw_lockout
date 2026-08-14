import { useEffect, useState } from 'react'
import './App.css'

import Board from './components/Board'
import Settings from './components/Settings'

import type { GridInput, DifficultyInput, TimerInput, Inputs } from "./types/settings"
import type { Task } from "../../shared/types/tasks"

import { createGameSettings } from "./settings/settingsHelper"

export default function App() {
  // Settings

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

  // Game

  const [tasks, setTasks] = useState<Task[]>([])

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