import { useEffect, useState } from 'react'
import './App.css'

import Board from './components/GameScreen/Board'
import Settings from './components/SetupScreen/Settings'

import type { GridInput, DifficultyInput, TimerInput, Inputs } from './types/settings'
import type { Task } from '../../shared/types/tasks'

import { createGameSettings } from './settings/settingsHelper'
import { getNewInputs } from './settings/inputHelper'
import { fetchTasks } from './api/tasksHelper'

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

  const gridInputHandler = (value: GridInput) => {
    setInputs(getNewInputs("grid", value))
  }

  const difficultyInputHandler = (value: DifficultyInput) => {
    setInputs(getNewInputs("difficulty", value))
  }

  const timerInputHandler = (value: TimerInput) => {
    setInputs(getNewInputs("timer", value))
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
    fetchTasks().then(setTasks)
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