import type { InputOptions } from "../types/components"

export const settingsOptions: InputOptions = {
    grid: {
        title: "Grid",
        options: [
        {
            label: "3x3",
            value: {rows: 3, cols: 3}
        },
        {
            label: "4x4",
            value: {rows: 4, cols: 4}
        },
        {
            label: "5x5",
            value: {rows: 5, cols: 5}
        },
        {
            label: "6x6",
            value: {rows: 6, cols: 6}
        },
        {
            label: "7x7",
            value: {rows: 7, cols: 7}
        },
        {
            label: "8x8",
            value: {rows: 8, cols: 8}
        },
        ]
    },
    difficulty: {
        title: "Schwierigkeit",
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
        options: [
            {
                label: "Hochzählen",
                value: "count_up"
            },
            {
                label: "Runterzählen",
                value: "count_down"
            }
        ]
    }
}