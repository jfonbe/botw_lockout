import type { GridSettings, DifficultySettings, TimerSettings } from "../types/settings"

type BoardProps = {
    settings: {
        gridSettings: GridSettings,
        difficultySettings: DifficultySettings,
        timerSettings: TimerSettings
    }
}

export default function Board({settings}: BoardProps) {
    return (
        <>
            <p>Das Board wurde mit diesen Settings erstellt: Grid: {settings.gridSettings.cols}x{settings.gridSettings.rows} {settings.difficultySettings} {settings.timerSettings}</p>
        </>
    )
}