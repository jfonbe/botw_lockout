import BingoButton from "../GameScreen/BingoButton"

import type { GridSetting } from "../../types/settings"
import type { BoardTask } from "../../types/components"

import styles from "../../css/BingoGrid.module.css"


type BingoGridProps = {
    boardTasks: BoardTask[],
    gridSize: GridSetting,
    updateActivity: (row: number, col: number, isDone: boolean) => void
}

export default function BingoGrid({ boardTasks, gridSize, updateActivity }: BingoGridProps) {
    return (
        <div
            className={styles.bingoGrid}
        >
            {Array.from({ length: gridSize.rows }).map((_, row) => (
                <div key={row} className={styles.gridRow}>
                    {Array.from({ length: gridSize.cols }).map((_, col) => {
                        const boardTask = boardTasks.find((task) => {
                            return task.placement.row === row && task.placement.col === col
                        })
                        if (!boardTask) {
                            return null
                        }
                        return <BingoButton
                            key={col}
                            boardTask={boardTask}
                            updateActivity={updateActivity}
                        />
                    })}
                </div>
            ))}
        </div>
    )
}