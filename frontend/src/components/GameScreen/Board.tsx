import BingoGrid from "./BingoGrid"
import Timer from "./Timer"

import type { BoardSettings } from "../../types/components"

import styles from "../../css/Board.module.css"

type BoardProps = {
    board: BoardSettings
}


export default function Board({ board }: BoardProps) {
    return (
        <div
            className={styles.board}
        >
            <h2 className={styles.heading}>Breath of the Wild - Lockout</h2>
            <BingoGrid
                tasks={board.tasks}
                gridSize={board.settings.grid}
            />
            <Timer
                timerSettings={board.settings.timer}
            />
        </div>
    )
}