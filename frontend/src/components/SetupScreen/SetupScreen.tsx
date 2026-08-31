import { useState } from "react"

import Settings from "./Settings"

import { createGameSettings } from "../../helpers/settings/settingsHelper"

import type { Inputs } from "../../types/settings"

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

    const onStartGame = () => {
        startGame(createGameSettings(inputs))
    }

    return (
        <Settings
            inputs={inputs}
            onInputChange={updateInputs}
            onStartGame={onStartGame}
        />
    )
}