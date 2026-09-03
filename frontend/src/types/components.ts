import type {
    GridInput,
    DifficultyInput,
    TimerInput,
    Inputs,
} from "./settings"


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

export type OnInputChange = <K extends keyof Inputs>(
    key: K,
    value: Inputs[K]
) => void

export type BoardTask = {
    text: string,
    isCompleted: boolean
}

export type Placement = {
    row: number,
    col: number
}

export type BoardSettings = {
    boardSettings: Inputs
}

