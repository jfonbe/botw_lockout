import { useState } from "react"

import Board from "./Board"

import type { BoardSettings } from "../../types/components"


type GameScreenProps = {
    board: BoardSettings
}

export default function GameScreen({ board }: GameScreenProps) {
    const [boardActivity, setBoardActivity] = useState<Boolean[][]>(Array.from({ length: board.settings.grid.rows }, () => []))

    const updateActivity = (row: number, col: number, isDone: boolean) => {
        console.log(row, col, isDone)
    }

    return (
        <Board
            board={board}
            updateActivity={updateActivity}
        />
    )
}