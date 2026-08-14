import type { GameSettings } from "../../types/settings"

import BingoGrid from "./BingoGrid"
import Timer from "./Timer"

import styles from "../../css/Board.module.css"
import type { Task } from "../../../../shared/types/tasks"

type BoardProps = {
    gameSettings: GameSettings,
    tasks: Task[]
}

export default function Board({ gameSettings, tasks }: BoardProps) {
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