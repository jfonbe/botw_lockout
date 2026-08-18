import { useState } from "react"

import Board from "./Board"

import type { BoardSettings } from "../../types/components"


type GameScreenProps = {
    board: BoardSettings
}

export default function GameScreen({ board }: GameScreenProps) {
    const arrayLength = board.settings.grid.rows * board.settings.grid.cols

    const emptyBoard = Array.from({ length: arrayLength }, () =>
        Array.from({ length: arrayLength }, () => false)
    )
    const [boardActivity, setBoardActivity] = useState<Boolean[][]>(emptyBoard)

    const updateActivity = (row: number, col: number, isDone: boolean) => {
        const newBoard = [...boardActivity]
        newBoard[row] = [...newBoard[row]]
        newBoard[row][col] = isDone

        setBoardActivity(newBoard)
    }

    return (
        <Board
            board={board}
            updateActivity={updateActivity}
        />
    )
}