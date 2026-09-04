import BingoGrid from "./BingoGrid"
import Timer from "./Timer"

import type { BoardTask } from "../../types/components"
import type { TimerInput } from "../../types/settings"

import styles from "../../css/Board.module.css"
import { useState } from "react"

type BoardProps = {
    timerSettings: TimerInput
    tasks: BoardTask[][]
    boardState: boolean[][]
    onBoardStateChange: (row: number, col: number, isDone: boolean) => void
}

export default function Board({ timerSettings, tasks, boardState, onBoardStateChange }: BoardProps) {
    const [boardIsVisible, setBoardIsVisible] = useState<boolean>(false)

    return (
        <div
            className={styles.board}
        >
            <div className={styles.headingContainer}>
                <h2 className={styles.heading}>Breath of the Wild - Lockout</h2>
            </div>
            <div className={styles.wrapper}>
                <button
                    className={`${styles.revealButton} ${boardIsVisible ? styles.hidden : styles.visible}`}
                    onClick={() => setBoardIsVisible(true)}
                >
                    Reveal Board
                </button>

                <BingoGrid
                    boardTasks={tasks}
                    boardState={boardState}
                    onBoardStateChange={onBoardStateChange}
                    isVisible={boardIsVisible}
                />
            </div>
            <Timer
                timerSettings={timerSettings}
            />
        </div>
    )
}