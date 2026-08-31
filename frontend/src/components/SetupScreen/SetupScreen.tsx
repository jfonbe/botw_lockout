import { useState } from "react"

import Settings from "./Settings"

import { createGameSettings } from "../../helpers/settings/settingsHelper"

import type { Inputs, GridInput, DifficultyInput, TimerInput } from "../../types/settings"

type SetupScreenProps = {
    startGame: (input: Inputs) => void
}

export default function SetupScreen({ startGame }: SetupScreenProps) {
    const [inputs, setInputs] = useState<Inputs>({
        grid: {
            rows: 5,
            cols: 5
        },
        difficulty: "medium",
        timer: {
            variant: "count_up"
        }
    })

    const updateInputs = <K extends keyof Inputs>(
        key: K,
        value: Inputs[K]
    ) => {
        setInputs((prev: Inputs) => ({
            ...prev,
            [key]: value
        }))
    }

    const gridInputHandler = (value: GridInput) => {
        updateInputs("grid", value)
    }

    const difficultyInputHandler = (value: DifficultyInput) => {
        updateInputs("difficulty", value)
    }

    const timerInputHandler = (value: TimerInput) => {
        updateInputs("timer", value)
    }

    const dropdownHandlers = {
        gridInputHandler,
        difficultyInputHandler,
        timerInputHandler
    }

    const startGameHandler = () => {
        startGame(createGameSettings(inputs))
    }

    return (
        <Settings
            startGameHandler={startGameHandler}
            dropdownHandlers={dropdownHandlers}
            inputs={inputs}
        />
    )
}