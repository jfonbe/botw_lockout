export type DropdownSettings = {
    title: string
    options: string[]
}

export type SettingsOptions = {
    grid: DropdownSettings
    difficulty: DropdownSettings
    timer: DropdownSettings
}

export type VariantSettings = "grid-settings" | "difficulty-settings" | "timer-settings"

export type GridSettings = {
  rows: number;
  cols: number;
}

export type DifficultySettings = "leicht" | "mittel" | "schwer"
export type TimerSettings = "count_up" | "count_down"


export type SettingsProps = {
    generateBoardHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
    dropdownHandlers: DropdownHandlerProps
}

export type DropdownHandlerProps = {
    gridSettingsHandler: (value: GridSettings) => void,
    difficultySettingsHandler: (value: DifficultySettings) => void,
    timerSettingsHandler: (value: TimerSettings) => void
}