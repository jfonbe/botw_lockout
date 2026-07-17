import type { GameSettings } from "../types/settings"

type BoardProps = {
    settings: GameSettings
}

export default function Board({settings}: BoardProps) {
    return (
        <>
            <p>Das Board wurde mit diesen Settings erstellt: Grid: {settings.grid.cols}x{settings.grid.rows} {settings.difficulty} {settings.timer}</p>
        </>
    )
}