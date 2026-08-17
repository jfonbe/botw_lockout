import { useEffect, useState } from 'react'

import SetupScreen from './components/SetupScreen/SetupScreen'
import GameScreen from './components/GameScreen/GameScreen'

import { fetchTasks } from './helpers/api/fetchHelper'
import { getBoardTasks } from './helpers/tasks/tasksHelper'

import type { Task } from '../../shared/types/tasks'

import './App.css'
import type { Inputs } from './types/settings'


export default function App() {
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false)
  const [board, setBoard] = useState<any>()
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    fetchTasks().then(setTasks)
  } , [])

  const startGame = (inputs: Inputs) => {
    console.log(getBoardTasks(tasks, inputs.difficulty, inputs.grid))
    setIsGameStarted(true)
  }

  return (
    <>
      {isGameStarted ? (
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