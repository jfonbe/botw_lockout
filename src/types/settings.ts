export type GridSettings = {
  rows: number;
  cols: number;
}

export type DifficultySettings =
    | "easy"
    | "medium"
    | "hard"

export type TimerSettings =
    | "count_up"
    | "count_down"

export type GameSettings = {
    grid: GridSettings
    difficulty: DifficultySettings
    timer: TimerSettings
}