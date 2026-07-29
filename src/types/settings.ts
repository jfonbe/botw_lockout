export type GridSettings = {
  rows: number;
  cols: number;
}

export type DifficultySettings =
    | "easy"
    | "medium"
    | "hard"

export type TimerSettings =
    | {
        variant: "count_up",
        time: number
      }
    | {
        variant: "count_down",
        time: number
    }

export type GameSettings = {
    grid: GridSettings
    difficulty: DifficultySettings
    timer: TimerSettings
}