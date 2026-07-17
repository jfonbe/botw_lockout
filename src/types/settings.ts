export type GridSettings = {
  rows: number;
  cols: number;
}

export type DifficultySettings =
    | "leicht"
    | "mittel"
    | "schwer"

export type TimerSettings =
    | "count_up"
    | "count_down"

export type GameSettings = {
    grid: GridSettings
    difficulty: DifficultySettings
    timer: TimerSettings
}