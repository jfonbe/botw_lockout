import type {
    GridInput,
    DifficultyInput,
    TimerInput,
    Inputs,
} from "./settings"

import type { Task } from "../../../shared/types/tasks"


export type Options<T> = {
    label: string,
    value: T
}

export type TimerInputOptions<T> = Options<T>[]

export type DropdownOptions<T> = {
    title: string,
    options: Options<T>[]
}

export type InputOptions = {
    grid: DropdownOptions<GridInput>,
    difficulty: DropdownOptions<DifficultyInput>,
    timer: DropdownOptions<TimerInput>
}

export type DropdownHandlerProps = {
    gridInputHandler: (value: GridInput) => void,
    difficultyInputHandler: (value: DifficultyInput) => void,
    timerInputHandler: (value: TimerInput) => void
}

export type SettingsProps = {
    startGameHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
    dropdownHandlers: DropdownHandlerProps,
    inputs: Inputs
}

export type BoardSettings = {
    tasks: Task[][],
    settings: Inputs
}

