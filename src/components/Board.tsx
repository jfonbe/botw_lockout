import type { GameSettings } from "../types/settings"

import BingoGrid from "./BingoGrid"
import Timer from "./Timer"

type BoardProps = {
    settings: GameSettings
}

export default function Board({ settings }: BoardProps) {
    return (
        <div>
            <h2>Breath of the Wild - Lockout</h2>
            <BingoGrid
                gridSize={settings.grid}
            />
            <Timer
                mode={settings.timer}
            />
        </div>
    )
}