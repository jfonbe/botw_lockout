import type { SettingsOptions } from "../types/components"

export const settingsOptions: SettingsOptions = {
    grid: {
        title: "Grid",
        options: [{rows: 5, cols: 5}, {rows: 4, cols: 4}, {rows: 6, cols: 6}]
    },
    difficulty: {
        title: "Difficulty",
        options: ["leicht", "mittel", "schwer"]
    },
    timer: {
        title: "Timer",
        options: ["count_up", "count_down"]
    }
}