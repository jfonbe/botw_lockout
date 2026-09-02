import BingoGrid from "./BingoGrid"
import Timer from "./Timer"

import type { BoardTask } from "../../types/components"
import type { GridInput, TimerInput } from "../../types/settings"

import styles from "../../css/Board.module.css"

type BoardProps = {
    gridSettings: GridInput
    timerSettings: TimerInput
    tasks: BoardTask[]
    onBoardStateChange: (row: number, col: number, isDone: boolean) => void
}

export default function Board({ gridSettings, timerSettings, tasks, onBoardStateChange }: BoardProps) {
    return (
        <div
            className={styles.board}
        >
            <div className={styles.headingContainer}>
                <h2 className={styles.heading}>Breath of the Wild - Lockout</h2>
            </div>
            <BingoGrid
                boardTasks={tasks}
                gridSize={gridSettings}
                onBoardStateChange={onBoardStateChange}
            />
            <Timer
                timerSettings={timerSettings}
            />
        </div>
    )
}