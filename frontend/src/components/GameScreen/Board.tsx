import { useState } from "react"

import BingoGrid from "./BingoGrid"
import Timer from "./Timer"
import PointCounter from "./PointCounter"

import type { BoardTask } from "../../types/components"
import type { TimerInput } from "../../types/settings"

import styles from "../../css/Board.module.css"


type BoardProps = {
    timerSettings: TimerInput
    tasks: BoardTask[][]
    boardState: boolean[][]
    onBoardStateChange: (row: number, col: number, isDone: boolean) => void
    points: number
    lineCount: number
}

export default function Board({ timerSettings, tasks, boardState, onBoardStateChange, points, lineCount }: BoardProps) {
    const [boardIsVisible, setBoardIsVisible] = useState<boolean>(false)
    const [timerStarted, setTimerStarted] = useState<boolean>(false)

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
                    onClick={() => {
                        setBoardIsVisible(true)
                        setTimerStarted(true)
                    }}
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
            <PointCounter
                points={points}
            />
            <Timer
                timerSettings={timerSettings}
                timerStarted={timerStarted}
            />
        </div>
    )
}