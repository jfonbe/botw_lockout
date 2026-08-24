import BingoGrid from "./BingoGrid"
import Timer from "./Timer"

import type { BoardSettings } from "../../types/components"

import styles from "../../css/Board.module.css"

type BoardProps = {
    board: BoardSettings,
    updateActivity: (row: number, col: number, isDone: boolean) => void
}


export default function Board({ board, updateActivity }: BoardProps) {
    return (
        <div
            className={styles.board}
        >
            <div className={styles.headingContainer}>
                <h2 className={styles.heading}>Breath of the Wild - Lockout</h2>
            </div>
            <BingoGrid
                boardTasks={board.boardTasks}
                gridSize={board.settings.grid}
                updateActivity={updateActivity}
            />
            <Timer
                timerSettings={board.settings.timer}
            />
        </div>
    )
}