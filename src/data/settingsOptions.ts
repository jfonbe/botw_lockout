import type { SettingsOptions } from "../types/components"

export const settingsOptions: SettingsOptions = {
    grid: {
        title: "Grid",
        options: [{
            label: "5x5",
            value: {rows: 5, cols: 5}
        },
        {
            label: "4x4",
            value: {rows: 4, cols: 4}
        },
        {
            label: "6x6",
            value: {rows: 6, cols: 6}
        },
        ]
    },
    difficulty: {
        title: "Difficulty",
        options: [{
            label: "Leicht",
            value: "easy"
        },
        {
            label: "Mittel",
            value: "medium"
        },
        {
            label: "Schwer",
            value: "hard"
        }]
    },
    timer: {
        title: "Timer",
        options: [{
            label: "Hochzählen",
            value: "count_up"
        },
        {
            label: "Runterzählen",
            value: "count_down"
        }]
    }
}