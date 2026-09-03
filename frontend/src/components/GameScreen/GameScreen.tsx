import { useState, useEffect } from "react"

import Board from "./Board"

import { getBoardTasksArray } from '../../helpers/tasks/tasksHelper'
import { fetchTasks } from '../../helpers/api/fetchHelper'

import type { Inputs } from "../../types/settings"
import type { BoardTask } from "../../types/components"

import styles from "../../css/GameScreen.module.css"

type GameScreenProps = {
    boardSettings: Inputs
}

export default function GameScreen({ boardSettings }: GameScreenProps) {
    const [tasks, setTasks] = useState<BoardTask[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const arrayLength = boardSettings.grid.rows * boardSettings.grid.cols
    const emptyBoard = Array.from({ length: arrayLength }, () =>
        Array.from({ length: arrayLength }, () => false)
    )
    const [boardState, setBoardState] = useState<boolean[][]>(emptyBoard)

    useEffect(() => {
        const loadTasks = async () => {
            try {
                const fetchedTasks = await fetchTasks()
                setTasks(getBoardTasksArray(fetchedTasks, boardSettings.difficulty, boardSettings.grid))
            } catch {
                setError("Tasks konnten nicht geladen werden.")
            } finally {
                setIsLoading(false)
            }
        }
        loadTasks()
        } , [])

    const handleBoardState = (row: number, col: number, isDone: boolean) => {
        const newBoard = [...boardState]
        newBoard[row] = [...newBoard[row]]
        newBoard[row][col] = isDone

        setBoardState(newBoard)
    }

    if (isLoading == true) {
        return (<div><span className={styles.loadingText}>Board lädt...</span></div>)
    } else if (error) {
        return (<div><span className={styles.errorText}>Aufgaben konnten nicht geladen werden!</span></div>)
    } else {
        return (
            <Board
                gridSettings={boardSettings.grid}
                timerSettings={boardSettings.timer}
                tasks={tasks}
                boardState={boardState}
                onBoardStateChange={handleBoardState}
            />
        )
    }
}