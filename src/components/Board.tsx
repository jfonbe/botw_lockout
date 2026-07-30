import type { GameSettings } from "../types/settings"

import BingoGrid from "./BingoGrid"
import Timer from "./Timer"

import styles from "../css/Board.module.css"

type BoardProps = {
    gameSettings: GameSettings
}

export default function Board({ gameSettings }: BoardProps) {
    return (
        <div
            className={styles.board}
        >
            <h2 className={styles.heading}>Breath of the Wild - Lockout</h2>
            <BingoGrid
                gridSize={gameSettings.grid}
            />
            <Timer
                timerSettings={gameSettings.timer}
            />
        </div>
    )
}