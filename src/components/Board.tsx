import type { GameSettings } from "../types/settings"

import BingoGrid from "./BingoGrid"
import Timer from "./Timer"

import styles from "../css/Board.module.css"

type BoardProps = {
    settings: GameSettings
}

export default function Board({ settings }: BoardProps) {
    return (
        <div
            className={styles.board}
        >
            <h2 className={styles.heading}>Breath of the Wild - Lockout</h2>
            <BingoGrid
                gridSize={settings.grid}
            />
            <Timer
                mode={settings.timer}
            />
        </div>
    )
}