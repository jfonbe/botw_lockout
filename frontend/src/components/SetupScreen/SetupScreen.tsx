import { useState } from "react"

import Settings from "./Settings"

import { getNewInputs } from "../../helpers/settings/inputHelper"
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

    const gridInputHandler = (value: GridInput) => {
        setInputs(getNewInputs("grid", value))
    }

    const difficultyInputHandler = (value: DifficultyInput) => {
        setInputs(getNewInputs("difficulty", value))
    }

    const timerInputHandler = (value: TimerInput) => {
        setInputs(getNewInputs("timer", value))
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