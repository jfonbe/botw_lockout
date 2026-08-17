import { useEffect, useState } from 'react'

import SetupScreen from './components/SetupScreen/SetupScreen'
import GameScreen from './components/GameScreen/GameScreen'

import { fetchTasks } from './helpers/api/fetchHelper'
import { getBoardTasksArray } from './helpers/tasks/tasksHelper'

import type { Task } from '../../shared/types/tasks'
import type { Inputs } from './types/settings'
import type { BoardSettings } from './types/components'

import './App.css'


export default function App() {
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false)
  const [board, setBoard] = useState<BoardSettings>()
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    fetchTasks().then(setTasks)
  } , [])

  const startGame = (inputs: Inputs) => {
    const newBoard = {
      tasks: getBoardTasksArray(tasks, inputs.difficulty, inputs.grid),
      settings: inputs
    }

    setIsGameStarted(true)
    setBoard(newBoard)
  }

  return (
    <>
      {isGameStarted && board !== undefined ? (
        <GameScreen
          board={board}
        />
      ) : (
        <SetupScreen
          startGame={startGame}
        />
      )}
    </>
  )
}