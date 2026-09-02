import { useState } from "react"

import Settings from "./Settings"

import { createGameSettings } from "../../helpers/settings/settingsHelper"

import type { Inputs } from "../../types/settings"

type SetupScreenProps = {
    onGameStart: (input: Inputs) => void
}

export default function SetupScreen({ onGameStart }: SetupScreenProps) {
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

    const handleInputUpdates = <K extends keyof Inputs>(
        key: K,
        value: Inputs[K]
    ) => {
        setInputs((prev: Inputs) => ({
            ...prev,
            [key]: value
        }))
    }

    return (
        <Settings
            inputs={inputs}
            onInputChange={handleInputUpdates}
            onStartGame={() => onGameStart(createGameSettings(inputs))}
        />
    )
}