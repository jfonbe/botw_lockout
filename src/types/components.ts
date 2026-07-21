import type {
    GridSettings,
    DifficultySettings,
    TimerSettings,
    GameSettings
} from "./settings"

export type Options<T> = {
    label: string,
    value: T
}

export type DropdownSettings<T> = {
    title: string,
    options: Options<T>[]
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
    dropdownHandlers: DropdownHandlerProps,
    gameSettings: GameSettings
}

