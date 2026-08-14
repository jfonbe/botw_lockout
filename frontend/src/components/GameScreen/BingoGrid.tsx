import type { GridSettings } from "../../types/settings"

import styles from "../../css/BingoGrid.module.css"

type BingoGridProps = {
    gridSize: GridSettings
}

export default function BingoGrid({ gridSize }: BingoGridProps) {
    return (
        <div
            className={styles.bingoGrid}
        >
            {Array.from({ length: gridSize.rows }).map((_, row) => (
                <div key={row} className={styles.gridRow}>
                    {Array.from({ length: gridSize.cols }).map((_, col) => (
                        <button key={col} className={styles.bingoButton}>{row}x{col}</button>
                    ))}
                </div>
            ))}
        </div>
    )
}