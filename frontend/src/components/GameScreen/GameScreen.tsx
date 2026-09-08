import { useState, useEffect } from "react"

import Board from "./Board"

import { getBoardTasksGrid } from '../../helpers/tasks/tasksHelper'
import { fetchTasks } from '../../helpers/api/fetchHelper'

import type { Inputs } from "../../types/settings"
import type { BoardTask } from "../../types/components"

import styles from "../../css/GameScreen.module.css"

type GameScreenProps = {
    boardSettings: Inputs
}

export default function GameScreen({ boardSettings }: GameScreenProps) {
    const [tasks, setTasks] = useState<BoardTask[][]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const createEmptyBoard = () => Array.from(
        { length: boardSettings.grid.rows }, () => Array.from(
            { length: boardSettings.grid.cols }, () => false
        )
    )

    const [boardState, setBoardState] = useState<boolean[][]>(createEmptyBoard)
    const [points, setPoints] = useState<number>(0)
    const lineCount = calcLineCount(boardState)

    useEffect(() => {
        const loadTasks = async () => {
            try {
                const fetchedTasks = await fetchTasks()
                setTasks(getBoardTasksGrid(fetchedTasks, boardSettings.difficulty, boardSettings.grid))
            } catch {
                setError("Tasks konnten nicht geladen werden.")
            } finally {
                setIsLoading(false)
            }
        }
        loadTasks()
        } , [])

    const handleBoardState = (row: number, col: number, isDone: boolean) => {
        const previousValue = boardState[row][col]

        if (previousValue !== isDone) {
            setPoints(prev => isDone ? prev + 1 : prev - 1)
        }

        const newBoard = [...boardState]
        newBoard[row] = [...newBoard[row]]
        newBoard[row][col] = isDone

        setBoardState(newBoard)
    }

    function calcLineCount(board: boolean[][]) {
        let count = 0

        // Count rows

        board.forEach(element => {
            if (element.every((currentElement) => currentElement)) count++
        })

        // Count columns

        board[0].forEach((_, colIndex) => {
            if (board.every((elem) => elem[colIndex])) count++
        })

        // Count diagonal

        if (board.every((row, index) => row[index])) count++
        if (board.every((row, index) => row[(board[0].length - 1) - index])) count++

        return count
    }

    if (isLoading == true) {
        return (<div><span className={styles.loadingText}>Board lädt...</span></div>)
    } else if (error) {
        return (<div><span className={styles.errorText}>Aufgaben konnten nicht geladen werden!</span></div>)
    } else {
        return (
            <Board
                timerSettings={boardSettings.timer}
                tasks={tasks}
                boardState={boardState}
                onBoardStateChange={handleBoardState}
                points={points}
                lineCount={lineCount}
            />
        )
    }
}