export type GridInput = {
    rows: number;
    cols: number;
}

export type DifficultyInput =
    | "easy"
    | "medium"
    | "hard"

export type TimerVariant = "count_up" | "count_down"

export type TimerInput =
    | {
        variant: "count_up",
      }
    | {
        variant: "count_down",
        time?: number
      }

export type Inputs = {
    grid: GridInput
    difficulty: DifficultyInput
    timer: TimerInput
}

export type GridSetting = {
    rows: number;
    cols: number;
}

export type DifficultySetting =
    | "easy"
    | "medium"
    | "hard"

export type TimerSetting =
    | {
        variant: "count_up",
      }
    | {
        variant: "count_down",
        time: number
      }

export type GameSettings = {
    grid: GridSetting
    difficulty: DifficultySetting
    timer: TimerSetting
}