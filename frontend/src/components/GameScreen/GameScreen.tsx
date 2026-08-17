import Board from "./Board"

import type { BoardSettings } from "../../types/components"


type GameScreenProps = {
    board: BoardSettings
}

export default function GameScreen({ board }: GameScreenProps) {
    return (
        <Board
            board={board}
        />
    )
}