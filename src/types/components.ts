import type {
    GridSettings,
    DifficultySettings,
    TimerSettings
} from "./settings"

export type DropdownSettings<T> = {
    title: string,
    options: T[]
}

export type SettingsOptions = {
    grid: DropdownSettings<GridSettings>,
    difficulty: DropdownSettings<DifficultySettings>,
    timer: DropdownSettings<TimerSettings>
}

export type DropdownHandlerProps = {
    gridSettingsHandler: (value: GridSettings) => void,
    difficultySettingsHandler: (value: DifficultySettings) => void,
    timerSettingsHandler: (value: TimerSettings) => void
}

export type SettingsProps = {
    generateBoardHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
    dropdownHandlers: DropdownHandlerProps
}

