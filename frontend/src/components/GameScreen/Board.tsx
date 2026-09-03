import BingoGrid from "./BingoGrid"
import Timer from "./Timer"

import type { BoardTask } from "../../types/components"
import type { TimerInput } from "../../types/settings"

import styles from "../../css/Board.module.css"

type BoardProps = {
    timerSettings: TimerInput
    tasks: BoardTask[][]
    boardState: boolean[][]
    onBoardStateChange: (row: number, col: number, isDone: boolean) => void
}

export default function Board({ timerSettings, tasks, boardState, onBoardStateChange }: BoardProps) {
    return (
        <div
            className={styles.board}
        >
            <div className={styles.headingContainer}>
                <h2 className={styles.heading}>Breath of the Wild - Lockout</h2>
            </div>
            <BingoGrid
                boardTasks={tasks}
                boardState={boardState}
                onBoardStateChange={onBoardStateChange}
            />
            <Timer
                timerSettings={timerSettings}
            />
        </div>
    )
}