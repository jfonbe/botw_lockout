import type { GridSetting } from "../../types/settings"
import type { Task } from "../../../../shared/types/tasks"

import styles from "../../css/BingoGrid.module.css"


type BingoGridProps = {
    tasks: Task[][]
    gridSize: GridSetting
}

export default function BingoGrid({ tasks, gridSize }: BingoGridProps) {
    return (
        <div
            className={styles.bingoGrid}
        >
            {Array.from({ length: gridSize.rows }).map((_, row) => (
                <div key={row} className={styles.gridRow}>
                    {Array.from({ length: gridSize.cols }).map((_, col) => (
                        <button key={col} className={styles.bingoButton}>{tasks[row][col].text}</button>
                    ))}
                </div>
            ))}
        </div>
    )
}